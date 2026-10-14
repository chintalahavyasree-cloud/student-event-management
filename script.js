
const collegeEvents = [
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

window.collegeEvents = collegeEvents;

function displayEvents() {
    const container = document.getElementById("events");

    container.innerHTML = collegeEvents.map(event => `
        <article class="event-card">
            <h3>${event.name}</h3>
            <p>${event.description}</p>
            <p><strong>Date:</strong> ${event.date}</p>
            <p><strong>Venue:</strong> ${event.venue}</p>
            <button class="register-btn" data-event-id="${event.id}">
                Register
            </button>
        </article>
    `).join("");
}

displayEvents();
