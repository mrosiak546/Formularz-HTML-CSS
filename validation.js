function validateForm() {
    var date = document.getElementById("date").value;

    var selectedDate = new Date(date);
    var today = new Date();
    if (selectedDate > today) {
        alert("Please select a date not later than today.");
        return false;
    }

    return true;
}