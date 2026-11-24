import { Band, Steps } from "../Layout.jsx";
import { steps } from "../data.js";

export default function About() {
    return (
        <>
            <section className="page-hero">
                <div className="wrap page-hero-grid">
                    <div>
                        <p className="kicker">About us</p>
                        <h1>Inspiring innovation, one house at a time.</h1>
                        <p className="lede">Marshall Tech works from Grace Hill in Coonoor, the Nilgiris, and Rathinapuri in Coimbatore. We plan, install, and service technology for homes and businesses.</p>
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
                        <p className="kicker">Who we are</p>
                        <h2>More than a switch on a phone.</h2>
                        <p>We started with LEDs, controllers, and sensors. Today we take care of the whole house: what keeps it safe, what keeps it running when the power goes, and what keeps the water clean.</p>
                        <p>We do not sell a boxed kit. We listen first, then suggest only what your house needs.</p>
                    </div>
                    <div className="creed">
                        <article>
                            <h3>Customized, not copied</h3>
                            <p>Two houses on the same street are not run the same way. Your plan is written for your rooms, your family, and your budget.</p>
                        </article>
                        <article>
                            <h3>We come back</h3>
                            <p>A system is only good if someone looks after it. Call the same number for a change, a repair, or a yearly check.</p>
                        </article>
                    </div>
                </div>
            </section>

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
                        <p>Our work follows a certified quality process, from the first site visit to the last service call.</p>
                    </div>
                </div>
            </section>

            <Band page="about" />
        </>
    );
}
