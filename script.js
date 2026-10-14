
window.collegeEvents = [
    {
        id: 1,
        name: "Coding Competition",
        date: "2026-11-05",
        venue: "Computer Lab",
        description: "Show your programming skills."
    },
    {
        id: 2,
        name: "Cultural Fest",
        date: "2026-11-12",
        venue: "College Auditorium",
        description: "Enjoy music, dance, and cultural activities."
    },
    {
        id: 3,
        name: "Technical Workshop",
        date: "2026-11-20",
        venue: "Seminar Hall",
        description: "Learn new technical skills."
    }
];

window.displayEvents = function () {
    const container = document.getElementById("events");

    container.innerHTML = window.collegeEvents.map(event => `
        <article class="event-card">
            <h3>${escapeHTML(event.name)}</h3>
            <p>${escapeHTML(event.description || "")}</p>
            <p><strong>Date:</strong> ${escapeHTML(event.date)}</p>
            <p><strong>Venue:</strong> ${escapeHTML(event.venue)}</p>

            <button class="register-btn"
                    data-event-id="${event.id}">
                Register
            </button>

            <button class="delete-event-btn"
                    data-event-id="${event.id}">
                Delete Event
            </button>
        </article>
    `).join("");
};

function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, char => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    })[char]);
}

window.displayEvents();
