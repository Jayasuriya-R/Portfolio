export const projectData = [
  {
  id: 1,
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
    { name: "Vite", icon: "https://vitejs.dev/logo.svg" }
  ],
  auth: true,
  liveUrl: "https://chat-app-rho-gold.vercel.app/",
  githubUrl: "https://github.com/Jayasuriya-R/Chat_App",
  efficiency: "Efficient state handling with Redux and seamless real-time updates powered by Firebase.",
  coverImg: "https://plus.unsplash.com/premium_photo-1720032304972-1f1142e73253?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2hhdCUyMGFwcHxlbnwwfHwwfHx8MA%3D%3D"
},
  {
    id: 2,
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
    id: 3,
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
    id: 4,
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
    id: 5,
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
    id: 6,
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
    id:1,
    title: "Hacker Rank - ReactJS",
    description: "Certified in React on HackerRank, demonstrating expertise in building component-based UIs, managing state with useState, handling side effects using useEffect, and implementing routing, conditional rendering, and performance optimizations with hooks and memoization.",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/40/HackerRank_Icon-1000px.png",
    link:"https://www.hackerrank.com/certificates/iframe/47ae376e504e"
  },
  {
    id:2,
    title: "Hacker Rank - JavaScript",
    description: "Achieved JavaScript certification on HackerRank, reflecting strong command over core concepts including DOM manipulation, event handling, ES6+ features (arrow functions, promises), and writing clean, functional code for interactive web applications.",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/40/HackerRank_Icon-1000px.png",
    link:"https://www.hackerrank.com/certificates/iframe/b47fd220ca82"
  },
  {
    id:3,
    title: "Hacker Rank - Python",
    description: "Earned Python certification on HackerRank, demonstrating hands-on expertise in data structures (lists, dictionaries, sets), control flow, functions and working with libraries such as math for problem-solving.",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/40/HackerRank_Icon-1000px.png",
    link:"https://www.hackerrank.com/certificates/iframe/eedc5b012fdb"
  },
  {
    id:4,
    title: "Hacker Rank - SQL",
    description: "Completed SQL certification on HackerRank, showcasing proficiency in querying relational databases using SELECT, JOINs, GROUP BY, HAVING, subqueries, and window functions to analyze and manipulate structured data.",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/40/HackerRank_Icon-1000px.png",
    link:"https://www.hackerrank.com/certificates/iframe/48d44d3a7d32"
  },
  {
    id:5,
    title: "Udemy - ASP.NET",
    description: "Completed the ASP.NET Core MVC certification on Udemy, demonstrating proficiency in building MVC pattern in .NET applications.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHcbInkd7b7boVsHoVaTL6rjbjP9sVYZfg1UaVOfia1SUvISrN2_qq88Wu58p3VCuEoUE&usqp=CAU",
    link:"https://www.udemy.com/certificate/UC-b7059da1-c5c4-4380-8d7d-b9f54454d891/"
  },
]