import { 
    campuslands,
    freelancer,
    hooy,
    meta, 
    shopify, 
    starbucks, 
    tesla, 
    thisdev,
    crmGif,
    facerecogGif
} from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    aws,
    java,
    spring, 
    ai,
    mysql,
    python,
    postgres
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: aws,
        name: "Aws",
        type: "Cloud",
    },
    {
        imageUrl: ai,
        name: "AI",
        type: "AI",
    },
    {
        imageUrl: java,
        name: "Java",
        type: "Back",
    },
    {
        imageUrl: spring,
        name: "SpringBoot",
        type: "back",
    },
    {
        imageUrl: mysql,
        name: "MySql",
        type: "DataBase",
    },
    {
        imageUrl: python,
        name: "python",
        type: "back",
    },
    {
        imageUrl: postgres,
        name: "Postgres",
        type: "Database",
    }
];

export const experiences = [
    {
        title: "Content and user experience management ",
        company_name: "Hooy App",
        icon: hooy,
        iconBg: "#accbe1",
        date: "May 2024  ",
        points: [
            "Image management and integration.",
            "User management, product creation.",
        ],
    },
    {
        title: "Back-end developer",
        company_name: "This.Dev",
        icon: thisdev,
        iconBg: "#fbc3bc",
        date: "Dec 2023 -sep 2024 ",
        points: [
            "I was part of a collaborative initiative with four programmers, where the main objective was to develop projects with a significant business impact.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "As a backend developer, I focused on the maintenance and creation of databases, connection with microservices, deploying the projects effectively and efficiently.",
            "Teamwork was key to the success of these projects, allowing for constant progress and ensuring that each member contributed their strengths."
        ],
    },
    {
        title: "Web Developer",
        company_name: "Campuslands",
        icon: campuslands,
        iconBg: "#b7e4c7",
        date: "Jan 2022 - Jan 2023",
        points: [
            "Create and manage complete web applications with Frontend technologies such as HTML, CSS and JavaScript",
            "Develop projects using Git for version control and agile methodologies such as SCRUM for teamwork.",
            "I developed strong soft skills and proficiency in English, which enabled me to successfully accomplish my tasks.",
            
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "",
        icon: freelancer,
        iconBg: "#a2d2ff",
        date: "Jan 2023 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/osfa25',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/oscar-fabi%C3%A1n-mantilla-ochoa/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'CRM Hooy',
        description: 'Desarrollo de plataforma CRM con funcionalidad de envío masivo de mensajes con Javascript, Java Spring Boot, MySQL y AWS',
        link: '',
        gifUrl: crmGif,
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Facial Recognition',
        description: 'Facial recognition web platform through images powered by AI, Python, AWS and Javascript',
        link: '',
        gifUrl: facerecogGif,
    },
    
];