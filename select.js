document.addEventListener('DOMContentLoaded', () => {
    const SelectReason = document.querySelector("#Select_1715573032068_awdSelectDiv select");
    const SelectReason2 = document.querySelector("#Select_1715573032071_awdSelectDiv select");

    // Assuming REASONS is an array of objects with 'value' and 'text' properties
    const REASONS = [
        { value: '1', text: 'Reason One' },
        { value: '2', text: 'Reason Two' },
        { value: '3', text: 'Reason Three' }
    ];

    REASONS.forEach(optionList => {
        const optionForReason1 = document.createElement('option');
        optionForReason1.value = optionList.value;
        optionForReason1.text = optionList.text;
        SelectReason.appendChild(optionForReason1);

        const optionForReason2 = document.createElement('option');
        optionForReason2.value = optionList.value;
        optionForReason2.text = optionList.text;
        SelectReason2.appendChild(optionForReason2);
    });

    SelectReason.addEventListener('change', () => {
        const selectedOption = SelectReason.options[SelectReason.selectedIndex];
        // Update SelectReason2 to have the same selected value as SelectReason
        SelectReason2.value = selectedOption.value;

        // Log change to console (optional, can be removed if not needed)
        console.log("Change detected:");
        console.log("Selected value:", selectedOption.value);
        console.log("Selected text:", selectedOption.text);

        // Additional functionality can be added here
        // For example:
        // chooseReason(); // If you have a function to handle the selection
    });
});