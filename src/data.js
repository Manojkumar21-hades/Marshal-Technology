// Port of SiteCatalog.java — facts from the Marshall Tech card and service sheet.

export const company = {
    name: "Marshall Tech",
    tagline: "Inspiring Innovation",
    descriptor: "Automation, Security, Power & Water",
    email: "marshalltech13@gmail.com",
    websiteLabel: "marshalltech.in",
    websiteUrl: "https://www.marshalltech.in",
    phones: [
        { display: "91599 29159", tel: "+919159929159" },
        { display: "90421 45767", tel: "+919042145767" },
    ],
    // Company social media profiles. Leave a link empty ("") to hide that icon.
    social: {
        youtube: "",
        instagram: "",
        facebook: "",
        whatsapp: "https://wa.me/919159929159",
    },
    studios: [
        {
            name: "Coonoor, Nilgiris",
            lines: "67, Muthu Pillai Line, Grace Hill, Coonoor, Nilgiris.",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=67+Muthu+Pillai+Line+Grace+Hill+Coonoor+Nilgiris",
        },
        {
            name: "Coimbatore",
            lines: "41/1 Murugan Nagar, 2nd Street, Rathinapuri, Coimbatore.",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=41/1+Murugan+Nagar+2nd+Street+Rathinapuri+Coimbatore",
        },
    ],
};

// Service list in the order the client gave it (update from Marshall Tech, Nov 2026).
// Paste each service video link into "video". Until then the site shows "Video coming soon".
export const services = [
    {
        slug: "entrance-automation", number: "01", name: "Entrance Automation", kicker: "Automation",
        short: "Automatic sliding gates, swing gates, and shutters.",
        summary: "Gates and shutters that open from a remote, a phone, or a wall button, with safety stops built in.",
        includes: ["Sliding gate automation", "Swing gate automation", "Rolling shutter automation", "Remote, phone, and keypad control", "Safety sensors and manual release"],
        video: "", // one video for this service: product use, installation, service (YouTube / Instagram / Facebook link)
    },
    {
        slug: "home-automation", number: "02", name: "Home Automation", kicker: "Smart home",
        short: "Control switches, curtains, valves, and water level from your phone.",
        summary: "Switches, sockets, sensors, valves, curtains, and water level, all on one app and customized for your house.",
        includes: ["Smart switch, socket, MCB, and energy meter", "Gas and water leakage sensors", "Valve control", "Curtain and blind automation", "Pergola automation", "Water level control", "Customized automation for your routine"],
        video: "", // one video for this service: product use, installation, service (YouTube / Instagram / Facebook link)
    },
    {
        slug: "cctv", number: "03", name: "Surveillance Cameras (CCTV)", kicker: "Security",
        short: "Cameras and a video door phone to watch over your place.",
        summary: "Analog and IP cameras with recording on site and live view on the phone, plus a video door phone at the entrance.",
        includes: ["Analog cameras", "IP cameras", "Video door phone", "Recording on the premises", "Live view on your phone"],
        video: "", // one video for this service: product use, installation, service (YouTube / Instagram / Facebook link)
    },
    {
        slug: "home-theatre", number: "04", name: "Home Theatre System", kicker: "Entertainment",
        short: "Cinema sound and picture in your own living room.",
        summary: "Screen, speakers, and seating planned together, with the wiring hidden before the walls are finished.",
        includes: ["Speaker and screen layout for the room", "Concealed cabling", "Amplifier and source setup", "Lighting scene for movie time"],
        video: "", // one video for this service: product use, installation, service (YouTube / Instagram / Facebook link)
    },
    {
        slug: "inverter-battery", number: "05", name: "Inverter & Battery", kicker: "Power backup",
        short: "Backup power that keeps the house running in a power cut.",
        summary: "On-grid, off-grid, and hybrid systems, with the battery chemistry chosen for your load and budget.",
        includes: ["On-grid inverter", "Off-grid inverter", "Hybrid inverter", "Tubular and SMF batteries", "Lithium-ion batteries", "Sodium-ion batteries"],
        video: "", // one video for this service: product use, installation, service (YouTube / Instagram / Facebook link)
    },
    {
        slug: "water-heating", number: "06", name: "Heat Pumps & Solar Water Heaters", kicker: "Hot water",
        short: "Hot water at a lower running cost.",
        summary: "Hot water that costs less to run: heat pumps for steady supply and solar water heaters where the roof gets the sun.",
        includes: ["Heat pump water heaters", "Solar water heaters", "Sized for the household", "Installation and plumbing"],
        video: "", // one video for this service: product use, installation, service (YouTube / Instagram / Facebook link)
    },
    {
        slug: "water-purification", number: "07", name: "Water Purification System", kicker: "Clean water",
        short: "Clean, safe water for homes and businesses.",
        summary: "Filters for homes, shops, and larger sites, chosen after looking at the water you actually get.",
        includes: ["Domestic water filter", "Commercial filter", "Multimedia filter", "Installation and service"],
        video: "", // one video for this service: product use, installation, service (YouTube / Instagram / Facebook link)
    },
];

export const solutions = services;

export const team = {
    title: "Team Work & Service District",
    summary: "One trained team handles the visit, the installation, and the service calls after it, so the people who fitted your system are the people who come back to it.",
    points: ["Site visit and planning by our own team", "Installation and handover by the same team", "After-sales service and maintenance"],
    districts: ["The Nilgiris", "Coimbatore"],
};

export const patterns = [
    {
        title: "Homes in the hills", place: "The Nilgiris",
        summary: "Cold mornings, long rains, and power cuts that come with the weather. A hill home needs hot water, steady backup, and a way to keep an eye on it from far away.",
        image: "/images/solar.jpg", imageAlt: "A house on a hillside with solar panels on the roof.",
        points: ["Heat pump or solar water heater for cold mornings", "Hybrid inverter with lithium-ion backup for power cuts", "CCTV with phone view for cottages and estates left empty", "Water level control for tanks on an uneven supply"],
    },
    {
        title: "City homes and businesses", place: "Coimbatore",
        summary: "Busy roads, gated homes, and borewell water. A city home wants a gate that opens from the car, cameras at the entrance, and clean water from the tap.",
        image: "/images/cctv.jpg", imageAlt: "A security camera under the eave, watching the entrance of a house.",
        points: ["Sliding or swing gate automation with a remote", "IP cameras and a video door phone at the entrance", "Smart switches, curtains, and a home theatre for the living room", "Domestic or commercial water filter for borewell water"],
    },
];

export const gallery = [
    { title: "Smart door lock", caption: "A smart lock on a timber door, opened from the phone or with a code, with a key still in the plan.", category: "Home Automation", image: "/images/lock.jpg" },
    { title: "Curtain automation", caption: "Full-height motorized curtains for a room that takes the morning sun.", category: "Home Automation", image: "/images/shades.jpg" },
    { title: "Smart lighting", caption: "Smart switches setting the light over a dining table for dinner.", category: "Home Automation", image: "/images/dining.jpg" },
    { title: "Movie-night living room", caption: "A living room dimmed down and ready for the home theatre.", category: "Home Theatre", image: "/images/living.jpg" },
    { title: "Inverter & battery", caption: "An inverter and battery cabinet with the cables neatly dressed.", category: "Inverter & Battery", image: "/images/inverter.jpg" },
    { title: "Water purification", caption: "A filter and pump, piped and left easy to service.", category: "Water Purification", image: "/images/water.jpg" },
];

export const galleryCategories = [...new Set(gallery.map((g) => g.category))];

export const interests = [...services.map((s) => s.name), "A whole-home plan", "Not sure yet"];

export const pins = ["Smart switches", "Curtains & blinds", "Leak sensors", "Gate automation", "Pergola", "Energy meter", "Water level", "Solar water heater", "CCTV camera", "Video door phone", "Inverter & battery", "Water filter"]
    .map((label, i) => ({ number: String(i + 1).padStart(2, "0"), label }));

export const steps = [
    { number: "01", title: "Listen", summary: "Rooms, routines, and what should stay manual. A plan or a few photos are enough to start." },
    { number: "02", title: "Draw", summary: "Scenes, circuits, and the utility corner. You see what is in the job before the walls close." },
    { number: "03", title: "Install", summary: "Gates, automation, cameras, power, and water fitted by one team, so one trade is not undoing another." },
    { number: "04", title: "Hand over", summary: "Every scene demonstrated. Labels in the utility room. A number to call when something needs a change." },
];

export const scenes = [
    { name: "Goodnight", summary: "Hall dims, bedrooms settle, the main door locks, the porch stays lit." },
    { name: "Away", summary: "Chosen lights off, gate and shutters closed, cameras live, the water level left to its own logic." },
    { name: "Arrive", summary: "Passage and living room to an evening level. The video door is a glance, not a hunt." },
    { name: "Tank full", summary: "The pump stops. If the sump is dry, it does not keep trying." },
];
