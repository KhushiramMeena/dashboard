# SaaS Dashboard UI

A modern, responsive SaaS dashboard built with React, TypeScript, and Material-UI, featuring pixel-perfect implementation of the provided designs with smooth animations and microinteractions.

## Features

### Core Functionality
- **Dashboard Overview**: Comprehensive eCommerce metrics with interactive charts
- **Order Management**: Complete order list with filtering, sorting, and pagination
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Theme Toggle**: Light and dark mode support
- **Navigation**: Intuitive sidebar navigation with active state management

### UI/UX Features
- **Pixel-Perfect Design**: Exact implementation of provided Figma designs
- **Smooth Animations**: Framer Motion powered microinteractions
- **Interactive Charts**: Recharts integration for data visualization
- **Hover Effects**: Subtle animations on card hover and button interactions
- **Loading States**: Smooth transitions and loading animations

### Technical Features
- **TypeScript**: Full type safety throughout the application
- **Material-UI**: Modern component library with custom theming
- **React Router**: Client-side routing for seamless navigation
- **Context API**: Theme management and state handling
- **Responsive Grid**: Adaptive layout system for all screen sizes

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **UI Library**: Material-UI (MUI) v5
- **Animations**: Framer Motion
- **Charts**: Recharts
- **Routing**: React Router DOM
- **Styling**: CSS3 with CSS Variables
- **Build Tool**: Create React App

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone 
   cd dashboard-ui
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the application.

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Layout/
│   │   └── Layout.tsx          # Main layout wrapper
│   ├── Sidebar/
│   │   └── Sidebar.tsx         # Navigation sidebar
│   ├── Header/
│   │   └── Header.tsx          # Top navigation bar
│   ├── AnimatedCard.tsx       # Reusable animated card component
│   └── FadeIn.tsx             # Fade-in animation component
├── pages/
│   ├── Dashboard.tsx           # Main eCommerce dashboard
│   └── OrderList.tsx          # Order management page
├── contexts/
│   └── ThemeContext.tsx       # Theme management context
├── App.tsx                    # Main application component
├── App.css                    # Global styles and animations
└── index.tsx                  # Application entry point
```

## 🎨 Design Implementation

### Dashboard Features
- **Metrics Cards**: Customer count, orders, revenue, and growth metrics
- **Interactive Charts**: 
  - Projections vs Actuals bar chart
  - Revenue comparison line chart
  - Sales breakdown pie chart
- **Data Tables**: Top selling products with detailed information

### Order List Features
- **Data Table**: Comprehensive order information with user avatars
- **Filtering**: Search functionality and status-based filtering
- **Sorting**: Ascending/descending order by various columns
- **Pagination**: Configurable rows per page with navigation
- **Selection**: Multi-row selection with checkboxes

### Responsive Design
- **Desktop**: Full sidebar with expanded navigation
- **Tablet**: Collapsible sidebar with optimized spacing
- **Mobile**: Hidden sidebar with hamburger menu toggle

## 🎭 Animations & Microinteractions

### Page Transitions
- **Fade In**: Smooth page load animations with staggered delays
- **Card Animations**: Hover effects with scale and shadow transitions
- **Sidebar**: Smooth slide-in/out animations

### Interactive Elements
- **Button Hover**: Subtle scale and color transitions
- **Card Hover**: Lift effect with enhanced shadows
- **Theme Toggle**: Smooth icon transitions
- **Navigation**: Active state indicators with smooth transitions

## 🌙 Theme System

### Light Theme (Default)
- Clean white backgrounds
- Subtle gray borders and shadows
- High contrast text for readability

### Dark Theme
- Dark backgrounds with proper contrast
- Consistent color scheme throughout
- Preserved accessibility standards

### Theme Persistence
- User preference saved to localStorage
- Automatic theme application on page load
- Smooth transitions between themes

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

## 🔧 Available Scripts

- `npm start`: Start development server
- `npm run build`: Build for production
- `npm test`: Run test suite
- `npm run eject`: Eject from Create React App

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `build`
3. Deploy automatically on every push

### Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build`
4. Deploy



**Built using React, TypeScript, CSS and Material-UI**