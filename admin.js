
function addCollegeEvent(name, date, venue, description) {
    if (!name.trim() || !date || !venue.trim()) {
        alert("Please enter the event name, date, and venue.");
        return;
    }

    const events = window.collegeEvents || [];

    const newEvent = {
        id: Date.now(),
        name: name.trim(),
        date,
        venue: venue.trim(),
        description: description.trim()
    };

    events.push(newEvent);
    window.collegeEvents = events;

    alert("Event added successfully: " + newEvent.name);

    if (typeof displayEvents === "function") {
        displayEvents();
    }
}

function deleteCollegeEvent(eventId) {
    const events = window.collegeEvents || [];
    window.collegeEvents = events.filter(
        event => String(event.id) !== String(eventId)
    );

    if (typeof displayEvents === "function") {
        displayEvents();
    }

    alert("Event deleted successfully.");
}
