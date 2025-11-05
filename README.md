# Developer Portfolio

A fast, responsive, and modern developer portfolio built with React, featuring smooth animations and a clean design.

## ✨ Features

- **Animated Hero Section** - Eye-catching introduction with smooth text reveals
- **Filterable Projects Gallery** - Showcase your work with category filters
- **Open Source Contributions** - Display your GitHub repositories with stats
- **Timeline About Section** - Professional experience and education timeline
- **Contact Modal** - Validated contact form with mailto integration
- **Floating Contact Button** - Easy access to get in touch
- **Fully Responsive** - Looks great on all devices
- **Smooth Animations** - 60fps animations with reduced-motion support
- **SEO Friendly** - Semantic HTML and optimized structure

## 🚀 Quick Start

### Local Development

1. Clone the repository
```bash
git clone <your-repo-url>
cd <repo-name>
```

2. Install dependencies
```bash
cd frontend
yarn install
```

3. Start the development server
```bash
yarn start
```

The site will be available at `http://localhost:3000`

## 📝 Customization

All portfolio content is managed through `/frontend/src/data/mock.js`. Edit this file to customize:

- **Personal Information**: Name, title, bio, email, location
- **Social Links**: GitHub, LinkedIn, Twitter, Instagram, YouTube, Linktree
- **Projects**: Add/edit your projects with images, descriptions, tech stacks, and links
- **Open Source Repos**: Showcase your GitHub repositories
- **Skills**: Organize your technical skills by category
- **Timeline**: Add your work experience and education
- **Contributions**: Highlight your open source contributions

### Example: Adding a New Project

```javascript
{
  id: 7,
  title: "Your Project Name",
  category: "Apps", // Apps, Tools, Packaging, or Scripts
  description: "Brief description of your project",
  techStack: ["React", "Node.js", "MongoDB"],
  image: "https://your-image-url.com/image.jpg",
  liveUrl: "https://your-live-demo.com",
  githubUrl: "https://github.com/yourusername/project",
  featured: true
}
```

## 🌐 Deployment to GitHub Pages

This portfolio is configured for automatic deployment to GitHub Pages.

### Setup Instructions

1. **Update package.json homepage**
   
   In `/frontend/package.json`, set the homepage field:
   ```json
   "homepage": "https://yourusername.github.io/repository-name"
   ```

2. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

3. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under "Build and deployment":
     - Source: **GitHub Actions**
   - The workflow will automatically deploy your site

4. **Access Your Site**
   
   Your portfolio will be live at: `https://yourusername.github.io/repository-name`

### Manual Deployment

If you prefer manual deployment:

```bash
cd frontend
yarn build
```

Then deploy the `build` folder to your hosting provider.

## 🎨 Color Customization

The portfolio uses a blue accent color scheme. To change colors, edit the Tailwind classes in the component files:

- Primary color: `bg-blue-600`, `text-blue-600`, `border-blue-600`
- Hover states: `hover:bg-blue-700`, `hover:text-blue-600`

Common files to edit:
- `/frontend/src/components/Hero.jsx`
- `/frontend/src/components/Projects.jsx`
- `/frontend/src/components/Header.jsx`

## 📦 Tech Stack

- **React** - UI library
- **React Router** - Navigation
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **Axios** - HTTP client (for future API integration)

## 🔧 Available Scripts

In the `frontend` directory:

- `yarn start` - Start development server
- `yarn build` - Build for production
- `yarn test` - Run tests

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

MIT License - feel free to use this for your own portfolio!

## 🤝 Contributing

Feel free to submit issues and pull requests!

---

Built with ❤️ and React