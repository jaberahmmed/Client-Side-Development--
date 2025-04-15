// Sample event data (in a real app, this would come from an API)
const events = [
    {
        id: 1,
        title: "Summer Music Festival",
        date: "July 15, 2025",
        location: "Central Park, New York",
        price: "$99.99",
        image: "https://images.unsplash.com/photo-1501612780327-45045538702b",
        ticketsAvailable: true
    },
    {
        id: 2,
        title: "Broadway Show: Hamilton",
        date: "August 5-30, 2025",
        location: "Richard Rodgers Theatre, NYC",
        price: "$129.99 - $299.99",
        image: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14",
        ticketsAvailable: true
    },
    {
        id: 3,
        title: "Tech Innovators Conference",
        date: "September 10-12, 2025",
        location: "Moscone Center, San Francisco",
        price: "$299.99",
        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4",
        ticketsAvailable: true
    },
    {
        id: 4,
        title: "International Food Festival",
        date: "October 5-7, 2025",
        location: "Navy Pier, Chicago",
        price: "$25.00",
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
        ticketsAvailable: true
    },
    {
        id: 5,
        title: "Jazz Night Under the Stars",
        date: "July 28, 2025",
        location: "Hollywood Bowl, LA",
        price: "$79.99",
        image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3",
        ticketsAvailable: true
    }
];

// Function to display events
function displayEvents() {
    const eventsContainer = document.getElementById('upcoming-events');
    
    events.forEach(event => {
        const eventCard = document.createElement('div');
        eventCard.className = 'event-card';
        
        eventCard.innerHTML = `
            <img src="${event.image}" alt="${event.title}" class="event-image">
            <div class="event-details">
                <div class="event-date">
                    <i class="far fa-calendar-alt"></i> ${event.date}
                </div>
                <h3 class="event-title">${event.title}</h3>
                <div class="event-location">
                    <i class="fas fa-map-marker-alt"></i> ${event.location}
                </div>
                <div class="event-price">From ${event.price}</div>
                <a href="event-details.html?id=${event.id}" class="btn ${!event.ticketsAvailable ? 'sold-out' : ''}">
                    ${event.ticketsAvailable ? 'Book Now' : 'Sold Out'}
                </a>
            </div>
        `;
        
        eventsContainer.appendChild(eventCard);
    });
}

// Display events when page loads
document.addEventListener('DOMContentLoaded', displayEvents);

// In a real application, you would fetch events from an API:
/*
async function fetchEvents() {
    try {
        const response = await fetch('https://api.tickethub.com/events');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching events:', error);
        return []; // Return empty array if fetch fails
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    const events = await fetchEvents();
    displayEvents(events);
});
*/