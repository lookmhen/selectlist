document.addEventListener('DOMContentLoaded', (event) => {
    const radios = [
        document.getElementById('radio1'),
        document.getElementById('radio2'),
        document.getElementById('radio3')
    ];

    const checkboxes = [
        document.getElementById('checkbox1'),
        document.getElementById('checkbox2'),
        document.getElementById('checkbox3'),
        document.getElementById('checkbox4')
    ];

    // Function to handle radio button change
    function handleRadioChange() {
        if (radios[0].checked) {
            checkboxes[0].checked = true;
            checkboxes[1].checked = true;
        } else {
            checkboxes[0].checked = false;
            checkboxes[1].checked = false;
        }

        if (radios[1].checked) {
            checkboxes[2].checked = true;
            checkboxes[3].checked = true;
        } else {
            checkboxes[2].checked = false;
            checkboxes[3].checked = false;
        }

        if (radios[2].checked) {
            checkboxes.forEach(checkbox => checkbox.checked = false);
        }
    }

    // Add event listeners to all radio buttons
    radios.forEach(radio => {
        radio.addEventListener('change', handleRadioChange);
    });

    // Handle the initial state on page load
    handleRadioChange();
});
