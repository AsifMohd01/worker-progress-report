// Simple JavaScript to handle checkbox functionality
document.addEventListener('DOMContentLoaded', function() {
  // Get all checkbox groups
  const checkboxGroups = {
      'workStatus': document.querySelectorAll('input[name="workStatus"]'),
      'workingStatus': document.querySelectorAll('input[name="workingStatus"]'),
      'recoveryStatus': document.querySelectorAll('input[name="recoveryStatus"]'),
      'painScale': document.querySelectorAll('input[name="painScale"]'),
      'medicalTreatment': document.querySelectorAll('input[name="medicalTreatment"]'),
      'medication': document.querySelectorAll('input[name="medication"]'),
      'exercises': document.querySelectorAll('input[name="exercises"]')
  };
  
  // Add event listeners to each checkbox group
  Object.keys(checkboxGroups).forEach(groupName => {
      const checkboxes = checkboxGroups[groupName];
      
      checkboxes.forEach(checkbox => {
          checkbox.addEventListener('change', function() {
              if (this.checked) {
                  // Uncheck all other checkboxes in the same group
                  checkboxes.forEach(cb => {
                      if (cb !== this) {
                          cb.checked = false;
                      }
                  });
              }
          });
      });
  });
});