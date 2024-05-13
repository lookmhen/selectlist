javascript: (() => {
    // Select the <select> element by name
    const selectElement = document.querySelector('select[name="ddlret"]');

    if (selectElement) {
        // Create a new <option> element
        const newOption = document.createElement('option');

        // Set the value and the text content of the new option
        newOption.value = 'new_value';
        newOption.textContent = 'New Option';

        // Append the new option to the select element
        selectElement.appendChild(newOption);
    } else {
        console.log('Select element not found!');
    }
  })();