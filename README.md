EcoPulse Kenya 🌱

EcoPulse Kenya is a responsive React application designed to track eco-friendly actions and encourage sustainable habits. Users can add tasks like planting trees, recycling, and conserving water, track progress, earn badges, and view daily eco-tips.

🌟 Features

Track Green Actions: Add, complete, and delete tasks.

Task Filters: View All, Completed, or Pending tasks.

Progress Bar: Visualize percentage of completed tasks.

Persistent Storage: Tasks saved in browser localStorage.

Eco Tips: Daily environmental tips fetched from API.

Dark/Light Mode: Toggle between themes.

Gamification: Earn badges as you complete tasks:

1+ tasks → Eco Starter

5+ tasks → Eco Hero

10+ tasks → Eco Champion

Responsive Design: Works seamlessly on mobile, tablet, and desktop.

Smooth Animations: Task transitions, badge pop-ups, and notifications.

🎨 Screenshots

(Add your screenshots here)

Home Page

Dark Mode

Eco Tips

Badge Notification

🛠️ Technologies Used

Frontend: React.js, JSX, Tailwind CSS

Routing: React Router

State Management: React Hooks (useState, useEffect, useContext)

Persistence: Custom useLocalStorage Hook

Animations: react-transition-group + Tailwind CSS

API: Local API simulation for eco tips

Deployment-ready: Vite.js project

⚡ Setup Instructions

Clone the Repository

git clone <your-repo-url>
cd ecopulse-kenya


Install Dependencies

npm install


Run the Development Server

npm run dev


Open http://localhost:5173
 in your browser.

Build for Production

npm run build


Deploy to Vercel or Netlify

Vercel: vercel CLI or drag-and-drop project

Netlify: Drag dist folder into Netlify dashboard

📁 Project Structure
src/
├── components/       # Reusable UI components (Navbar, Footer, Card, Button, TaskInput)
├── pages/           # Page components (Home, About)
├── hooks/           # Custom React hooks (useLocalStorage)
├── context/         # Theme context provider (ThemeContext)
├── api/             # API integration (fetchEcoTips)
├── utils/           # Utility functions (badge calculation)
└── App.jsx          # Main app component

🌐 Deployment

Deployed URL: [Add your live app link here]

✅ How to Use

Add eco-friendly tasks using the input field.

Mark tasks as complete or delete if needed.

Filter tasks by All, Pending, or Completed.

Track your progress via the progress bar.

Earn badges as you complete milestones.

Read eco-tips to stay informed about sustainability.

Switch between Light and Dark mode anytime.

👩‍💻 Author

Name: Antony Mwandiki

Email: antonymwandiki26@gmail.com

GitHub: https://github.com/MwandikiAntony

📜 License

MIT License © 2025