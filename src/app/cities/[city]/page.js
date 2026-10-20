import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import Link from "next/link";
import { notFound } from "next/navigation";

const cityData = {
  // ==========================================
  // ODISHA TERRITORY (Color Theme: Blue)
  // ==========================================
  jharsuguda: {
    name: "Jharsuguda", state: "Odisha", tag: "Headquarters", color: "#2A6EBB", lightColor: "#EFF6FF",
    heroImage: "/Jhadeswar-Temple.jpg",
    desc: "Jharsuguda is our headquarters city. We provide security and facility management services to corporates, industries and institutions across Odisha from our home base here.",
    industries: ["Power Plants", "Aluminium & Steel", "Coal & Mining", "Hospitals", "Residential Complexes", "Educational Institutions"],
    landmarks: ["Jharsuguda Town", "Brajrajnagar", "Belpahar", "IB Thermal Area", "Jharsuguda Railway Colony", "Sankara"],
    phone: "+91-70640-15397",
  },
  rourkela: {
    name: "Rourkela", state: "Odisha", tag: "Smart City", color: "#2A6EBB", lightColor: "#EFF6FF",
    heroImage: "/Rourkela.jpg",
    desc: "Rourkela is a major industrial hub and smart city in western Odisha, home to the Rourkela Steel Plant (SAIL). We provide comprehensive industrial, commercial, and residential security services across the region.",
    industries: ["Steel & Heavy Industries", "Educational Institutions", "Hospitals & Healthcare", "Commercial Complexes", "Residential Townships", "IT & Technology Parks"],
    landmarks: ["Civil Township", "Steel Township", "Chhend Colony", "Koel Nagar", "Uditnagar", "Panposh"],
    phone: "+91-70640-15397",
  },
  angul: {
    name: "Angul", state: "Odisha", tag: "Industrial District", color: "#2A6EBB", lightColor: "#EFF6FF",
    heroImage: "/angul.jpg",
    desc: "Angul is a major industrial district in Odisha housing NALCO, NTPC and several steel plants. We provide specialized industrial security services across Angul district.",
    industries: ["Aluminium Plants", "Power Plants", "Steel Industries", "Coal Mines", "Warehouses", "Corporate Offices"],
    landmarks: ["Angul Town", "Talcher", "Nalco Nagar", "NTPC Area", "Hingula", "Banarpal"],
    phone: "+91-70640-15397",
  },
  balangir: {
    name: "Balangir", state: "Odisha", tag: "District", color: "#2A6EBB", lightColor: "#EFF6FF",
    heroImage: "/balangir.png",
    desc: "Balangir is a growing commercial district in western Odisha. We provide security services to businesses, hospitals and educational institutions across Balangir.",
    industries: ["Commercial Establishments", "Hospitals", "Educational Institutions", "Banks", "Residential", "Government Offices"],
    landmarks: ["Balangir Town", "Titilagarh", "Patnagarh", "Kantabanji", "Loisingha", "Saintala"],
    phone: "+91-70640-15397",
  },
  balasore: {
    name: "Balasore", state: "Odisha", tag: "Coastal District", color: "#2A6EBB", lightColor: "#EFF6FF",
    heroImage: "/Balasore.jpg",
    desc: "Balasore is a coastal district in northern Odisha with growing industrial and commercial activity. We serve industries, hospitals and residential complexes across Balasore.",
    industries: ["Coastal Industries", "Hospitals", "Educational Institutions", "Retail", "Residential Complexes", "Government Offices"],
    landmarks: ["Balasore Town", "Chandipur", "Jaleswar", "Basta", "Soro", "Nilgiri"],
    phone: "+91-70640-15397",
  },
  bhadrak: {
    name: "Bhadrak", state: "Odisha", tag: "District", color: "#2A6EBB", lightColor: "#EFF6FF",
    heroImage: "/Bhadrak.jpg",
    desc: "Bhadrak is an important commercial district in northern Odisha. We provide professional security and facility management services across Bhadrak and surrounding areas.",
    industries: ["Commercial Establishments", "Banks", "Hospitals", "Residential", "Educational Institutions", "Government Offices"],
    landmarks: ["Bhadrak Town", "Basudevpur", "Bant", "Chandbali", "Dhamnagar", "Tihidi"],
    phone: "+91-70640-15397",
  },
  cuttack: {
    name: "Cuttack", state: "Odisha", tag: "Commercial Capital", color: "#2A6EBB", lightColor: "#EFF6FF",
    heroImage: "/Cuttack.jpg",
    desc: "Cuttack is the commercial capital of Odisha with a rich history of trade and business. We provide premium security services to corporates, hospitals and institutions across Cuttack.",
    industries: ["Commercial Establishments", "Hospitals", "Educational Institutions", "Retail & Malls", "Banks", "Government Offices"],
    landmarks: ["Buxi Bazar", "Badambadi", "Mangalabag", "Dolamundai", "Nayabazar", "Chauliaganj"],
    phone: "+91-70640-15397",
  },
  kendrapara: {
    name: "Kendrapara", state: "Odisha", tag: "District", color: "#2A6EBB", lightColor: "#EFF6FF",
    heroImage: "/Kendrapara.jpg",
    desc: "Kendrapara is a coastal district in Odisha known for its natural reserves. We provide security and facility management services to businesses and institutions across Kendrapara.",
    industries: ["Government Offices", "Banks", "Hospitals", "Educational Institutions", "Residential", "Commercial"],
    landmarks: ["Kendrapara Town", "Aul", "Marshaghai", "Rajnagar", "Pattamundai", "Derabis"],
    phone: "+91-70640-15397",
  },
  keonjhar: {
    name: "Keonjhar", state: "Odisha", tag: "Mining District", color: "#2A6EBB", lightColor: "#EFF6FF",
    heroImage: "/Keonjhar.jpg",
    desc: "Keonjhar is a mineral-rich district in Odisha with significant iron ore and mining operations. Our guards are experienced in mining and heavy industry security across Keonjhar.",
    industries: ["Iron Ore Mining", "Steel Plants", "Mining Companies", "Heavy Industries", "Warehouses", "Government Offices"],
    landmarks: ["Keonjhar Town", "Barbil", "Joda", "Champua", "Anandapur", "Ghasipura"],
    phone: "+91-70640-15397",
  },
  khordha: {
    name: "Khordha", state: "Odisha", tag: "District", color: "#2A6EBB", lightColor: "#EFF6FF",
    heroImage: "/Khordha.jpg",
    desc: "Khordha district includes Bhubaneswar, the state capital of Odisha and one of India's fastest growing IT cities. We serve IT companies, corporates and government offices across Khordha.",
    industries: ["IT & Technology", "Government Offices", "Hospitals", "Educational Institutions", "Retail & Malls", "Residential"],
    landmarks: ["Bhubaneswar", "Khordha Town", "Jatni", "Balianta", "Tangi", "Begunia"],
    phone: "+91-70640-15397",
  },
  koraput: {
    name: "Koraput", state: "Odisha", tag: "District", color: "#2A6EBB", lightColor: "#EFF6FF",
    heroImage: "/Koraput.jpg",
    desc: "Koraput is a tribal district in southern Odisha with significant industrial presence including HAL and NALCO. We provide security services to industries and government establishments.",
    industries: ["Aerospace & Defence", "Aluminium Plants", "Government Offices", "Banks", "Hospitals", "Educational Institutions"],
    landmarks: ["Koraput Town", "Jeypore", "Sunabeda", "Narayanpatna", "Laxmipur", "Kotpad"],
    phone: "+91-70640-15397",
  },
  mayurbhanj: {
    name: "Mayurbhanj", state: "Odisha", tag: "District", color: "#2A6EBB", lightColor: "#EFF6FF",
    heroImage: "/Mayurbhanj.jpg",
    desc: "Mayurbhanj is the largest district in Odisha with rich forest cover and tribal culture. We provide security and facility management services across Mayurbhanj's growing commercial sector.",
    industries: ["Government Offices", "Hospitals", "Educational Institutions", "Banks", "Residential", "Commercial"],
    landmarks: ["Baripada", "Rairangpur", "Karanjia", "Udala", "Jashipur", "Bangriposi"],
    phone: "+91-70640-15397",
  },
  barbil: {
    name: "Barbil", state: "Odisha", tag: "Mining Town", color: "#2A6EBB", lightColor: "#EFF6FF",
    heroImage: "/Barbil.avif",
    desc: "Barbil is a major iron ore mining town in Keonjhar district. We specialize in mining and industrial security for the heavy industries and mining companies operating in Barbil.",
    industries: ["Iron Ore Mining", "Steel Plants", "Mining Companies", "Warehouses", "Heavy Industries", "Corporate Offices"],
    landmarks: ["Barbil Town", "Joda", "Koida", "Birmitrapur", "Bonai", "Panposh"],
    phone: "+91-70640-15397",
  },
  sambalpur: {
    name: "Sambalpur", state: "Odisha", tag: "District", color: "#2A6EBB", lightColor: "#EFF6FF",
    heroImage: "/Sambalpur.avif",
    desc: "Sambalpur is a major commercial and educational hub in western Odisha. We provide professional security services to businesses, hospitals and educational institutions across Sambalpur.",
    industries: ["Power Plants", "Educational Institutions", "Hospitals", "Commercial Establishments", "Banks", "Residential"],
    landmarks: ["Sambalpur Town", "Hirakud", "Burla", "Rourkela Road", "Dhanupali", "Ainthapali"],
    phone: "+91-70640-15397",
  },
  sundargarh: {
    name: "Sundargarh", state: "Odisha", tag: "Steel District", color: "#2A6EBB", lightColor: "#EFF6FF",
    heroImage: "/Sundargarh.jpg",
    desc: "Sundargarh is home to Rourkela Steel Plant (SAIL) and several other heavy industries. Our guards are highly experienced in steel plant and industrial security operations.",
    industries: ["Steel Plants", "Heavy Industries", "Mining", "Power Plants", "Residential Complexes", "Government Offices"],
    landmarks: ["Rourkela", "Sundargarh Town", "Bonai", "Rajgangpur", "Birmitrapur", "Panposh"],
    phone: "+91-70640-15397",
  },

  // ==========================================
  // JHARKHAND TERRITORY (Color Theme: Green)
  // ==========================================
  ranchi: {
    name: "Ranchi", state: "Jharkhand", tag: "State Capital", color: "#065F46", lightColor: "#ECFDF5",
    heroImage: "/Ranchi.jpg",
    desc: "Ranchi is the capital of Jharkhand and a major hub for government offices, PSUs and growing IT sector. We provide PSARA licensed security services across Ranchi with rapid deployment capability.",
    industries: ["Government Offices", "PSU Companies", "IT Parks", "Hospitals", "Shopping Malls", "Educational Institutions"],
    landmarks: ["HEC Colony", "Doranda", "Kanke Road", "Booty More", "IT Hub Ranchi", "Hinoo"],
    phone: "+91-70640-15397",
  },
  dhanbad: {
    name: "Dhanbad", state: "Jharkhand", tag: "Coal Capital", color: "#065F46", lightColor: "#ECFDF5",
    heroImage: "/dhanbad.jpg",
    desc: "Dhanbad is the coal capital of India with heavy industrial presence. Our guards are experienced in mining, coal handling and heavy industry security operations.",
    industries: ["Coal Mines", "Mining Companies", "BCCL Operations", "Heavy Industries", "Warehouses", "Banks"],
    landmarks: ["BCCL Area", "Jharia", "Sindri", "Katras", "Govindpur", "Hirapur"],
    phone: "+91-70640-15397",
  },
  jamshedpur: {
    name: "Jamshedpur", state: "Jharkhand", tag: "Steel City", color: "#065F46", lightColor: "#ECFDF5",
    heroImage: "/jamshedpur.png",
    desc: "Jamshedpur is India's steel city home to Tata Steel and JSPL. We have extensive experience providing security to steel plants, automotive companies and corporate offices in Jamshedpur.",
    industries: ["Steel & Manufacturing", "Automotive", "IT & ITES", "Hospitals", "Residential Complexes", "Educational Institutions"],
    landmarks: ["Tata Steel Plant Area", "Adityapur Industrial Area", "Gamharia", "Jubilee Park Area", "Sakchi", "Bistupur"],
    phone: "+91-70640-15397",
  },
  bokaro: {
    name: "Bokaro", state: "Jharkhand", tag: "Steel City", color: "#065F46", lightColor: "#ECFDF5",
    heroImage: "/Bokaro.JPG",
    desc: "Bokaro Steel City is home to Bokaro Steel Plant (SAIL) and is a major industrial hub in Jharkhand. We specialize in steel plant and industrial security for Bokaro and surrounding areas.",
    industries: ["Steel Plants", "Heavy Industries", "Power Plants", "Residential Complexes", "Government Offices", "Banks"],
    landmarks: ["Bokaro Steel City", "Sector 4", "Chas", "Bermo", "Petarbar", "Gomia"],
    phone: "+91-70640-15397",
  },

  // ==========================================
  // WEST BENGAL TERRITORY (Color Theme: Purple)
  // ==========================================
  kolkata: {
    name: "Kolkata", state: "West Bengal", tag: "Metro City", color: "#7C3AED", lightColor: "#F5F3FF",
    heroImage: "/kolkata.jpg",
    desc: "Kolkata is a major metro market for us. We deploy guards for IT companies, manufacturing units, residential complexes and large corporates across the city and surrounding districts.",
    industries: ["IT & Technology", "Manufacturing", "Residential", "Healthcare", "Retail & Malls", "Logistics"],
    landmarks: ["Salt Lake Sector V", "Rajarhat", "Park Street", "Howrah", "Durgapur", "Asansol"],
    phone: "+91-70640-15397",
  },
  durgapur: {
    name: "Durgapur", state: "West Bengal", tag: "Industrial City", color: "#7C3AED", lightColor: "#F5F3FF",
    heroImage: "/durgapur.avif",
    desc: "Durgapur is a major industrial city in West Bengal with steel plants, power plants and manufacturing units. We provide specialized industrial security services across Durgapur.",
    industries: ["Steel Plants", "Power Plants", "Manufacturing", "Chemical Industries", "Corporate Offices", "Hospitals"],
    landmarks: ["Durgapur Steel Plant", "City Centre", "Benachity", "Bidhannagar", "Nachan Road", "Sagarbhanga"],
    phone: "+91-70640-15397",
  },
  asansol: {
    name: "Asansol", state: "West Bengal", tag: "Industrial City", color: "#7C3AED", lightColor: "#F5F3FF",
    heroImage: "/asansol.jpg",
    desc: "Asansol is the second largest city in West Bengal and an important industrial hub. We provide security services to industries, commercial establishments and residential complexes across Asansol.",
    industries: ["Coal Mines", "Steel Plants", "Manufacturing", "Commercial Establishments", "Residential", "Banks"],
    landmarks: ["Asansol Town", "Burnpur", "Kulti", "Raniganj", "Jamuria", "Barakar"],
    phone: "+91-70640-15397",
  },

  // ==========================================
  // BIHAR TERRITORY (Color Theme: Amber Gold)
  // ==========================================
  patna: {
    name: "Patna", state: "Bihar", tag: "State Capital", color: "#B45309", lightColor: "#FFF7ED",
    heroImage: "/Patna.jpg",
    desc: "Patna is the capital of Bihar with growing commercial activity. We provide security services to government offices, hospitals, educational institutions and corporate offices in Patna.",
    industries: ["Government Offices", "Hospitals", "Educational Institutions", "Banks", "Shopping Malls", "Residential"],
    landmarks: ["Dak Bungalow", "Fraser Road", "Boring Road", "Kankarbagh", "Patliputra", "Bailey Road"],
    phone: "+91-70640-15397",
  },
  gaya: {
    name: "Gaya", state: "Bihar", tag: "City", color: "#B45309", lightColor: "#FFF7ED",
    heroImage: "/gaya.jpg",
    desc: "Gaya is an important religious and commercial city in Bihar. We provide professional security services to hotels, temples, hospitals and commercial establishments across Gaya.",
    industries: ["Hotels & Hospitality", "Hospitals", "Religious Establishments", "Banks", "Commercial", "Government Offices"],
    landmarks: ["Bodh Gaya", "Gaya Town", "Manpur", "Tekari", "Sherghati", "Imamganj"],
    phone: "+91-70640-15397",
  },

  // ==========================================
  // CHHATTISGARH TERRITORY (Color Theme: Pink)
  // ==========================================
  raipur: {
    name: "Raipur", state: "Chhattisgarh", tag: "State Capital", color: "#BE185D", lightColor: "#FDF2F8",
    heroImage: "/raipur.jpg",
    desc: "Raipur is one of Central India's fastest growing industrial and commercial hubs. We provide security and facility management services to steel, power and corporate companies across Raipur.",
    industries: ["Steel & Power", "Manufacturing", "Corporate Offices", "Hospitals", "Residential Complexes", "Retail & Malls"],
    landmarks: ["Telibandha", "Shankar Nagar", "Pandri Industrial Area", "Civil Lines", "Raipura", "Gudhiyari"],
    phone: "+91-70640-15397",
  },
  bilaspur: {
    name: "Bilaspur", state: "Chhattisgarh", tag: "City", color: "#BE185D", lightColor: "#FDF2F8",
    heroImage: "/bilaspur.avif",
    desc: "Bilaspur is an important commercial and industrial city in Chhattisgarh. We provide security services to power plants, commercial establishments and hospitals across Bilaspur.",
    industries: ["Power Plants", "Commercial Establishments", "Hospitals", "Educational Institutions", "Banks", "Residential"],
    landmarks: ["Bilaspur Town", "Vyapaar Vihar", "Torva", "Sakri", "Masturi", "Takhatpur"],
    phone: "+91-70640-15397",
  },
  raigarh: {
  name: "Raigarh", 
  state: "Chhattisgarh", 
  tag: "Industrial Hub", 
  color: "#BE185D", 
  lightColor: "#FDF2F8",
  heroImage: "/raigarh.jpg",
  desc: "Raigarh is known as the industrial powerhouse and cultural capital of Chhattisgarh. We provide specialized security and facility management services to steel plants, power units, and heavy industries across Raigarh.",
  industries: ["Steel & Sponge Iron", "Thermal Power", "Mining", "Heavy Manufacturing", "Commercial Hubs", "Educational Institutions"],
  landmarks: ["Jindal Nagar", "Kirodimal Nagar", "Gharghoda", "Tamnar", "Chakradhar Nagar", "Boirdadar"],
  phone: "+91-70640-15397",
},
};

export async function generateMetadata({ params }) {
  const { city: citySlug } = await params;
  const city = cityData[citySlug?.toLowerCase()];
  if (!city) return { title: "City Not Found" };
  return {
    title: `Security Guards in ${city.name} | PSARA Licensed Security Agency ${city.state}`,
    description: `Hire professional security guards in ${city.name}, ${city.state}. PSARA licensed, ISO certified security agency. 24/7 deployment. Call now for free quote.`,
  };
}

export function generateStaticParams() {
  return Object.keys(cityData).map((city) => ({ city }));
}

export default async function CityPage({ params }) {
  const { city: citySlug } = await params;
  const city = cityData[citySlug?.toLowerCase()];
  if (!city) notFound();

  const services = [
    "Security Guards", "Bouncer & Bodyguard", "Escort Guard",
    "Dog Squad Service", "Facility Management", "Electronic Surveillance",
  ];

  return (
    <main style={{ background: "#fff", minHeight: "100vh" }}>
      <Navbar />

      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeSlideRight {
          from { opacity: 0; transform: translateX(-24px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeSlideLeft {
          from { opacity: 0; transform: translateX(24px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.85); }
        }
        @keyframes scanLine {
          0% { top: 0; opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }

        .city-hero { padding-top: 70px; background: #fff; }
        .city-hero-inner {
          max-width: 1280px; margin: 0 auto;
          display: grid; grid-template-columns: 1fr 1fr;
          min-height: 85vh; align-items: stretch;
        }
        .city-hero-img { position: relative; overflow: hidden; background: #0D1B2A; min-height: 460px; animation: fadeSlideRight 0.8s ease both; }
        .city-hero-img img { width: 100%; height: 100%; object-fit: cover; opacity: 0.6; }
        .city-hero-img-overlay { position: absolute; inset: 0; }
        .city-scan { position: absolute; left: 0; right: 0; height: 2px; background: linear-gradient(to right, transparent, #fff, transparent); animation: scanLine 3s ease-in-out 0.8s 1; z-index: 2; }
        .city-hero-content { padding: 60px 56px; display: flex; flex-direction: column; justify-content: center; animation: fadeSlideLeft 0.8s ease 0.2s both; }
        .city-hero-h1 { font-size: 44px; font-weight: 900; color: #0D1B2A; letter-spacing: -1px; line-height: 1.05; margin-bottom: 20px; }

        .city-quick-card { background: #F8FAFC; border-radius: 16px; padding: 32px; margin-top: 28px; border: 1px solid #E5E7EB; }
        .city-quick-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
        .city-quick-item { display: flex; align-items: center; gap: 8px; padding: 10px 14px; border-radius: 8px; transition: all 0.2s ease; }
        .city-quick-item:hover { transform: translateY(-2px); box-shadow: 0 4px 12px rgba(0,0,0,0.06); }

        .city-section { padding: 100px 40px; }
        .city-section-inner { max-width: 1280px; margin: 0 auto; }
        .city-section-tag { display: flex; align-items: center; gap: 8px; margin-bottom: 14px; }
        .city-section-h2 { font-size: 40px; font-weight: 900; color: #0D1B2A; letter-spacing: -0.5px; margin-bottom: 8px; }

        .city-ind-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
        .city-ind-card { background: #F8FAFC; border: 1px solid #E5E7EB; border-radius: 12px; padding: 24px; display: flex; align-items: center; gap: 14px; transition: all 0.25s ease; cursor: default; }
        .city-ind-card:hover { transform: translateY(-3px); box-shadow: 0 10px 24px rgba(0,0,0,0.06); }

        .city-area-tag { background: #fff; border: 1px solid #E5E7EB; padding: 12px 20px; border-radius: 100px; font-size: 14px; color: #6B7280; font-weight: 500; transition: all 0.2s ease; }
        .city-area-tag:hover { transform: translateY(-2px); box-shadow: 0 6px 16px rgba(0,0,0,0.08); }

        .city-why-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
        .city-why-card { border-radius: 16px; padding: 28px; border: 1.5px solid #E5E7EB; background: #fff; transition: all 0.3s cubic-bezier(0.4,0,0.2,1); cursor: default; }

        @media (max-width: 1024px) {
          .city-hero-inner { grid-template-columns: 1fr; }
          .city-hero-img { min-height: 380px; }
          .city-hero-content { padding: 40px 32px; }
          .city-hero-h1 { font-size: 36px; }
          .city-section { padding: 80px 24px; }
          .city-ind-grid { grid-template-columns: repeat(2, 1fr); }
          .city-why-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 768px) {
          .city-hero-img { min-height: 300px; }
          .city-hero-content { padding: 28px 20px; }
          .city-hero-h1 { font-size: 28px; letter-spacing: -0.5px; }
          .city-quick-grid { grid-template-columns: 1fr; }
          .city-section { padding: 60px 16px; }
          .city-ind-grid { grid-template-columns: 1fr; }
          .city-why-grid { grid-template-columns: 1fr; }
          .city-section-h2 { font-size: 28px; }
        }
      `}</style>

      {/* HERO SECTION */}
      <section className="city-hero">
        <div className="city-hero-inner">
          
          {/* Hero Branding & Media Area */}
          <div className="city-hero-img">
            <img src={city.heroImage} alt={city.name} />
            <div className="city-hero-img-overlay" style={{ background: `linear-gradient(135deg, #0D1B2Acc 0%, ${city.color}55 100%)` }} />
            <div className="city-scan" />

            {/* Tag Badge */}
            <div style={{ position: "absolute", top: "24px", left: "24px", display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(255,255,255,0.15)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.25)", padding: "8px 16px", borderRadius: "100px" }}>
              <div style={{ width: "6px", height: "6px", background: "#22c55e", borderRadius: "50%", animation: "pulse 1.5s ease-in-out infinite" }} />
              <span style={{ fontSize: "11px", fontWeight: 700, color: "#fff", letterSpacing: "1px" }}>{city.tag}</span>
            </div>

            {/* Float Overlay Info Layout */}
            <div style={{ position: "absolute", bottom: "24px", left: "24px" }}>
              <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.7)", marginBottom: "4px", fontWeight: 600 }}>{city.state}</div>
              <div style={{ fontSize: "32px", fontWeight: 900, color: "#fff", letterSpacing: "-0.5px" }}>{city.name}</div>
            </div>
          </div>

          {/* Core Content Grid Column */}
          <div className="city-hero-content">
            <div className="city-section-tag">
              <div style={{ width: "20px", height: "1px", background: city.color }} />
              <span style={{ fontSize: "11px", color: city.color, fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase" }}>{city.state}</span>
            </div>

            <h1 className="city-hero-h1">
              Security Guards<br />
              in <span style={{ color: city.color }}>{city.name}</span>
            </h1>

            <p style={{ fontSize: "15px", color: "#6B7280", lineHeight: 1.8, marginBottom: "28px" }}>
              {city.desc}
            </p>

            {/* CTAs */}
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Link href="/contact"
                style={{ background: city.color, color: "#fff", padding: "14px 28px", borderRadius: "8px", fontWeight: 800, fontSize: "14px", textDecoration: "none" }}>
                Get Free Quote in {city.name}
              </Link>
              <a href={`tel:${city.phone.replace(/\D/g, "").replace(/^91/, "+91")}`}
                style={{ border: `1.5px solid ${city.color}40`, color: city.color, padding: "14px 28px", borderRadius: "8px", fontWeight: 700, fontSize: "14px", textDecoration: "none" }}>
                📞 {city.phone}
              </a>
            </div>

            {/* Quick Regional Capabilities Card Block */}
            <div className="city-quick-card" style={{ background: city.lightColor, borderColor: `${city.color}20` }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "18px" }}>
                <div style={{ width: "20px", height: "1px", background: city.color }} />
                <span style={{ fontSize: "11px", color: city.color, fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase" }}>Our Services in {city.name}</span>
              </div>
              <div className="city-quick-grid">
                {services.map((s) => (
                  <div key={s} className="city-quick-item" style={{ background: "#fff", border: `1px solid ${city.color}15` }}>
                    <div style={{ width: "6px", height: "6px", background: city.color, borderRadius: "50%", flexShrink: 0 }} />
                    <span style={{ fontSize: "12px", color: "#374151", fontWeight: 500 }}>{s}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VERTICAL INDUSTRIES TARGET SEGMENT GRID */}
      <section className="city-section" style={{ background: "#fff" }}>
        <div className="city-section-inner">
          <div style={{ marginBottom: "48px" }}>
            <div className="city-section-tag">
              <div style={{ width: "20px", height: "1px", background: city.color }} />
              <span style={{ fontSize: "11px", color: city.color, fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase" }}>Industries</span>
            </div>
            <h2 className="city-section-h2">Industries We Serve in {city.name}</h2>
          </div>
          <div className="city-ind-grid">
            {city.industries.map((ind) => (
              <div key={ind} className="city-ind-card">
                <div style={{ width: "10px", height: "10px", background: city.color, borderRadius: "50%", flexShrink: 0 }} />
                <span style={{ fontSize: "14px", color: "#0D1B2A", fontWeight: 600 }}>{ind}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REGIONAL LOGISTICAL GEOGRAPHY COVERAGE SECTION */}
      <section className="city-section" style={{ background: "#F8FAFC", borderTop: "1px solid #E5E7EB", borderBottom: "1px solid #E5E7EB" }}>
        <div className="city-section-inner">
          <div style={{ marginBottom: "48px" }}>
            <div className="city-section-tag">
              <div style={{ width: "20px", height: "1px", background: city.color }} />
              <span style={{ fontSize: "11px", color: city.color, fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase" }}>Coverage</span>
            </div>
            <h2 className="city-section-h2">Areas Covered in {city.name}</h2>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
            {city.landmarks.map((area) => (
              <div key={area} className="city-area-tag">📍 {area}</div>
            ))}
          </div>
        </div>
      </section>

      {/* USP VALUE PROPOSITION BLOCK */}
      <section className="city-section" style={{ background: "#fff" }}>
        <div className="city-section-inner">
          <div style={{ marginBottom: "48px" }}>
            <div className="city-section-tag">
              <div style={{ width: "20px", height: "1px", background: city.color }} />
              <span style={{ fontSize: "11px", color: city.color, fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase" }}>Why Choose Us</span>
            </div>
            <h2 className="city-section-h2">Why BSF in {city.name}?</h2>
          </div>
          <div className="city-why-grid">
            {[
              { icon: "⚡", title: "Rapid Deployment", desc: `Guards deployed within 48 hours anywhere in ${city.name}` },
              { icon: "🛡️", title: "PSARA Licensed", desc: `Valid PSARA license for ${city.state} operations` },
              { icon: "📍", title: "Local Knowledge", desc: `Deep understanding of ${city.name} geography and industries` },
              { icon: "📞", title: "24/7 Support", desc: "Round the clock operations control room support" },
            ].map((w) => (
              <div key={w.title} className="city-why-card">
                <div style={{ width: "48px", height: "48px", background: city.lightColor, borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "22px", marginBottom: "16px" }}>
                  {w.icon}
                </div>
                <div style={{ fontSize: "15px", fontWeight: 700, color: "#0D1B2A", marginBottom: "8px" }}>{w.title}</div>
                <div style={{ fontSize: "13px", color: "#6B7280", lineHeight: 1.6 }}>{w.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}