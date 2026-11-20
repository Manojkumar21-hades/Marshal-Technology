import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { company, team } from "./data.js";

const TITLES = {
    "/": "Marshall Tech | We automate your home",
    "/about": "About | Marshall Tech",
    "/projects": "Services | Marshall Tech",
    "/gallery": "Gallery | Marshall Tech",
    "/contact": "Contact | Marshall Tech",
};

export function Mark() {
    return <img className="mark" src="/images/logo-mark.jpg" alt="" width="235" height="235" />;
}

export function Wordmark() {
    return (
        <span className="brand-text">
            <strong>Marshall</strong>
            <b>Tech</b>
            <em>Inspiring Innovation</em>
        </span>
    );
}

const SOCIAL_ICONS = {
    youtube: { label: "YouTube", path: "M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2 31 31 0 0 0 .5 12a31 31 0 0 0 .5 4.8 3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-4.8 31 31 0 0 0-.5-4.8zM9.7 15.1V8.9l5.8 3.1-5.8 3.1z" },
    instagram: { label: "Instagram", path: "M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 8.2a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4zM17.3 5.5a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4zM12 2.2c-2.7 0-3 0-4 .1C4.6 2.4 2.4 4.6 2.3 8c-.1 1-.1 1.3-.1 4s0 3 .1 4c.1 3.4 2.3 5.6 5.7 5.7 1 .1 1.3.1 4 .1s3 0 4-.1c3.4-.1 5.6-2.3 5.7-5.7.1-1 .1-1.3.1-4s0-3-.1-4C21.6 4.6 19.4 2.4 16 2.3c-1-.1-1.3-.1-4-.1zm0 1.8c2.6 0 2.9 0 4 .1 2.4.1 3.8 1.5 3.9 3.9.1 1 .1 1.4.1 4s0 2.9-.1 4c-.1 2.4-1.5 3.8-3.9 3.9-1 .1-1.4.1-4 .1s-2.9 0-4-.1C5.6 19.8 4.2 18.4 4.1 16 4 15 4 14.6 4 12s0-2.9.1-4C4.2 5.6 5.6 4.2 8 4.1 9.1 4 9.4 4 12 4z" },
    facebook: { label: "Facebook", path: "M13.5 21.5v-8h2.7l.4-3.2h-3.1v-2c0-.9.3-1.5 1.6-1.5h1.7V3.9a22 22 0 0 0-2.5-.1c-2.4 0-4.1 1.5-4.1 4.2v2.3H7.5v3.2h2.7v8z" },
    whatsapp: { label: "WhatsApp", path: "M12 2a10 10 0 0 0-8.6 15l-1.4 5 5.1-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.8 11.9 11.9 0 0 0 4.6 4c1.7.7 2.4.8 3.2.7a2.8 2.8 0 0 0 1.8-1.3 2.3 2.3 0 0 0 .2-1.3c-.1-.1-.2-.2-.5-.3z" },
};

export function SocialLinks({ className = "social" }) {
    const items = Object.entries(company.social).filter(([, url]) => url);
    if (!items.length) return null;
    return (
        <p className={className}>
            {items.map(([key, url]) => (
                <a key={key} href={url} target="_blank" rel="noopener" aria-label={`Marshall Tech on ${SOCIAL_ICONS[key].label}`} title={SOCIAL_ICONS[key].label}>
                    <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d={SOCIAL_ICONS[key].path} /></svg>
                </a>
            ))}
        </p>
    );
}

// Turns a YouTube watch/short/share link into an embeddable URL; other hosts are linked, not embedded.
function youtubeEmbed(url) {
    const m = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|shorts\/|embed\/|live\/))([\w-]{11})/);
    return m ? `https://www.youtube-nocookie.com/embed/${m[1]}` : null;
}

// Bottom of every service: one video (product use, installation, service) + share / social links.
export function ServiceMedia({ service, embed = false }) {
    const pageUrl = `${company.websiteUrl}/projects#${service.slug}`;
    const shareText = `${service.name} | Marshall Tech\n${service.video ? `Video: ${service.video}\n` : ""}${pageUrl}`;
    const embedUrl = embed && service.video && youtubeEmbed(service.video);

    return (
        <div className="service-media">
            {embedUrl && (
                <div className="video-frame">
                    <iframe src={embedUrl} title={`${service.name} video`} loading="lazy" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowFullScreen />
                </div>
            )}
            <p className="media-note">One video: product use, installation &amp; service</p>
            <div className="media-actions">
                {service.video ? (
                    <a className="media-btn" href={service.video} target="_blank" rel="noopener">
                        <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M8 5v14l11-7z" /></svg>
                        Watch video
                    </a>
                ) : (
                    <span className="media-btn is-soon">
                        <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M8 5v14l11-7z" /></svg>
                        Video coming soon
                    </span>
                )}
                <a className="media-share" href={`https://wa.me/?text=${encodeURIComponent(shareText)}`} target="_blank" rel="noopener" aria-label={`Share ${service.name} on WhatsApp`}>
                    <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d={SOCIAL_ICONS.whatsapp.path} /></svg>
                    Share
                </a>
                <SocialLinks className="social social-small" />
            </div>
        </div>
    );
}

// Blue and grey wave under the logo, as on the printed logo.
export function Swoosh() {
    return (
        <svg className="brand-swoosh" viewBox="0 0 300 26" preserveAspectRatio="none" aria-hidden="true">
            <path className="swoosh-grey" d="M38 15 C 110 30, 210 24, 292 12 C 210 19, 115 25, 38 15 Z" />
            <path className="swoosh-blue" d="M1 2 C 55 20, 160 22, 298 9 C 170 13, 70 15, 1 2 Z" />
        </svg>
    );
}

export function Phones() {
    return company.phones.map((p) => <a key={p.tel} href={`tel:${p.tel}`}>{p.display}</a>);
}

export function Studios({ as: H = "h3", className }) {
    return company.studios.map((s) => (
        <article key={s.name} className={className}>
            <H>{s.name}</H>
            <p>{s.lines}</p>
            <a href={s.mapUrl} target="_blank" rel="noopener">Open in Maps</a>
        </article>
    ));
}

export function Steps({ items }) {
    return (
        <ol className="steps">
            {items.map((s) => (
                <li key={s.number}><span>{s.number}</span><h3>{s.title}</h3><p>{s.summary}</p></li>
            ))}
        </ol>
    );
}

export function TeamSection() {
    return (
        <section className="section team" id="team">
            <div className="wrap team-grid">
                <div>
                    <p className="kicker">01 · Our team</p>
                    <h2>{team.title}</h2>
                    <p className="lede">{team.summary}</p>
                    <ul className="team-points">{team.points.map((p) => <li key={p}>{p}</li>)}</ul>
                </div>
                <div className="district-card">
                    <h3>Districts we serve</h3>
                    <ul>{team.districts.map((d) => <li key={d}>{d}</li>)}</ul>
                    <p>Outside these districts? Call us. Larger jobs can be taken on further away.</p>
                </div>
            </div>
        </section>
    );
}

export function Band() {
    return (
        <section className="visit">
            <div className="wrap visit-inner">
                <div>
                    <p className="kicker kicker-light">A site visit</p>
                    <h2>Tell us how the house is used.</h2>
                    <p>A floor plan, a few photos, or a list of rooms. We will say what is worth automating now, and what can wait.</p>
                </div>
                <Link className="btn btn-light" to="/contact">Contact the studio</Link>
            </div>
        </section>
    );
}

const NAV = [["/", "Home"], ["/about", "About"], ["/projects", "Services"], ["/gallery", "Gallery"], ["/contact", "Contact"]];

function Header() {
    const [open, setOpen] = useState(false);
    const [stuck, setStuck] = useState(false);

    useEffect(() => {
        document.body.classList.toggle("nav-open", open);
        const onKey = (e) => e.key === "Escape" && setOpen(false);
        document.addEventListener("keydown", onKey);
        return () => document.removeEventListener("keydown", onKey);
    }, [open]);

    useEffect(() => {
        const onScroll = () => setStuck(window.scrollY > 8);
        onScroll();
        document.addEventListener("scroll", onScroll, { passive: true });
        return () => document.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header className={`site-header${stuck ? " is-stuck" : ""}`}>
            <div className="topbar">
                <div className="wrap topbar-inner">
                    <p>ISO 9001:2015 Certified</p>
                    <p className="topbar-mottos"><span>Save water</span><span>Save energy</span></p>
                    <p className="topbar-phones"><Phones /></p>
                </div>
            </div>
            <div className="bar">
                <div className="wrap bar-inner">
                    <Link className="brand" to="/" aria-label="Marshall Tech, home">
                        <Mark />
                        <Wordmark />
                        <Swoosh />
                    </Link>
                    <button className="nav-toggle" type="button" aria-expanded={open} aria-controls="site-nav" onClick={() => setOpen(!open)}>
                        <span className="nav-toggle-lines" aria-hidden="true"></span>
                        <span className="nav-toggle-label">Menu</span>
                    </button>
                    <nav id="site-nav" className="nav" aria-label="Primary">
                        {NAV.map(([to, label]) => (
                            <NavLink key={to} to={to} end className={({ isActive }) => (isActive ? "is-active" : undefined)} onClick={() => setOpen(false)}>
                                {label}
                            </NavLink>
                        ))}
                    </nav>
                    <a className="call" href={`tel:${company.phones[0].tel}`}>
                        <span>Call the studio</span>
                        <strong>{company.phones[0].display}</strong>
                    </a>
                </div>
            </div>
        </header>
    );
}

function Footer() {
    return (
        <footer className="site-footer">
            <div className="wrap footer-grid">
                <div>
                    <Link className="brand brand-on-dark" to="/">
                        <Mark />
                        <Wordmark />
                        <Swoosh />
                    </Link>
                    <p className="footer-note">We automate your home. We welcome customization in your automation.</p>
                </div>
                <div>
                    <h2>Studios</h2>
                    <Studios />
                </div>
                <div>
                    <h2>Talk</h2>
                    <p><Phones /></p>
                    <p><a href={`mailto:${company.email}`}>{company.email}</a></p>
                    <p><a href={company.websiteUrl}>{company.websiteLabel}</a></p>
                    <SocialLinks className="social social-footer" />
                </div>
                <div>
                    <h2>Pages</h2>
                    <p>{NAV.map(([to, label]) => <Link key={to} to={to}>{label}</Link>)}</p>
                </div>
            </div>
            <div className="wrap footer-base">
                <p>Photographs on this site are concept studies of the kinds of homes and installations we design. They are not photographs of a named client project.</p>
                <p>&copy; {new Date().getFullYear()} Marshall Tech. ISO 9001:2015 certified.</p>
            </div>
        </footer>
    );
}

export default function Layout() {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        document.title = TITLES[pathname] ?? "Page not found | Marshall Tech";
        const target = hash && document.getElementById(hash.slice(1));
        target ? target.scrollIntoView() : window.scrollTo(0, 0);
    }, [pathname, hash]);

    return (
        <>
            <a className="skip" href="#content">Skip to content</a>
            <Header />
            <main id="content"><Outlet /></main>
            <Footer />
        </>
    );
}
