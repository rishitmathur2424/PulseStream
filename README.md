  
# 🎵 PulseStream - Live Event Streaming Platform


## 🌟 Features

### Landing Page
- **15+ Interactive Event Cards** with hover animations and video preview effects
- **Advanced Search & Filtering** - Search by event name, filter by trending/upcoming, category filters
- **Responsive Grid Layout** - Adapts beautifully from mobile to desktop
- **Live Event Indicators** - Real-time viewer counts and live badges
- **Dynamic Category Badges** - Color-coded categories (Gaming, Music, Sports, Tech, etc.)
- **Hero Section** - Eye-catching header with pink/purple neon imagery

### Event Detail Page
- **Twitch-Style Layout** - Professional streaming interface
- **Responsive Video Container** - Embedded live streams and event trailers
- **Live Chat UI** - Interactive chat sidebar with messages and emojis
- **Event Information** - Host details, viewer counts, schedules, and descriptions
- **Interactive Actions** - Like, share, follow, and chat toggle functionality
- **Smooth Page Transitions** - Motion animations for seamless navigation

### Design Highlights
- 🎨 **Modern Dark Theme** - Professional aesthetic with `#0a0a0f` backgrounds
- 💜 **Purple Accent Colors** - Vibrant purple/cyan/pink color scheme
- ✨ **Smooth Animations** - Motion/React powered transitions
- 📱 **Fully Responsive** - Mobile-first design approach
- 🚀 **Performance Optimized** - Fast loading and smooth interactions

## 🛠️ Tech Stack

- **React.js** - Component-based UI library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS v4** - Utility-first CSS framework
- **React Router** - Client-side routing and navigation
- **Motion (Framer Motion)** - Animation library
- **Lucide React** - Beautiful icon library
- **Vite** - Fast build tool and dev server

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16 or higher) - [Download here](https://nodejs.org/)
- **npm** or **pnpm** (comes with Node.js)
- **Git** - [Download here](https://git-scm.com/)
- **VS Code** (recommended) - [Download here](https://code.visualstudio.com/)

## 🚀 Getting Started

### 1️⃣ Clone the Repository

Open your terminal and run:

```bash
git clone https://github.com/YOUR_USERNAME/pulsestream.git
cd pulsestream
```

> **Note:** Replace `YOUR_USERNAME` with your actual GitHub username.

### 2️⃣ Open in VS Code

```bash
code .
```

Or manually open VS Code and select **File → Open Folder** → Choose the `pulsestream` folder.

### 3️⃣ Install Dependencies

In the VS Code terminal (`` Ctrl + ` `` or **View → Terminal**), run:

```bash
npm install
```

Or if you prefer `pnpm`:

```bash
pnpm install
```

**⏳ This will take 2-5 minutes** and create a `node_modules` folder (this is normal and required).

### 4️⃣ Start Development Server

```bash
npm run dev
```

Or with `pnpm`:

```bash
pnpm dev
```

### 5️⃣ Open in Browser

The terminal will show:

```
  VITE v5.x.x  ready in XXX ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

**Open your browser** and navigate to: **http://localhost:5173/**

🎉 **You should now see the PulseStream platform running!**

## 📁 Project Structure

```
pulsestream/
├── src/
│   ├── app/
│   │   ├── components/          # Reusable UI components
│   │   │   ├── InteractiveEventCard.tsx
│   │   │   ├── LiveChat.tsx
│   │   │   └── figma/
│   │   │       └── ImageWithFallback.tsx
│   │   ├── data/                # Mock data and constants
│   │   │   └── mockEvents.ts
│   │   ├── pages/               # Page components
│   │   │   ├── LandingPage.tsx  # Main homepage
│   │   │   └── EventPage.tsx    # Event detail page
│   │   ├── App.tsx              # Root component
│   │   └── routes.tsx           # React Router configuration
│   ├── styles/
│   │   ├── theme.css            # Custom theme and tokens
│   │   ├── fonts.css            # Font imports
│   │   └── index.css            # Global styles
│   ├── imports/                 # Imported assets (SVGs, images)
│   └── main.tsx                 # App entry point
├── public/                      # Static assets
├── package.json                 # Dependencies and scripts
├── tsconfig.json                # TypeScript configuration
├── tailwind.config.ts           # Tailwind CSS configuration
├── vite.config.ts               # Vite build configuration
└── README.md                    # You are here!
```


## 🐛 Troubleshooting

### Port Already in Use

If port 5173 is busy:

```bash
npm run dev -- --port 3000
```

### Dependencies Not Installing

Try clearing cache:

```bash
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### Build Errors

Ensure you're using Node.js v16+:

```bash
node --version
```

If not, update Node.js from [nodejs.org](https://nodejs.org/)

## 📝 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint for code quality |

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch: `git checkout -b feature/YourFeature`
3. Make your changes
4. Commit: `git commit -m 'Add some feature'`
5. Push: `git push origin feature/YourFeature`
6. Open a Pull Request


## 📧 Contact

For questions or feedback, please open an issue on GitHub.



⭐ **Star this repo** if you found it helpful!
