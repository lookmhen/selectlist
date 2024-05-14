// Define the dropdown selectors using jQuery
var $selectReason = $("#Select_1715573032068 .awdSelectDiv select");
var $selectReason2 = $("#Select_1715573032071 .awdSelectDiv select");

var REASONS = [
    { value: ["value1", "value2", "value3"], text: 'Reason One' },
    { value: ["value11", "value22", "value33"], text: 'Reason Two' },
    { value: ["value111", "value222", "value333"], text: 'Reason Three' }
];

// Populate the first dropdown
$.each(REASONS, function(index, optionList) {
    var option = $('<option>').val(optionList.value.join(',')).text(optionList.text);
    $selectReason.append(option);
});

// Add change event listener to update the second dropdown based on selection
$selectReason.change(function() {
    // Clear existing options in $selectReason2
    $selectReason2.empty();

    // Get the selected option and split it back to array
    var selectedValue = $(this).val();
    var values = selectedValue.split(',');

    // Populate $selectReason2 with new options
    $.each(values, function(index, value) {
        var option = $('<option>').val(value).text(value);
        $selectReason2.append(option);
    });

    // Optional: log changes to console
    console.log("Change detected:");
    console.log("Selected values:", values);
});
