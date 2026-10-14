
const eventForm = document.getElementById("event-form");
const adminMessage = document.getElementById("admin-message");

eventForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("event-name").value.trim();
    const date = document.getElementById("event-date").value;
    const venue = document.getElementById("event-venue").value.trim();
    const description =
        document.getElementById("event-description").value.trim();

    if (!name || !date || !venue) {
        adminMessage.textContent =
            "Please fill in the event name, date, and venue.";
        return;
    }

    window.collegeEvents.push({
        id: Date.now(),
        name,
        date,
        venue,
        description
    });

    window.displayEvents();
    eventForm.reset();

    adminMessage.textContent = "Event added successfully!";
});

document.addEventListener("click", function (event) {
    const button = event.target.closest(".delete-event-btn");

    if (!button) return;

    const eventId = button.dataset.eventId;
    const eventToDelete = window.collegeEvents.find(
        item => String(item.id) === eventId
    );

    if (!eventToDelete) return;

    const confirmed = confirm(
        `Delete "${eventToDelete.name}"?`
    );

    if (!confirmed) return;

    window.collegeEvents = window.collegeEvents.filter(
        item => String(item.id) !== eventId
    );

    window.displayEvents();
    adminMessage.textContent = "Event deleted successfully!";
});
