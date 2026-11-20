// Port of SiteCatalog.java — facts from the Marshall Tech card and service sheet.

export const company = {
    name: "Marshall Tech",
    tagline: "Inspiring Innovation",
    descriptor: "Automation, Security, Power & Water",
    email: "marshalltech13@gmail.com",
    websiteLabel: "marshallin.in",
    websiteUrl: "https://marshallin.in",
    phones: [
        { display: "94428 91189", tel: "+919442891189" },
        { display: "94430 22037", tel: "+919443022037" },
    ],
    // Company social media profiles. Leave a link empty ("") to hide that icon.
    social: {
        youtube: "",
        instagram: "",
        facebook: "",
        whatsapp: "https://wa.me/919442891189",
    },
    studios: [
        {
            name: "Coimbatore",
            lines: "41/1 Murugan Nagar, 2nd Street, Rathinapuri, Coimbatore.",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=41/1+Murugan+Nagar+2nd+Street+Rathinapuri+Coimbatore",
        },
        {
            name: "Coonoor, Nilgiris",
            lines: "67, Muthu Pillai Line, Grace Hill, Coonoor, Nilgiris.",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=67+Muthu+Pillai+Line+Grace+Hill+Coonoor+Nilgiris",
        },
    ],
};

// Service list in the order the client gave it (update from Marshall Tech, Nov 2026).
// Paste each service video link into "video". Until then the site shows "Video coming soon".
export const services = [
    {
        slug: "entrance-automation", name: "Entrance Automation", kicker: "Automation",
        summary: "Gates and shutters that open from a remote, a phone, or a wall button, with safety stops built in.",
        includes: ["Sliding gate automation", "Swing gate automation", "Rolling shutter automation", "Remote, phone, and keypad control", "Safety sensors and manual release"],
        video: "", // one video for this service: product use, installation, service (YouTube / Instagram / Facebook link)
    },
    {
        slug: "home-automation", name: "Home Automation", kicker: "Smart home",
        summary: "Switches, sockets, sensors, valves, curtains, and water level, all on one app and customized for your house.",
        includes: ["Smart switch, socket, MCB, and energy meter", "Gas and water leakage sensors", "Valve control", "Curtain and blind automation", "Pergola automation", "Water level control", "Customized automation for your routine"],
        video: "", // one video for this service: product use, installation, service (YouTube / Instagram / Facebook link)
    },
    {
        slug: "cctv", name: "Surveillance Cameras (CCTV)", kicker: "Security",
        summary: "Analog and IP cameras with recording on site and live view on the phone, plus a video door phone at the entrance.",
        includes: ["Analog cameras", "IP cameras", "Video door phone", "Recording on the premises", "Live view on your phone"],
        video: "", // one video for this service: product use, installation, service (YouTube / Instagram / Facebook link)
    },
    {
        slug: "home-theatre", name: "Home Theatre System", kicker: "Entertainment",
        summary: "Screen, speakers, and seating planned together, with the wiring hidden before the walls are finished.",
        includes: ["Speaker and screen layout for the room", "Concealed cabling", "Amplifier and source setup", "Lighting scene for movie time"],
        video: "", // one video for this service: product use, installation, service (YouTube / Instagram / Facebook link)
    },
    {
        slug: "inverter-battery", name: "Inverter & Battery", kicker: "Power backup",
        summary: "On-grid, off-grid, and hybrid systems, with the battery chemistry chosen for your load and budget.",
        includes: ["On-grid inverter", "Off-grid inverter", "Hybrid inverter", "Tubular and SMF batteries", "Lithium-ion batteries", "Sodium-ion batteries"],
        video: "", // one video for this service: product use, installation, service (YouTube / Instagram / Facebook link)
    },
    {
        slug: "water-heating", name: "Heat Pumps & Solar Water Heaters", kicker: "Hot water",
        summary: "Hot water that costs less to run: heat pumps for steady supply and solar water heaters where the roof gets the sun.",
        includes: ["Heat pump water heaters", "Solar water heaters", "Sized for the household", "Installation and plumbing"],
        video: "", // one video for this service: product use, installation, service (YouTube / Instagram / Facebook link)
    },
    {
        slug: "water-purification", name: "Water Purification System", kicker: "Clean water",
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
    districts: ["Coimbatore", "The Nilgiris"],
};

export const patterns = [
    {
        title: "The evening house", place: "Coimbatore",
        summary: "A family home where the front door is the control. One scene for the end of the day.",
        image: "/images/hero.jpg", imageAlt: "A concept study of a villa at dusk.",
        points: ["Hall and rooms drop to a night scene", "Porch light stays on", "Main door locks", "Gate camera is live on the phone"],
    },
    {
        title: "The hill house", place: "Nilgiris",
        summary: "A house that has to respect the power cut and the water tank before it respects the mood lighting.",
        image: "/images/solar.jpg", imageAlt: "A concept study of rooftop solar above the hills.",
        points: ["Inverter covering lights, the router, and one fridge point", "Pump logic for a tank on an uneven supply", "Solar if the roof faces the right way", "Sensors that still make sense in a cooler, wetter season"],
    },
    {
        title: "The apartment", place: "A smaller plan",
        summary: "Less ceiling to open, and a door that is shared with a landing. The useful work is concentrated.",
        image: "/images/living.jpg", imageAlt: "A concept study of layered LED lighting in a living room.",
        points: ["Smart switches where a full rewire is not on the table", "Video door phone at the flat door", "RO under the sink", "Lighting scenes that do not need a new false ceiling everywhere"],
    },
    {
        title: "The utility room", place: "The room that keeps the house up",
        summary: "Inverter, pump, purifier, and distribution in one orderly corner, labeled for the next service visit.",
        image: "/images/water.jpg", imageAlt: "A concept study of a purifier and pump installation.",
        points: ["Cable routes in trunking, not loose loops", "Pump and tank logic with dry-run protection", "Inverter on a listed set of circuits", "Labels a stranger can read"],
    },
];

export const gallery = [
    { title: "Evening house", caption: "Concept study of a villa at dusk, with light along the path and in the rooms.", category: "Lighting", image: "/images/hero.jpg" },
    { title: "Door lock", caption: "Concept study of a smart lock on a timber door, with a key still part of the plan.", category: "Security", image: "/images/lock.jpg" },
    { title: "Dining light", caption: "Concept study of a linear LED pendant and cove light over a dining table.", category: "Lighting", image: "/images/dining.jpg" },
    { title: "Gate camera", caption: "Concept study of a camera under the eave, aimed at the approach to the house.", category: "Security", image: "/images/cctv.jpg" },
    { title: "Living room", caption: "Concept study of cove lighting in a living room after dark.", category: "Lighting", image: "/images/living.jpg" },
    { title: "Rooftop solar", caption: "Concept study of a solar array on a tiled roof, with hills behind it.", category: "Power", image: "/images/solar.jpg" },
    { title: "Water line", caption: "Concept study of a purifier and pump, piped and left accessible.", category: "Water", image: "/images/water.jpg" },
    { title: "Bedroom shades", caption: "Concept study of full-height curtains for a room that takes the morning sun.", category: "Comfort", image: "/images/shades.jpg" },
    { title: "Inverter wall", caption: "Concept study of an inverter and cabinet with the cables dressed.", category: "Power", image: "/images/inverter.jpg" },
    { title: "Wall panel", caption: "Concept study of a wall panel and a phone in the passage.", category: "Control", image: "/images/panel.jpg" },
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
