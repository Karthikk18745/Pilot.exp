// Comprehensive Data for Engineering Branches & Specializations
const ENGINEERING_BRANCHES = [
  {
    id: "cse",
    name: "Computer Science & Engineering",
    shortName: "CSE",
    tagline: "Architecting the Digital Future, Algorithms & Software Systems",
    description: "Computer Science & Engineering (CSE) is the discipline that integrates computer engineering and computer science. It encompasses the study of algorithms, data structures, software design, artificial intelligence, hardware-software integration, and large-scale computing systems that power modern society.",
    icon: "code",
    specializations: [
      {
        id: "cse-core",
        name: "CSE Core & Software Systems",
        whatIsIt: "CSE Core focuses on foundational software engineering, systems programming, computer architecture, operating systems, and computer networks. It builds deep problem-solving skills rooted in computational theory.",
        whatYouLearn: [
          "Data Structures & Algorithms (C++, Java, Python)",
          "Object-Oriented Programming & System Design",
          "Operating Systems & Kernel Architecture",
          "Computer Networks, TCP/IP & Protocols",
          "Database Management Systems & SQL/NoSQL",
          "Compiler Construction & Theory of Computation"
        ],
        projectsAndSkills: {
          skills: ["System Architecture", "Algorithms", "Git/GitHub", "Linux OS", "REST APIs", "C++ / Java / Python"],
          projects: [
            "Custom In-Memory Key-Value Storage Engine",
            "Multi-Threaded HTTP Web Server from scratch in C++",
            "Distributed File Synchronization Tool"
          ],
          portfolioAdvice: "Host clean, documented repositories on GitHub with architectural diagrams, unit tests, and CI/CD pipelines."
        },
        careersAndPlacements: {
          roles: ["Software Development Engineer (SDE I/II)", "Backend Engineer", "Systems Architect", "Competitive Programmer"],
          topRecruiters: ["Google", "Microsoft", "Amazon", "Apple", "Meta", "Oracle", "Goldman Sachs"],
          salaryRange: "₹12 LPA - ₹45+ LPA (Domestic) / $110k - $200k+ (International)"
        },
        roadmap: [
          { year: "Year 1", title: "Foundations & C++/Python", details: "Master C++/Java syntax, basic data structures, OOP concepts, Git, and discrete mathematics." },
          { year: "Year 2", title: "Core CS & Algorithms", details: "Study Data Structures & Algorithms, OS, DBMS, Computer Networks. Solve 200+ LeetCode problems." },
          { year: "Year 3", title: "Projects, System Design & Internships", details: "Build full-stack backend systems. Learn Low-Level Design (LLD). Secure a summer SDE internship." },
          { year: "Year 4", title: "PPOs & Final Placements", details: "Master High-Level Design (HLD), clear technical interview rounds, convert internship PPO or crack top placement offers." }
        ]
      },
      {
        id: "ai-ml",
        name: "Artificial Intelligence & Machine Learning",
        whatIsIt: "AI & ML is the frontier specialization dedicated to creating intelligent software systems capable of learning from data, recognizing patterns, processing natural language, and autonomous decision-making.",
        whatYouLearn: [
          "Linear Algebra, Multivariable Calculus & Probability",
          "Machine Learning Algorithms (Regression, SVM, Random Forests)",
          "Deep Learning & Neural Networks (TensorFlow, PyTorch)",
          "Natural Language Processing (NLP) & Large Language Models (LLMs)",
          "Computer Vision & Pattern Recognition",
          "Reinforcement Learning & AI Ethics"
        ],
        projectsAndSkills: {
          skills: ["PyTorch", "TensorFlow", "Scikit-Learn", "Python", "Data Processing", "Model Evaluation"],
          projects: [
            "Real-Time Object Detection & Tracking System using YOLO",
            "Fine-Tuned LLM Customer Support Assistant with RAG",
            "Predictive Healthcare Analytics Diagnostic Engine"
          ],
          portfolioAdvice: "Publish Kaggle notebooks, Hugging Face models, and paper implementations with detailed benchmarking."
        },
        careersAndPlacements: {
          roles: ["AI/ML Engineer", "Data Scientist", "Research Scientist", "Computer Vision Engineer", "NLP Specialist"],
          topRecruiters: ["NVIDIA", "OpenAI", "Google DeepMind", "Microsoft Research", "Meta AI", "Adobe", "Intel"],
          salaryRange: "₹15 LPA - ₹50+ LPA"
        },
        roadmap: [
          { year: "Year 1", title: "Math & Python Mastery", details: "Learn Python, Linear Algebra, Probability, Calculus, and basic ML libraries (NumPy, Pandas)." },
          { year: "Year 2", title: "ML Core & Deep Learning", details: "Implement supervised/unsupervised ML models, PyTorch fundamentals, and CNNs/RNNs." },
          { year: "Year 3", title: "Transformers, RAG & AI Internships", details: "Work on Transformers, LLM fine-tuning, computer vision projects. Win Kaggle competitions & land AI internships." },
          { year: "Year 4", title: "AI Product Deployment & Placement", details: "Deploy ML models to production with ONNX/FastAPI/Docker. Target AI Engineer roles in top tech firms." }
        ]
      },
      {
        id: "data-science-da",
        name: "Data Science & Data Analytics (DS & DA)",
        whatIsIt: "Data Science & Analytics focuses on extracting actionable insights, statistical patterns, and strategic business intelligence from complex structured and unstructured datasets.",
        whatYouLearn: [
          "Exploratory Data Analysis (EDA) & Data Visualization",
          "Advanced SQL & BigQuery / Snowflake",
          "Applied Statistics & Hypothesis Testing",
          "Big Data Processing (Apache Spark, Hadoop)",
          "Business Intelligence (Tableau, PowerBI)",
          "Predictive Modeling & Feature Engineering"
        ],
        projectsAndSkills: {
          skills: ["SQL", "Python", "Tableau", "Apache Spark", "Pandas/Seaborn", "Statistics"],
          projects: [
            "E-Commerce Customer Churn Prediction Engine",
            "Interactive Financial Market Dashboard with Streamlit",
            "Large-Scale Log Analytics Pipeline using Apache Spark"
          ],
          portfolioAdvice: "Create end-to-end data storytelling case studies showing clear business metrics and interactive dashboards."
        },
        careersAndPlacements: {
          roles: ["Data Scientist", "Data Analyst", "Business Intelligence Engineer", "Big Data Engineer"],
          topRecruiters: ["McKinsey", "BCG", "Deloitte", "Amazon", "Uber", "Flipkart", "JPMorgan Chase"],
          salaryRange: "₹10 LPA - ₹35+ LPA"
        },
        roadmap: [
          { year: "Year 1", title: "Python & SQL Fundamentals", details: "Master advanced SQL queries, Python data analysis libraries, and statistics." },
          { year: "Year 2", title: "EDA & Machine Learning", details: "Perform EDA on real datasets. Master Tableau/PowerBI and scikit-learn models." },
          { year: "Year 3", title: "Big Data & Data Analytics Internship", details: "Learn PySpark and Cloud Data Warehouses. Complete data analytics internships." },
          { year: "Year 4", title: "End-to-End Pipelines & Placement", details: "Build production data pipelines. Land Data Scientist / BI Analyst roles in top MNCs." }
        ]
      },
      {
        id: "cyber-security",
        name: "Cyber Security & Information Security",
        whatIsIt: "Cyber Security involves protecting digital networks, cloud servers, applications, and sensitive user data from cyber attacks, unauthorized access, malware, and security vulnerabilities.",
        whatYouLearn: [
          "Ethical Hacking & Penetration Testing",
          "Network Security, Cryptography & PKI",
          "Web Application Security (OWASP Top 10)",
          "Digital Forensics & Incident Response",
          "Cloud Security & Identity Access Management (IAM)",
          "Reverse Engineering & Malware Analysis"
        ],
        projectsAndSkills: {
          skills: ["Wireshark", "Metasploit", "Burp Suite", "Linux/Bash", "Cryptography", "Python"],
          projects: [
            "Automated Vulnerability Scanner for Web Apps",
            "Network Intrusion Detection System (NIDS) with Snort",
            "Secure Encrypted Chat Protocol using RSA/AES"
          ],
          portfolioAdvice: "Participate in CTF (Catch The Flag) competitions (TryHackMe, HackTheBox) and earn certs like CEH or OSCP."
        },
        careersAndPlacements: {
          roles: ["Cyber Security Analyst", "Penetration Tester", "SOC Analyst", "Information Security Manager", "Security Engineer"],
          topRecruiters: ["PwC", "EY", "CrowdStrike", "Palo Alto Networks", "Cisco", "Cloudflare", "Indian Defense R&D"],
          salaryRange: "₹10 LPA - ₹38+ LPA"
        },
        roadmap: [
          { year: "Year 1", title: "Networking & Linux", details: "Master Linux CLI, Networking protocols (OSI, TCP/IP), Python scripting." },
          { year: "Year 2", title: "Ethical Hacking & Web Security", details: "Study OWASP Top 10, Wireshark, Burp Suite, Cryptography basics." },
          { year: "Year 3", title: "CTFs & Security Internship", details: "Compete in global CTFs, work on security auditing, obtain Security+ or OSCP, land security internship." },
          { year: "Year 4", title: "Security Architecture & Job Offers", details: "Master Cloud Security & Zero-Trust Architecture. Secure placement in tier-1 security firms." }
        ]
      },
      {
        id: "web-dev-cloud",
        name: "Web Development & Cloud Computing",
        whatIsIt: "Focuses on designing responsive web interfaces, resilient microservice backends, cloud-native deployments, and serverless architectures using AWS, Azure, and Google Cloud.",
        whatYouLearn: [
          "Frontend Architecture (React, Next.js, HTML5/CSS3, TypeScript)",
          "Backend Microservices (Node.js, Go, Python FastAPI, Java Spring)",
          "Cloud Infrastructure (AWS, GCP, Docker, Kubernetes, Terraform)",
          "CI/CD Pipelines & DevOps Automation",
          "GraphQL & RESTful API Design",
          "Distributed Caching (Redis) & Message Queues (Kafka)"
        ],
        projectsAndSkills: {
          skills: ["React/Next.js", "Node.js/Go", "AWS/Docker", "Kubernetes", "PostgreSQL", "Kafka"],
          projects: [
            "Collaborative Real-Time Canvas App with WebSockets",
            "Serverless E-Commerce Platform on AWS Lambda & DynamoDB",
            "Kubernetes Microservices Orchestration Demo"
          ],
          portfolioAdvice: "Deploy live full-stack applications with custom domains, continuous integration, and high performance scores."
        },
        careersAndPlacements: {
          roles: ["Full Stack Developer", "Cloud Engineer", "DevOps Engineer", "Frontend Architect", "Site Reliability Engineer (SRE)"],
          topRecruiters: ["Amazon Web Services", "Google Cloud", "Salesforce", "Atlassian", "Twilio", "Uber", "Shopify"],
          salaryRange: "₹12 LPA - ₹40+ LPA"
        },
        roadmap: [
          { year: "Year 1", title: "Frontend & Web Fundamentals", details: "Master HTML, CSS, JavaScript ES6+, React, Git, and web accessibility." },
          { year: "Year 2", title: "Full Stack & Microservices", details: "Learn Node.js/Go backend development, PostgreSQL, REST/GraphQL APIs." },
          { year: "Year 3", title: "Cloud & DevOps Internships", details: "Learn Docker, Kubernetes, AWS Services. Deploy production apps. Land Full Stack/Cloud internship." },
          { year: "Year 4", title: "Scale & High Availability Placements", details: "Master system performance, caching, and CI/CD pipelines. Secure top software placements." }
        ]
      }
    ]
  },
  {
    id: "ece",
    name: "Electronics & Communication Engineering",
    shortName: "ECE",
    tagline: "Connecting Silicon, Signals, Wireless Tech & Smart Hardware",
    description: "ECE bridges physics and computing by dealing with semiconductor devices, microprocessors, signal processing, wireless communication networks, VLSI chip design, and embedded systems.",
    icon: "cpu",
    specializations: [
      {
        id: "vlsi-chip-design",
        name: "VLSI & Chip Design",
        whatIsIt: "Very Large Scale Integration (VLSI) involves designing microchips containing millions or billions of transistors, forming the hardware backbone of GPUs, CPUs, smartphones, and AI chips.",
        whatYouLearn: [
          "Digital System Design & Verilog / SystemVerilog",
          "CMOS Analog & Digital Circuit Design",
          "FPGA Prototyping & EDA Tools (Cadence, Synopsys)",
          "Computer Architecture & Microprocessors",
          "Physical Design, Layout & Timing Analysis (STA)",
          "Semiconductor Device Physics"
        ],
        projectsAndSkills: {
          skills: ["Verilog", "Cadence Virtuoso", "FPGA", "SystemVerilog", "CMOS Design", "C/C++"],
          projects: [
            "32-Bit RISC-V Processor Core Design in Verilog",
            "FPGA Implementation of Digital Audio Equalizer",
            "Low-Power CMOS Operational Amplifier Design"
          ],
          portfolioAdvice: "Provide GitHub links to clean Verilog synthesizable code, testbenches, and simulation waveforms."
        },
        careersAndPlacements: {
          roles: ["VLSI Design Engineer", "ASIC Verification Engineer", "Physical Design Engineer", "FPGA Developer", "Semiconductor Specialist"],
          topRecruiters: ["Intel", "Qualcomm", "NVIDIA", "Texas Instruments", "AMD", "Broadcom", "Applied Materials"],
          salaryRange: "₹14 LPA - ₹42+ LPA"
        },
        roadmap: [
          { year: "Year 1", title: "Digital Electronics & Circuits", details: "Master Boolean algebra, digital logic gates, basic circuit theory, and C programming." },
          { year: "Year 2", title: "Verilog & Microprocessors", details: "Study Verilog HDL, 8085/8086 microprocessors, CMOS principles, and signals." },
          { year: "Year 3", title: "VLSI Design Tools & VLSI Internship", details: "Simulate circuits in Cadence/Synopsys tools, program FPGAs, secure chip design internships." },
          { year: "Year 4", title: "Tapeout Workflow & Placements", details: "Master Static Timing Analysis (STA), ASIC physical design, and land roles in semiconductor MNCs." }
        ]
      },
      {
        id: "embedded-iot",
        name: "Embedded Systems & Robotics",
        whatIsIt: "Combines microcontrollers, sensors, actuators, real-time operating systems (RTOS), and hardware-software co-design to create smart autonomous robots, automotive units, and IoT devices.",
        whatYouLearn: [
          "Embedded C / Embedded C++ & ARM Cortex-M Architecture",
          "Real-Time Operating Systems (FreeRTOS)",
          "Sensor Integration (I2C, SPI, UART, CAN Bus)",
          "IoT Protocols (MQTT, HTTP, BLE, Zigbee)",
          "Robotics Kinematics & Control Systems",
          "PCB Design (KiCAD, Altium Designer)"
        ],
        projectsAndSkills: {
          skills: ["Embedded C", "FreeRTOS", "STM32 / ESP32", "PCB Design", "CAN Protocol", "ROS (Robot OS)"],
          projects: [
            "Autonomous Obstacle-Avoiding Rover with ROS",
            "Industrial Smart Energy Metering Node via MQTT",
            "Custom STM32 Microcontroller Board Design in KiCAD"
          ],
          portfolioAdvice: "Include video demos of physical hardware prototypes alongside circuit schematics and firmware repos."
        },
        careersAndPlacements: {
          roles: ["Embedded Systems Engineer", "Robotics Hardware Engineer", "IoT Solutions Architect", "Automotive Firmware Engineer"],
          topRecruiters: ["Bosch", "Tesla", "Siemens", "ABB", "Samsung Electronics", "Schneider Electric", "TATA Motors"],
          salaryRange: "₹10 LPA - ₹32+ LPA"
        },
        roadmap: [
          { year: "Year 1", title: "C Programming & Arduino", details: "Master C programming, electrical circuits, Arduino prototyping, and sensor interfacing." },
          { year: "Year 2", title: "ARM Cortex & Embedded C", details: "Transition to STM32/ESP32, master register-level C programming, SPI/I2C/UART." },
          { year: "Year 3", title: "RTOS, PCB Design & Internships", details: "Learn FreeRTOS, design custom PCBs in KiCAD, secure embedded systems internships." },
          { year: "Year 4", title: "Industrial Firmware & Placements", details: "Learn CAN bus, automotive standards (AUTOSAR), ROS, and crack hardware placement offers." }
        ]
      },
      {
        id: "wireless-telecom",
        name: "Wireless Communication & 5G/6G Tech",
        whatIsIt: "Deals with signal transmission, RF circuits, electromagnetic waves, satellite networks, optical fiber communications, and next-generation 5G/6G wireless infrastructure.",
        whatYouLearn: [
          "Digital Signal Processing (DSP) & MATLAB",
          "Electromagnetic Theory & Antenna Design",
          "5G NR & Cellular Communications Standards",
          "Optical Fiber Communication & Photonics",
          "Software Defined Radio (SDR) & GNU Radio",
          "RF Circuit Design & Microwave Engineering"
        ],
        projectsAndSkills: {
          skills: ["MATLAB/Simulink", "GNU Radio", "Antenna CAD", "DSP", "RF Electronics", "Python"],
          projects: [
            "5G Channel Estimation & Beamforming Simulation",
            "Microstrip Patch Antenna Design for 5G Frequencies",
            "Software Defined Radio FM Transceiver using RTL-SDR"
          ],
          portfolioAdvice: "Showcase MATLAB/Simulink models, SDR field tests, and antenna simulation parameters."
        },
        careersAndPlacements: {
          roles: ["Telecommunication Engineer", "RF Engineer", "DSP Engineer", "5G Network Architect", "Satellite Systems Engineer"],
          topRecruiters: ["Qualcomm", "Ericsson", "Nokia", "ISRO", "Reliance Jio", "Airtel", "Cisco"],
          salaryRange: "₹9 LPA - ₹30+ LPA"
        },
        roadmap: [
          { year: "Year 1", title: "Signals & Signals Math", details: "Learn Fourier transforms, vector calculus, basic signals and systems." },
          { year: "Year 2", title: "Digital Communication & DSP", details: "Study modulation techniques, DSP algorithms, MATLAB simulation tools." },
          { year: "Year 3", title: "5G Tech, RF Design & Internships", details: "Learn antenna simulation tools, SDR hardware, secure telecom internships." },
          { year: "Year 4", title: "Wireless Protocol & Job Placements", details: "Deep-dive into 5G/6G standards, RF testing equipment, and secure telecom engineering placements." }
        ]
      }
    ]
  },
  {
    id: "eee",
    name: "Electrical & Electronics Engineering",
    shortName: "EEE",
    tagline: "Powering the Planet, Renewable Energy, Smart Grids & Electric Mobility",
    description: "EEE covers high-voltage power generation, transmission, smart energy grids, electrical machinery, renewable energy integration, power electronics, and electric vehicle (EV) drivetrains.",
    icon: "zap",
    specializations: [
      {
        id: "ev-powertrain",
        name: "Electric Vehicle (EV) Mobility & Powertrains",
        whatIsIt: "Specialized field focusing on EV battery management systems (BMS), motor control drives, regenerative braking, electric drivetrains, and EV charging infrastructure.",
        whatYouLearn: [
          "Electric Motors (BLDC, PMSM, Induction Motors)",
          "Battery Management Systems (BMS) & Lithium-Ion Chemistry",
          "Power Electronic Converters (Inverters, Choppers)",
          "EV Drivetrain Modeling & Simulation (MATLAB/Simulink)",
          "Thermal Management & Charging Protocols (CCS, CHAdeMO)",
          "Vehicle Control Units (VCU) & CAN Bus"
        ],
        projectsAndSkills: {
          skills: ["MATLAB/Simulink", "Power Electronics", "BMS Design", "Motor Drives", "Simulink", "C Programming"],
          projects: [
            "Simulation of 48V EV Battery Management System",
            "Speed Control of PMSM Motor Drive using Vector Control",
            "Bidirectional DC-DC Converter for EV Fast Charger"
          ],
          portfolioAdvice: "Document simulation files, battery thermal maps, and motor torque-speed performance graphs."
        },
        careersAndPlacements: {
          roles: ["EV Powertrain Engineer", "BMS Development Engineer", "Power Electronics Designer", "Automotive Systems Engineer"],
          topRecruiters: ["Tesla", "Ola Electric", "Ather Energy", "TATA Motors", "Mahindra Electric", "Bosch", "TVS"],
          salaryRange: "₹10 LPA - ₹35+ LPA"
        },
        roadmap: [
          { year: "Year 1", title: "Electrical Circuits & Mechanics", details: "Master circuit laws, differential equations, basic physics, C programming." },
          { year: "Year 2", title: "Electrical Machines & Power Electronics", details: "Study DC/AC motors, transformers, power electronic switches (IGBTs, MOSFETs)." },
          { year: "Year 3", title: "EV Simulation & BMS Internship", details: "Master MATLAB Simulink for EV drivetrains, design BMS circuits, land EV internships." },
          { year: "Year 4", title: "Advanced Motor Drives & Placement", details: "Study vector control algorithms, high-voltage safety, and crack EV automotive offers." }
        ]
      },
      {
        id: "smart-grids-renewable",
        name: "Smart Grids & Renewable Energy",
        whatIsIt: "Focuses on modernizing electricity grids using solar PV systems, wind power, energy storage, smart meters, power systems protection, and grid automation.",
        whatYouLearn: [
          "Power System Analysis & Grid Stability",
          "Solar Photovoltaic & Wind Energy Systems",
          "Smart Meters & SCADA Systems",
          "Grid Integration of Renewable Energy",
          "High Voltage Direct Current (HVDC) Transmission",
          "Power Quality & Protection Relays"
        ],
        projectsAndSkills: {
          skills: ["ETAP", "PowerFactory", "MATLAB", "SCADA", "Power Protection", "Grid Analytics"],
          projects: [
            "Grid-Connected Solar PV Inverter with MPPT Control",
            "Fault Analysis & Protection Relay Coordination in ETAP",
            "Smart Microgrid Load Frequency Control System"
          ],
          portfolioAdvice: "Share load-flow analysis reports, renewable grid stability plots, and SCADA control dashboards."
        },
        careersAndPlacements: {
          roles: ["Power Systems Engineer", "Renewable Energy Specialist", "Smart Grid Architect", "SCADA Engineer", "Grid Analyst"],
          topRecruiters: ["Siemens Energy", "ABB", "Schneider Electric", "NTPC", "Power Grid Corporation", "GE Energy", "Adani Green"],
          salaryRange: "₹9 LPA - ₹28+ LPA"
        },
        roadmap: [
          { year: "Year 1", title: "Circuit Theory & Energy Basics", details: "Learn electrical laws, AC circuit analysis, thermodynamics basics." },
          { year: "Year 2", title: "Power Systems I & Machines", details: "Study power generation, transmission line modeling, AC machines." },
          { year: "Year 3", title: "ETAP Tools & Smart Grid Internship", details: "Master ETAP/MATLAB for load flow, study MPPT algorithms, land grid internships." },
          { year: "Year 4", title: "Protection Relays & Career Offers", details: "Learn SCADA, HVDC systems, and secure energy sector placements." }
        ]
      }
    ]
  },
  {
    id: "it",
    name: "Information Technology",
    shortName: "IT",
    tagline: "Enterprise Software, Information Systems, Cloud Infrastructure & DevOps",
    description: "Information Technology focuses on the practical application, storage, retrieval, processing, and management of data and software services across business enterprise networks and global cloud platforms.",
    icon: "database",
    specializations: [
      {
        id: "devops-cloud-it",
        name: "Cloud Architecture & DevOps Engineering",
        whatIsIt: "Specializes in automating software delivery pipelines, managing multi-cloud infrastructure, maintaining uptime, and implementing Infrastructure as Code (IaC).",
        whatYouLearn: [
          "Containerization (Docker) & Container Management (Kubernetes)",
          "Infrastructure as Code (Terraform, Ansible)",
          "Continuous Integration & Delivery (Jenkins, GitHub Actions)",
          "Cloud Services (AWS EC2, S3, RDS, EKS / GCP GKE)",
          "Monitoring & Logging (Prometheus, Grafana, ELK Stack)",
          "Site Reliability Engineering (SRE) Principles"
        ],
        projectsAndSkills: {
          skills: ["Docker", "Kubernetes", "AWS/GCP", "Terraform", "GitHub Actions", "Python/Bash"],
          projects: [
            "Automated Multi-Region Infrastructure Provisioning with Terraform",
            "Zero-Downtime Deployment Pipeline for Microservices",
            "Prometheus & Grafana Cluster Health Monitoring System"
          ],
          portfolioAdvice: "Create GitHub repos with Terraform HCL scripts, Dockerfiles, and architectural infrastructure diagrams."
        },
        careersAndPlacements: {
          roles: ["DevOps Engineer", "Cloud Architect", "Site Reliability Engineer (SRE)", "Infrastructure Engineer"],
          topRecruiters: ["AWS", "Google", "HashiCorp", "Red Hat", "Thoughtworks", "Accenture Cloud", "Microsoft"],
          salaryRange: "₹12 LPA - ₹38+ LPA"
        },
        roadmap: [
          { year: "Year 1", title: "Linux & Scripting", details: "Master Linux command line, Bash scripting, Git version control, basic networking." },
          { year: "Year 2", title: "Web Architecture & Python", details: "Understand HTTP/HTTPS, REST APIs, Python scripting, Docker containers." },
          { year: "Year 3", title: "Kubernetes, AWS & Internships", details: "Learn Kubernetes, AWS Cloud Solutions Architect curriculum, build CI/CD pipelines, land DevOps internship." },
          { year: "Year 4", title: "Terraform, SRE & Placements", details: "Master Terraform, Prometheus monitoring, SRE practices, and land top DevOps roles." }
        ]
      }
    ]
  },
  {
    id: "mechanical",
    name: "Mechanical Engineering",
    shortName: "Mechanical",
    tagline: "Forces, Machines, Thermal Systems, CAD/CAM & Advanced Manufacturing",
    description: "Mechanical Engineering is one of the broadest engineering fields, concerned with the design, analysis, manufacturing, and maintenance of mechanical devices, thermal engines, robotics, and aerospace structures.",
    icon: "settings",
    specializations: [
      {
        id: "cad-cam-cae",
        name: "Mechanical Design & Simulation (CAD/CAM/CAE)",
        whatIsIt: "Focuses on computer-aided 3D modeling, finite element analysis (FEA), computational fluid dynamics (CFD), structural strength simulation, and precision manufacturing.",
        whatYouLearn: [
          "3D Parametric CAD Modeling (SolidWorks, CATIA, Fusion 360)",
          "Finite Element Analysis (ANSYS Structural, Abaqus)",
          "Computational Fluid Dynamics (ANSYS Fluent)",
          "Kinematics & Dynamics of Machinery",
          "Design for Manufacturing & Assembly (DFMA)",
          "Additive Manufacturing (3D Printing)"
        ],
        projectsAndSkills: {
          skills: ["SolidWorks", "ANSYS Workbench", "CATIA", "FEA/CFD", "GD&T", "Materials Science"],
          projects: [
            "Structural Topology Optimization of Formula Student Chassis",
            "CFD Aerodynamic Drag Reduction Analysis of Race Car Wing",
            "Thermal Heat Exchanger FEA Simulation in ANSYS"
          ],
          portfolioAdvice: "Maintain a visual CAD rendering portfolio detailing FEA stress-contour heatmaps and engineering drawings."
        },
        careersAndPlacements: {
          roles: ["Mechanical Design Engineer", "FEA Structural Analyst", "CFD Specialist", "CAD Engineer", "R&D Product Engineer"],
          topRecruiters: ["Larsen & Toubro (L&T)", "TATA Motors", "Boeing", "Airbus", "General Electric", "Maruti Suzuki", "Caterpillar"],
          salaryRange: "₹8 LPA - ₹26+ LPA"
        },
        roadmap: [
          { year: "Year 1", title: "Engineering Graphics & Physics", details: "Master SolidWorks basic 3D modeling, engineering drawing, statics & dynamics." },
          { year: "Year 2", title: "Strength of Materials & Fluids", details: "Study mechanics of materials, fluid mechanics, kinematics of machines, GD&T." },
          { year: "Year 3", title: "ANSYS FEA/CFD & Design Internship", details: "Learn ANSYS Workbench, perform structural and thermal stress analysis, land CAD design internship." },
          { year: "Year 4", title: "Topology Optimization & Placements", details: "Master DFMA principles, complete final year prototype, and secure mechanical R&D offers." }
        ]
      }
    ]
  },
  {
    id: "civil",
    name: "Civil & Infrastructure Engineering",
    shortName: "Civil",
    tagline: "Constructing Cities, Bridges, Smart Infrastructure & Sustainable Environments",
    description: "Civil Engineering deals with the planning, design, construction, and management of infrastructure projects such as skyscrapers, highways, bridges, dams, airports, and water treatment systems.",
    icon: "building",
    specializations: [
      {
        id: "structural-smart-cities",
        name: "Structural & Smart Infrastructure Engineering",
        whatIsIt: "Dedicated to designing resilient buildings, bridges, earthquake-resistant structures, smart urban transit systems, and modern construction management.",
        whatYouLearn: [
          "Structural Analysis & Concrete / Steel Design",
          "Building Information Modeling (BIM - Autodesk Revit)",
          "Structural FEA Simulation (STAAD.Pro, ETABS)",
          "Geotechnical Engineering & Foundation Design",
          "Earthquake Resistant Engineering & Seismic Analysis",
          "Construction Project Management & Primavera / MS Project"
        ],
        projectsAndSkills: {
          skills: ["STAAD.Pro", "ETABS", "Revit BIM", "AutoCAD", "Structural Analysis", "Project Scheduling"],
          projects: [
            "Seismic Analysis & Design of 40-Story High-Rise in ETABS",
            "BIM 3D Model & Construction Schedule for Cable-Stayed Bridge",
            "Eco-Friendly Sustainable Concrete Mix Design Optimization"
          ],
          portfolioAdvice: "Include ETABS structural calculation sheets, 3D BIM Revit walkthrough models, and structural drafting blueprints."
        },
        careersAndPlacements: {
          roles: ["Structural Engineer", "BIM Coordinator", "Construction Manager", "Geotechnical Engineer", "Infrastructure Consultant"],
          topRecruiters: ["L&T Construction", "Tata Projects", "Shapoorji Pallonji", "AECOM", "Jacobs", "Bechtel", "NHAI"],
          salaryRange: "₹8 LPA - ₹24+ LPA"
        },
        roadmap: [
          { year: "Year 1", title: "Engineering Mechanics & Drafting", details: "Master engineering mechanics, AutoCAD drafting, basic surveying." },
          { year: "Year 2", title: "Structural Analysis & Fluid Mechanics", details: "Study mechanics of solids, fluid dynamics, soil mechanics, concrete technology." },
          { year: "Year 3", title: "ETABS, Revit BIM & Site Internship", details: "Master ETABS & Revit BIM software, conduct site surveying, secure civil internship." },
          { year: "Year 4", title: "Seismic Design & Infrastructure Offers", details: "Design earthquake-resistant structures, project estimation, and secure top infrastructure roles." }
        ]
      }
    ]
  },
  {
    id: "physics-eng",
    name: "Engineering Physics",
    shortName: "Engg Physics",
    tagline: "Quantum Computing, Photonics, Nanotechnology & Advanced Research",
    description: "Engineering Physics is an interdisciplinary branch combining advanced physics concepts (quantum mechanics, optics, nanotechnology, materials) with engineering applications to create cutting-edge technology innovations.",
    icon: "atom",
    specializations: [
      {
        id: "quantum-photonics",
        name: "Quantum Computing & Photonics",
        whatIsIt: "Explores quantum information processing, semiconductor device physics, laser technology, fibre optics, and nano-electronic quantum devices.",
        whatYouLearn: [
          "Quantum Mechanics & Quantum Algorithms (Qiskit)",
          "Optoelectronics & Fiber Optics",
          "Nanotechnology & Thin-Film Fabrication",
          "Condensed Matter Physics & Semiconductors",
          "Statistical Thermodynamics & Electrodynamics",
          "Computational Physics (Python, MATLAB)"
        ],
        projectsAndSkills: {
          skills: ["Qiskit", "Python", "Optics CAD", "Nanofabrication", "Quantum Math", "Simulations"],
          projects: [
            "Quantum Key Distribution Protocol Simulation in Qiskit",
            "Photonic Crystal Waveguide Simulation for Optical Computing",
            "Thin-Film Solar Cell Energy Efficiency Optimization"
          ],
          portfolioAdvice: "Publish research papers, simulation notebooks, and quantum circuit code on GitHub."
        },
        careersAndPlacements: {
          roles: ["Quantum Software Developer", "Photonics R&D Engineer", "Nanotechnology Researcher", "Applied Physicist"],
          topRecruiters: ["IBM Quantum", "Rigetti", "Applied Materials", "ISRO", "DRDO", "ASML", "Max Planck Institutes"],
          salaryRange: "₹12 LPA - ₹40+ LPA (High Higher-Study / Global PhD Trajectory)"
        },
        roadmap: [
          { year: "Year 1", title: "Physics & Vector Calculus", details: "Study Classical Mechanics, Electromagnetism, Multivariable Calculus, and Python." },
          { year: "Year 2", title: "Quantum Physics & Electrodynamics", details: "Master Quantum Mechanics, Thermodynamics, Optics, Mathematical Physics." },
          { year: "Year 3", title: "Quantum Algorithms & Research Internship", details: "Learn Qiskit, Photonic simulation tools, conduct lab research, land research internships." },
          { year: "Year 4", title: "Thesis, Higher Studies / R&D Offers", details: "Complete undergraduate thesis, publish research, apply to top global R&D firms or MS/PhD programs." }
        ]
      }
    ]
  },
  {
    id: "chemical",
    name: "Chemical Engineering",
    shortName: "Chemical",
    tagline: "Molecules to Scale, Petrochemicals, Pharmaceuticals & Green Processing",
    description: "Chemical Engineering transforms raw materials into valuable chemical products, biofuels, materials, and pharmaceuticals through chemical, physical, and biological process engineering.",
    icon: "flask",
    specializations: [
      {
        id: "process-pharma-eng",
        name: "Process Engineering & Pharmaceuticals",
        whatIsIt: "Focuses on designing chemical reactors, distillation columns, mass transfer equipment, pharmaceutical manufacturing processes, and green chemical plant design.",
        whatYouLearn: [
          "Chemical Reaction Engineering & Kinetics",
          "Fluid Mechanics & Heat Transfer",
          "Mass Transfer & Separation Processes",
          "Chemical Process Simulation (Aspen Plus, HYSYS)",
          "Process Control & Instrumentation",
          "Plant Design & Process Economics"
        ],
        projectsAndSkills: {
          skills: ["Aspen Plus", "HYSYS", "MATLAB", "Mass Transfer", "Process Control", "Safety Regulations"],
          projects: [
            "Aspen Plus Simulation of Bio-Ethanol Distillation Plant",
            "Kinetic Modeling of Pharmaceutical Batch Reactor",
            "Carbon Capture & Storage Process Flowsheet Design"
          ],
          portfolioAdvice: "Present Aspen Plus flowsheet simulation outputs, heat exchanger network synthesis, and mass balance sheets."
        },
        careersAndPlacements: {
          roles: ["Chemical Process Engineer", "Plant Operations Manager", "R&D Scientist", "Safety & Environmental Engineer"],
          topRecruiters: ["Reliance Industries", "Shell", "ExxonMobil", "Pfizer", "BASF", "Dow Chemical", "Dr. Reddy's Laboratories"],
          salaryRange: "₹9 LPA - ₹30+ LPA"
        },
        roadmap: [
          { year: "Year 1", title: "Chemistry & Thermodynamics", details: "Master Organic & Physical Chemistry, Chemical Thermodynamics, Energy Balance." },
          { year: "Year 2", title: "Fluid Mechanics & Heat Transfer", details: "Study Fluid Flow, Heat Exchanger Design, Chemical Reaction Kinetics." },
          { year: "Year 3", title: "Aspen Plus & Plant Internship", details: "Master Aspen Plus simulation tool, Mass Transfer operations, secure refinery/pharma internship." },
          { year: "Year 4", title: "Process Safety & Career Placement", details: "Study Process Dynamics & Control, Plant Economics, and secure chemical MNC placements." }
        ]
      }
    ]
  },
  {
    id: "aerospace",
    name: "Aerospace Engineering",
    shortName: "Aerospace",
    tagline: "Aircraft Design, Rocket Propulsion, Space Exploration & Avionics",
    description: "Aerospace Engineering covers the development of aircraft, spacecraft, satellites, rockets, and drones. It encompasses aerodynamics, jet propulsion, structural flight mechanics, and space systems.",
    icon: "rocket",
    specializations: [
      {
        id: "propulsion-aerodynamics",
        name: "Aerodynamics & Rocket Propulsion",
        whatIsIt: "Focuses on supersonic airflow simulation, jet engine turbomachinery, rocket liquid/solid propulsion, orbital mechanics, and satellite flight dynamics.",
        whatYouLearn: [
          "Aerodynamics & Compressible Flow Theory",
          "Rocket & Gas Turbine Propulsion Systems",
          "Orbital Mechanics & Flight Dynamics",
          "Aerospace Structures & Composite Materials",
          "Avionics & Flight Control Systems",
          "CFD Aerodynamic Modeling (ANSYS Fluent, OpenFOAM)"
        ],
        projectsAndSkills: {
          skills: ["ANSYS Fluent", "OpenFOAM", "MATLAB Flight Sim", "CAD", "Combustion Math", "Avionics"],
          projects: [
            "CFD Supersonic Flow Simulation around Delta-Wing Aircraft",
            "Liquid Rocket Engine Nozzle Optimization in OpenFOAM",
            "CubeSat Satellite Orbital Decay & Re-entry Trajectory Calculation"
          ],
          portfolioAdvice: "Share CFD shockwave pressure contours, thrust-to-weight calculation reports, and orbital trajectory simulations."
        },
        careersAndPlacements: {
          roles: ["Aerospace Engineer", "Propulsion Scientist", "CFD Aerodynamicist", "Flight Controls Engineer", "Avionics Developer"],
          topRecruiters: ["ISRO", "DRDO", "Boeing", "Airbus", "HAL", "SpaceX (Global)", "Rolls-Royce Aerospace"],
          salaryRange: "₹10 LPA - ₹36+ LPA"
        },
        roadmap: [
          { year: "Year 1", title: "Mechanics & Aero Fundamentals", details: "Study Engineering Mechanics, Thermodynamics, Fluid Dynamics, CAD Modeling." },
          { year: "Year 2", title: "Aerodynamics & Flight Dynamics", details: "Study Incompressible/Compressible Aerodynamics, Aircraft Performance, Aircraft Structures." },
          { year: "Year 3", title: "Propulsion, CFD & ISRO/R&D Internship", details: "Master Jet/Rocket Propulsion equations, OpenFOAM CFD simulations, land aerospace internship." },
          { year: "Year 4", title: "Orbital Mechanics & Placement", details: "Design flight control laws, complete capstone aircraft/rocket design, secure defense & aerospace offers." }
        ]
      }
    ]
  },
  {
    id: "biotech",
    name: "Biotechnology Engineering",
    shortName: "Biotech",
    tagline: "Bio-Informatics, Genetic Engineering, Synthetic Biology & Bio-Pharma",
    description: "Biotechnology Engineering applies engineering principles to biological systems, living organisms, genomic data, and cellular processes to create medical therapeutics, vaccines, and bio-industrial products.",
    icon: "dna",
    specializations: [
      {
        id: "bioinformatics-genomics",
        name: "Bioinformatics & Genetic Engineering",
        whatIsIt: "Combines computer science, biological data algorithms, gene editing (CRISPR), DNA sequencing analysis, computational drug discovery, and structural biology.",
        whatYouLearn: [
          "Genomics & DNA/RNA Sequencing Algorithms",
          "Bioinformatics Programming (Biopython, R / Bioconductor)",
          "CRISPR-Cas9 Gene Editing Principles",
          "Molecular Docking & Computational Drug Design",
          "Bioprocess Engineering & Fermentation",
          "Structural Biology & Protein Folding AI (AlphaFold concepts)"
        ],
        projectsAndSkills: {
          skills: ["Biopython", "R", "PyMOL / AutoDock", "BLAST Algorithms", "Genomic Analysis", "Machine Learning"],
          projects: [
            "Machine Learning Model for Cancer Biomarker Gene Discovery",
            "Molecular Docking Simulation of Small Molecule Inhibitor Target",
            "Next-Generation Sequencing (NGS) Data Analysis Pipeline"
          ],
          portfolioAdvice: "Host NGS pipeline scripts, R statistical plots, and 3D molecular visualization renderings."
        },
        careersAndPlacements: {
          roles: ["Bioinformatics Scientist", "Computational Biologist", "Genetic Engineer", "Bioprocess Scientist"],
          topRecruiters: ["Biocon", "Novartis", "Illumina", "Thermo Fisher Scientific", "Syngene", "Genentech", "Reliance Life Sciences"],
          salaryRange: "₹8 LPA - ₹28+ LPA"
        },
        roadmap: [
          { year: "Year 1", title: "Biochemistry & Python", details: "Master Cell Biology, Organic Chemistry, Python programming, Biopython fundamentals." },
          { year: "Year 2", title: "Genetics & Bioinformatics Algorithms", details: "Study Molecular Biology, Sequence Alignment algorithms (BLAST), R statistical computing." },
          { year: "Year 3", title: "Drug Design, NGS & Biotech Internship", details: "Learn Molecular Docking software, bioprocess kinetics, land biotech laboratory/data internship." },
          { year: "Year 4", title: "Synthetic Biology & Career Placement", details: "Work on CRISPR or AI-driven protein modeling projects, secure roles in pharma/bioinformatics firms." }
        ]
      }
    ]
  },
  {
    id: "mechatronics",
    name: "Mechatronics & Robotics Engineering",
    shortName: "Mechatronics",
    tagline: "Autonomous Robots, Industrial Automation, Cyber-Physical Systems & Micro-Sensing",
    description: "Mechatronics is the seamless integration of mechanical engineering, electronics, computer science, and control theory to create intelligent autonomous machines, industrial robots, and automated production lines.",
    icon: "bot",
    specializations: [
      {
        id: "industrial-robotics",
        name: "Autonomous Mobile Robots & Industrial Automation",
        whatIsIt: "Dedicated to building autonomous mobile robots (AMRs), robotic arms, PLC-SCADA automated manufacturing lines, sensor fusion, and computer vision-guided robotics.",
        whatYouLearn: [
          "Robot Kinematics, Dynamics & Control (ROS / ROS2)",
          "Microcontroller & Embedded Systems (C/C++, STM32, ARM)",
          "Programmable Logic Controllers (PLC) & SCADA Systems",
          "Sensor Fusion (LiDAR, Camera, IMU, Kalman Filtering)",
          "Computer Vision for Robotics (OpenCV)",
          "Pneumatics, Hydraulics & Servo Drives"
        ],
        projectsAndSkills: {
          skills: ["ROS2", "OpenCV", "PLC Ladder Logic", "C++", "LiDAR SLAM", "Robotic Kinematics"],
          projects: [
            "Autonomous Mobile Robot SLAM Navigation using LiDAR & ROS2",
            "6-DOF Robotic Arm Inverse Kinematics Simulator in C++",
            "Industrial Conveyor Sorting System with PLC & Computer Vision"
          ],
          portfolioAdvice: "Publish video demonstrations of physical/simulated robots navigating indoor spaces alongside ROS2 packages."
        },
        careersAndPlacements: {
          roles: ["Robotics Software Engineer", "Automation Engineer", "Mechatronics R&D Engineer", "Controls Engineer"],
          topRecruiters: ["KUKA Robotics", "FANUC", "ABB Robotics", "GreyOrange", "Boston Dynamics (Global)", "Rockwell Automation", "Siemens"],
          salaryRange: "₹10 LPA - ₹34+ LPA"
        },
        roadmap: [
          { year: "Year 1", title: "C++ & Basic Mechanics/Electronics", details: "Master C++, basic electrical components, statics, dynamics, Arduino." },
          { year: "Year 2", title: "Sensors, Actuators & Control Systems", details: "Study operational amplifiers, encoders, motors, PID control loops, Linux." },
          { year: "Year 3", title: "ROS2, SLAM & Robotics Internship", details: "Master ROS2, OpenCV vision processing, Gazebo robot simulation, secure robotics internship." },
          { year: "Year 4", title: "Industrial PLC & Career Placements", details: "Learn PLC programming, industrial SCADA, sensor fusion, and land top robotics placement offers." }
        ]
      }
    ]
  },
  {
    id: "materials",
    name: "Metallurgical & Materials Engineering",
    shortName: "Materials",
    tagline: "Nanomaterials, Semiconductors, Superalloys & Next-Gen Energy Storage",
    description: "Metallurgical & Materials Engineering explores the atomic structure, synthesis, processing, and property performance of metals, ceramics, polymers, composites, and semiconductor micro-materials.",
    icon: "layers",
    specializations: [
      {
        id: "nano-materials-semiconductor",
        name: "Advanced Materials & Semiconductor Devices",
        whatIsIt: "Focuses on developing novel nanomaterials, graphene, high-temperature superalloys for turbine blades, solid-state lithium battery materials, and semiconductor micro-fabrication.",
        whatYouLearn: [
          "Material Characterization (SEM, XRD, TEM, AFM)",
          "Physical Metallurgy & Phase Transformations",
          "Semiconductor Materials & Thin Film Deposition",
          "Polymer & Composite Materials Engineering",
          "Corrosion Prevention & Surface Coating",
          "Computational Materials Science (DFT - Density Functional Theory)"
        ],
        projectsAndSkills: {
          skills: ["XRD/SEM Analysis", "DFT Simulation", "Metallography", "Corrosion Analysis", "Nanotechnology", "Python"],
          projects: [
            "DFT Computational Modeling of High-Capacity Solid-State Battery Anodes",
            "Microstructural Grain Size & Hardness Analysis of Heat-Treated Steel Alloys",
            "Thin-Film Graphene Coating Synthesis for Corrosion Protection"
          ],
          portfolioAdvice: "Include SEM/XRD spectral interpretation charts, DFT energy calculation files, and alloy heat-treatment logs."
        },
        careersAndPlacements: {
          roles: ["Materials R&D Scientist", "Failure Analysis Engineer", "Metallurgist", "Semiconductor Process Engineer"],
          topRecruiters: ["Tata Steel", "JSW Steel", "Vedanta", "Applied Materials", "Corning", "Intel Materials Division", "ISRO"],
          salaryRange: "₹8 LPA - ₹25+ LPA"
        },
        roadmap: [
          { year: "Year 1", title: "Materials Chemistry & Physics", details: "Master crystallography, thermodynamics, basic chemistry, materials physics." },
          { year: "Year 2", title: "Physical Metallurgy & Testing", details: "Study crystal defects, phase diagrams, mechanical testing (tensile/hardness)." },
          { year: "Year 3", title: "Characterization Tools & Steel/Semiconductor Internship", details: "Learn XRD/SEM analysis techniques, thin film deposition, secure materials lab internship." },
          { year: "Year 4", title: "DFT Modeling & Placements", details: "Learn DFT computational material design, failure analysis, and land steel/materials tech offers." }
        ]
      }
    ]
  }
];

// Helper to look up branch by ID
function getBranchById(id) {
  return ENGINEERING_BRANCHES.find(b => b.id === id);
}

// Category lists for student rank analyzer
const ENTRANCE_CATEGORIES = [
  "General",
  "EWS (Economically Weaker Section)",
  "OBC-NCL (Other Backward Classes)",
  "SC (Scheduled Caste)",
  "ST (Scheduled Tribe)",
  "PWD (Persons with Disability)",
  "General - Girls",
  "EWS - Girls",
  "OBC-NCL - Girls",
  "SC - Girls",
  "ST - Girls",
  "PWD - Girls"
];
