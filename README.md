# Acil Lastikçi - Emergency Tire Service Website

A responsive multi-language website for an emergency tire service company that provides 24/7 roadside assistance.

## 🚗 Project Overview

This is a modern, responsive website built for an emergency tire service business located in Rize/Ardeşen, Turkey. The website provides information about emergency tire repair and replacement services available 24/7.

## ✨ Features

- **Multi-language Support**: Turkish, English, and Arabic languages with full RTL (Right-to-Left) support for Arabic
- **Responsive Design**: Optimized for all device sizes (mobile, tablet, desktop)
- **Dark/Light Mode**: Toggle between themes with state persistence using localStorage
- **Interactive Image Gallery**: Touch-friendly slider with lightbox functionality
- **Modern UI/UX**: Smooth transitions, animations, and visual feedback
- **Contact Integration**: Direct phone calling functionality
- **Location Map**: Embedded Google Maps for business location
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Accessibility**: Enhanced user experience for all users
- **Performance**: Optimized images and lazy loading

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and modern web standards
- **CSS3**: 
  - CSS Custom Properties (Variables) for theming
  - Flexbox and CSS Grid for layout
  - Smooth animations and transitions
  - Responsive design with media queries
- **JavaScript (ES6+)**:
  - Modular language system
  - Interactive slider functionality
  - Theme switching
  - Intersection Observer API for animations
- **External Libraries**:
  - Google Fonts (Inter)
  - Font Awesome icons
  - Google Maps integration

## 📁 Project Structure

```
├── index.html              # Main HTML file
├── style.css              # Main stylesheet
├── script.js              # Main JavaScript functionality
├── README.md              # Project documentation
├── .gitignore            # Git ignore rules
├── .vscode/              # VS Code configuration
│   └── launch.json
├── images/               # Image assets
│   ├── image_1.jpg
│   ├── image_2.jpg
│   └── ... (13 images total)
└── js/                   # JavaScript modules
    ├── slider.js         # Image slider functionality
    └── languages/        # Language translation files
        ├── tr.js         # Turkish translations
        ├── en.js         # English translations
        └── ar.js         # Arabic translations
```

## 🚀 Getting Started

### Prerequisites

- A modern web browser
- A local web server (optional, for development)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/emergency-tire-service.git
   cd emergency-tire-service
   ```

2. **Open the project**
   - Simply open `index.html` in your web browser, or
   - Use a local development server (recommended)

3. **Using a local server** (optional but recommended)
   ```bash
   # Using Python 3
   python -m http.server 8080
   
   # Using Node.js (with http-server)
   npx http-server
   
   # Using PHP
   php -S localhost:8080
   ```

4. **Access the website**
   - Direct file: Open `index.html` in browser
   - Local server: Navigate to `http://localhost:8080`

## 🌐 Multi-language Support

The website supports three languages:

- **Turkish (tr)**: Default language
- **English (en)**: Full English translation
- **Arabic (ar)**: Full Arabic translation with RTL support

### Adding New Languages

1. Create a new language file in `js/languages/` (e.g., `fr.js`)
2. Follow the existing structure from other language files
3. Add the language option to the HTML select element
4. Update the language initialization in `script.js`

## 🎨 Theming

The website supports both light and dark themes:

- **Light Mode**: Clean, professional appearance
- **Dark Mode**: Eye-friendly dark interface
- **Theme Persistence**: User preference saved in localStorage
- **Smooth Transitions**: Animated theme switching

### Customizing Colors

Modify CSS custom properties in `style.css`:

```css
:root {
    --primary-color: #dc3545;
    --secondary-color: #28a745;
    /* ... other color variables */
}
```

## 📱 Responsive Design

The website is fully responsive with breakpoints:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

### Key responsive features:
- Mobile-first approach
- Touch-friendly interface
- Optimized image sizes
- Adaptive navigation
- Responsive typography

## 🖼️ Image Gallery

Interactive image slider with:

- **Desktop**: 3D carousel effect with preview images
- **Mobile**: Touch-swipe navigation
- **Lightbox**: Full-screen image viewing
- **Keyboard Navigation**: Arrow keys and ESC support
- **Auto-play**: Automatic slide progression (pauses on interaction)

## 📞 Contact Information

- **Phone**: +90 535 927 95 53
- **Location**: Rize/Ardeşen, Turkey
- **Service**: 24/7 Emergency Tire Service

## 🔧 Development

### File Organization

- **HTML**: Semantic structure with i18n attributes
- **CSS**: Modular approach with CSS custom properties
- **JavaScript**: ES6+ with modular language system
- **Images**: Optimized for web with lazy loading

### Browser Support

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

## 📝 License

© 2025 Acil Lastikçi (Emergency Tire Service). All Rights Reserved.

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📸 Screenshots

The website includes a comprehensive image gallery showcasing:
- Tire repair services
- Mobile service vehicles
- Team at work
- Equipment and tools
- Before/after repair examples

## 🔍 SEO Features

- Semantic HTML5 structure
- Meta descriptions and keywords
- Open Graph tags
- Structured data markup
- Fast loading times
- Mobile-friendly design

## 📊 Performance

- Optimized images with lazy loading
- Minimal JavaScript for core functionality
- CSS and JS minification ready
- Responsive images for different screen sizes
- Efficient CSS with custom properties

---

For questions or support, please contact us at the provided phone number or through the website's contact section.