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

export const ADDITIONAL_TOURS = [
  {
    name: "Majestic Half Day Tour",
    image: haveli,
    blurb: "A graceful half-day through Jaisalmer's heritage core.",
  },
  {
    name: "Majestic Luxury Overnight Safari",
    image: camp,
    blurb: "Royal tented night amid the dunes with private safari.",
  },
  {
    name: "Majestic 1.5 Hour Jeep Tour",
    image: safari,
    blurb: "A quick exhilarating dune drive — perfect for sunset.",
  },
  {
    name: "Majestic Sunset Cultural Show with Gala Dinner",
    image: cultural,
    blurb: "Folk performances, firelight and a Rajasthani gala.",
  },
  {
    name: "Majestic Jaisalmer Attractions",
    image: haveli,
    blurb: "Curated city tour — Fort, Havelis, Gadisar and beyond.",
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

export type FleetGroup = {
  category: string;
  intro: string;
  vehicles: { name: string; seats: string; note: string }[];
};

export const FLEET_GROUPS: FleetGroup[] = [
  {
    category: "Economy & Comfort",
    intro:
      "Reliable, well-maintained sedans for solo travellers, couples and small families — perfect for city sightseeing and shorter outstation journeys across Rajasthan.",
    vehicles: [
      { name: "Sedan — Swift Dzire", seats: "4 + 1", note: "Comfortable AC sedan for couples and small families." },
      { name: "Sedan — Toyota Etios", seats: "4 + 1", note: "Spacious boot — ideal for airport pickups and city tours." },
    ],
  },
  {
    category: "Premium SUV & MUV",
    intro:
      "Roomier, higher-clearance vehicles for families, longer desert routes and group sightseeing — driven by experienced local chauffeurs who know every lane of the Thar.",
    vehicles: [
      { name: "Toyota Innova", seats: "6 + 1", note: "The workhorse of Rajasthan tours — comfortable for 4–6 guests." },
      { name: "Innova Crysta", seats: "6 + 1", note: "Premium captain seats, perfect for luxury family journeys." },
      { name: "Mahindra Scorpio", seats: "6 + 1", note: "Rugged SUV best suited for desert and border-area routes." },
    ],
  },
  {
    category: "Group Coaches & Tempo Travelers",
    intro:
      "Spacious group vehicles for weddings, corporate retreats, school trips and large family pilgrimages — every coach is air-conditioned with a dedicated driver.",
    vehicles: [
      { name: "Tempo Traveler (12 Seater)", seats: "11 + 1", note: "Push-back seats, AC — comfortable for small groups." },
      { name: "Tempo Traveler (17 Seater)", seats: "16 + 1", note: "Extra luggage space, ideal for multi-day Rajasthan circuits." },
      { name: "Luxury Coach (27 Seater)", seats: "27", note: "Premium AC coach for corporate, wedding and large group travel." },
    ],
  },
];
