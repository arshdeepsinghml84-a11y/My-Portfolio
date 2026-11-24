# My Frontend Developer Portfolio

## Description

A responsive, dark-themed personal portfolio website that presents me as an aspiring, self-learning frontend developer. It shows who I am, the technologies I am learning, and eight practical projects I have built while learning.

It is useful for anyone who wants to see my work, such as people interested in my learning journey, potential clients or employers. It gives them one clear page to see my projects, skills and contact details.

## Features

- Sticky navigation bar with smooth scrolling to each section
- Mobile hamburger menu that opens and closes (also closes with the Escape key and after tapping a link)
- Active navigation link that highlights the section currently on screen
- Dark theme by default, with a light/dark theme toggle that remembers the visitor's choice
- Hero section with a decorative code-window illustration
- About Me section with a quick information card
- Technologies & Skills section, grouped into Frontend, Development Tools and Version Control (no fake percentages)
- Projects section with 8 project cards in a responsive grid (1, 2 or 3 columns depending on screen size)
- My Learning Journey section
- Contact section with form validation for name, email, subject and message
- Gentle scroll-reveal animations (turned off automatically for visitors who prefer reduced motion)
- Accessibility basics: semantic HTML, skip link, keyboard focus styles, image alt text
- SEO basics: page title, meta description, Open Graph and Twitter Card tags, favicon
- Placeholder links show a friendly reminder message instead of opening a broken page

**Note:** the contact form only validates input. It does **not** send emails, because no email service or backend is connected.

## Technologies Used

- HTML5
- CSS3 (CSS variables, Grid, Flexbox, media queries)
- Vanilla JavaScript (no frameworks or libraries)
- Google Fonts (Inter), loaded from the internet; the site falls back to system fonts if it is unavailable

## Project Structure

```text
my-portfolio/
├── assets/
│   ├── icons/
│   ├── images/
│   │   ├── favicon.svg
│   │   ├── og-image.png
│   │   └── og-image.svg
│   └── screenshots/
│       └── (8 placeholder project images, .svg)
├── css/
│   └── style.css
├── js/
│   └── script.js
├── index.html
├── README.md
└── .gitignore
```

## How to Run

This is a plain HTML, CSS and JavaScript project. It needs no installation, npm or build step.

1. Open the `my-portfolio` folder in Visual Studio Code.
2. Open `index.html` in your browser by double-clicking it, or right-click it in VS Code and choose "Reveal in File Explorer" / "Reveal in Finder" and open it from there.

Optional: install the **Live Server** extension in VS Code, right-click `index.html` and choose "Open with Live Server" to have the page refresh automatically when you save changes.

## Usage

- Use the navigation bar (or the hamburger menu on phones) to jump to a section.
- Use the sun/moon button in the header to switch between dark and light themes.
- Browse the project cards. The **Live Demo** and **GitHub Code** buttons are placeholders until real links are added in `index.html`.
- Fill in the contact form to see the validation messages. The form does not send a message yet.

## Screenshots

The project cards currently use placeholder images from `assets/screenshots/`. Screenshots of the full website have not been added yet.

<!-- Add a screenshot of the finished website here, for example:
![Portfolio homepage](assets/images/portfolio-screenshot.png)
-->

## Live Demo

Live Demo: https://my-portfolio-zfyd.netlify.app/

## Future Improvements

- Replace the placeholder screenshots with real screenshots of each project
- Add the real live demo and GitHub links for every project
- Connect the contact form to an email service such as Formspree or EmailJS
- Add a real photo or illustration in the hero section
- Add a downloadable resume or CV section once I have one
- Add project filtering (for example, by technology)

## Author

Created by Arshdeep Singh
