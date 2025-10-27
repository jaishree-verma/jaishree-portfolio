// ProjectsData.js
// Define media types
export const MEDIA_TYPES = {
  IMAGE: 'image',
  VIDEO: 'video',
  PDF: 'pdf'
};

// Define project tags for filtering
export const TAGS = [
  'All',
  'Full Stack Software Development',
  // 'Hardware Projects',
  // 'Machine Learning',
  // 'Robotics',
  'Engineering',
  'Design',
  'AI',
  // 'Hackathon',
  // 'Education',
  // 'Physics',
  // 'Transportation',
  // 'Research'
];

// Sample projects array - fully updated with media descriptions
export const projects = [
  // Go Ticket
  {
    id: 1,
    title: 'Go Ticket',
    brief: 'Go Ticket is a full-stack MERN application designed to revolutionize bus travel planning through a sleek, interactive interface and AI-driven automation.',
    tags: ['Web Development', 'AI', '3D Graphics', 'Full Stack', 'MERN'],
    skills: [
      'React',
      'Node.js',
      'MongoDB',
      'Express.js',
      'Rasa AI',
      'RESTful APIs'
    ],
    thumbnail: '/Goticket/thumbnail.jpg',
    startDate: '2025-07',
    endDate: 'Ongoing',
    media: [
      {
        type: MEDIA_TYPES.IMAGE,
        url: '/Goticket/1.jpg',
        caption: 'Privacy based dashboard',
        description: 'The main dashboard features a sleek, 3D-inspired interface where users can explore available buses, view seat layouts, and interact with Tixie—the AI chatbot. This conversational assistant streamlines the booking flow, allowing users to complete tasks without navigating multiple pages.'
      },
      {
        type: MEDIA_TYPES.IMAGE,
        url: '/Goticket/2.jpg',
        caption: 'AI based assistant chatbot',
        description: 'Tixie is an intelligent, Rasa-powered chatbot integrated into the Go Ticket platform to simplify and personalize the bus booking experience. Designed to mimic natural conversation. Built with Rasa NLU, custom intents, and MongoDB logging, Tixie transforms traditional booking into a conversational journey - making travel planning intuitive, fast, and user - friendly.'
      },
      {
        type: MEDIA_TYPES.IMAGE,
        url: '/Goticket/3.jpg',
        caption: 'Number of avaliable buses',
        description: 'The Available Buses page in Go Ticket offers a visually rich, intuitive interface that helps users explore travel options with ease. This page blends clarity, responsiveness, and cinematic UI to make bus selection feel effortless and enjoyable.'
      },
      {
        type: MEDIA_TYPES.IMAGE,
        url: '/Goticket/4.jpg',
        caption: 'Authorised Signin Page',
        description: 'The Sign-In Page in Go Ticket is designed to offer users a seamless and secure entry point into their personalized travel dashboard.'
      },
      // {
      //   type: MEDIA_TYPES.VIDEO,
      //   youtubeId: 'IiKA0Ij20ZM',
      //   caption: 'LureLore Demo Video',
      //   description: 'Quick project demonstration video scrapped together during the last minutes of the hackathon showcasing the core features and functionality of LureLore. Because of this video we nearly missed the deadline!'
      // },
      // {
      //   type: MEDIA_TYPES.VIDEO,
      //   youtubeId: 'I5dP9mbnx4M',
      //   caption: 'Winning Presentation at Hack the North',
      //   description: 'Live recording of our first-place winning presentation in front of 1000+ attendees at Hack the North, demonstrating the complete platform and its impact.'
      // }
    ],
    links: {
      github: 'https://github.com/jaishree-verma/Go-Ticket',
      // live: 'https://devpost.com/software/lurelore'
    }
  },


  // College Survey
  {
    id: 2,
    title: 'College_Survey',
    brief: 'College Survey is a full-stack MERN application powered by an intelligent Rasa chatbot and Hugging Face NLP. Designed for 250+ Engineering Science students, it helps them explore, compare, and visualize major preferences through natural conversation. With over 95% class participation and 1000+ unique visits, it delivers personalized insights at scale.-stack MERN application enabling 250+ Engineering Science students to track and visualize major preferences, achieving 95% class participation with 1000+ unique visits',
    tags: ['Web Development', 'Full Stack','Mern','Rasa Bot'],
    skills: [
      'React',
      'MongoDB',
      'Express.js',
      'Node.js',
      'RESTful APIs',
      'Frontend Development'
    ],      
    thumbnail: '/college_survey/thumbnail.png',
    startDate: '2024-10',
    endDate: '2024-12',
    media: [
      {
        type: MEDIA_TYPES.IMAGE,
        url: '/college_survey/1.png',
        caption: 'Landing Page',
        description: 'The landing page offers a clean, welcoming interface where students begin their journey with the College Survey chatbot. Designed with React and Tailwind CSS.'
      },
      {
        type: MEDIA_TYPES.IMAGE,
        url: '/college_survey/2.png',
        caption: 'AI chatbot ',
        description:'The College Survey chatbot is a conversational assistant built with Rasa and enhanced by Hugging Face NLP models to deliver intelligent, context-aware responses. It guides students through questions about college life - like hostel facilities, placement records, branch preferences, and scholarships - using natural language.'
      },
      {
        type: MEDIA_TYPES.IMAGE,
        url: '/college_survey/3.png',
        caption: 'About Page',
        description: 'The About Page introduces users to the purpose and impact of the College Survey platform. It highlights how the AI-powered chatbot helps students make informed decisions about their academic paths by offering personalized insights into branch preferences, hostel facilities, placement records, and more.'
      }
    ],
    links: {
      github: 'https://github.com/jaishree-verma/College_Survey',
      // live: 'https://2t7-major-survey.vercel.app/results'
    },
  },
    
  

  //Aesthetic Stopwatch
  {
    id: 3,
    title: 'Customizable, Aesthetic Stopwatch',
    brief: 'My first ever JS Project: a web-based customizable stopwatch.',
    tags: ['Web Dev', 'Design'],
    skills: ['HTML', 'CSS', 'Vanilla JavaScript', 'particles.js', 'FancyBox'],
    thumbnail: '/aesthetic_stopwatch/1.png',
    startDate: '2025-09',
    endDate: '2025-10',
    media: [
      {
        type: MEDIA_TYPES.IMAGE,
        url: '/aesthetic_stopwatch/1.png',
        caption: 'Aesthetic Stopwatch Interface on Laptop',
        description: 'This stop watch project was my first ever web development project, and uses Vanilla J.S, & CSS.'
      },
      {
        type: MEDIA_TYPES.IMAGE,
        url: '/aesthetic_stopwatch/2.png',
        caption: 'Stopwatch on Laptop Screen',
        description: 'Image of the Aesthetic Stopwatch running on a an ipad..'
      }
    ],
    links: {
      github: 'https://github.com/jaishree-verma/aesthetic_stopwatch',
      live: 'https://aesthetic-stopwatch-860vsy99i-jaishreevermawork-9576s-projects.vercel.app'
    }
  },

  


];
