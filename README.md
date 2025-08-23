# Krishna's Portfolio

A modern, interactive portfolio website built with React, featuring 3D animations, parallax backgrounds, and responsive design.

## 🚀 Features

- **3D Interactive Astronaut Model** - Three.js powered 3D spaceman with orbit controls
- **Parallax Background Effects** - Multi-layered mountain and sky backgrounds
- **Responsive Design** - Optimized for both desktop and mobile devices
- **Smooth Animations** - Framer Motion powered text and component animations
- **Modern UI** - Clean design with Tailwind CSS
- **Interactive Elements** - Custom cursor effects and hover animations

## 🛠️ Tech Stack

- **Frontend Framework**: React 19
- **Build Tool**: Vite
- **Styling**: Tailwind CSS 4
- **3D Graphics**: Three.js, React Three Fiber, React Three Drei
- **Animations**: Framer Motion
- **Fonts**: Google Fonts (Funnel Display)

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd PortFolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🏗️ Project Structure

```
PortFolio/
├── src/
│   ├── sections/
│   │   ├── Hero.jsx          # Main hero section with 3D model
│   │   └── Navbar.jsx        # Navigation component
│   ├── components/
│   │   ├── Astronaut.jsx     # 3D astronaut model component
│   │   ├── HeroText.jsx      # Animated hero text
│   │   ├── ParallaxBackground.jsx # Parallax background layers
│   │   ├── FlipWords.jsx     # Text animation component
│   │   └── CursorBall.jsx    # Custom cursor effect
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # App entry point
│   └── index.css            # Global styles
├── public/
│   ├── assets/              # Images and static assets
│   └── models/              # 3D model files (.glb)
└── package.json
```

## 🎨 Key Components

### Hero Section
- Features a full-screen layout with 3D astronaut model
- Responsive design that adapts to mobile devices
- Parallax background with mountain layers
- Animated text with flip words effect

### 3D Astronaut
- Interactive 3D model using Three.js
- Orbit controls for user interaction
- Mobile-optimized scaling and positioning
- Smooth animations and lighting

### Parallax Background
- Multi-layered background images
- Mountain ranges and sky elements
- Depth effect through z-index layering

## 📱 Mobile Responsiveness

The portfolio is fully responsive with:
- Adaptive 3D model scaling
- Mobile-optimized camera positioning
- Touch-friendly interactions
- Performance optimizations for mobile devices

## 🚀 Build & Deployment

Build for production:
```bash
npm run build
```

Preview production build:
```bash
npm run preview
```

## 🎯 Performance Features

- **Code Splitting**: Components loaded on demand
- **Asset Optimization**: Optimized images and 3D models
- **Mobile Performance**: Reduced animations and effects on mobile
- **Lazy Loading**: 3D models loaded with Suspense

## 🔧 Customization

### Adding New 3D Models
1. Place your `.glb` file in `/public/models/`
2. Update the model path in `components/Astronaut.jsx`
3. Adjust scale and position as needed

### Styling
- Modify Tailwind classes in components
- Update global styles in `src/index.css`
- Customize color scheme in `tailwind.config.js`

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this project and submit pull requests for any improvements.

---

Built with ❤️ by Krishna
