# Phina Tshegofatso Selahle — Personal Portfolio

[![Live Portfolio](https://img.shields.io/badge/_Live_Portfolio-Visit_Site-00d4ff?style=for-the-badge)](https://tshego1108.github.io/portfolio-site)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0077B5?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/phina-tshegofatso-selahle-294a5a334)
[![GitHub](https://img.shields.io/badge/GitHub-Tshego1108-181717?style=for-the-badge&logo=github)](https://github.com/Tshego1108)

---

## About This Portfolio

A personal portfolio website for **Phina Tshegofatso Selahle** — Software Developer, AI Enthusiast, and BSc Mathematical Science Graduate from the University of Limpopo.

Built with a **dark modern tech aesthetic**, the site showcases projects, skills, experience, and a fully functional contact form powered by EmailJS.

---

## Features

- **Lightweight** — pure HTML, CSS & JavaScript, zero frameworks or build tools
- **Dark modern design** — navy background with electric cyan & purple gradient accents
- **Glassmorphism UI** — frosted glass cards with subtle glow effects
- **Scroll-reveal animations** — elements animate in as you scroll down
- **Project filter tabs** — filter projects by category (AI, Data, Health, Education)
- **Working contact form** — powered by EmailJS, emails go straight to Gmail
- **Downloadable CV** — PDF version included in the `docs/` folder
- **Fully responsive** — optimised for desktop and mobile

---

## Project Structure

```
portfolio-split/
│
├── index.html                    # Main HTML — all sections & structure
│
├── assets/
│   ├── style.css                 # All styles — layout, components, animations
│   ├── main.js                   # All JavaScript — filters, scroll reveal, contact form
│   └── images/
│       └── profile.jpg           # Graduation profile photo
│
├── docs/
│   ├── Phina_Selahle_CV.pdf     # CV — linked to Download CV button 
│   └── Phina_Selahle_CV.docx   # CV — original Word version
│
├── .gitignore
└── README.md
```

---

## Getting Started Locally

No build step needed — just open in your browser:

```bash
git clone https://github.com/Tshego1108/portfolio-site.git
cd portfolio-site
open index.html        # macOS
start index.html       # Windows
```

---

## Deploy to GitHub Pages (Free Hosting)

1. Push this repo to GitHub
2. Go to **Settings → Pages**
3. Source: `main` branch, `/ (root)` folder → **Save**
4. Live at: `https://tshego1108.github.io/portfolio-site`

---

## Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Page structure and semantics |
| CSS3 | Styling, glassmorphism, animations |
| Vanilla JavaScript | Interactivity, scroll reveal, project filtering |
| [Google Fonts](https://fonts.google.com) | Syne (headings) + DM Sans (body) |
| [EmailJS](https://www.emailjs.com) | Contact form — no backend needed |

---

## Contact Form (EmailJS)

Credentials are already configured in `index.html`:

| Key | Value |
|---|---|
| Public Key | `POfM3DhiVswHEjMFh` |
| Service ID | `service_8wv4p37` |
| Template ID | `template_54dzsif` |

---

## Projects Featured

| Project | Category | Live Demo | GitHub |
|---|---|---|---|
| Caption Studio | AI | [caption-spark-52.lovable.app](https://caption-spark-52.lovable.app/) | [Repo](https://github.com/Tshego1108/caption-spark-52) |
| SentiScope | Data | [sentiscope.lovable.app](https://sentiscope.lovable.app) | [Repo](https://github.com/Tshego1108/sentiscope) |
| MediChat | Health | [medichatv2.lovable.app](https://medichatv2.lovable.app/) | [Repo](https://github.com/Logic-Laughs/health-companion-ai-61) |
| EduBuddy Predict | AI/Education | [edu-buddy-predict.lovable.app](https://edu-buddy-predict.lovable.app) | [Repo](https://github.com/Tshego1108/edu-buddy-predict) |

---

## Push to GitHub

```bash
git init
git add .
git commit -m " Launch portfolio — Phina Tshegofatso Selahle"
git branch -M main
git remote add origin https://github.com/Tshego1108/portfolio-site.git
git push -u origin main
```

---

> *"Building intelligent solutions for tomorrow."*
> — Phina Tshegofatso Selahle
