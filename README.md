# My Frontend Developer Portfolio

A responsive personal portfolio website built with **HTML5, CSS3 and vanilla JavaScript**.
It presents me honestly as a self-learning, aspiring frontend developer and showcases eight practical projects.

## Project structure

```
my-portfolio/
├── index.html          -> the page content (structure)
├── css/style.css       -> all the styling and responsive rules
├── js/script.js        -> menu, theme toggle, animations, form validation
├── assets/
│   ├── images/         -> favicon and social-share image
│   ├── icons/          -> put your own icons here (optional)
│   └── screenshots/    -> project screenshots (currently placeholders)
├── README.md
└── .gitignore
```

## Run it locally

1. Open the `my-portfolio` folder in Visual Studio Code.
2. Double-click `index.html` to open it in your browser, or install the **Live Server** extension and click "Go Live".

## What to replace first

Open `index.html` and use **Ctrl + F** (Find) to locate each placeholder:

| Search for | Replace with |
|---|---|
| `[YOUR NAME]` | Your real name (appears in the title, logo, hero, footer and meta tags) |
| `YOUR-USERNAME` | Your GitHub username (and LinkedIn username in the LinkedIn links) |
| `YOUR-LIVE-DEMO-LINK.example/...` | The real live demo URL of each project |
| `your-email@example.com` | Your real email address |

Until you replace them, clicking a placeholder link shows a small reminder message instead of opening a broken page.

## Changing colors, fonts and images

- **Colors:** edit the variables at the top of `css/style.css` (`--accent`, `--accent-2`, `--bg`, ...).
- **Font:** change the Google Fonts `<link>` in `index.html` and the `--font` variable in `style.css`.
- **Project screenshots:** save your screenshot (PNG or JPG, about 1280x800) in `assets/screenshots/` and change the `src` of that project's `<img>`, e.g. `src="assets/screenshots/my-gym-site.png"`. Update the `alt` text too.
- **Social share image:** replace `assets/images/og-image.png` (recommended 1200x630).
- **Favicon:** replace `assets/images/favicon.svg`.

## Adding a new project

In `index.html`, copy one whole `<article class="project-card reveal"> ... </article>` block inside the projects grid, paste it after the last one, and change the image, title, description, tags and the two links.

## Connecting the contact form

**The form currently does not send emails.** It only checks that the fields are filled in correctly, then shows a message saying nothing was sent. A website running only on GitHub Pages has no server, so you need an email service. Two beginner-friendly options:

**Option A: Formspree**
1. Create a free account at formspree.io and make a new form to get your form URL.
2. In `index.html`, change `<form class="contact-form" id="contact-form" novalidate>` to include `action="YOUR_FORMSPREE_URL" method="POST"`.
3. In `js/script.js`, replace the demo code after the validation check with a `fetch()` call that posts the form data to that URL (Formspree's documentation shows the exact code), and update the success message.

**Option B: EmailJS**
1. Create a free account at emailjs.com and connect your email.
2. Follow their JavaScript guide to add their script and call `emailjs.sendForm(...)` after the validation check in `js/script.js`.

Check each service's current free-plan limits and instructions before relying on them.

## Publish with GitHub Pages

1. Create a free account at github.com and create a new **public** repository (for example `my-portfolio`).
2. Upload your files: with Git installed, run these in the project folder:
   ```
   git init
   git add .
   git commit -m "Add portfolio website"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/my-portfolio.git
   git push -u origin main
   ```
3. On GitHub open the repository, then **Settings -> Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**, select **main** and the **/ (root)** folder, then **Save**.
5. After a minute or two your site is live at `https://YOUR-USERNAME.github.io/my-portfolio/`.

After the site is live, update the Open Graph image to a full URL if you want link previews on social media to work (for example `https://YOUR-USERNAME.github.io/my-portfolio/assets/images/og-image.png`).

## Honest note

This portfolio shows an aspiring developer's personal learning projects. It makes no claims of professional experience, certificates or advanced skill levels, and it should stay that way.
