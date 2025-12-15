export const projectData = [
  {
    id: 1,
    title: "DevLink",
    shortDesc: "A full-stack AI-powered developer networking platform with real-time communication.",
    detailedDesc:
      "DevLink is a full-stack MERN application designed to help developers grow after connecting. Unlike traditional networking platforms, DevLink combines developer discovery, AI-driven mentorship, and real-time collaboration. Users can swipe developer profiles (similar to Tinder, but for development), match for collaboration, receive personalized AI-guided learning roadmaps, stay updated with skill-based tech news, and communicate instantly through real-time chat.",
    features: [
      "Developer profile discovery with Tinder-style swipe and match system",
      "AI-powered personalized mentor for skill analysis and learning roadmaps",
      "In-app AI assistant for onboarding and platform guidance",
      "Skill-based personalized tech news feed",
      "Real-time one-to-one chat using WebSockets",
      "JWT-based authentication and secure access",
      "Email notifications for connection requests and acceptances"
    ],
    technologies: [
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Redux Toolkit", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
      { name: "Tailwind CSS", icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "WebSockets", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg" }
    ],
    auth: true,
    liveUrl: "https://dev-link-fe.vercel.app/",
    githubUrl: "https://github.com/Jayasuriya-R/dev-link-fe",
    efficiency:
      "Optimized state management with Redux Toolkit, efficient real-time messaging using WebSockets, and scalable MERN architecture ensuring smooth performance and responsive user experience.",
    coverImg:
      "data:image/webp;base64,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"
  },
  {
    id: 2,
    title: "Ping Me (Chat App)",
    shortDesc: "A full-stack real-time chat application built with React, Firebase, and Redux.",
    detailedDesc:
      "Ping Me is a real-time chat application developed with React, Redux, Firebase, Tailwind CSS, and Vite. It allows users to chat instantly with Firebase snapshots, manage contacts by adding or blocking users, and provides smooth UI/UX with tooltips and responsive design. Authentication is handled via Firebase Auth, ensuring secure access.",
    features: [
      "Real-time chat using Firebase Snapshots",
      "User authentication with Firebase Auth",
      "Add and block/unblock user functionality",
      "Profile & info panel with user status",
      "Tooltip-driven micro-interactions",
      "Responsive modern UI with Tailwind CSS"
    ],
    technologies: [
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Redux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
      { name: "Tailwind CSS", icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
      { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "Vite", icon: "https://vitejs.dev/logo.svg" }
    ],
    auth: true,
    liveUrl: "https://chat-app-rho-gold.vercel.app/",
    githubUrl: "https://github.com/Jayasuriya-R/Chat_App",
    efficiency: "Efficient state handling with Redux and seamless real-time updates powered by Firebase.",
    coverImg: "https://www.shutterstock.com/shutterstock/photos/1679858260/display_1500/stock-photo-chat-bot-concept-d-isometric-style-with-mobile-on-blue-background-for-chatting-technology-1679858260.jpg"
  },
  {
    id: 3,
    title: "Netflix-GPT",
    shortDesc: "A React.js clone of Netflix UI with dynamic content and Redux state management.",
    detailedDesc:
      "A front-end clone of the Netflix UI built with React.js. This project features a sleek, responsive design and displays movie data fetched from a public API (TMDB). It includes dynamic banners, category sliders, and routing for details view. Tailwind CSS is used for styling, while Redux manages global state such as watchlists and current selection.",
    features: [
      "Dynamic movie banners and sliders",
      "Responsive design with Tailwind CSS",
      "Routing for detailed movie views",
      "State management with Redux"
    ],
    technologies: [
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Redux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
      { name: "Tailwind CSS", icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" }
    ],
    auth: false,
    liveUrl: "https://netflix-gpt-phi-weld.vercel.app/",
    efficiency: "Uses efficient API calls with lazy loading for optimal performance.",
    coverImg: "https://upload.wikimedia.org/wikipedia/en/3/3c/Netflix_UI_for_Web.png"
  },
  {
    id: 4,
    title: "YouTube Clone",
    shortDesc: "A functional YouTube front-end clone built with React and API integration.",
    detailedDesc:
      "This project replicates the YouTube interface using React. It fetches video data via YouTube's API and allows users to search, browse, and watch videos. The UI is responsive and supports a clean video player and sidebar navigation.",
    features: [
      "Video search and playback",
      "Responsive sidebar navigation",
      "API integration with YouTube Data API",
      "Clean UI with React components"
    ],
    technologies: [
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Redux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
      { name: "Tailwind CSS", icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" }
    ],
    auth: false,
    liveUrl: "https://youtube-clone-sable-three.vercel.app/",
    efficiency: "Optimized API fetching and component re-rendering for smooth user experience.",
    coverImg: "https://i.insider.com/5dc47f123afd37518905aba6?width=700"
  },
  {
    id: 5,
    title: "Swiggy Clone (Food ordering App)",
    shortDesc: "A food ordering app UI clone that replicates Swiggy's user experience.",
    detailedDesc:
      "A front-end clone of the Swiggy app built with React.js featuring restaurant listings, menu browsing, and order placement interfaces. The app uses Context API for state management and styled-components for styling.",
    features: [
      "Restaurant and menu browsing",
      "Cart management with Context API",
      "Responsive mobile-friendly design",
      "Order summary and checkout UI"
    ],
    technologies: [
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Redux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
      { name: "Tailwind CSS", icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" }
    ],
    auth: true,
    liveUrl: "https://food-app-phi-rouge.vercel.app/",
    efficiency: "Efficient state updates and minimal re-renders ensure smooth user interaction.",
    coverImg: "https://res.cloudinary.com/abserve-tech/image/upload/v1745324836/abservetech-next/FoodStar%20Page/foodstar-banner_fww6rm_xi2kse.webp"
  },
  {
    id: 6,
    title: "To-Do List",
    shortDesc: "A simple yet functional To-Do list app to manage daily tasks.",
    detailedDesc:
      "This To-Do List app allows users to add, delete, and mark tasks as complete. It features a clean interface with local storage integration so data persists between sessions.",
    features: [
      "Add, delete, and toggle task completion",
      "Data persistence with local storage",
      "Clean and minimal UI"
    ],
    technologies: [
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" }
    ],
    auth: false,
    liveUrl: "https://mini-todo-app-react.vercel.app/",
    efficiency: "Minimal DOM manipulation and effective use of React state keeps the app performant.",
    coverImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFAH9lWbD-5AqZ085ABNrO1MD0l0LPebHK4A&s"
  },
  {
    id: 7,
    title: "Calculator",
    shortDesc: "A basic calculator app built with React supporting arithmetic operations.",
    detailedDesc:
      "A simple calculator app built with React that supports addition, subtraction, multiplication, and division. The UI is designed with buttons and display screen styled using CSS.",
    features: [
      "Basic arithmetic operations",
      "Clear and backspace functionality",
      "Responsive button layout"
    ],
    technologies: [
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" }
    ],
    auth: false,
    liveUrl: "https://mini-calc-app.vercel.app/",
    efficiency: "Lightweight with instant feedback on user input for smooth calculation.",
    coverImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2wrkJKHTgrNW_0uEf7k4sRTVIzhqZFgnChQ&s"
  },



];

export const certificationsData = [
  {
    id: 1,
    title: "Hacker Rank - ReactJS",
    description: "Certified in React on HackerRank, demonstrating expertise in building component-based UIs, managing state with useState, handling side effects using useEffect, and implementing routing, conditional rendering, and performance optimizations with hooks and memoization.",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/40/HackerRank_Icon-1000px.png",
    link: "https://www.hackerrank.com/certificates/iframe/47ae376e504e"
  },
  {
    id: 2,
    title: "Hacker Rank - JavaScript",
    description: "Achieved JavaScript certification on HackerRank, reflecting strong command over core concepts including DOM manipulation, event handling, ES6+ features (arrow functions, promises), and writing clean, functional code for interactive web applications.",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/40/HackerRank_Icon-1000px.png",
    link: "https://www.hackerrank.com/certificates/iframe/b47fd220ca82"
  },
  {
    id: 3,
    title: "Hacker Rank - Python",
    description: "Earned Python certification on HackerRank, demonstrating hands-on expertise in data structures (lists, dictionaries, sets), control flow, functions and working with libraries such as math for problem-solving.",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/40/HackerRank_Icon-1000px.png",
    link: "https://www.hackerrank.com/certificates/iframe/eedc5b012fdb"
  },
  {
    id: 4,
    title: "Hacker Rank - SQL",
    description: "Completed SQL certification on HackerRank, showcasing proficiency in querying relational databases using SELECT, JOINs, GROUP BY, HAVING, subqueries, and window functions to analyze and manipulate structured data.",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/40/HackerRank_Icon-1000px.png",
    link: "https://www.hackerrank.com/certificates/iframe/48d44d3a7d32"
  },
  {
    id: 5,
    title: "Udemy - ASP.NET",
    description: "Completed the ASP.NET Core MVC certification on Udemy, demonstrating proficiency in building MVC pattern in .NET applications.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHcbInkd7b7boVsHoVaTL6rjbjP9sVYZfg1UaVOfia1SUvISrN2_qq88Wu58p3VCuEoUE&usqp=CAU",
    link: "https://www.udemy.com/certificate/UC-b7059da1-c5c4-4380-8d7d-b9f54454d891/"
  },
]
