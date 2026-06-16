import campAsset from "@/assets/camp.jpg.asset.json";
import safariAsset from "@/assets/safari.jpg.asset.json";
import haveliAsset from "@/assets/haveli.jpg.asset.json";
import culturalAsset from "@/assets/cultural.jpg.asset.json";

const camp = campAsset.url;
const safari = safariAsset.url;
const haveli = haveliAsset.url;
const cultural = culturalAsset.url;

export type Pkg = {
  slug: string;
  name: string;
  duration: string;
  image: string;
  blurb: string;
  itinerary: { day: string; details: string }[];
  inclusions: string[];
  exclusions: string[];
};

export const PACKAGES: Pkg[] = [
  {
    slug: "desert-night-cultural",
    name: "Majestic Desert Night with Cultural Show",
    duration: "1 Night / 2 Days",
    image: camp,
    blurb:
      "An intimate evening under the Thar sky — royal Swiss tents, jeep & camel safari, and a glowing Rajasthani cultural celebration.",
    itinerary: [
      {
        day: "Day 1",
        details:
          "Check-in at camp (Royal Swiss Tent). Evening camel and jeep safari across the dunes. Sunset views, Hi-Tea snacks, traditional Rajasthani cultural program, local dinner and overnight stay.",
      },
      { day: "Day 2", details: "Leisurely breakfast at camp followed by checkout." },
    ],
    inclusions: [
      "Welcome drink on arrival",
      "Accommodation in Royal Swiss Tent",
      "Meals: 2 Breakfast, 1 Hi-Tea, 1 Dinner",
      "Private cab to Camp / Tanot / Kuldhara",
      "Jeep & Camel safari",
      "All applicable taxes",
    ],
    exclusions: ["Lunch", "Airfare or train fare", "Adventure activities"],
  },
  {
    slug: "charming-jaisalmer",
    name: "Majestic Charming Jaisalmer Tour",
    duration: "1 Night / 2 Days",
    image: safari,
    blurb:
      "The essence of the Golden City — abandoned Kuldhara, dune safari, cultural night and a heritage walk through the living fort.",
    itinerary: [
      {
        day: "Day 1",
        details:
          "Pick-up from the station. Visit Kuldhara. Check-in at camp. Evening safari, cultural show and traditional dinner.",
      },
      {
        day: "Day 2",
        details:
          "Breakfast and sightseeing: Jaisalmer Fort, Patwa Haveli and Gadisar Lake. Drop at the station.",
      },
    ],
    inclusions: [
      "Pick-up and drop",
      "Private cab and city auto",
      "All listed meals",
      "Jeep & Camel safari",
      "All applicable taxes",
    ],
    exclusions: ["Lunch", "Airfare or train fare", "Personal expenses"],
  },
  {
    slug: "royal-2n-3d",
    name: "Majestic Royal 2 Night / 3 Days",
    duration: "2 Nights / 3 Days",
    image: haveli,
    blurb:
      "Our flagship sojourn — heritage hotel, desert camp, the Indo-Pak frontier and Bada Bagh at golden hour.",
    itinerary: [
      {
        day: "Day 1",
        details:
          "Pick-up and check-in at hotel (Garh Meera or Mayra Boutique). Sightseeing: Jaisalmer Fort, Patwa Haveli, Gadisar Lake with evening show.",
      },
      {
        day: "Day 2",
        details:
          "Breakfast. Visit Kuldhara. Check-in at camp. Evening safari, cultural program and dinner.",
      },
      {
        day: "Day 3",
        details:
          "Breakfast. Visit Tanot Mata Temple, Longewala War Memorial, Indo-Pak Border and Bada Bagh cenotaphs. Drop at the station.",
      },
    ],
    inclusions: [
      "Heritage hotel & desert camp stay",
      "All meals as per itinerary",
      "Private cab throughout",
      "Jeep & Camel safari",
      "All applicable taxes",
    ],
    exclusions: ["Airfare or train fare", "Adventure activities", "Personal expenses"],
  },
];

export type AdditionalTour = {
  name: string;
  duration: string;
  image: string;
  blurb: string;
  note?: string;
  highlights: string[];
  about: string;
  inclusions: string[];
  exclusions: string[];
  itinerary: { title: string; details: string }[];
};

export const ADDITIONAL_TOURS: AdditionalTour[] = [
  {
    name: "Majestic Half Day Tour",
    duration: "Half Day · Jaisalmer",
    image: haveli,
    blurb: "A graceful half-day through Jaisalmer's heritage core.",
    note: "Requires a minimum of 2 people. If 1 extra after 2 people, an additional 30% charge applies.",
    highlights: [
      "Visit monuments and villages",
      "Kuldhara Village",
      "Camel ride",
      "Sunset in the dunes",
      "Cultural program",
      "Dinner with bonfire",
      "Dancing and singing",
    ],
    about:
      "One of the most popular outdoor experiences in Jaisalmer is a tour of the sand dunes by camel. Majestic Roams offers a Half-Day Tour for travellers seeking an exciting Jaisalmer desert experience — centred around the Thar, with desert camping, cultural moments, dune drives and sightseeing.",
    inclusions: [
      "Transport facility",
      "Camel ride to the sand dunes",
      "Pickup & drop service to the city",
      "Campfire with folk music & dance",
      "Rajasthani buffet dinner",
    ],
    exclusions: [
      "Alcoholic drinks",
      "Personal expenses",
      "Travel insurance",
      "Peak-season surcharges",
      "Monument entrance fees",
      "Any increase in government or state taxes",
    ],
    itinerary: [
      {
        title: "Jaisalmer",
        details:
          "Begin at 2:00 PM with a drive into the desert, stopping at beautiful monuments and villages including the abandoned Kuldhara. Enjoy a 90-minute camel ride and the iconic Thar sunset, followed by a candle-lit dinner under a sky of stars. Return to the city by jeep at 9:00 PM — an unforgettable evening.",
      },
    ],
  },
  {
    name: "Majestic Luxury Overnight Safari",
    duration: "1 Night / 2 Days · Jaisalmer",
    image: camp,
    blurb: "Royal tented night amid the dunes with private safari.",
    note: "Requires a minimum of 2 people. If 1 extra after 2 people, an additional 30% charge applies.",
    highlights: [
      "Visit monuments",
      "Traditional Rajasthani welcome",
      "Camel ride",
      "Sunset in the dunes",
      "Dinner with bonfire",
      "Dancing and singing",
      "Stargazing with camping",
    ],
    about:
      "An overnight escape into the Thar — private transport, camel safari, cultural program, gala dinner and a night under canvas in a Swiss luxury tent. The perfect way to live Rajasthan's heritage without surrendering comfort.",
    inclusions: [
      "Transport facility",
      "Camel ride to the sand dunes",
      "Tea / coffee and snacks",
      "Pickup & drop service to the city",
      "Campfire & dinner",
      "Morning breakfast",
    ],
    exclusions: [
      "Alcoholic drinks",
      "Personal expenses",
      "Monument entry tickets",
      "Travel insurance",
      "Peak-season surcharges",
      "Any increase in government or state taxes",
    ],
    itinerary: [
      {
        title: "Arrival",
        details:
          "From 2:00 PM until 11:00 AM the next day — car transport, monument visits, camel riding and sunset over the dunes. On arrival at camp, a traditional welcome with tilak and garland, hot drinks and snacks, a Rajasthani folk-music-and-dance program and a vegetarian gala dinner. Overnight in a Swiss luxury tent.",
      },
      { title: "Departure", details: "Leisurely breakfast at camp and checkout." },
    ],
  },
  {
    name: "Majestic 1.5 Hour Jeep Safari",
    duration: "1.5 Hours · Jaisalmer",
    image: safari,
    blurb: "A quick exhilarating dune drive — perfect for sunset.",
    note: "Maximum of 5 people per jeep.",
    highlights: ["Jeep safari", "Camel safari", "Sunset view", "Sunrise view"],
    about:
      "Explore the Jaisalmer dunes on a 90-minute jeep safari with an experienced local guide — suitable for all ages and fitness levels. Witness the unique flora and fauna of the Thar and a sunset that lingers long after you've left.",
    inclusions: ["Transport to camp", "Traditional welcome in camp", "Jeep safari on the dunes"],
    exclusions: ["Alcoholic drinks", "Travel insurance", "Peak-season surcharges"],
    itinerary: [
      {
        title: "Jeep Safari",
        details:
          "Arrive at our camp where the jeep safari begins. Within 90 minutes the jeep returns — with stops at the Sam Sunset Point and a short camel safari mid-tour. Optional add-ons: a Sunrise Safari or a Night (stargazing) Safari.",
      },
    ],
  },
  {
    name: "Majestic Sunset Cultural Show with Gala Dinner",
    duration: "1 Day · Jaisalmer",
    image: cultural,
    blurb: "Folk performances, firelight and a Rajasthani gala.",
    note: "Requires a minimum of 2 people. If 1 extra after 2 people, an additional 30% charge applies.",
    highlights: [
      "Visit monuments",
      "Camel ride",
      "Sunset in the dunes",
      "Cultural program",
      "Gala dinner with bonfire",
      "Dancing and singing",
    ],
    about:
      "A thrilling afternoon-to-evening sojourn featuring monument visits, camel riding, dune sunsets, a Rajasthani folk-music-and-dance program and a vegetarian gala dinner around the fire.",
    inclusions: [
      "Transport facility",
      "Camel ride to the sand dunes",
      "Pickup & drop service to the city",
      "Campfire with folk music & dance",
      "Rajasthani buffet dinner",
    ],
    exclusions: [
      "Alcoholic drinks",
      "Personal expenses",
      "Travel insurance",
      "Peak-season surcharges",
      "Monument entrance fees",
      "Any increase in government or state taxes",
    ],
    itinerary: [
      {
        title: "Jaisalmer",
        details:
          "From 2:00 PM to 10:30 PM — explore Jaisalmer's iconic monuments, then arrive at camp for camel riding, sunset over the dunes, welcome drinks, snacks and a Rajasthani cultural program. The evening closes with a pure-vegetarian gala dinner before the drive back to Jaisalmer.",
      },
    ],
  },
  {
    name: "Majestic Royal Jaisalmer Package",
    duration: "2 Nights / 3 Days · Jaisalmer",
    image: haveli,
    blurb: "Boutique hotel, dune camping, fort guide and a gala desert night.",
    note: "Requires a minimum of 2 people. If 1 extra after 2 people, an additional 30% charge applies.",
    highlights: [
      "City guide",
      "Visit monuments",
      "Traditional welcome",
      "Camel ride",
      "Sunset in the dunes",
      "Dinner with bonfire",
      "Dancing and singing",
      "Stargazing with camping",
    ],
    about:
      "Three days of Jaisalmer at its most royal — boutique hotel comfort, a guided tour of the Golden Fort, Havelis, Gadisar Lake and Jain Temples, a camel safari into the dunes and a bonfire-lit gala under the desert sky.",
    inclusions: [
      "Transport facility",
      "City guide",
      "Camel ride to the sand dunes",
      "Tea / coffee and snacks",
      "Pickup & drop service to the city",
      "Campfire & dinner",
      "Morning breakfast",
    ],
    exclusions: [
      "Alcoholic drinks",
      "Personal expenses",
      "Monument entry tickets",
      "Travel insurance",
      "Peak-season surcharges",
      "Any increase in government or state taxes",
    ],
    itinerary: [
      {
        title: "Arrival",
        details:
          "On arrival, our representative meets you and transfers you to a boutique hotel in Jaisalmer for a comfortable overnight. The rest of the day is at leisure.",
      },
      {
        title: "Jaisalmer Sightseeing & Desert Camping",
        details:
          "Guided tour of the Golden Fort, Havelis, Gadisar Lake and Jain Temples. In the afternoon, transfer to camp for a traditional welcome, camel safari, sunset over the dunes and a bonfire-lit gala with folk music, dance and dinner. Overnight under canvas.",
      },
      { title: "Departure", details: "Bed tea and breakfast at camp, then departure with memories of the Thar." },
    ],
  },
];

export const CARS = [
  { name: "Sedan (Dzire / Etios)", seats: "4 + 1" },
  { name: "Toyota Innova", seats: "6 + 1" },
  { name: "Innova Crysta", seats: "6 + 1" },
  { name: "Mahindra Scorpio", seats: "6 + 1" },
  { name: "Tempo Traveler (12 Seater)", seats: "11 + 1" },
  { name: "Tempo Traveler (17 Seater)", seats: "16 + 1" },
  { name: "Luxury Coach (27 Seater)", seats: "27" },
];

import car01 from "@/assets/cars/car-01.jpg.asset.json";
import car02 from "@/assets/cars/car-02.jpg.asset.json";
import car03 from "@/assets/cars/car-03.jpg.asset.json";
import car04 from "@/assets/cars/car-04.jpg.asset.json";
import car05 from "@/assets/cars/car-05.jpg.asset.json";
import car06 from "@/assets/cars/car-06.jpg.asset.json";
import car07 from "@/assets/cars/car-07.jpg.asset.json";
import car08 from "@/assets/cars/car-08.jpg.asset.json";

export type FleetGroup = {
  category: string;
  intro: string;
  vehicles: { name: string; seats: string; note: string; image: string }[];
};

export const FLEET_GROUPS: FleetGroup[] = [
  {
    category: "Economy & Comfort",
    intro:
      "Reliable, well-maintained sedans for solo travellers, couples and small families — perfect for city sightseeing and shorter outstation journeys across Rajasthan.",
    vehicles: [
      { name: "Sedan — Swift Dzire", seats: "4 + 1", note: "Comfortable AC sedan for couples and small families.", image: car01.url },
      { name: "Sedan — Toyota Etios", seats: "4 + 1", note: "Spacious boot — ideal for airport pickups and city tours.", image: car02.url },
    ],
  },
  {
    category: "Premium SUV & MUV",
    intro:
      "Roomier, higher-clearance vehicles for families, longer desert routes and group sightseeing — driven by experienced local chauffeurs who know every lane of the Thar.",
    vehicles: [
      { name: "Toyota Innova", seats: "6 + 1", note: "The workhorse of Rajasthan tours — comfortable for 4–6 guests.", image: car03.url },
      { name: "Innova Crysta", seats: "6 + 1", note: "Premium captain seats, perfect for luxury family journeys.", image: car04.url },
      { name: "Mahindra Scorpio", seats: "6 + 1", note: "Rugged SUV best suited for desert and border-area routes.", image: car05.url },
    ],
  },
  {
    category: "Group Coaches & Tempo Travelers",
    intro:
      "Spacious group vehicles for weddings, corporate retreats, school trips and large family pilgrimages — every coach is air-conditioned with a dedicated driver.",
    vehicles: [
      { name: "Tempo Traveler (12 Seater)", seats: "11 + 1", note: "Push-back seats, AC — comfortable for small groups.", image: car06.url },
      { name: "Tempo Traveler (17 Seater)", seats: "16 + 1", note: "Extra luggage space, ideal for multi-day Rajasthan circuits.", image: car07.url },
      { name: "Luxury Coach (27 Seater)", seats: "27", note: "Premium AC coach for corporate, wedding and large group travel.", image: car08.url },
    ],
  },
];
