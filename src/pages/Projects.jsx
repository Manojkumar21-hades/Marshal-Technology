import { Band, ServiceMedia } from "../Layout.jsx";
import { solutions } from "../data.js";

export default function Projects() {
    return (
        <>
            <section className="page-hero">
                <div className="wrap">
                    <p className="kicker">Our services</p>
                    <h1>Everything we install, and what each one covers.</h1>
                    <p className="lede">Choose one service, or plan the whole house. Each service has a short video on product use, installation, and service.</p>
                </div>
            </section>

            <section className="section section-alt" id="solutions">
                <div className="wrap solution-list">
                    {solutions.map((s) => (
                        <article className="solution" id={s.slug} key={s.slug}>
                            <div>
                                <p className="kicker">{s.number} · {s.kicker}</p>
                                <h2>{s.name}</h2>
                                <p>{s.summary}</p>
                            </div>
                            <ul>{s.includes.map((item) => <li key={item}>{item}</li>)}</ul>
                            <ServiceMedia service={s} embed />
                        </article>
                    ))}
                </div>
            </section>

            <Band page="services" />
        </>
    );
}
