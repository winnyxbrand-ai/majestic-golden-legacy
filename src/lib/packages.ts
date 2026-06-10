import camp from "@/assets/camp.jpg";
import safari from "@/assets/safari.jpg";
import haveli from "@/assets/haveli.jpg";
import cultural from "@/assets/cultural.jpg";

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
  { name: "Sedan (Dzire / Etios)", seats: "4 + 1", rate: "₹ 12 / km" },
  { name: "Toyota Innova", seats: "6 + 1", rate: "₹ 18 / km" },
  { name: "Innova Crysta", seats: "6 + 1", rate: "₹ 22 / km" },
  { name: "Mahindra Scorpio", seats: "6 + 1", rate: "₹ 18 / km" },
  { name: "Tempo Traveler (12 Seater)", seats: "11 + 1", rate: "₹ 26 / km" },
  { name: "Tempo Traveler (17 Seater)", seats: "16 + 1", rate: "₹ 32 / km" },
  { name: "Luxury Coach (27 Seater)", seats: "27", rate: "On request" },
];
