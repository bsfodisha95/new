export default function sitemap() {
  const baseUrl = "https://www.bhushangroups.com";

  const staticPages = [
    "",
    "/about",
    "/services",
    "/industries",
    "/compliance",
    "/careers",
    "/contact",
    "/cities",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1.0 : 0.8,
  }));

  const cities = [
  "jharsuguda", "angul", "balangir", "balasore", "bhadrak", "cuttack",
  "kendrapara", "keonjhar", "khordha", "koraput", "mayurbhanj", "barbil",
  "sambalpur", "sundargarh", "ranchi", "dhanbad", "jamshedpur", "bokaro",
  "kolkata", "durgapur", "asansol", "patna", "gaya", "raipur", "bilaspur",
].map((city) => ({
  url: `${baseUrl}/cities/${city}`,
  lastModified: new Date(),
  changeFrequency: "monthly",
  priority: 0.9,
}));

  const services = [
    "security-guards",
    "corporate-security",
    "escort-guard",
    "dog-squad",
    "facility-management",
    "event-security",
    "pantry-manpower",
    "surveillance",
  ].map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  return [...staticPages, ...cities, ...services];
}