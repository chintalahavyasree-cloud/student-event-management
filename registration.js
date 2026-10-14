
document.addEventListener("click", function (event) {
    const button = event.target.closest(".register-btn");

    if (!button) return;

    const eventId = button.dataset.eventId;

    const selectedEvent = window.collegeEvents.find(
        item => String(item.id) === eventId
    );

    if (!selectedEvent) {
        alert("Event not found.");
        return;
    }

    const studentName = prompt("Enter your name:");

    if (!studentName || !studentName.trim()) {
        alert("Registration cancelled.");
        return;
    }

    alert(
        "Registration successful!\n" +
        "Student: " + studentName.trim() + "\n" +
        "Event: " + selectedEvent.name
    );
});
