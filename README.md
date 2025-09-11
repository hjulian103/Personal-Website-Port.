# Julian's Personal Portfolio Website

A responsive personal portfolio website showcasing web development skills, projects, and personal interests.

## 🌟 Features

- **Responsive Design**: Mobile-friendly layout with modern CSS gradients
- **Interactive Elements**: Hover effects and smooth animations
- **Video Background**: Dynamic galaxy background video
- **Project Showcase**: Featured projects with video previews
- **Personal Touch**: Music preferences and social links

## 🚀 Live Demo

The website is automatically deployed to GitHub Pages at: `https://hjulian103.github.io/Personal-Website-Port.`

## 🛠️ Technologies Used

- HTML5
- CSS3 (with modern gradients and animations)
- Responsive Design
- GitHub Pages for deployment

## 📁 Project Structure

```
├── index.html          # Main HTML file
├── style.css           # Stylesheet with custom gradients
├── *.jpg, *.jpeg      # Profile and album artwork images
├── *.mp4              # Background and project videos
├── *.png              # Technology icons
└── .github/
    └── workflows/
        └── deploy.yml  # GitHub Actions deployment workflow
```

## 🔧 Deployment

This website is set up for automatic deployment using GitHub Actions:

1. **Automatic Deployment**: Every push to the `main` branch triggers automatic deployment to GitHub Pages
2. **GitHub Actions**: Uses the latest GitHub Pages deployment action
3. **Static Site**: No build process required - pure HTML/CSS

### Manual Deployment Setup

If you need to set up deployment manually:

1. Go to your repository Settings
2. Navigate to Pages section
3. Set Source to "Deploy from a branch" 
4. Select `main` branch
5. Click Save

## 🧑‍💻 Local Development

To run the website locally:

```bash
# Clone the repository
git clone https://github.com/hjulian103/Personal-Website-Port..git

# Navigate to the project directory
cd Personal-Website-Port.

# Start a local server (Python 3)
python3 -m http.server 8000

# Or use any other static file server
npx serve .
```

Then open `http://localhost:8000` in your browser.

## 📝 License

© 2025 Julian's Portfolio. All rights reserved.