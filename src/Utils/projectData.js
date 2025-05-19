export const projectData = [
  {
    id: 1,
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
    id: 2,
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
    coverImg: "https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
  },
  {
    id: 3,
    title: "Swiggy Clone",
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
    coverImg: "https://upload.wikimedia.org/wikipedia/commons/4/49/Swiggy_logo.svg"
  },
  {
    id: 4,
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
    coverImg: "https://cdn-icons-png.flaticon.com/512/3208/3208756.png"
  },
  {
    id: 5,
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
    coverImg: "https://cdn-icons-png.flaticon.com/512/1034/1034002.png"
  }
];
