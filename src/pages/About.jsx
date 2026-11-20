import { Band, Steps, Studios, TeamSection } from "../Layout.jsx";
import { steps } from "../data.js";

export default function About() {
    return (
        <>
            <section className="page-hero">
                <div className="wrap page-hero-grid">
                    <div>
                        <p className="kicker">About the studio</p>
                        <h1>Inspiring innovation, one house at a time.</h1>
                        <p className="lede">Marshall Tech automates homes from two studios: Rathinapuri in Coimbatore, and Grace Hill in Coonoor. We welcome customization in that automation.</p>
                    </div>
                    <figure className="frame">
                        <img src="/images/panel.jpg" alt="Concept study of a wall panel and a phone on a timber console." />
                        <figcaption>Concept study · a panel in the passage</figcaption>
                    </figure>
                </div>
            </section>

            <section className="section">
                <div className="wrap split">
                    <div>
                        <p className="kicker">The work</p>
                        <h2>More than a switch on a phone.</h2>
                        <p>A finished job can be the gate, the smart switches and sensors, the cameras and video door phone, the home theatre, the inverter and battery, the hot water, and the water filter, all fitted by one team.</p>
                        <p>Every house is different, so every plan is customized. Our own team visits, installs, and comes back for service in the districts we cover.</p>
                    </div>
                    <div className="creed">
                        <article>
                            <h3>Save water</h3>
                            <p>Water level control that stops the pump when the tank is full, leakage sensors that catch a burst pipe, and filters sized for the people who live there.</p>
                        </article>
                        <article>
                            <h3>Save energy</h3>
                            <p>On-grid, off-grid, and hybrid inverters with the right battery. Heat pumps and solar water heaters for cheaper hot water. An energy meter that shows where the units go.</p>
                        </article>
                    </div>
                </div>
            </section>

            <TeamSection />

            <section className="section section-tight">
                <div className="wrap">
                    <div className="section-head">
                        <p className="kicker">How a plan is made</p>
                        <h2>We start from the routine, then the hardware.</h2>
                    </div>
                    <Steps items={steps} />
                </div>
            </section>

            <section className="section">
                <div className="wrap quality">
                    <div className="stamp stamp-inline" aria-hidden="true">
                        <span>ISO</span><strong>9001:2015</strong><em>Certified</em>
                    </div>
                    <div>
                        <p className="kicker">Quality</p>
                        <h2>ISO 9001:2015 certified.</h2>
                        <p>The certificate is about how a job is specified, installed, and handed over. It is not a substitute for walking the house. You still get a drawing, a demonstration of every scene, and labels in the utility room.</p>
                    </div>
                </div>
            </section>

            <section className="section section-tight">
                <div className="wrap">
                    <div className="section-head">
                        <p className="kicker">Studios</p>
                        <h2>Coimbatore and the Nilgiris.</h2>
                        <p className="lede">Call either number. Say which house, and which studio is closer.</p>
                    </div>
                    <div className="studio-grid"><Studios /></div>
                </div>
            </section>

            <Band />
        </>
    );
}
