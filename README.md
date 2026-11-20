# Marshall Tech — Website

**Marshall Tech — Inspiring Innovation.** This is the website for an ISO 9001:2015 certified automation, security, power and water solutions company. It has studios in Coimbatore and Coonoor (Nilgiris).

The site is built with **React 19**, **React Router 7** and **Vite 6**. It is a static site with no backend, ready to host on **Netlify**.

---

## Services shown on the site

These follow the client's requirement list, in this order:

1. **Team Work & Service District**: one team for the site visit, installation and after-sales service. Districts served: Coimbatore and The Nilgiris.
2. **Entrance Automation**: sliding gate, swing gate, shutters.
3. **Home Automation**:
   - Smart switch, socket, MCB and energy meter
   - Gas and water leakage sensors
   - Valve control
   - Curtain and blind automation
   - Pergola automation
   - Water level control
   - Customized automation

   **Surveillance Cameras (CCTV)**: analog and IP cameras, video door phone.
4. **Home Theatre System**
5. **Inverter & Battery**: on-grid, off-grid, hybrid; tubular & SMF, lithium-ion and sodium-ion batteries.
6. **Heat Pumps & Solar Water Heaters**
7. **Water Purification System**: domestic water filter, commercial filter, multimedia filter.

The sub-items under each service are shown as that service's features. At the bottom of every service there is:

- **Watch video**: one video per service covering **product use, installation and service**. Until a link is added, the button reads "Video coming soon".
- **Share**: sends the service name, its video and its page link over WhatsApp, so it is easy to forward to customers.
- **Social media icons** for the company profiles (YouTube, Instagram, Facebook, WhatsApp).

On the Services page (`/projects`), YouTube links also play inside the page.

## Branding

- **Logo:** `public/images/logo-mark.jpg` is the round "M" emblem. It is used in the header, the footer and as the browser-tab icon. The "MARSHALL / TECH / Inspiring Innovation" wordmark next to it is HTML text (`Wordmark` in `src/Layout.jsx`).
- **Colours:** these match the logo and are set as CSS variables at the top of `src/site.css`:

| Variable      | Colour    | Use                         |
|---------------|-----------|-----------------------------|
| `--blue`      | `#0d4fb5` | Logo blue, headings, accents |
| `--navy`      | `#0b3d91` | Darker blue                 |
| `--ink`       | `#0a1f44` | Text, dark sections         |
| `--red`       | `#c8161d` | Logo red ("TECH"), labels   |
| `--red-deep`  | `#a10d12` | Buttons                     |
| `--gold`      | `#9aa3ad` | Logo grey (name kept from the earlier theme) |
| `--paper`     | `#f5f7fb` | Page background             |

- **Fonts** (Google Fonts): *Alfa Slab One* for the wordmark, *Fraunces* for headings and *Outfit* for body text.

## Pages

| Route       | Page                                              |
|-------------|---------------------------------------------------|
| `/`         | Home: hero, team & districts, all services, how a job runs |
| `/about`    | About the company, team & districts, ISO, studios |
| `/projects` | Services: each service with everything it covers  |
| `/gallery`  | Concept photo gallery                             |
| `/contact`  | Enquiry form, phone numbers, studio addresses     |

## Run locally

You need Node.js 18 or newer (Netlify builds with Node 20).

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build -> dist/
npm run preview   # serve the built dist/ locally
```

## Project structure

```
index.html         page shell, meta tags, fonts, favicon
netlify.toml       Netlify build settings (build command, publish folder, Node version)
public/            copied as-is into the build
  _redirects       SPA fallback so /about, /contact etc. work on refresh. Do not delete.
  robots.txt
  sitemap.xml
  images/          logo-mark.jpg + concept photos
src/
  main.jsx         routes
  Layout.jsx       header, footer, logo/wordmark, team section, shared pieces
  data.js          ALL site content: company details, services, team & districts, gallery
  site.css         styles and brand colours
  pages/           Home, About, Projects (Services), Gallery, Contact, NotFound
```

### Editing content

Almost everything is in **`src/data.js`**:

- `company`: name, tagline, email, phone numbers, studio addresses.
- `company.social`: YouTube / Instagram / Facebook / WhatsApp profile links. An empty link hides that icon.
- `services`: the 7 service cards. Each one has a `name`, `summary`, an `includes` list of sub-items, and a `video` link. Paste a YouTube, Instagram or Facebook video URL into `video` and the "Watch video" button goes live.
- `team`: the Team Work & Service District text and the `districts` list. Add more districts here.
- `gallery`: to add a photo, put it in `public/images/` and add an entry here.

## Contact form

There is no backend. The form checks the fields, then opens the visitor's email app with the enquiry addressed to `marshalltech13@gmail.com`. To store enquiries instead, change `submit()` in `src/pages/Contact.jsx` so it POSTs to an API or Netlify Forms.

## Deploying to Netlify

`netlify.toml` and `public/_redirects` are already in the repo, so Netlify needs no manual settings.

### From GitHub (recommended: auto-deploys on every push)

1. Push this project to a GitHub repository.
2. Go to https://app.netlify.com → **Add new site** → **Import an existing project** → **GitHub**, then pick the repository.
3. Netlify reads `netlify.toml` and fills in:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. Click **Deploy**. The site goes live at `https://<random-name>.netlify.app`.

### Drag and drop (no Git)

Run `npm run build`, then drag the `dist` folder onto https://app.netlify.com/drop.

### Custom domain (marshallin.in)

1. In Netlify, go to **Domain management** → **Add a domain** and enter `marshallin.in`.
2. At the domain registrar, either switch to Netlify's nameservers or add the DNS records Netlify lists. That is an `A` record for `marshallin.in` and a `CNAME` for `www` pointing to `<your-site>.netlify.app`.
3. HTTPS is issued automatically once DNS resolves. This can take up to 24 hours.

## Notes

- The photos are concept studies, not photos of named client projects. The footer says so.
- `node_modules/` and `dist/` are git-ignored. Netlify installs and builds on its side.
