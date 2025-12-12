import kashmir from "@/assets/destination/kashmir.jpg";
import manali from "@/assets/destination/himachal.jpg";
import rajasthan from "@/assets/destination/rajasthan.jpg";
import chardham from "@/assets/banner-chardham.jpg";
import kedarnath from "@/assets/kedarnath-banner.jpg";

export const weekendTrips = [
    {
        id: 1,
        title: "Kashmir",
        image: kashmir,
        location: "Paradise on Earth",
        duration: "4D/3N",
        status: "active",
        price: "₹18,500",
        rating: 4.8,
        overview: "Experience the mesmerizing beauty of Kashmir, the 'Paradise on Earth'. From the serene Dal Lake to the snow-capped peaks of Gulmarg, this weekend getaway is perfect for nature lovers and couples seeking a romantic escape.",
        highlights: ["Srinagar", "Gulmarg", "Pahalgam", "Dal Lake"],
        departurePoint: "Srinagar Airport",
        itinerary: [
            "Day 1: Arrival in Srinagar - Shikara Ride & Houseboat Stay",
            "Day 2: Srinagar to Gulmarg - Gondola Ride & Snow Activities",
            "Day 3: Gulmarg to Pahalgam - Valley Tour",
            "Day 4: Departure from Srinagar"
        ],
        includes: [
            "3 Nights Accommodation (1 Night Houseboat)",
            "Breakfast & Dinner",
            "Airport Transfers",
            "Shikara Ride on Dal Lake",
            "Driver & Toll Taxes"
        ],
        excludes: [
            "Flight Tickets",
            "Gondola Tickets",
            "Lunch",
            "Personal Expenses"
        ]
    },
    {
        id: 2,
        title: "Manali",
        image: manali,
        location: "Himachal Pradesh",
        duration: "3D/2N",
        status: "active",
        price: "₹6,999",
        rating: 4.7,
        overview: "Escape to the mountains of Manali! Enjoy the cool breeze, lush green valleys, and thrilling adventure activities. A perfect quick retreat from the city hustle.",
        highlights: ["Manali", "Solang Valley", "Kullu", "Atal Tunnel"],
        departurePoint: "Delhi (Majnu Ka Tila)",
        itinerary: [
            "Day 0: Departure from Delhi (Overnight Volvo)",
            "Day 1: Arrival in Manali - Local Sightseeing & Cafe Hopping",
            "Day 2: Solang Valley Adventure & Atal Tunnel",
            "Day 3: Kullu River Rafting & Departure to Delhi"
        ],
        includes: [
            "Volvo Bus Tickets (Delhi-Manali-Delhi)",
            "2 Nights Hotel Stay",
            "Breakfast & Dinner",
            "Local Sightseeing by Cab",
            "Bonfire & Music"
        ],
        excludes: [
            "Lunch",
            "Adventure Activities (Paragliding, etc.)",
            "Personal Expenses"
        ]
    },
    {
        id: 3,
        title: "Jaisalmer",
        image: rajasthan,
        location: "Rajasthan",
        duration: "3D/2N",
        status: "active",
        price: "₹7,499",
        rating: 4.9,
        overview: "Discover the Golden City of Jaisalmer. Camp under the stars in the Sam Sand Dunes, explore the magnificent Jaisalmer Fort, and experience the rich Rajasthani culture.",
        highlights: ["Jaisalmer Fort", "Sam Sand Dunes", "Kuldhara", "Gadisar Lake"],
        departurePoint: "Gurgaon / Delhi",
        itinerary: [
            "Day 0: Departure from Delhi/Gurgaon (Overnight)",
            "Day 1: Arrival in Jaisalmer - Sam Sand Dunes Camping & Safari",
            "Day 2: Jaisalmer Fort & Patwon Ki Haveli - Local Market",
            "Day 3: Kuldhara Village & Departure"
        ],
        includes: [
            "AC Tempo Traveller from Delhi",
            "1 Night Swiss Camp + 1 Night Hotel",
            "Camel & Jeep Safari",
            "Breakfast & Dinner",
            "Cultural Program & DJ Night"
        ],
        excludes: [
            "Lunch",
            "Monuments Entry Fees",
            "Personal Expenses"
        ]
    },
    {
        id: 4,
        title: "Udaipur & Mount Abu",
        image: rajasthan,
        location: "Rajasthan",
        duration: "4D/3N",
        status: "active",
        price: "₹8,999",
        rating: 4.8,
        overview: "A royal weekend exploring the City of Lakes, Udaipur, and the only hill station of Rajasthan, Mount Abu. Witness stunning palaces and serene lakes.",
        highlights: ["Udaipur City", "Mount Abu", "Lake Pichola", "Dilwara Temple"],
        departurePoint: "Gurgaon / Delhi",
        itinerary: [
            "Day 0: Departure from Delhi (Overnight)",
            "Day 1: Arrival in Udaipur - City Palace & Lake Pichola",
            "Day 2: Udaipur Sightseeing - Watch Sunset at Sajjangarh",
            "Day 3: Transfer to Mount Abu - Dilwara Temples & Nakki Lake",
            "Day 4: Guru Shikhar & Departure to Delhi"
        ],
        includes: [
            "AC Transportation from Delhi",
            "3 Nights Accommodation",
            "Breakfast & Dinner",
            "Sightseeing as per itinerary",
            "Tour Manager"
        ],
        excludes: [
            "Lunch",
            "Boating Charges",
            "Entry Tickets",
            "Personal Expenses"
        ]
    },
    {
        id: 5,
        title: "Do Dham Yatra",
        image: chardham,
        location: "Uttarakhand",
        duration: "Coming April",
        status: "upcoming",
        price: "On Request",
        rating: 0,
        overview: "Sacred pilgrimage to Kedarnath and Badrinath. Bookings opening soon for April 2025.",
        highlights: ["Kedarnath", "Badrinath"],
        departurePoint: "Haridwar",
        itinerary: [],
        includes: [],
        excludes: []
    },
    {
        id: 6,
        title: "Char Dham Yatra",
        image: chardham,
        location: "Uttarakhand",
        duration: "Coming April",
        status: "upcoming",
        price: "On Request",
        rating: 0,
        overview: "Complete pilgrimage to Yamunotri, Gangotri, Kedarnath, and Badrinath. Bookings opening soon.",
        highlights: ["Yamunotri", "Gangotri", "Kedarnath", "Badrinath"],
        departurePoint: "Haridwar/Delhi",
        itinerary: [],
        includes: [],
        excludes: []
    },
    {
        id: 7,
        title: "Kedarnath",
        image: kedarnath,
        location: "Uttarakhand",
        duration: "Coming April",
        status: "upcoming",
        price: "On Request",
        rating: 0,
        overview: "Dedicated spiritual journey to Kedarnath Temple. Bookings opening soon.",
        highlights: ["Kedarnath Temple", "Gaurikund"],
        departurePoint: "Haridwar",
        itinerary: [],
        includes: [],
        excludes: []
    }
];
