import chardham from "@/assets/uttarakhand-usp/chardham.jpg";
import kedarnath from "@/assets/uttarakhand-usp/kedarnath.jpg";
import valleyofflower from "@/assets/uttarakhand-usp/valleyofflower.jpg";
import auli from "@/assets/uttarakhand-usp/auli.jpg";
import rishikesh from "@/assets/uttarakhand-usp/rishikesh.jpg";
import nainital from "@/assets/uttarakhand-usp/nainital.jpg";
import mussorie from "@/assets/mussorie.jpg";
import jimcorbett from "@/assets/jimcorbett.jpg";

// Banner imports (using same for now if specific banner not available)
import chardhamBanner from "@/assets/banner-chardham.jpg";
import kedarnathBanner from "@/assets/kedarnath-banner.jpg";
import valleyofflowerBanner from "@/assets/valleyofflower-banner.jpg";
import auliBanner from "@/assets/auli-banner.jpg";
import rishikeshBanner from "@/assets/rishikesh-banner.jpg";

export const packages = [
    {
        id: 1,
        image: chardham,
        name: "Chardham Yatra Package",
        price: "₹45,000",
        rating: 4.9,
        reviews: 124,
        duration: "10 Days 9 Nights",
        pickup: "Haridwar / Delhi",
        category: "Pilgrimage",
        features: ["All Meals", "AC Transport", "Hotel Stay", "Pilgrimage Guide"],
        departurePoints: ["Delhi", "Haridwar"],
        images: [chardhamBanner, kedarnathBanner, valleyofflowerBanner, chardham, kedarnath],
        overview: "Embark on a sacred spiritual journey to the four holy shrines of Uttarakhand: Yamunotri, Gangotri, Kedarnath, and Badrinath. Known as the Chardham Yatra, this pilgrimage is believed to wash away sins and open the gates of salvation. Traversing through the mystical Himalayas, you will witness the divine convergence of nature and spirituality, from the source of the holy rivers Yamuna and Ganga to the abode of Lord Shiva and Lord Vishnu.",
        itinerary: [
            { day: 1, title: "Haridwar to Barkot", desc: "Pick up from Haridwar. Drive to Barkot via Mussoorie, enjoying the scenic beauty of the Queen of Hills. Visit Kempty Falls en route. Check-in at Barkot hotel. Rest and prepare for the yatra." },
            { day: 2, title: "Yamunotri Darshan", desc: "Early morning drive to Janki Chatti. Trek 6km to Yamunotri (pony/doli available). Take a holy dip in Surya Kund and offer prayers at Divya Shila and Yamunotri Temple. Trek back to Janki Chatti and return to Barkot." },
            { day: 3, title: "Barkot to Uttarkashi", desc: "Drive to Uttarkashi, situated on the banks of rivers Bhagirathi. Check-in to hotel. In the evening, visit the famous Kashi Vishwanath Temple and Shakti Temple." },
            { day: 4, title: "Gangotri Darshan", desc: "Drive to Gangotri via Harsil Valley, known for its beauty and apple orchards. Take a holy dip in the sacred Ganges and perform Darshan. Return to Uttarkashi in the evening." },
            { day: 5, title: "Uttarkashi to Guptkashi", desc: " Scenic drive to Guptkashi via Moolgarh and Lambgaon. En route, see the beautiful Mandakini river at Tilwara. Check-in at Guptkashi. Evening visit to Ardh Narishwar Temple." },
            { day: 6, title: "Kedarnath Darshan", desc: "Drive to Sonprayag/Gaurikund. Start the 16km trek to Kedarnath (options: walk, pony, doli). Check-in at Kedarnath. Evening Aarti Darshan at the magnificent Kedarnath Temple." },
            { day: 7, title: "Kedarnath to Guptkashi", desc: "Early morning Darshan and Abhishekam. Trek down to Gaurikund. Drive back to Guptkashi for overnight stay." },
            { day: 8, title: "Guptkashi to Badrinath", desc: "Drive to Badrinath via Joshimath. Check-in at hotel. Evening Darshan at Badrinath Temple after a holy bath in Tapt Kund. Visit Mana Village, the last village of India." },
            { day: 9, title: "Badrinath to Rudraprayag", desc: "Morning Darshan if missed previous day. Drive to Rudraprayag/Srinagar via Joshimath. Visit Narsingh Temple and Vishnuprayag on the way." },
            { day: 10, title: "Departure", desc: "Drive back to Haridwar. Visit Rishikesh en route (Ram Jhula, Laxman Jhula) if time permits. Drop at Haridwar Railway Station." }
        ],
        inclusions: ["Accommodation in best properties", "Breakfast and Dinner", "AC Transport (Innova/Tempo)", "Toll, Parking, Driver Allowance", "Registration assistance"],
        exclusions: ["Train/Airfare", "Lunch", "Helicopter tickets", "Personal expenses", "GST 5%"],
        batches: ["15 May 2025", "25 May 2025", "05 June 2025", "15 June 2025"],
        prices: { double: "₹45,000", triple: "₹42,000", quad: "₹40,000" }
    },
    {
        id: 2,
        image: jimcorbett,
        name: "Jim Corbett Wildlife Safari",
        price: "₹18,500",
        rating: 4.8,
        reviews: 56,
        duration: "3 Days 2 Nights",
        pickup: "Ramnagar",
        category: "Wildlife",
        features: ["Jungle Safari", "Accommodation", "All Meals", "Naturalist Guide"],
        departurePoints: ["Delhi", "Ramnagar"],
        images: [jimcorbett, kedarnathBanner, valleyofflowerBanner, jimcorbett],
        overview: "Experience the thrill of the wild in India's oldest national park, Jim Corbett. Home to the majestic Bengal Tiger, wild elephants, and over 600 species of birds, this park offers a perfect blend of adventure and nature. Stay in luxury jungle resorts, enjoy thrilling jeep safaris, and explore the rich biodiversity of the Terai region.",
        itinerary: [
            { day: 1, title: "Arrival & Local Sightseeing", desc: "Arrive at Ramnagar and transfer to your jungle resort. After lunch, visit the Garjiya Devi Temple and Corbett Museum (Dhangarhi). Evening at leisure with Bonfire and Dinner at the resort." },
            { day: 2, title: "Jungle Safari", desc: "Early morning Jeep Safari in Bijrani/Dhikala/Jhirna zone to spot Tigers and other wildlife. majestic views of the sunrise over the forest. Return for breakfast. Afternoon free for pool or nature walk. Evening nature movie/slide show." },
            { day: 3, title: "Departure", desc: "Morning free for leisure or optional river walk by the Kosi river. Breakfast and Check-out. Drive back to destination." }
        ],
        inclusions: ["Luxury Resort Stay", "All Meals (Breakfast, Lunch, Dinner)", "1 Jeep Safari (Gypsy)", "Naturalist Guide", "Resort Activities"],
        exclusions: ["Travel to Ramnagar", "Personal expenses", "Laundry", "GST 5%"],
        batches: ["Daily Departures"],
        prices: { double: "₹18,500", triple: "₹16,500", quad: "₹15,000" }
    },
    {
        id: 3,
        image: valleyofflower,
        name: "Valley of Flowers Trek",
        price: "₹28,000",
        rating: 4.9,
        reviews: 85,
        duration: "6 Days 5 Nights",
        pickup: "Rishikesh",
        category: "Trekking",
        features: ["Trekking Guide", "Camping", "Meals", "Transportation"],
        departurePoints: ["Rishikesh"],
        images: [valleyofflowerBanner, auliBanner, rishikeshBanner, valleyofflower],
        overview: "Discover the UNESCO World Heritage Site of Valley of Flowers, a vibrant national park famous for its meadows of endemic alpine flowers and the variety of flora. This trek also includes a visit to the sacred Hemkund Sahib, the highest Gurudwara in the world, sitting by a pristine glacial lake surrounded by seven snow-capped peaks.",
        itinerary: [
            { day: 1, title: "Rishikesh to Govindghat", desc: "Scenic drive from Rishikesh to Govindghat (altitude 1828m) via Devprayag and Joshimath. Passing through the confluence of prominent rivers. Overnight stay at Govindghat/Joshimath." },
            { day: 2, title: "Govindghat to Ghangaria", desc: "Drive to Pulna (4km). Trek 10km from Pulna to Ghangaria (3049m). The trail goes along the Pushpawati river. Ghangaria is the base camp for Valley of Flowers and Hemkund Sahib." },
            { day: 3, title: "Explore Valley of Flowers", desc: "Trek to the Valley of Flowers (3858m). Witness the carpet of wildflowers, rare Himalayan flora, and possibly sightings of Musk Deer or Blue Sheep. Spend time in the valley and trek back to Ghangaria." },
            { day: 4, title: "Hemkund Sahib Trek", desc: "Steep trek (6km) to Hemkund Sahib (4329m). Visit the Gurudwara and the Sarovar (lake). Spot the Brahma Kamal flowers. Return to Ghangaria." },
            { day: 5, title: "Ghangaria to Govindghat", desc: "Trek back down to Pulna and drive to Govindghat. Transfer to Joshimath/Rudraprayag for overnight stay. Visit Narsingh Temple if time permits." },
            { day: 6, title: "Departure", desc: "Drive back to Rishikesh. The trip concludes with drop off at Rishikesh Bus Stand/Railway Station." }
        ],
        inclusions: ["Guesthouse/Homestay stay", "All Meals (Veg)", "Experienced Trek Leader & Support Staff", "Forest Permits", "First Aid & Oxygen"],
        exclusions: ["Porters for personal bags", "Travel Insurance", "Bottled Water", "GST 5%"],
        batches: ["July 10, 2025", "July 25, 2025", "Aug 05, 2025"],
        prices: { double: "₹28,000", triple: "₹26,500", quad: "₹25,000" }
    },
    {
        id: 4,
        image: auli,
        name: "Auli Skiing Adventure",
        price: "₹35,000",
        rating: 4.7,
        reviews: 42,
        duration: "5 Days 4 Nights",
        pickup: "Rishikesh",
        category: "Adventure",
        features: ["Ski Equipment", "Instructor", "Accommodation", "All Meals"],
        departurePoints: ["Rishikesh"],
        images: [auliBanner, auli, valleyofflowerBanner],
        overview: "Auli, the skiing capital of India, offers world-class slopes and breathtaking views of Nanda Devi, India's second-highest peak. This package is perfect for both beginners looking to learn skiing and nature lovers seeking stunning snowy landscapes. Experience the thrill of gliding on snow and the comfort of mountain resorts.",
        itinerary: [
            { day: 1, title: "Rishikesh to Auli", desc: "Drive from Rishikesh to Joshimath/Auli (approx 9-10 hrs). Enjoy the ropeway ride from Joshimath to Auli (subject to operation) or drive. Check-in and dinner." },
            { day: 2, title: "Skiing Lesson 1", desc: "Introduction to skiing equipment. Basic lessons on balancing, sliding, and breaking by certified instructors. Practice on gentle slopes." },
            { day: 3, title: "Skiing Lesson 2 & Sightseeing", desc: "Advanced lessons or free skiing. Visit Auli Artificial Lake. Optional trek to Gorson Bugyal for panoramic views of the Himalayas." },
            { day: 4, title: "Joshimath Sightseeing", desc: "Morning at leisure/skiing. Move to Joshimath. Visit Narsingh Temple and Shankaracharya Math. Overnight in Joshimath." },
            { day: 5, title: "Departure", desc: "Drive back to Rishikesh. Tour ends with sweet memories." }
        ],
        inclusions: ["Stay in Ski Resort/Hotel", "Ski Equipment Rental (Skis, Boots, Sticks)", "Ski Instructor", "All Meals"],
        exclusions: ["Cable car ticket", "Personal expenses", "Travel insurance", "GST 5%"],
        batches: ["Jan 15, 2025", "Feb 05, 2025"],
        prices: { double: "₹35,000", triple: "₹32,000", quad: "₹30,000" }
    },
    {
        id: 5,
        image: rishikesh,
        name: "Rishikesh Adventure Camp",
        price: "₹15,000",
        rating: 4.9,
        reviews: 210,
        duration: "4 Days 3 Nights",
        pickup: "Rishikesh",
        category: "Camping",
        features: ["River Rafting", "Camping", "Adventure Sports", "Meals"],
        departurePoints: ["Rishikesh"],
        images: [rishikeshBanner, rishikesh, auliBanner],
        overview: "Immerse yourself in the adrenaline-pumping world of Rishikesh, the Yoga Capital and Adventure Hub of India. This package combines riverside camping, thrilling white water rafting on the Ganges, and opportunities for bungee jumping and cliff diving.",
        itinerary: [
            { day: 1, title: "Arrival & Camping", desc: "Arrive at the riverside camp in Shivpuri. Welcome drink and check-in. Lunch. Enjoy camp activities like Volleyball, Badminton. Evening Bonfire with Music and Dinner." },
            { day: 2, title: "River Rafting", desc: "Hit the rapids! 16km River Rafting stretch from Shivpuri to Nim Beach. Experience rapids like Roller Coaster and Golf Course. Cliff Jumping and Body Surfing. Return to camp for lunch. Evening leisure." },
            { day: 3, title: "Adventure & Sightseeing", desc: "Optional Bungee Jumping/Flying Fox (extra cost). Visit Neer Garh Waterfall. Evening visit to Parmarth Niketan for the mesmerizing Ganga Aarti." },
            { day: 4, title: "Departure", desc: "Breakfast. Check out from camp. Visit Ram Jhula/Local Market before departure." }
        ],
        inclusions: ["Luxury Swiss Tents", "All Meals (3B, 3L, 3D)", "Rafting 16km", "Bonfire & Snacks", "Camp Activities"],
        exclusions: ["Bungee Jumping/Zip Line costs", "Transport to Camp", "GST 5%"],
        batches: ["Every Weekend"],
        prices: { double: "₹15,000", triple: "₹13,500", quad: "₹12,000" }
    },
    {
        id: 6,
        image: mussorie,
        name: "Mussoorie & Dhanaulti",
        price: "₹16,500",
        rating: 4.6,
        reviews: 95,
        duration: "4 Days 3 Nights",
        pickup: "Dehradun",
        category: "Hill Station",
        features: ["Hill Station", "Cable Car", "Accommodation", "Breakfast"],
        departurePoints: ["Dehradun"],
        images: [mussorie, nainital, auli],
        overview: "A refreshing getaway to the 'Queen of Hills', Mussoorie, and the serene woodlands of Dhanaulti. Walk along the colonial Mall Road, witness the cascading Kempty Falls, and enjoy the peace of nature in the eco-parks of Dhanaulti.",
        itinerary: [
            { day: 1, title: "Arrival in Mussoorie", desc: "Pick up from Dehradun. Drive to Mussoorie (1.5 hrs). Check-in. Evening stroll at the Mall Road and Gun Hill point via Cable Car. Dinner." },
            { day: 2, title: "Mussoorie Sightseeing", desc: "Visit Kempty Falls, Company Garden, and George Everest House. Enjoy spectacular views of the Doon Valley. " },
            { day: 3, title: "Dhanaulti Excursion", desc: "Day trip to Dhanaulti (32km). Visit Eco Park (Amber and Dhara), Surkanda Devi Temple (trek/ropeway). Enjoy the rhododendron and deodar forests. Return to Mussoorie." },
            { day: 4, title: "Departure", desc: "Breakfast. Drive back to Dehradun. Visit Robber's Cave or Sahastradhara if time permits. Drop at Dehradun Station/Airport." }
        ],
        inclusions: ["3 Star Hotel Stay", "Breakfast & Dinner", "Private Cab for Transfers & Sightseeing", "Driver Allowances"],
        exclusions: ["Entry tickets", "Lunch", "Personal expenses", "GST 5%"],
        batches: ["Daily Departures"],
        prices: { double: "₹16,500", triple: "₹15,000", quad: "₹14,000" }
    },
    {
        id: 7,
        image: nainital,
        name: "Nainital & Bhimtal",
        price: "₹14,500",
        rating: 4.7,
        reviews: 150,
        duration: "3 Days 2 Nights",
        pickup: "Kathgodam",
        category: "Lake Tour",
        features: ["Lake City", "Boat Ride", "Accommodation", "Meals"],
        departurePoints: ["Kathgodam"],
        images: [nainital, mussorie, jimcorbett],
        overview: "Explore the glittering jewls of the Kumaon Himalayas. Nainital, the city of lakes, offers colonial charm and scenic beauty, while Bhimtal offers serenity. Enjoy boating, viewpoints, and ancient temples in this relaxing tour.",
        itinerary: [
            { day: 1, title: "Arrival in Bhimtal", desc: "Pick up from Kathgodam. Drive to Bhimtal (1 hr). Check-in. Visit Bhimtal Lake, Aquarium island, and Victoria Dam. Evening at leisure." },
            { day: 2, title: "Nainital Sightseeing", desc: "Day excursion to Nainital. Visit Naini Lake (Boating), Naina Devi Temple, Snow View Point (Ropeway), and Eco Cave Gardens. Shopping at Mall Road. Return to Bhimtal." },
            { day: 3, title: "Departure", desc: "Visit Sattal (Seven Lakes) and Naukuchiatal on the way to Kathgodam. Drop at Kathgodam Railway Station." }
        ],
        inclusions: ["Lake View Hotel", "Breakfast & Dinner", "Private Cab", "One Boat Ride"],
        exclusions: ["Entry fees", "Lunch", "Personal expenses", "GST 5%"],
        batches: ["Daily Departures"],
        prices: { double: "₹14,500", triple: "₹13,500", quad: "₹12,500" }
    },
    {
        id: 8,
        image: chardham,
        name: "Chopta Tungnath Trek",
        price: "₹12,500",
        rating: 4.9,
        reviews: 78,
        duration: "3 Days 2 Nights",
        pickup: "Rishikesh",
        category: "Trekking",
        features: ["Trekking", "Camping", "Summit Climb", "Meals"],
        departurePoints: ["Rishikesh", "Haridwar"],
        images: [chardham, kedarnath, valleyofflower, auli],
        overview: "Trek to the world's highest Shiva temple, Tungnath, and conquer the Chandrashila Summit at 4000m for a 360-degree view of Himalayan giants like Nanda Devi and Chaukhamba. Chopta, known as the 'Mini Switzerland of India', offers meadows and evergreen forests.",
        itinerary: [
            { day: 1, title: "Rishikesh to Sari/Chopta", desc: "Drive from Rishikesh to Sari Village/Chopta (7 hrs). En route view Devprayag. Optional trek to Deoriatal Lake if staying at Sari. Overnight camp/homestay." },
            { day: 2, title: "Tungnath & Chandrashila Trek", desc: "Drive to Chopta. Trek to Tungnath Temple (3.5km). Continue steep trek to Chandrashila Summit (1.5km). Witness majestic peaks. Trek back to Chopta. Dinner & Campfire." },
            { day: 3, title: "Departure", desc: "Morning breakfast with mountain views. Drive back to Rishikesh. Tour ends." }
        ],
        inclusions: ["Swiss Tents/Cottages", "All Meals (Veg)", "Trek Guide", "Forest Entry Fees"],
        exclusions: ["Personal expenses", "Mules/Porters", "GST 5%"],
        batches: ["Every Weekend"],
        prices: { double: "₹12,500", triple: "₹11,500", quad: "₹10,500" }
    },
];
