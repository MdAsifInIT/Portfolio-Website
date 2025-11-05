# Portfolio Customization Guide

This guide explains how to customize your portfolio to make it your own.

## Quick Start: Essential Updates

The main file you'll edit is `/app/frontend/src/data/mock.js`. This contains all your portfolio content.

### 1. Update Personal Information

```javascript
export const personalInfo = {
  name: "Your Full Name",
  title: "Your Professional Title",
  bio: "A brief description about yourself and what you do.",
  email: "your.email@example.com",
  location: "Your City, Country" // optional
};
```

### 2. Update Social Links

```javascript
export const socialLinks = [
  { name: "GitHub", url: "https://github.com/yourusername", icon: "Github" },
  { name: "LinkedIn", url: "https://linkedin.com/in/yourusername", icon: "Linkedin" },
  { name: "Twitter", url: "https://twitter.com/yourusername", icon: "Twitter" },
  // Add or remove social links as needed
];
```

**Available Icons:**
- Github
- Linkedin
- Twitter
- Instagram
- Youtube
- Link (for Linktree or other links)

### 3. Add Your Projects

```javascript
export const projects = [
  {
    id: 1,
    title: "Project Name",
    category: "Apps", // Options: "Apps", "Tools", "Packaging", "Scripts"
    description: "Brief description of what this project does and the problem it solves.",
    techStack: ["React", "Node.js", "MongoDB", "Docker"], // Technologies used
    image: "https://image-url.com/project-screenshot.jpg", // Project screenshot
    liveUrl: "https://your-live-demo.com", // Optional: set to null if no demo
    githubUrl: "https://github.com/yourusername/project", // Optional: set to null if no repo
    featured: true, // Set to true to add "Featured" badge
    details: { // Optional: for future project detail pages
      problem: "The problem this project solves",
      role: "Your role in the project",
      features: ["Feature 1", "Feature 2", "Feature 3"],
      outcomes: "Results achieved"
    }
  },
  // Add more projects...
];
```

**Tips for Projects:**
- Use high-quality screenshots (recommended size: 800x600px)
- Keep descriptions concise (1-2 sentences)
- List 4-5 key technologies
- Mark your best work as `featured: true`

### 4. Showcase Open Source Work

```javascript
export const openSourceRepos = [
  {
    id: 1,
    name: "repository-name",
    description: "What this repository does",
    language: "JavaScript", // Programming language
    stars: 1200, // GitHub stars count
    forks: 45, // GitHub forks count
    topics: ["react", "nodejs", "open-source"], // Repository topics/tags
    lastUpdated: "2024-01-20", // Last update date (YYYY-MM-DD)
    url: "https://github.com/yourusername/repo"
  },
  // Add more repositories...
];
```

**Language Options:** JavaScript, TypeScript, Python, Go, Rust, Java, Shell, Markdown, etc.

### 5. List Your Skills

```javascript
export const skills = {
  "Category Name 1": [
    "Skill 1",
    "Skill 2",
    "Skill 3"
  ],
  "Category Name 2": [
    "Skill 4",
    "Skill 5"
  ],
  // Add more categories...
};
```

**Example Categories:**
- "Frontend Development"
- "Backend Development"
- "DevOps & Cloud"
- "Databases"
- "Tools & Frameworks"

### 6. Add Experience Timeline

```javascript
export const timeline = [
  {
    year: "2023-Present",
    title: "Job Title",
    company: "Company Name",
    description: "Brief description of your role and achievements."
  },
  // Add more timeline entries (work experience or education)...
];
```

**Tips:**
- List in reverse chronological order (most recent first)
- Include both work experience and education
- Keep descriptions to 1-2 sentences

## Image Guidelines

### Project Screenshots

**Recommended Sources:**
1. **Your own projects**: Use actual screenshots
2. **Unsplash**: Free high-quality images
   - [unsplash.com](https://unsplash.com)
   - Search terms: "coding", "laptop code", "developer workspace", "terminal"

**Image URL Format:**
```
https://images.unsplash.com/photo-[id]?w=800&h=600&fit=crop
```

**Best Practices:**
- Use consistent aspect ratios (16:9 or 4:3)
- Optimize images for web (800x600px is sufficient)
- Ensure images are relevant to your project
- Use high contrast images for better text overlay

### Finding Good Images

1. **Unsplash** (free, no attribution required)
   - Technology: https://unsplash.com/s/photos/coding
   - UI/UX: https://unsplash.com/s/photos/design
   - Tools: https://unsplash.com/s/photos/developer-tools

2. **Pexels** (free, no attribution required)
   - https://pexels.com

3. **Your actual screenshots**
   - Best option for authenticity
   - Use browser dev tools to take clean screenshots
   - Tools: Chrome DevTools, Firefox Screenshot, Awesome Screenshot extension

## Color Customization

The default color scheme uses blue accents. To change:

### Primary Color

Find and replace these classes in component files:

**Blue (Current):**
- `bg-blue-600` → Background
- `text-blue-600` → Text
- `border-blue-600` → Borders
- `hover:bg-blue-700` → Hover states

**To change to another color**, replace `blue` with:
- `purple`, `indigo`, `green`, `red`, `pink`, `orange`, `teal`, `cyan`

**Example:** Change from blue to purple:
1. Open components: `Hero.jsx`, `Header.jsx`, `Projects.jsx`, `About.jsx`
2. Find: `bg-blue-600`
3. Replace with: `bg-purple-600`
4. Repeat for all blue classes

### Gradient Colors

The hero section has a gradient. To customize:

Open `/app/frontend/src/components/Hero.jsx`:

```javascript
// Find this line:
className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50"

// Change colors:
bg-gradient-to-br from-gray-50 via-white to-purple-50
// or
bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50
```

## Typography

The portfolio uses system fonts. To change:

### Font Family

1. Import Google Fonts in `/app/frontend/public/index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
```

2. Update Tailwind config `/app/frontend/tailwind.config.js`:

```javascript
theme: {
  extend: {
    fontFamily: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
    },
  },
},
```

**Recommended Font Combinations:**
- **Modern**: Inter + Manrope
- **Professional**: IBM Plex Sans + IBM Plex Mono
- **Elegant**: Lora + Open Sans
- **Bold**: Montserrat + Raleway

## Layout Adjustments

### Changing Section Order

Edit `/app/frontend/src/App.js`:

```javascript
<Hero onContactClick={() => setIsContactModalOpen(true)} />
<SocialBar />
<Projects />      // ← Swap these
<OpenSource />    // ← sections
<About />
<Footer />
```

### Hiding Sections

Comment out sections you don't need:

```javascript
{/* <SocialBar /> */}  // This section won't show
```

### Adding Sections

1. Create a new component in `/app/frontend/src/components/`
2. Import and add to App.js
3. Add content to mock.js if needed

## Contact Form

The contact modal uses `mailto:` by default. The form opens the user's email client.

### Using a Contact Form Service

To use a service like Formspree or Netlify Forms:

1. Sign up for [Formspree](https://formspree.io) or similar
2. Get your form endpoint
3. Update `/app/frontend/src/components/ContactModal.jsx`:

```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  
  if (validateForm()) {
    // Replace with your Formspree endpoint
    const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    
    if (response.ok) {
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
      onClose();
    }
  }
};
```

## Adding Analytics

### Google Analytics

1. Get your Google Analytics tracking ID
2. Add to `/app/frontend/public/index.html`:

```html
<head>
  <!-- Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-YOUR-ID"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-YOUR-ID');
  </script>
</head>
```

## SEO Optimization

### Update Meta Tags

Edit `/app/frontend/public/index.html`:

```html
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="theme-color" content="#000000" />
  
  <!-- Update these -->
  <meta name="description" content="Your Name - Full-Stack Developer & Open Source Enthusiast. Portfolio showcasing projects and experience." />
  <meta name="author" content="Your Name" />
  <meta name="keywords" content="developer, portfolio, full-stack, react, nodejs, your-name" />
  
  <!-- Open Graph / Social Media -->
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Your Name - Developer Portfolio" />
  <meta property="og:description" content="Full-Stack Developer & Open Source Enthusiast" />
  <meta property="og:image" content="https://your-site.com/preview-image.jpg" />
  
  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:creator" content="@yourusername" />
  
  <title>Your Name - Developer Portfolio</title>
</head>
```

### Add Favicon

1. Generate favicons at [favicon.io](https://favicon.io)
2. Download and place in `/app/frontend/public/`
3. Update references in `index.html`

## Performance Tips

1. **Optimize Images**: Use appropriate sizes (800x600 for projects)
2. **Lazy Loading**: Already implemented with IntersectionObserver
3. **Minimize Dependencies**: Remove unused packages
4. **Build Optimization**: Production build is automatically optimized

## Testing Your Changes

After making changes:

```bash
cd /app/frontend
yarn start
```

View at `http://localhost:3000` and test:
- ✓ All sections load correctly
- ✓ Links work and open in new tabs
- ✓ Contact form validates properly
- ✓ Images load without errors
- ✓ Responsive design on mobile (use browser dev tools)

## Common Customizations

### Remove Social Bar

Comment out in `/app/frontend/src/App.js`:
```javascript
{/* <SocialBar /> */}
```

### Change Button Text

In `/app/frontend/src/components/Hero.jsx`:
```javascript
<button>View My Work</button>  // Instead of "View Projects"
<button>Let's Talk</button>     // Instead of "Contact Me"
```

### Adjust Animation Speed

In `/app/frontend/src/App.css`:
```css
.animate-blob {
  animation: blob 7s infinite;  /* Change 7s to adjust speed */
}
```

## Need Help?

- Check browser console for errors (F12)
- Ensure all URLs are correct and accessible
- Verify image links are working
- Test in multiple browsers

---

Happy customizing! 🎨
