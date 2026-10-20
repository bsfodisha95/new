import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

const servicesData = {
  "security-guards": {
    icon: "/gunman.png",
    isImage: true,
    color: "#2A6EBB",
    lightColor: "#EFF6FF",
    title: "Security Guard",
    tagline: "Trained, verified and professional security personnel",
    heroImage: "/hero.jpeg",
    heroImageAlt: "Professional security guard on duty",
    desc: "Our security guards secure premises and personnel by patrolling property, monitoring surveillance equipment and inspecting buildings and equipment. Every guard is PSARA verified, uniformed and trained for 160+ hours before deployment.",
    features: [
      { icon: "/background-verification.png", title: "Background Verified", desc: "Every guard undergoes police verification and background checks before deployment" },
      { icon: "/uniform.png", title: "Uniformed & Equipped", desc: "Professional uniforms, communication devices and required equipment provided" },
      { icon: "/training.png", title: "160+ Hours Training", desc: "Comprehensive training covering physical fitness, legal powers, fire safety and first aid" },
      { icon: "/India.png", title: "PSARA Compliant", desc: "All guards deployed under valid PSARA license as required by law" },
      { icon: "/globe.svg", title: "📍", title: "GPS Tracked", desc: "Real-time location tracking and patrol monitoring for all deployed guards" }, // Replaced 📍 with image
      { icon: "/24-hours-support.png", title: "24/7 Deployment", desc: "Round the clock deployment capability with shift management and relief cover" },
    ],
    process: [
      { step: "01", title: "Site Assessment", desc: "Our team visits your location to understand security requirements and risk factors" },
      { step: "02", title: "Proposal", desc: "We prepare a customized security plan with guard count, shift timing and cost" },
      { step: "03", title: "Guard Selection", desc: "Guards are selected and briefed specifically for your site requirements" },
      { step: "04", title: "Deployment", desc: "Guards are deployed within 48 hours with full documentation and uniforms" },
      { step: "05", title: "Monitoring", desc: "Ongoing supervision, GPS tracking and monthly performance reviews" },
    ],
    stats: [{ num: "1000+", label: "Guards Deployed" }, { num: "160+", label: "Hours Training" }, { num: "48hrs", label: "Deployment Time" }],
    industries: ["Steel & Manufacturing", "Corporate Offices", "Hospitals", "Educational Institutions", "Residential Complexes", "Retail & Malls"],
  },
  "corporate-security": {
    icon: "/bodyguard.png",
    isImage: true,
    color: "#7C3AED",
    lightColor: "#F5F3FF",
    title: "Bouncer & Bodyguard",
    tagline: "Professional bouncers and bodyguards for events and VIP protection",
    heroImage: "/bouncer-bodyguard.jpeg",
    heroImageAlt: "Professional bodyguard security",
    desc: "Bouncer and bodyguard services are primarily required at places where standard security guards may not be adequate — restricted entries like marriages, private parties, corporate events and VIP protection assignments.",
    features: [
      { icon: "/vip.png", title: "VIP Protection", desc: "Dedicated close protection for VIP guests, executives and high-profile individuals" },
      { icon: "/event.png", title: "Event Entry Control", desc: "Professional bouncers managing restricted entry at events and private parties" },
      { icon: "/training.png", title: "Trained Personnel", desc: "Physically fit and trained bouncers with crowd management experience" },
      { icon: "/car.png", title: "Escort Services", desc: "Close protection escort for individuals and convoys" },
      { icon: "/24-hours-support.png", title: "24/7 Availability", desc: "Available round the clock for planned and emergency assignments" },
      { icon: "/trust.png", title: "Professional Conduct", desc: "Firm but professional approach maintaining dignity and decorum" },
    ],
    process: [
      { step: "01", title: "Requirement Brief", desc: "Understand the event, venue and specific protection requirements" },
      { step: "02", title: "Personnel Selection", desc: "Select appropriately trained bouncers or bodyguards for the assignment" },
      { step: "03", title: "Briefing", desc: "Detailed briefing on venue, VIPs, entry protocols and emergency procedures" },
      { step: "04", title: "Deployment", desc: "Personnel deployed in position before event commencement" },
      { step: "05", title: "Post Assignment", desc: "Post-event debriefing and incident report if required" },
    ],
    stats: [{ num: "500+", label: "Events Secured" }, { num: "100%", label: "Client Satisfaction" }, { num: "24/7", label: "Availability" }],
    industries: ["Marriages & Weddings", "Private Parties", "Corporate Events", "Concerts", "VIP Assignments", "Nightclubs"],
  },
  "escort-guard": {
    icon: "/car.png",
    isImage: true,
    color: "#0891B2",
    lightColor: "#ECFEFF",
    title: "Escort Guard",
    tagline: "Secure escort for employees, executives and sensitive cargo",
    heroImage: "/Escort-background.jpg",
    heroImageAlt: "Security escort vehicle convoy",
    desc: "Our escort guards secure employees and executives travelling from office to home and vice versa. We provide professional escort security for individuals, cash movement, and sensitive material transport.",
    features: [
      { icon: "/car.png", title: "Employee Escort", desc: "Safe escort for employees travelling late nights or to remote locations" },
      { icon: "/security.png", title: "Executive Protection", desc: "Dedicated escort for senior management and corporate executives" },
      { icon: "/rupee.png", title: "Cash Escort", desc: "Secure cash and valuables movement with trained escort personnel" },
      { icon: "/car (1).png", title: "Night Travel Security", desc: "Specialized night travel escort with route planning and monitoring" },
      { icon: "/vehicle.png", title: "Vehicle Escort", desc: "Convoy escort for sensitive material and high-value cargo" },
      { icon: "/globe.svg", title: "GPS Monitored", desc: "Real-time GPS monitoring of all escort movements" },
    ],
    process: [
      { step: "01", title: "Route Planning", desc: "Assess the route, identify risk zones and plan the safest travel path" },
      { step: "02", title: "Guard Assignment", desc: "Assign trained escort guards based on risk level and requirement" },
      { step: "03", title: "Briefing", desc: "Brief on protocols, emergency contacts and escalation procedures" },
      { step: "04", title: "Escort", desc: "Execute the escort with real-time communication and GPS tracking" },
      { step: "05", title: "Confirmation", desc: "Safe arrival confirmation and incident report if any" },
    ],
    stats: [{ num: "1000+", label: "Escorts Completed" }, { num: "0", label: "Incidents" }, { num: "24/7", label: "Operations" }],
    industries: ["Corporate Companies", "Banks & Finance", "Jewellery", "IT Companies", "Manufacturing", "Healthcare"],
  },
  "dog-squad": {
    icon: "/dog.png",
    isImage: true,
    color: "#B45309",
    lightColor: "#FFF7ED",
    title: "Dog Squad Service",
    tagline: "Trained security dogs with certified handlers for maximum deterrence",
    heroImage: "/dog-service.jpg",
    heroImageAlt: "Trained security dog with handler",
    desc: "We provide dog squad services with experienced personnel and certified dog trainers. Dog squad services are the most faithful means of security with sharp hearing, smelling senses, agility and the deterrent capability they create.",
    features: [
      { icon: "/dog.png", title: "Trained Security Dogs", desc: "Professionally trained dogs for patrol, detection and deterrence" },
      { icon: "/dog (2).png", title: "Certified Handlers", desc: "Experienced and certified dog handlers with years of field experience" },
      { icon: "/canine.png", title: "Detection Capability", desc: "Sharp smelling senses for explosives, narcotics and intruder detection" },
      { icon: "/dog (3).png", title: "Perimeter Patrolling", desc: "Effective night and day perimeter patrolling with dog units" },
      { icon: "/dog (4).png", title: "Intruder Deterrence", desc: "Strong visual and psychological deterrent for unauthorized persons" },
      { icon: "/dog-night.png", title: "Night Operations", desc: "Highly effective in low-light and night time security operations" },
    ],
    process: [
      { step: "01", title: "Site Assessment", desc: "Assess the site to determine number of dog units and patrol routes required" },
      { step: "02", title: "Dog Selection", desc: "Select appropriate breed and trained dogs based on security requirements" },
      { step: "03", title: "Handler Briefing", desc: "Brief handlers on site layout, risk areas and patrol schedule" },
      { step: "04", title: "Deployment", desc: "Deploy dog units with scheduled patrol rounds and checkpoints" },
      { step: "05", title: "Monitoring", desc: "Regular performance monitoring and health checks for all dog units" },
    ],
    stats: [{ num: "50+", label: "Dog Units" }, { num: "100%", label: "Certified Handlers" }, { num: "24/7", label: "Patrol Coverage" }],
    industries: ["Industrial Plants", "Warehouses", "Construction Sites", "Border Areas", "Residential Complexes", "Military Establishments"],
  },
  "facility-management": {
    icon: "/facilities.png",
    isImage: true,
    color: "#1D4ED8",
    lightColor: "#EFF6FF",
    title: "Facility Management",
    tagline: "Integrated facility solutions — one vendor for all your needs",
    heroImage: "/house-keeping.jpg",
    heroImageAlt: "Professional facility management office",
    desc: "Managing multiple facility vendors is expensive, time-consuming and creates accountability gaps. Bhushan Security provides integrated facility management — security, housekeeping, pantry, maintenance and reception — all under one contract, one invoice and one point of accountability.",
    features: [
      { icon: "/housekeeping.png", title: "Housekeeping", desc: "Trained housekeeping staff for offices, common areas and washrooms" },
      { icon: "/waiter.png", title: "Pantry Services", desc: "Pantry boys, tea/coffee service and canteen support staff" },
      { icon: "/installation.png", title: "Maintenance", desc: "Maintenance crew for electrical, plumbing and general facility upkeep" },
      { icon: "/manager.png", title: "Reception", desc: "Trained front desk and reception management professionals" },
      { icon: "/garbage.png", title: "Waste Management", desc: "Organized waste segregation and disposal coordination" },
      { icon: "/tax.png", title: "Single Invoice", desc: "One monthly invoice covering all facility services with full compliance docs" },
    ],
    process: [
      { step: "01", title: "Facility Audit", desc: "Complete facility audit to understand current services and gaps" },
      { step: "02", title: "IFM Proposal", desc: "Integrated facility management proposal with all services and costs" },
      { step: "03", title: "Transition", desc: "Smooth transition from existing vendors with zero downtime" },
      { step: "04", title: "Operations", desc: "All facility staff deployed and operations commenced" },
      { step: "05", title: "Reporting", desc: "Monthly facility performance reports and cost analysis" },
    ],
    stats: [{ num: "30%", label: "Cost Saving" }, { num: "1", label: "Invoice Monthly" }, { num: "200+", label: "Sites Managed" }],
    industries: ["Corporate Offices", "IT Parks", "Hospitals", "Hotels", "Shopping Malls", "Educational Institutions"],
  },
  "event-security": {
    icon: "/event.png",
    isImage: true,
    color: "#BE185D",
    lightColor: "#FDF2F8",
    title: "Event Staffing & Security",
    tagline: "Professional event staff and security for all types of events",
    heroImage: "/event.jpg",
    heroImageAlt: "Event security and crowd management",
    desc: "Our event staff assists in the logistical management of corporate and public events. Responsibilities include preparing venues, setting up for events, working as ushers, crowd management and operating entry systems for seamless event experiences.",
    features: [
      { icon: "/venue.png", title: "Venue Preparation", desc: "Setting up chairs, stages and event infrastructure before the event" },
      { icon: "/crowd.png", title: "Crowd Management", desc: "Trained crowd management personnel for entry, exit and flow control" },
      { icon: "/usher.png", title: "Usher Services", desc: "Professional ushers guiding attendees and managing seating" },
      { icon: "/siren.png", title: "Emergency Response", desc: "First aid trained responders and emergency evacuation coordinators" },
      { icon: "/risk.png", title: "Risk Assessment", desc: "Pre-event security risk assessment and detailed security plan" },
    ],
    process: [
      { step: "01", title: "Event Brief", desc: "Detailed event brief covering venue, expected attendance and requirements" },
      { step: "02", title: "Staff Plan", desc: "Comprehensive event staffing plan with positions and responsibilities" },
      { step: "03", title: "Reconnaissance", desc: "Site visit and venue reconnaissance before the event" },
      { step: "04", title: "Deployment", desc: "Staff deployed on event day with communication equipment" },
      { step: "05", title: "Post-Event Report", desc: "Detailed post-event report with feedback and incident log" },
    ],
    stats: [{ num: "500+", label: "Events Managed" }, { num: "10000+", label: "Staff Deployed" }, { num: "0", label: "Major Incidents" }],
    industries: ["Corporate Events", "Exhibitions", "Concerts", "Sports Events", "Weddings", "Government Functions"],
  },
  "pantry-manpower": {
    icon: "/waiter.png",
    isImage: true,
    color: "#92400E",
    lightColor: "#FFFBEB",
    title: "Pantry Boy & Office Manpower",
    tagline: "Trained office support staff for smooth daily operations",
    heroImage: "/pantery.jpg",
    heroImageAlt: "Professional office support staff",
    desc: "Our pantry boys provide support to all officers and assist in performance of their official duties — attending visitors, serving water, tea, beverages and maintaining pantry areas. We also supply front and back office manpower on permanent or contractual basis.",
    features: [
      { icon: "/coffee.png", title: "Tea & Beverage Service", desc: "Regular tea, coffee and beverage service for all officers and visitors" },
      { icon: "/manager.png", title: "Visitor Attendance", desc: "Attending and welcoming visitors, serving refreshments professionally" },
      { icon: "/waiter.png", title: "Pantry Maintenance", desc: "Keeping pantry areas clean, organized and hygienic at all times" },
      { icon: "/customer-service.png", title: "Front Office Support", desc: "Reception, administration and front office support staff" },
      { icon: "/people.png", title: "Back Office Support", desc: "Data entry, documentation and back office administrative support" },
      { icon: "/employment.png", title: "📝", title: "Contractual Staffing", desc: "Flexible contractual and permanent staffing arrangements" }, // Replaced 📝 with image
    ],
    process: [
      { step: "01", title: "Requirement", desc: "Understand your office support requirements and staff count needed" },
      { step: "02", title: "Staff Selection", desc: "Select trained and background-verified staff matching your requirements" },
      { step: "03", title: "Training", desc: "Brief staff on office protocols, dress code and conduct standards" },
      { step: "04", title: "Deployment", desc: "Staff deployed and integrated into your office operations" },
      { step: "05", title: "Review", desc: "Regular performance reviews and replacement guarantee if needed" },
    ],
    stats: [{ num: "500+", label: "Staff Placed" }, { num: "100%", label: "Background Verified" }, { num: "48hrs", label: "Replacement SLA" }],
    industries: ["Corporate Offices", "Government Offices", "Banks", "IT Companies", "Law Firms", "Healthcare"],
  },
  "surveillance": {
    icon: "/cctv.png",
    isImage: true,
    color: "#6D28D9",
    lightColor: "#F5F3FF",
    title: "Electronic Surveillance",
    tagline: "Technology-enabled security monitoring and surveillance systems",
    heroImage: "/camera.jpg",
    heroImageAlt: "CCTV surveillance monitoring system",
    desc: "Electronic surveillance complements physical security by providing 24/7 monitoring, recorded evidence and remote visibility. Bhushan Security provides CCTV installation, remote monitoring, alarm systems and GPS tracking solutions integrated with our physical security operations.",
    features: [
      { icon: "/installation.png", title: "CCTV Installation", desc: "HD camera installation covering all critical areas with proper cable management" },
      { icon: "/24-hours-support.png", title: "24/7 Monitoring", desc: "Remote monitoring center with trained operators watching live feeds round the clock" },
      { icon: "/siren.png", title: "🔔", title: "Alarm Systems", desc: "Intrusion detection alarms with immediate alert and response protocols" }, // Replaced 🔔 with image
      { icon: "/globe.svg", title: "GPS Tracking", desc: "Vehicle GPS tracking for company fleet and security patrol vehicles" },
      { icon: "/secure-access.png", title: "🔑", title: "Access Control", desc: "Electronic access control systems with card, biometric or PIN options" }, // Replaced 🔑 with image
      { icon: "/analytics.png", title: "📊", title: "Video Analytics", desc: "AI-powered video analytics for crowd detection and anomaly alerts" }, // Replaced 📊 with image
    ],
    process: [
      { step: "01", title: "Site Survey", desc: "Technical site survey to determine camera positions and system requirements" },
      { step: "02", title: "System Design", desc: "Complete surveillance system design with equipment specifications" },
      { step: "03", title: "Installation", desc: "Professional installation by certified technicians with minimal disruption" },
      { step: "04", title: "Integration", desc: "System integration with existing security operations and guard management" },
      { step: "05", title: "Maintenance", desc: "Annual maintenance contracts with regular health checks and repairs" },
    ],
    stats: [{ num: "1000+", label: "Cameras Installed" }, { num: "24/7", label: "Monitoring" }, { num: "100+", label: "Sites Covered" }],
    industries: ["Industrial Plants", "Corporate Offices", "Retail Stores", "Residential Complexes", "Banks", "Government Offices"],
  },
};

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = servicesData[slug];
  if (!service) return {};
  return {
    title: `${service.title} | Bhushan Security`,
    description: service.desc.substring(0, 160),
  };
}

export function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({ slug }));
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = servicesData[slug];
  if (!service) notFound();

  return (
    <main style={{ background: "#fff", minHeight: "100vh" }}>
      <Navbar />

      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(24px); }
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
        @keyframes iconBounce {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-6px) scale(1.08); }
        }

        /* Hero */
        .slug-hero { padding-top: 70px; background: #fff; }
        .slug-hero-inner {
          max-width: 1280px; margin: 0 auto;
          display: grid; grid-template-columns: 1fr 1fr;
          min-height: 90vh; align-items: stretch;
        }

        /* Left image panel */
        .slug-hero-img {
          position: relative; overflow: hidden;
          background: #0D1B2A; min-height: 500px;
        }
        .slug-hero-img img {
          width: 100%; height: 100%;
          object-fit: cover; opacity: 0.75;
          animation: fadeSlideRight 0.8s ease both;
        }
        .slug-hero-img-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to right, rgba(13,27,42,0.7) 0%, rgba(13,27,42,0.2) 100%);
        }
        .slug-hero-img-badge {
          position: absolute; bottom: 24px; left: 24px;
          display: flex; flex-direction: column; gap: 12px;
        }
        .slug-stat-pill {
          display: inline-flex; align-items: center; gap: 10px;
          background: rgba(255,255,255,0.12);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255,255,255,0.2);
          padding: 10px 16px; border-radius: 100px;
          animation: fadeSlideUp 0.6s ease both;
        }
        .slug-stat-num { font-size: 18px; font-weight: 900; color: #fff; }
        .slug-stat-label { font-size: 11px; color: rgba(255,255,255,0.7); letter-spacing: 0.5px; }

        /* Right content panel */
        .slug-hero-content {
          padding: 60px 56px;
          display: flex; flex-direction: column; justify-content: center;
          animation: fadeSlideLeft 0.8s ease 0.2s both;
          background: #fff;
        }
        .slug-hero-h1 { font-size: 44px; font-weight: 900; color: #0D1B2A; letter-spacing: -1px; line-height: 1.05; margin-bottom: 12px; }
        .slug-hero-tagline { font-size: 16px; font-weight: 600; margin-bottom: 16px; }
        .slug-hero-desc { font-size: 15px; color: #6B7280; line-height: 1.8; margin-bottom: 28px; }
        .slug-hero-btns { display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 32px; }
        .slug-btn-primary {
          display: inline-flex; align-items: center; gap: 8px;
          color: #fff; padding: 14px 28px; border-radius: 8px;
          font-weight: 700; font-size: 14px; text-decoration: none;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .slug-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 20px rgba(0,0,0,0.2); }
        .slug-btn-outline {
          display: inline-flex; align-items: center; gap: 8px;
          border: 1.5px solid #D1D5DB; color: #0D1B2A;
          padding: 14px 24px; border-radius: 8px;
          font-weight: 600; font-size: 13px; text-decoration: none;
          transition: all 0.2s ease; background: #fff;
        }
        .slug-btn-outline:hover { border-color: #9CA3AF; transform: translateY(-2px); box-shadow: 0 4px 12px rgba(0,0,0,0.08); }

        /* Quick features row */
        .slug-quick-features { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
        .slug-quick-item {
          display: flex; align-items: center; gap: 8px;
          padding: 10px 14px; border-radius: 8px; border: 1px solid #E5E7EB;
          transition: all 0.2s ease; cursor: default;
        }
        .slug-quick-item:hover { transform: translateY(-1px); box-shadow: 0 4px 12px rgba(0,0,0,0.06); }

        /* Breadcrumb */
        .slug-breadcrumb {
          display: flex; align-items: center; gap: 8px;
          margin-bottom: 20px;
        }

        /* Sections */
        .slug-features { padding: 100px 40px; background: #F8FAFC; border-top: 1px solid #E5E7EB; }
        .slug-features-inner { max-width: 1280px; margin: 0 auto; }
        .slug-features-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
        .slug-feat-card {
          border-radius: 12px; padding: 28px;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          cursor: default;
        }
        .slug-feat-card:hover { transform: translateY(-4px); box-shadow: 0 12px 28px rgba(0,0,0,0.08); }

        .slug-process { padding: 100px 40px; background: #fff; }
        .slug-process-inner { max-width: 1280px; margin: 0 auto; }
        .slug-process-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 16px; }
        .slug-proc-card {
          background: #fff; border: 1px solid #E5E7EB; border-radius: 12px;
          padding: 24px; height: 100%;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .slug-proc-card:hover { transform: translateY(-3px); box-shadow: 0 8px 20px rgba(0,0,0,0.08); }

        .slug-industries { padding: 100px 40px; background: #F8FAFC; border-top: 1px solid #E5E7EB; }
        .slug-industries-inner { max-width: 1280px; margin: 0 auto; }
        .slug-ind-tag {
          padding: 10px 20px; border-radius: 100px; font-size: 14px;
          font-weight: 600; cursor: default;
          transition: transform 0.15s ease, box-shadow 0.15s ease;
        }
        .slug-ind-tag:hover { transform: translateY(-2px); box-shadow: 0 6px 16px rgba(0,0,0,0.1); }

        /* Responsive */
        @media (max-width: 1024px) {
          .slug-hero-inner { grid-template-columns: 1fr; }
          .slug-hero-img { min-height: 320px; }
          .slug-hero-content { padding: 40px 32px; }
          .slug-hero-h1 { font-size: 36px; }
          .slug-features { padding: 80px 24px; }
          .slug-process { padding: 80px 24px; }
          .slug-industries { padding: 80px 24px; }
          .slug-features-grid { grid-template-columns: repeat(2, 1fr); }
          .slug-process-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 768px) {
          .slug-hero-img { min-height: 260px; }
          .slug-hero-content { padding: 28px 20px; }
          .slug-hero-h1 { font-size: 28px; letter-spacing: -0.5px; }
          .slug-hero-tagline { font-size: 14px; }
          .slug-hero-desc { font-size: 14px; }
          .slug-hero-btns { flex-direction: column; }
          .slug-hero-btns a { text-align: center; justify-content: center; }
          .slug-quick-features { grid-template-columns: 1fr 1fr; }
          .slug-features { padding: 60px 16px; }
          .slug-process { padding: 60px 16px; }
          .slug-industries { padding: 60px 16px; }
          .slug-features-grid { grid-template-columns: 1fr 1fr; }
          .slug-process-grid { grid-template-columns: 1fr 1fr; }
          .slug-stat-pill { padding: 8px 12px; }
          .slug-stat-num { font-size: 15px; }
        }
      `}</style>

      {/* HERO — Split layout */}
      <section className="slug-hero">
        <div className="slug-hero-inner">

          {/* LEFT — Image Panel */}
          <div className="slug-hero-img">
            <img src={service.heroImage} alt={service.heroImageAlt} />
            <div className="slug-hero-img-overlay" style={{ background: `linear-gradient(to right, ${service.color}CC 0%, ${service.color}44 100%)` }} />

            {/* Stats pills floating on image */}
            <div className="slug-hero-img-badge">
              {service.stats.map((s, i) => (
                <div key={s.label} className="slug-stat-pill" style={{ animationDelay: `${0.4 + i * 0.1}s` }}>
                  <div>
                    <div className="slug-stat-num">{s.num}</div>
                    <div className="slug-stat-label">{s.label}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Service icon on image */}
            <div style={{ position: "absolute", top: "24px", left: "24px", width: "56px", height: "56px", background: "rgba(255,255,255,0.15)", backdropFilter: "blur(12px)", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.3)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              {service.isImage ? (
                <Image src={service.icon} alt={service.title} width={34} height={34} style={{ objectFit: "contain", filter: "brightness(0) invert(1)" }} unoptimized />
              ) : (
                <span style={{ fontSize: "28px" }}>{service.icon}</span>
              )}
            </div>

            
          </div>

          {/* RIGHT — Content Panel */}
          <div className="slug-hero-content">
            {/* Breadcrumb */}
            <div className="slug-breadcrumb">
              <Link href="/services" style={{ fontSize: "12px", color: "#9CA3AF", textDecoration: "none", display: "flex", alignItems: "center", gap: "4px" }}>
                ← Services
              </Link>
              <span style={{ color: "#D1D5DB", fontSize: "12px" }}>/</span>
              <span style={{ fontSize: "12px", color: service.color, fontWeight: 600 }}>{service.title}</span>
            </div>

            {/* Tag */}
            <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: service.lightColor, border: `1px solid ${service.color}30`, padding: "5px 12px", borderRadius: "100px", marginBottom: "16px" }}>
              <div style={{ width: "5px", height: "5px", background: service.color, borderRadius: "50%" }} />
              <span style={{ fontSize: "11px", color: service.color, fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase" }}>BSF Service</span>
            </div>

            <h1 className="slug-hero-h1">{service.title}</h1>
            <p className="slug-hero-tagline" style={{ color: service.color }}>{service.tagline}</p>
            <p className="slug-hero-desc">{service.desc}</p>

            {/* CTA Buttons */}
            <div className="slug-hero-btns">
              <Link href="/contact" className="slug-btn-primary" style={{ background: service.color }}>
                Get Free Quote →
              </Link>
              <a href="tel:+917064015397" className="slug-btn-outline">
                📞 70640-15397
              </a>
              <a href="tel:+917205345397" className="slug-btn-outline">
                📞 72053-45397
              </a>
            </div>

            {/* Quick features */}
            <div style={{ marginBottom: "8px" }}>
              <div style={{ fontSize: "11px", color: "#9CA3AF", fontWeight: 600, letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: "12px" }}>Key Highlights</div>
              <div className="slug-quick-features">
                {service.features.slice(0, 4).map((f) => (
                  <div key={f.title} className="slug-quick-item"
                    style={{ background: service.lightColor, borderColor: `${service.color}20` }}>
                    <Image src={f.icon} alt={f.title} width={16} height={16} style={{ objectFit: "contain" }} unoptimized />
                    <span style={{ fontSize: "12px", fontWeight: 600, color: "#0D1B2A" }}>{f.title}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="slug-features">
        <div className="slug-features-inner">
          <div style={{ marginBottom: "52px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "14px" }}>
              <div style={{ width: "20px", height: "1px", background: service.color }}></div>
              <span style={{ fontSize: "11px", color: service.color, fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase" }}>What's Included</span>
            </div>
            <h2 style={{ fontSize: "36px", fontWeight: 900, color: "#0D1B2A", marginBottom: "8px" }}>Key Features</h2>
            <p style={{ fontSize: "15px", color: "#9CA3AF" }}>Everything included in our {service.title} service</p>
          </div>
          <div className="slug-features-grid">
            {service.features.map((f, i) => (
              <div key={f.title} className="slug-feat-card"
                style={{ background: service.lightColor, border: `1px solid ${service.color}15`, borderTop: `3px solid ${service.color}`, animationDelay: `${i * 0.08}s` }}>
                <div style={{ width: "48px", height: "48px", background: "#fff", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px", boxShadow: `0 4px 12px ${service.color}15` }}>
                  <Image src={f.icon} alt={f.title} width={24} height={24} style={{ objectFit: "contain" }} unoptimized />
                </div>
                <div style={{ fontSize: "15px", fontWeight: 700, color: "#0D1B2A", marginBottom: "8px" }}>{f.title}</div>
                <div style={{ fontSize: "13px", color: "#6B7280", lineHeight: 1.7 }}>{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="slug-process">
        <div className="slug-process-inner">
          <div style={{ marginBottom: "52px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "14px" }}>
              <div style={{ width: "20px", height: "1px", background: service.color }}></div>
              <span style={{ fontSize: "11px", color: service.color, fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase" }}>How It Works</span>
            </div>
            <h2 style={{ fontSize: "36px", fontWeight: 900, color: "#0D1B2A", marginBottom: "8px" }}>Our Process</h2>
            <p style={{ fontSize: "15px", color: "#9CA3AF" }}>From enquiry to deployment in as little as 48 hours</p>
          </div>
          <div className="slug-process-grid">
            {service.process.map((p, i) => (
              <div key={p.step} style={{ position: "relative" }}>
                <div className="slug-proc-card" style={{ borderTop: `3px solid ${service.color}` }}>
                  <div style={{ fontSize: "32px", fontWeight: 900, color: `${service.color}25`, marginBottom: "12px", fontFamily: "monospace" }}>{p.step}</div>
                  <div style={{ width: "32px", height: "3px", background: service.color, borderRadius: "2px", marginBottom: "14px" }} />
                  <div style={{ fontSize: "14px", fontWeight: 700, color: "#0D1B2A", marginBottom: "8px" }}>{p.title}</div>
                  <div style={{ fontSize: "12px", color: "#6B7280", lineHeight: 1.6 }}>{p.desc}</div>
                </div>
                {i < service.process.length - 1 && (
                  <div style={{ position: "absolute", top: "38%", right: "-14px", color: service.color, fontSize: "20px", fontWeight: 700, zIndex: 1 }}>→</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="slug-industries">
        <div className="slug-industries-inner">
          <div style={{ marginBottom: "40px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "14px" }}>
              <div style={{ width: "20px", height: "1px", background: service.color }}></div>
              <span style={{ fontSize: "11px", color: service.color, fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase" }}>Who We Serve</span>
            </div>
            <h2 style={{ fontSize: "36px", fontWeight: 900, color: "#0D1B2A", marginBottom: "8px" }}>Industries We Serve</h2>
            <p style={{ fontSize: "15px", color: "#9CA3AF" }}>Trusted by companies across these sectors</p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginBottom: "60px" }}>
            {service.industries.map((ind) => (
              <div key={ind} className="slug-ind-tag"
                style={{ background: service.lightColor, border: `1px solid ${service.color}25`, color: service.color }}>
                {ind}
              </div>
            ))}
          </div>

          {/* Bottom CTA Banner */}
          <div style={{ background: "#0D1B2A", borderRadius: "16px", padding: "48px", display: "grid", gridTemplateColumns: "1fr auto", gap: "40px", alignItems: "center", flexWrap: "wrap" }}>
            <div>
              <div style={{ fontSize: "11px", color: service.color, fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "10px" }}>Ready to Get Started?</div>
              <div style={{ fontSize: "24px", fontWeight: 900, color: "#fff", marginBottom: "8px", lineHeight: 1.2 }}>Need {service.title} for your business?</div>
              <div style={{ fontSize: "14px", color: "rgba(255,255,255,0.5)" }}>Free site assessment · Custom proposal · 48 hour deployment</div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", flexShrink: 0 }}>
              <Link href="/contact"
                style={{ background: service.color, color: "#fff", padding: "13px 28px", borderRadius: "8px", fontWeight: 700, fontSize: "14px", textDecoration: "none", textAlign: "center", whiteSpace: "nowrap" }}>
                Get Free Quote
              </Link>
              <a href="tel:+917064015397"
                style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", color: "#fff", padding: "12px 28px", borderRadius: "8px", fontWeight: 600, fontSize: "13px", textDecoration: "none", textAlign: "center" }}>
                📞 Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}