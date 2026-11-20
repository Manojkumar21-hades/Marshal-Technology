import { Band, ServiceMedia, TeamSection } from "../Layout.jsx";
import { solutions, patterns } from "../data.js";

export default function Projects() {
    return (
        <>
            <section className="page-hero">
                <div className="wrap">
                    <p className="kicker">Our services</p>
                    <h1>Everything we install, and what each one covers.</h1>
                    <p className="lede">Choose one service, or plan the whole house. A single line is welcome too: only the gate, only the cameras, only the water filter.</p>
                </div>
            </section>

            <TeamSection />

            <section className="section section-alt" id="solutions">
                <div className="wrap solution-list">
                    {solutions.map((s, i) => (
                        <article className="solution" id={s.slug} key={s.slug}>
                            <div>
                                <p className="kicker">{String(i + 2).padStart(2, "0")} · {s.kicker}</p>
                                <h2>{s.name}</h2>
                                <p>{s.summary}</p>
                            </div>
                            <ul>{s.includes.map((item) => <li key={item}>{item}</li>)}</ul>
                            <ServiceMedia service={s} embed />
                        </article>
                    ))}
                </div>
            </section>

            <section className="section section-tight">
                <div className="wrap">
                    <div className="section-head">
                        <p className="kicker">Project patterns</p>
                        <h2>How those systems meet in a house.</h2>
                        <p className="lede">Patterns we design from. The photographs are concept studies. Bring a plan and the pattern is redrawn for that plan.</p>
                    </div>
                    <div className="pattern-detail">
                        {patterns.map((p) => (
                            <article key={p.title}>
                                <figure>
                                    <img src={p.image} alt={p.imageAlt} />
                                    <figcaption>Concept study</figcaption>
                                </figure>
                                <div>
                                    <p className="kicker">{p.place}</p>
                                    <h3>{p.title}</h3>
                                    <p>{p.summary}</p>
                                    <ul>{p.points.map((pt) => <li key={pt}>{pt}</li>)}</ul>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <Band />
        </>
    );
}
