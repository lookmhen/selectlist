const SelectReason = document.querySelector("#Select_1715573032068 .awdSelectDiv select");
const SelectReason2 = document.querySelector("#Select_1715573032071 .awdSelectDiv select");

const REASONS = [
    { value: ["value1", "value2", "value3"], text: 'Reason One' },
    { value: ["value11", "value22", "value33"], text: 'Reason Two' },
    { value: ["value111", "value222", "value333"], text: 'Reason Three' }
];


// Populate the first dropdown
REASONS.forEach(optionList => {
    const option = document.createElement('option');
    option.value = optionList.value.join(',');  // Join values for internal use
    option.text = optionList.text;
    SelectReason.appendChild(option);
});



// Add change event listener to update the second dropdown based on selection
SelectReason.addEventListener('change', () => {
    // Clear existing options in SelectReason2
    SelectReason2.innerHTML = '';

    // Get the selected option and split it back to array
    const selectedValue = SelectReason.options[SelectReason.selectedIndex].value;
    const values = selectedValue.split(',');

    // Populate SelectReason2 with new options
    values.forEach(value => {
        const option = document.createElement('option');
        option.value = value;
        option.text = value;
        SelectReason2.appendChild(option);
    });

    // Optional: log changes to console
    console.log("Change detected:");
    console.log("Selected values:", values);
});
