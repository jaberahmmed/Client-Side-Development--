// Sample data for featured events
const featuredEvents = [
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
        title: "Tech Conference",
        date: "September 10-12, 2025",
        location: "Moscone Center, San Francisco",
        price: "$299.99",
        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4",
        ticketsAvailable: true
    }
];

// Sample data for upcoming events
const upcomingEvents = [
    {
        id: 4,
        title: "Food Festival",
        date: "October 5-7, 2025",
        location: "Navy Pier, Chicago",
        price: "$25.00",
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
        ticketsAvailable: true
    },
    {
        id: 5,
        title: "NBA Championship",
        date: "June 20, 2025",
        location: "Madison Square Garden, NYC",
        price: "$199.99 - $499.99",
        image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e",
        ticketsAvailable: false
    },
    {
        id: 6,
        title: "Jazz Night",
        date: "July 28, 2025",
        location: "Hollywood Bowl, LA",
        price: "$79.99",
        image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3",
        ticketsAvailable: true
    }
];

// Function to load featured events
function loadFeaturedEvents() {
    const container = document.getElementById('featured-events-container');
    
    featuredEvents.forEach(event => {
        const eventHTML = `
            <div class="swiper-slide">
                <div class="event-card">
                    <img src="${event.image}" alt="${event.title}" class="event-image">
                    <div class="event-content">
                        <h3>${event.title}</h3>
                        <p><i class="fas fa-calendar-alt"></i> ${event.date}</p>
                        <p><i class="fas fa-map-marker-alt"></i> ${event.location}</p>
                        <div class="event-price">${event.price}</div>
                        <a href="event-detail.html?id=${event.id}" class="btn">Book Now</a>
                    </div>
                </div>
            </div>
        `;
        container.insertAdjacentHTML('beforeend', eventHTML);
    });
}

// Function to load upcoming events
function loadUpcomingEvents() {
    const container = document.getElementById('upcoming-events-container');
    
    upcomingEvents.forEach(event => {
        const eventHTML = `
            <div class="event-card">
                <img src="${event.image}" alt="${event.title}" class="event-image">
                <div class="event-content">
                    <h3>${event.title}</h3>
                    <p><i class="fas fa-calendar-alt"></i> ${event.date}</p>
                    <p><i class="fas fa-map-marker-alt"></i> ${event.location}</p>
                    <div class="event-price">${event.price}</div>
                    <a href="event-detail.html?id=${event.id}" class="btn ${!event.ticketsAvailable ? 'sold-out' : ''}">
                        ${event.ticketsAvailable ? 'Book Now' : 'Sold Out'}
                    </a>
                </div>
            </div>
        `;
        container.insertAdjacentHTML('beforeend', eventHTML);
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    loadFeaturedEvents();
    loadUpcomingEvents();
    
    // Initialize Swiper sliders
    const featuredSwiper = new Swiper('.featured-swiper', {
        slidesPerView: 1,
        spaceBetween: 20,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            }
        }
    });
    
    const testimonialsSwiper = new Swiper('.testimonials-swiper', {
        slidesPerView: 1,
        spaceBetween: 20,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
            }
        }
    });
});

// cookies 

// Cookie Functions
function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/; SameSite=Lax";
}

function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function checkCookieConsent() {
    return getCookie('cookieConsent') !== null;
}

// Initialize cookies based on user preference
function initializeCookies(accept) {
    if (accept) {
        setCookie('cookieConsent', 'accepted', 365);
        // Set additional cookies you need
        setCookie('analyticsCookies', 'true', 365);
        setCookie('preferencesCookies', 'true', 365);
        
        // Initialize analytics tools here if needed
        console.log('All cookies accepted and initialized');
    } else {
        setCookie('cookieConsent', 'rejected', 365);
        // Only set essential cookies
        console.log('Only essential cookies set');
    }
}

// DOM Ready
document.addEventListener('DOMContentLoaded', function() {
    const cookieBanner = document.getElementById('cookieConsent');
    const acceptBtn = document.getElementById('acceptCookies');
    const rejectBtn = document.getElementById('rejectCookies');

    // Show banner if no consent given
    if (!checkCookieConsent()) {
        cookieBanner.style.display = 'block';
    }

    // Handle accept button
    acceptBtn.addEventListener('click', function() {
        initializeCookies(true);
        cookieBanner.style.display = 'none';
    });

    // Handle reject button
    rejectBtn.addEventListener('click', function() {
        initializeCookies(false);
        cookieBanner.style.display = 'none';
    });
});
