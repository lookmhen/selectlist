// This function updates the second select box based on the first select's change
function chooseReason() {
    const selectedOption = SelectReason.options[SelectReason.selectedIndex];
    const option2 = document.createElement("option");
    option2.value = selectedOption.value;
    option2.text = selectedOption.text;
    SelectReason2.appendChild(option2);
  }
  
  // Attach the event listener to the first select box
  SelectReason.addEventListener("change", () => {
    chooseReason();
  });