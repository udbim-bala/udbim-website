// Images
import TwoD from '../assets/Images/Course1.jpg';
import ThreeD from '../assets/Images/Course2.jpg';
import Structural_Detailing from '../assets/Images/Course3.jpg';
import Estimation from '../assets/Images/Course4.png';
import Tekla from '../assets/Images/Course5.webp'
import CS1 from '../assets/Images/CS1.jpg';
import CS2 from '../assets/Images/CS2.jpg';
import CS3 from '../assets/Images/CS3.JPG';
import CS4 from '../assets/Images/CS4.jpg';
import CS5 from '../assets/Images/CS5.jpg';
import CS6 from '../assets/Images/CS6.jpg';

import PK1 from '../assets/Images/package1.avif';
import PK2 from '../assets/Images/package2.avif';

// Programs Array
export const programs = [
  {
    id: 1,
    title: "2D Rebar Detailing",
    category: "courses",
    image: TwoD,
    shortDesc: "Step-by-step 2D Rebar Detailing with hands-on training, online & offline.",
    longDesc:
      "Learn to prepare and interpret reinforcement drawings for civil engineering projects. Covers bar bending schedules, drawing standards, and software tools. Suitable for fresh graduates, diploma holders, and professionals upskilling.",
    price: "₹22,500 + 18% GST (Total: ₹26,550)",
    duration: "120 Hours (Approx.)",
    batchOptions: ["Weekdays", "Weekends"],
    trainingMode: ["Live Online", "Offline (Classroom)"],
    careerPaths: [
      "Rebar Detailer (Civil Engineering firms)",
      "Structural Draftsman (Infrastructure projects)",
      "CAD Technician – Structural",
      "Site Draftsman (with rebar knowledge)",
      "Rebar Detailer for international EPC firms",
      "Structural Technician (Construction Companies abroad)",
      "Project Coordinator – Reinforcement Drawings (Middle East, USA, Europe)",
      "Remote Drafting Consultant (Freelance or Outsourced Projects)",
    ],
    CourseModules: [
      "Introduction to Rebar Detailing",
      "2D Drafting Basics",
      "Structural Interpretation",
      "Rebar Placement Drawings",
      "Bar Bending Schedules (BBS)",
      "Standards and Best Practices",
      "Practical Exercises",
    ],
    link: "https://forms.gle/pM8kmnrQUxqEXtHN7",
  },
  {
    id: 2,
    title: "3D Rebar Detailing – BIM (Using Revit)",
    category: "courses",
    image: ThreeD,
    shortDesc:
      "Master 3D rebar detailing using Autodesk Revit in a BIM environment. For those with prior 2D rebar experience.",
    longDesc:
      "The 3D Rebar Detailing – BIM course offers specialized training in Building Information Modeling (BIM) with a focus on 3D reinforcement detailing using Autodesk Revit. Designed exclusively for individuals who already possess a working knowledge of 2D rebar detailing, this program takes your skills to the next level by integrating them with modern BIM workflows.",
    price: "₹17,000 + 18% GST (Total: ₹20,060)",
    duration: "40 Hours (Approx.)",
    batchOptions: ["Weekends Only"],
    trainingMode: ["Live Online", "Offline (Classroom)"],
    softwareUsed: ["Autodesk Revit"],
    eligibility: "Only for individuals with prior 2D rebar detailing experience. Foundational rebar knowledge is mandatory.",
    careerPaths: [
      "BIM Rebar Detailer (AEC and Infrastructure firms)",
      "Revit Technician – Structures",
      "BIM Modeler (MEGA Infra Projects)",
      "CAD/BIM Coordinator (Engineering Consultancy)",
      "Precast BIM Rebar Specialist",
      "BIM Rebar Modeler for international EPC firms",
    ],
    CourseModules: [
      "Introduction to 3D Detailing",
      "Revit for Reinforcement",
      "BIM Collaboration",
      "From 2D to 3D",
      "Concrete Modeling",
      "Practical Projects",
    ],
    link: "https://forms.gle/pM8kmnrQUxqEXtHN7",
  },
  {
    id: 3,
    title: "3D Structural Detailing – BIM (Using Tekla)",
    category: "courses",
    image: Structural_Detailing,
    shortDesc:
      "Gain industry-ready skills in 3D structural detailing using Tekla Structures. Perfect for engineers targeting steel and concrete BIM projects.",
    longDesc:
      "The 3D Structural Detailing – BIM course offers in-depth training in structural modeling, detailing, and documentation using Tekla Structures, a leading BIM software for steel and concrete structures.",
    price: "₹30,000 + 18% GST (Total: ₹35,400)",
    duration: "120 Hours (Approx.)",
    batchOptions: ["Weekends Only"],
    trainingMode: ["Live Online", "Offline (Classroom)"],
    softwareUsed: ["Tekla Structures"],
    eligibility: "Open to civil and structural engineers (graduates or working professionals). Prior structural engineering knowledge is recommended.",
    careerPaths: [
      "Structural BIM Modeler (Infrastructure & EPC firms)",
      "Tekla Detailer – Steel/Concrete (Fabrication & Construction companies)",
      "BIM Engineer – Structures",
      "Steel Detailing Coordinator",
      "BIM Draftsman – Precast Industry",
    ],
    CourseModules: [
      "Introduction to Structural Steel & Tekla ",
      "Understanding Structural Drawings",
      "Project Setup and Drawing Reading",
      "3D Modelling of Steel Structures",
      "Steel Connections in Tekla",
      "Component & Assembly Management",
      "Clash Detection and Coordination",
      "Generating Fabrication & Erection Drawings",
      "Reports, Lists & BOM Generation",
      "Model Review & Revisions",
      "Industry Standards & Codes",
      "Project-Based Practice",
      "Career Support & Job Readiness",
    ],
    link: "https://forms.gle/u78xiExhW7DEirfX7",
  },
  {
    id: 4,
    title: "Rebar Estimation",
    category: "courses",
    image: Estimation,
    shortDesc: "Master rebar estimation techniques using Excel and ASA software with practical, real-life project training.",
    longDesc:
      "The Rebar Estimation course is designed to provide professionals with the skills to accurately calculate and manage reinforcement quantities in construction projects.",
    price: "₹20,000 + 18% GST (Total: ₹23,600)",
    duration: "60 Hours (Approx.)",
    batchOptions: ["Weekends Only"],
    trainingMode: ["Live Online", "Offline (Classroom)"],
    softwareUsed: ["Microsoft Excel", "ASA (Advanced Steel Applications)"],
    eligibility: "Open to civil engineers, quantity surveyors, and professionals involved in reinforcement detailing and estimation.",
    careerPaths: [
      "Rebar Estimator (Construction and Infrastructure Firms)",
      "Quantity Surveyor – Reinforcement Works",
      "Estimation Engineer (Rebar Fabrication Companies)",
      "Billing Engineer with rebar specialization",
      "Rebar Estimator (Middle East, Australia, USA-based EPCs and Contractors)",
    ],
    CourseModules: [
      "Introduction to Rebar Estimation",
      "Fundamentals of Reinforcement",
      "Reading and Interpreting Structural Drawings",
      "Manual Rebar Take-Off (Spreadsheet Based)",
      "Introduction to ASA Software",
      "ASA-Based Estimation Workflow",
      "Quantity Verification & Cross-Check",
      "Report Generation & Submission Format",
      "Cost Estimation & Budgeting Basics",
      "Project-Based Practice",
      "QA/QC in Estimation",
      "Career Support & Job Readiness",
    ],
    link: "https://forms.gle/BmAVVtQuGW26hm1z7",
  },
  {
    id: 7,
    title: "MEP – BIM",
    category: "upcoming courses",
    image: CS1,
    shortDesc: "Learn to model, coordinate, and document MEP systems using BIM software.",
    longDesc: "coming soon",
    price: "₹25,000 – ₹40,000 + 18% GST (Customizable)",
    duration: "60–80 Hours",
    batchOptions: ["Weekends"],
    trainingMode: ["Live Online", "Offline (Classroom)"],
    careerPaths: [
      "MEP BIM Modeler",
      "Revit MEP Technician",
      "MEP Coordinator – BIM Projects",
      "HVAC BIM Engineer",
      "Plumbing and Electrical Draftsman (BIM)",
    ],
    link: "https://wa.me/918122149339?text=I'm%20interested%20in%20MEP%20–%20BIM",
  },
  {
    id: 8,
    title: "Precast Detailing",
    category: "upcoming courses",
    image: CS2,
    shortDesc: "Specialize in precast concrete modeling and detailing using BIM tools.",
    longDesc:
      "Designed for structural engineers and BIM professionals to model and detail precast concrete components using Tekla Structures or Revit.",
    price: "₹25,000 – ₹40,000 + 18% GST (Customizable)",
    duration: "60–80 Hours",
    batchOptions: ["Weekends"],
    trainingMode: ["Live Online", "Offline (Classroom)"],
    careerPaths: [
      "Precast BIM Modeler",
      "Structural Detailer – Precast Industry",
      "Revit/Tekla Technician – Precast Projects",
      "BIM Coordinator – Precast Plants and Construction Sites",
      "QC Engineer – Precast Fabrication (with BIM integration)",
    ],
    link: "https://wa.me/918122149339?text=I'm%20interested%20in%20Precast%20Detailing",
  },
  {
    id: 9,
    title: "Ducting Detailing",
    category: "upcoming courses",
    image: CS3,
    shortDesc: "Learn fundamentals of ducting layout, design, and detailing for HVAC systems.",
    longDesc:
      "Focus on HVAC duct system layout, shop drawings, duct sizing, routing, airflow, insulation, and coordination.",
    price: "₹15,000 – ₹25,000 + 18% GST",
    duration: "40–60 Hours",
    batchOptions: ["Weekends"],
    trainingMode: ["Live Online", "Offline (Classroom)"],
    careerPaths: [
      "HVAC Duct Draftsman",
      "MEP Coordinator – HVAC Systems",
      "Site Engineer (Ducting and Ventilation)",
      "AutoCAD HVAC Detailer",
      "Quantity Surveyor (Ducting)",
    ],
    link: "https://wa.me/918122149339?text=I'm%20interested%20in%20Ducting%20Detailing",
  },
  {
    id: 10,
    title: "Structural Design",
    category: "upcoming courses",
    image: CS4,
    shortDesc:
      "Comprehensive intro to structural design fundamentals for aspiring engineers and architects.",
    longDesc:
      "Covers material properties, load analysis, safety standards with theory and practical exercises. No prior experience required.",
    price: "₹10,000 (Approx.)",
    duration: "30–40 Hours",
    batchOptions: ["Weekends", "Weekdays"],
    trainingMode: ["Live Online", "Offline (Classroom)"],
    careerPaths: [
      "Junior Structural Engineer",
      "Design Assistant",
      "Draftsman – Structural Design",
      "Construction Site Assistant",
    ],
    link: "https://wa.me/918122149339?text=I'm%20interested%20in%20Structural%20Design",
  },
  {
    id: 11,
    title: "Top Software Training - Detailing & Drafting",
    category: "upcoming courses",
    image: CS5,
    shortDesc:
      "Master top detailing software tools used in the construction and manufacturing industries.",
    longDesc:
      "Hands-on training in leading detailing software like AutoCAD, Revit, Tekla, and SolidWorks.",
    price: "₹12,500 (Approx.)",
    duration: "35–45 Hours",
    batchOptions: ["Weekdays", "Weekend (Fast Track)"],
    trainingMode: ["Live Online", "Offline (Classroom)"],
    careerPaths: [
      "Detailing Engineer",
      "Draftsman – Steel & Concrete",
      "CAD Technician",
      "BIM Coordinator Assistant",
    ],
    link: "https://wa.me/918122149339?text=I'm%20interested%20in%20Software%20Training%20Course",
  },
  {
    id: 12,
    title: "Steel - SDS2 Training",
    category: "upcoming courses",
    image: CS6,
    shortDesc:
      "Specialized training in SDS2 for steel detailing professionals and structural engineers.",
    longDesc:
      "Covers the entire workflow of steel detailing using SDS2, including connection design, 3D modeling, and fabrication drawings.",
    price: "₹14,000 (Approx.)",
    duration: "40–50 Hours",
    batchOptions: ["Weekdays", "Weekends"],
    trainingMode: ["Live Online", "Offline (Classroom)"],
    careerPaths: [
      "Steel Detailer",
      "SDS2 Operator",
      "Structural Draftsman",
      "Steel Fabrication Coordinator",
    ],
    link: "https://wa.me/918122149339?text=I'm%20interested%20in%20Steel%20SDS2%20Training",
  },

  {
  id: 13,
  title: "3D Rebar Detailing – BIM (Using Tekla)",
  category: "courses",
  image: Tekla, // Replace with actual image import or variable
  shortDesc:
    "Become proficient in 3D rebar detailing with Tekla Structures, designed for professionals transitioning from 2D to advanced BIM workflows.",
  longDesc:
    "The 3D Rebar Detailing – BIM (Using Tekla) course equips you with practical and industry-relevant skills in structural reinforcement modeling using Tekla Structures. Tailored for those with prior 2D rebar experience, this course bridges the gap to 3D by incorporating intelligent modeling, automated scheduling, clash coordination, and precast workflows in a BIM ecosystem. Gain hands-on knowledge through real-world project simulations and prepare for global construction opportunities.",
  price: "₹22,000 + 18% GST (Total: ₹25,960)",
  duration: "50 Hours (Approx.)",
  batchOptions: ["Weekends Only"],
  trainingMode: ["Live Online", "Offline (Classroom)"],
  softwareUsed: ["Tekla Structures"],
  eligibility:
    "Only for individuals with prior 2D rebar detailing experience. Familiarity with structural drawings and basic BIM concepts is expected.",
  careerPaths: [
    "Tekla BIM Rebar Modeler (Infrastructure & EPC Projects)",
    "BIM Technician – Structural Detailing",
    "Rebar Detailer – Precast and Cast-in-situ Projects",
    "Structural BIM Engineer (Global Projects)",
    "BIM Coordinator – Rebar Modeling",
    "Steel and Concrete Detailing Specialist"
  ],
  CourseModules: [
    "Fundamentals of Tekla Structures",
    "3D Rebar Modeling Techniques",
    "Concrete Member Modeling (Beams, Columns, Slabs)",
    "Reinforcement Tools and Customization",
    "Shop Drawings and BBS Creation",
    "Clash Detection and Coordination Methods",
    "Precast Detailing using Tekla",
    "Model Review and Revisions",
    "Exporting IFC and Project Deliverables",
    "Live Industry Project – Hands-On Practice"
  ],
  link: "https://forms.gle/pM8kmnrQUxqEXtHN7"
},

  {
    id: 5,
    title: "Detailing Office Package",
    category: "packages",
    image: PK1,
    shortDesc:
      "Specialized training program for freshers in engineering firms with customized country code packages.",
    longDesc:
      "Our Detailing Office Package is a specially curated training program designed for individuals and teams for freshers in engineering firms. Offers customized packages based on selective Rebar Detailing Country Codes (like ACI, RSIC, BS, SABS, EC2 & IS Code). Ideal for onboarding new team members and enhancing efficiency in real projects.",
    price: "Contact for quote",
    duration: "Customizable",
    features: [
      "Customized packages based on country codes",
      "Ideal for onboarding new team members",
      "Enhances efficiency and accuracy in real projects",
      "Prepares learners for industry roles and career growth",
    ],
    trainingMode: ["Our Branch", "Online", "Corporate Onsite"],
    batchOptions: ["Weekday", "Weekend"],
    link: "https://wa.me/918122149339?text=I'm%20interested%20in%20the%20Detailing%20Office%20Package",
  },
  {
    id: 6,
    title: "College Bulk Package",
    category: "packages",
    image: PK2,
    shortDesc:
      "Industry-oriented training for civil engineering students to bridge classroom learning and real-world practices.",
    longDesc:
      "Our College Package is designed specifically for civil engineering students and academic institutions aiming to bridge the gap between classroom learning and real-world construction practices. This industry-oriented training introduces students to the essentials of rebar detailing, enabling them to become job-ready before graduation.",
    price: "Contact for quote",
    duration: "Customizable (short-term workshops or semester-aligned)",
    features: [
      "Tailored for engineering students and freshers",
      "Enhances employability and practical skills",
      "Aligns with college curriculum and internship programs",
      "Delivered by industry professionals with real-world experience",
    ],
    trainingMode: ["On-Campus", "Online", "Hybrid"],
    certification: "Certificate of Completion recognized by industry partners",
    link: "https://wa.me/918122149339?text=I'm%20interested%20in%20the%20College%20Bulk%20Package",
  },
];

// Categories Array
export const categories = [
  { id: "courses", name: "Courses" },
  { id: "packages", name: "Packages" },
  { id: "upcoming courses", name: "Upcoming Courses" },
];
