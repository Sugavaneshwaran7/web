import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "SpringBoot",
    icon: backend,
  },
  {
    title: "UI/UX Design",
    icon: mobile,
  },
  {
    title: "HTML & CSS",
    icon: web,
  },
  {
    title: "Docker",
    icon: backend,
  },
  {
    title: "Operating System",
    icon: mobile,
  },
  {
    title: "MySQL",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  
  {
    name: "React JS",
    icon: reactjs,
  },
  ,
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "SpringBoot",
    icon: mobile,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "MySQL",
    icon: mobile,
  },
];

const experiences = [
  {
    title: "IOT Implant Training",
    company_name: "NXTLOGIC",
    icon: web,
    iconBg: "#383E56",
    date: "Nov 2024 - Nov 2024",
    points: [
      "IoT Fundamentals & Protocols: Gained knowledge of IoT architecture, MQTT/HTTP protocols, and real-time communication systems.",
"Hardware Proficiency: Hands-on experience with Arduino, Raspberry Pi, and integration of sensors (temperature, humidity, etc.).",
"Programming & Development: Acquired skills in Python, C/C++ for embedded systems and IoT application development.",
"Project Implementation: Developed IoT-based projects like Smart Home Automation and Environmental Monitoring Systems.",
    ],
  },
  {
    title: "Research and Development",
    company_name: "Skin Disease Prediction Using Machine Learning and Deep Learning",
    icon: backend,
    iconBg: "#383E56",
    date: "Oct 2024 - Present",
    points: [
      "Advanced ML/DL Models: Built Convolutional Neural Networks (CNNs) and Transfer Learning models to classify skin diseases with high accuracy.",
      "Real-world Impact: This project lays the groundwork for potential deployment as a clinical decision support tool, promoting early diagnosis and timely treatment.",  ,
    ],
  },
  {
    title: "UI In Figma",
    company_name: "WHATSAPP CLONE & CARHOUSE - USER INTERFACE DESIGN",
    icon: mobile,
    iconBg: "#383E56",
    date: "Sep 2024 - Oct 2024",
    points: [
      "Created a detailed and user-friendly prototype with a focus on intuitive navigation and responsiveness.",
      "Developed smooth and engaging animations using Figma’s animation tools to bring the prototype to life.",
      "Leveraged component-based design principles to streamline the design process and facilitate future updates.",
      "Technologies Used: Figma, Animation Tools",
    ],
  },
  {
    title: "SpringBoot Starter",
    company_name: " ORPHANAGE MANAGEMENT SYSTEM",
    icon: backend,
    iconBg: "#E6DEDD",
    date: "Sep 2024 - Present",
    points: [
      "Developing Springboot application on Orphanage Management System and learned the concepts of Spring,Springboot,H2 Database.",
      "I developing a secure authentication system to protect sensitive information, ensuring only authorized users can access critical data.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "The project is designed with scalability in mind, paving the way for future enhancements such as online donation integration and an analytics dashboard.",
    ],
  },
  {
    title: "MySQL Database",
    company_name: "SCHOOL MANAGEMENT SYSTEM",
    icon: backend,
    iconBg: "#E6DEDD",
    date: "Jun 2024 - Sept 2024",
    points: [
      "Database Design & Normalization: Designed and implemented a well-structured relational database with optimized table relationships and normalization.",
"SQL Query Proficiency: Developed complex SQL queries for data retrieval, aggregation, and reporting (e.g., student records, attendance, and fee reports).",
"Data Integrity & Security: Ensured data consistency, integrity, and access control using constraints, keys (Primary/Foreign), and user privileges.",
"Automation & Report Generation: Automated key processes like attendance tracking, grade management, and fee tracking with real-time reporting.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Skin Disease Prediction Using Machine Learning and Deep Learning",
    description:
      "Advanced ML/DL Models: Built Convolutional Neural Networks (CNNs) and Transfer Learning models to classify skin diseases with high accuracy.Real-world Impact: This project lays the groundwork for potential deployment as a clinical decision support tool, promoting early diagnosis and timely treatment.",
    tags: [
      {
        name: "research paper",
        color: "blue-text-gradient",
      },
      {
        name: "Deep Learning",
        color: "green-text-gradient",
      },
      {
        name: "Machine Learning",
        color: "pink-text-gradient",
      },
    ],
    
  },
  {
    name: "School Management System",
    description:
    "Database Design & Querying: Designed relational databases and optimized SQL queries for student records, attendance, and fee management.Data Integrity & Automation: Ensured data consistency, security, and automated processes like attendance tracking and report generation",
    tags: [
      {
        name: "PHP",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "HTML",
        color: "pink-text-gradient",
      },
    ],
    image: mobile,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
