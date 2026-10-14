
document.addEventListener("click", function (event) {
    if (!event.target.classList.contains("register-btn")) {
        return;
    }

    const eventId = event.target.dataset.eventId;
    const selectedEvent = window.collegeEvents?.find(
        item => String(item.id) === eventId
    );

    if (!selectedEvent) {
        alert("Please integrate the event listing feature first.");
        return;
    }

    const studentName = prompt("Enter your name:");

    if (!studentName || !studentName.trim()) {
        alert("Registration cancelled. Please enter your name.");
        return;
    }

    alert(
        "Registration successful!\nStudent: " +
        studentName.trim() +
        "\nEvent: " + selectedEvent.name
    );
});
