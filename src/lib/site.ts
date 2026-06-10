export const SITE = {
  name: "Majestic Roams",
  tagline: "Hotels & Tours · Jaisalmer",
  phone: "+91 00000 00000",
  whatsapp: "910000000000", // replace with real number
  email: "hello@majesticroams.in",
  address: "Near Jaisalmer Fort, Jaisalmer, Rajasthan 345001, India",
};

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/packages", label: "Packages" },
  { to: "/car-rental", label: "Car Rental" },
  { to: "/custom-tour", label: "Custom Tour" },
  { to: "/contact", label: "Contact" },
] as const;
