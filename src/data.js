import html5Img from './assets/images/html5.svg';
import css3Img from './assets/images/css3.svg';
import javascriptImg from './assets/images/javascript.svg';
import reactImg from './assets/images/react.svg';
import reduxImg from './assets/images/redux.svg';
import githubImg from './assets/images/github.svg';
import javaImg from './assets/images/java.svg';
import sql from './assets/images/sql.svg';
import blogWebsiteProject from './assets/images/blogWebsiteProject.png';
import courseCatalogProject from './assets/images/courseCatalogProject.png';
import weatherAppProject from './assets/images/weatherAppProject.png';
import coreJavaCert from './assets/certificates/coreJavaCert.pdf';
import cLangCert from './assets/certificates/cLangCert.pdf';    


const data = {
    reqiredLinks: {
        github: "https://github.com/Rishikeshh08",
        linkedin: "https://www.linkedin.com/in/rishikeshh4/",
    },
    intro : {
        Description: "Aspiring Full-Stack Developer passionate about front-end development. I craft responsive, user-friendly websites using React, JavaScript, HTML, and CSS, with seamless API integration and efficient state management.",
        Heading: "Hi all, I'm Rishikesh",
    },
    skills: {
        Heading: "What I Do",
        Description: "Crazy Developer who wants to explore every tech stack",
        skillIcons: [
            {
                id: 1,
                image: javaImg,
                name: "Java",
            },
            {
                id: 2,
                image: html5Img,
                name: "HTML5",
            }, 
            {
                id: 3,
                image: css3Img,
                name: "CSS3",
            },
            {
                id: 4,
                image: javascriptImg,
                name: "JavaScript",
            },
            {
                id: 5,
                image: reactImg,
                name: "React",
            },
            {
                id: 6,
                image: reduxImg,
                name: "Redux",
            },
            {
                id: 7,
                image: githubImg,
                name: "GitHub",
            },
            {
                id: 8,
                image: sql,
                name: "SQL",
            }
        ],
        points: [
            {
                pointno: 1,
                text: "Building responsive, multi-page interfaces using React.js, HTML, CSS, and JavaScript.",
            },
            {
                pointno: 2,
                text: "Efficient handling of application state with Context API and Redux, integrating real-time APIs.",
            },
            {
                pointno: 3,
                text: "Writing maintainable code and using Git/GitHub for collaborative development and version tracking.",
            }
        ],
    },
    projects: [
        {
            id: 1,
            name: "Blog Website",
            description: "React-powered blog with multi-page routing, dynamic content from APIs, and state management using Context API.",
            image: blogWebsiteProject,
            link: "https://rishikeshh08.github.io/Blog-Website/"
        },
        {
            id: 2,
            name: "Course Catalogue Web App",
            description: "Interactive React web app featuring course catalogs with filters, wishlist functionality, and Redux-managed user preferences.",
            image: courseCatalogProject,
            link: "https://rishikeshh08.github.io/Courses-Catalog/"
        },
        {
            id: 3,
            name: "Weather App",
            description: "Real-time weather dashboard using OpenWeather and Geolocation APIs with fast, responsive design.",
            image: weatherAppProject,
            link: "https://rishikeshh08.github.io/Weather-App/"
        }
    ],
    certificates: [
        {
            id: 1, 
            name: "Core Java",
            org: "SAI COMPUSYS PRIVATE LIMITED",
            pdf: coreJavaCert
        },
        {
            id: 2, 
            name: "C Language",
            org: "SAI COMPUSYS PRIVATE LIMITED",
            pdf: cLangCert,
        }
    ],
    contact: {
        Heading: "Get In Touch",
        Description: "I am always open to discussing new projects, creative ideas, or opportunities to be part of your vision.",
    }
}
export default data;