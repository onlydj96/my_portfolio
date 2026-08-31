interface ProjectTranslation {
  title: string;
  subtitle: string;
  summary: string;
  role: string[];
  problem: string;
  solution: string;
  responsibilities: string[];
  achievements: string[];
  lessonsLearned?: string;
  gallery?: Array<{ caption?: string }>;
}

export const projectTranslationsEn: Record<string, ProjectTranslation> = {
  "notion-workspace": {
    title: "Company-Wide Collaboration System Built on Notion",
    subtitle:
      "Resolving cross-departmental information fragmentation and digitizing workflows for a 20-person organization",
    summary:
      "In a company of approximately 20 people, I identified information fragmentation and collaboration inefficiencies caused by fragmented tools across departments (GitLab, NAS, CVAT, Figma, Naver Works, Excel), and restructured communication and workflow data management by introducing Notion as the central hub for company-wide operations.",
    role: [
      "Company-wide workflow process analysis",
      "Notion rollout planning and design",
      "Database structure design",
      "Notion API automation",
    ],
    problem:
      "Despite being a ~20-person organization, there was no systematic workflow management system. Development used GitLab, sales and planning used NAS, big data used CVAT, design used Figma, company-wide communication relied on Naver Works, and task management depended on an Excel sheet that had largely lost its function. This led to accumulated information silos across departments and collaboration inefficiencies. There were no reference documents or history for onboarding new hires or knowledge transfer—everything had to be communicated verbally.",
    solution:
      "I introduced Notion not just as a documentation tool, but as the central operational hub for the entire company. Existing tools used by each department (GitLab, NAS, CVAT, Figma, Naver Works) were kept in place while projects, tasks, assignees, schedules, and documents were connected through Notion databases, creating a structure where anyone could monitor operational status in one place. The existing Excel-based workflow management was migrated to Notion, and company-wide data capture and template standardization were carried out in parallel for new hire onboarding and knowledge transfer, establishing a sustainable cross-functional collaboration process.",
    responsibilities: [
      "Analyzed workflow and tool usage across departments (development, sales, planning, big data, design)",
      "Planned and designed the company-wide Notion rollout",
      "Designed project, task, assignee, schedule, and document database structure with Relations and Rollups",
      "Migrated existing Excel-based task management data to Notion",
      "Designed integration structure with existing tools (GitLab, NAS, CVAT, Figma, Naver Works)",
      "Created standard templates and guide documents for new hire onboarding and knowledge transfer",
      "Automated repetitive tasks using the Notion API",
      "Conducted company-wide user training and established operational policies",
    ],
    achievements: [
      "Consolidated dispersed departmental information into Notion, establishing a company-wide collaboration system",
      "Secured reference documents and history for new hire onboarding and knowledge transfer",
      "Migrated Excel-based task management to Notion, enabling practical task tracking",
      "Streamlined repetitive tasks through Notion API automation",
    ],
    gallery: [
      {
        caption:
          "Team task status — Weekly tasks by assignee and sprint progress tracked in Notion DB",
      },
      {
        caption:
          "Company-wide project timeline — Milestones and schedules for all projects visible in a single view",
      },
    ],
  },

  "ai-agent-adoption": {
    title: "Company-Wide AI Agent Adoption and Development Process Systematization",
    subtitle:
      "From Claude Code team-wide rollout to building a Harness Engineering framework",
    summary:
      "To assess developers' AI Agent usage and improve inefficient practices, I led weekly study sessions and spearheaded the company-wide adoption of Claude Code to systematize AI-driven development processes.",
    role: [
      "AI Agent company-wide adoption planning",
      "Weekly study session facilitation",
      "Harness Engineering framework design",
    ],
    problem:
      "Developers had spontaneously started using AI Agents, but only at a basic Q&A level. Tools kept accumulating without any understanding of prompt writing or context structuring, and it was difficult to feel a meaningful change in development productivity even with AI.",
    solution:
      "I took a two-pronged approach. On the capability side, I planned and ran weekly AI Agent study sessions, progressively elevating the team's proficiency from Prompt Engineering basics through Context Engineering to Harness Engineering. On the environment side, I proposed the adoption of Claude Code team accounts to the company, establishing a system where all developers could officially use AI. I also defined AI usage workflows and review standards for different work types, embedding it as a sustainable process.",
    responsibilities: [
      "Assessed developers' AI usage and analyzed inefficient structures",
      "Planned and operated weekly AI Agent study sessions (Prompt Engineering → Context Engineering → Harness Engineering)",
      "Proposed and led the company-wide adoption of Claude Code team accounts",
      "Defined AI usage workflows by work type",
      "Designed a review system for AI-generated code and documents",
      "Created and distributed an AI usage guide for the development team",
    ],
    achievements: [
      "Built an official AI Agent usage environment for all developers through Claude Code team account adoption",
      "Elevated the team's AI proficiency through weekly study sessions",
      "Streamlined repetitive tasks by establishing AI-based development processes",
    ],
  },

  "crowd-monitoring": {
    title: "3D Reconstruction-Based Dense Crowd Monitoring System",
    subtitle:
      "Real-space crowd density analysis with perspective distortion removed via BEV coordinate projection",
    summary:
      "To resolve the fundamental limitation of 2D camera perspective distortion in conventional YOLO/Density Estimation-based monitoring, I researched and developed a spatial crowd density analysis system combining 3D Reconstruction and BEV (Bird's-Eye View) projection, and deployed it to production.",
    role: [
      "System research and design",
      "Crowd Density Estimation model development",
      "3D Reconstruction and BEV pipeline implementation",
      "Development PM",
    ],
    problem:
      "Existing YOLO-based object detection and density estimation-based crowd counting are both analyzed from a 2D camera view perspective. As a result, the same area in an image covers different actual surface areas depending on the distance and angle of the camera—a perspective distortion issue. This makes it difficult to accurately calculate absolute density metrics like 'how many people per 1m² in real space' based solely on pixel-counted people or density maps.",
    solution:
      "I performed 3D Reconstruction of the physical site to restore the actual spatial structure, then converted the resulting 3D point cloud to BEV coordinates. By aligning and mapping the coordinate relationship between the camera view and 3D reconstructed space, the density information from the Crowd Density Estimation model was projected into BEV space to eliminate perspective distortion. High-density regions in BEV were then spatially clustered to separately calculate the areas and densities of crowd formations. Full pipeline: Camera View → Crowd Density Estimation → Camera–3D Alignment → BEV Projection → Spatial Density Mapping → Density Clustering → Congestion Detection",
    responsibilities: [
      "Developed Crowd Density Estimation model and built dataset with annotation standards",
      "Performed 3D Reconstruction of the site and generated BEV coordinate system",
      "Implemented alignment and mapping between camera view and 3D space",
      "Implemented Density Map BEV projection and Spatial Density Mapping",
      "Developed clustering logic and area/density calculation for high-density regions in BEV",
      "Optimized model for Edge AI deployment and integrated with monitoring server",
      "Conducted field testing, performance validation, and managed client communications and scheduling",
    ],
    achievements: [
      "Researched, developed, and deployed a crowd density system based on actual spatial area—beyond simple headcounting—to detect high-density zones",
      "Eliminated Camera View perspective distortion to enable absolute spatial density calculation",
      "Completed integration with the monitoring display and notification systems",
    ],
    gallery: [
      {
        caption:
          "Full pipeline — System architecture from Camera View through Crowd Density Estimation, 3D Alignment, BEV Projection, Spatial Clustering to Congestion Detection",
      },
    ],
  },

  "intention-classification": {
    title: "Domain-Specific BERT-Based Intent Classification Model Development",
    subtitle: "Medical and insurance domain intent classification via Domain Adaptive Pre-training",
    summary:
      "During the COVID-19 period, general-purpose language models failed to understand medical and insurance domain-specific terminology and neologisms in consultation services. I addressed this through Domain Adaptive Pre-training and a distributed training environment.",
    role: [
      "NLP model development",
      "Domain Adaptive Pre-training",
      "Distributed training environment setup",
    ],
    problem:
      "General-purpose BERT models frequently misclassified intents due to their inability to handle medical and insurance domain-specific terminology, COVID-related neologisms, and consultation text styles.",
    solution:
      "Using a self-built medical and insurance domain corpus, I applied Domain Adaptive Pre-training (MLM) to BERT, then fine-tuned it on the Intent Classification task. I built a PyTorch DDP distributed training environment using 4 A100 GPUs to efficiently train large-scale models.",
    responsibilities: [
      "Built medical and insurance domain corpus and designed preprocessing pipeline",
      "Performed BERT-based Domain Adaptive Pre-training (MLM)",
      "Fine-tuned Intent Classification task and optimized Classification Head",
      "Analyzed misclassification patterns through Error Analysis and conducted improvement experiments",
      "Built PyTorch DDP distributed training environment using 4 A100 GPUs",
      "Applied Mixed Precision Training and optimized training time",
      "Hyperparameter tuning (Learning Rate, Batch Size, Warmup Steps)",
      "Conducted comparative analysis against the external model and evaluated feasibility of model replacement",
    ],
    achievements: [
      "Improved medical and insurance terminology comprehension through domain-specific BERT model development",
      "Reduced intent misclassification rate and improved accuracy to production-applicable levels",
      "Completed evaluation of proprietary model transition and verified technical feasibility",
      "Gained large-scale model training experience by building a distributed training environment",
    ],
  },

  "nas-gitlab-infrastructure": {
    title: "NAS and GitLab-Based Development Asset Management System",
    subtitle: "Infrastructure for code, model, and data management",
    summary:
      "Established a NAS and GitLab-based development asset management system to ensure continuous accumulation, tracking, and handover of the development team's code and organizational documentation.",
    role: ["Development infrastructure setup", "Version management system establishment"],
    problem:
      "Systematic management was needed for dispersed code, models, data, development documents, and company materials.",
    solution: "Operated in-house NAS and GitLab and established management standards.",
    responsibilities: [
      "Managed GitLab project and repository structure",
      "Established code version management system",
      "Defined branch and merge request operation standards",
      "Managed project and organization access permissions",
      "Designed NAS folder and document classification structure",
      "Managed model weights, datasets, and deployment artifacts",
      "Organized project creation, operation, closure, and handover procedures",
      "Operated backup and development asset management processes",
    ],
    achievements: [
      "Completed development asset management system setup",
      "Enabled code and document tracking and handover",
    ],
  },

  "edge-ai-solution": {
    title: "Edge AI Solution Development",
    subtitle: "Real-time Video Analysis System based on NVIDIA Jetson · RKNN NPU · DEEPX",
    summary:
      "Developed an Edge AI video analysis system to run Computer Vision models in real-time across diverse Edge Devices. Built GPU-based inference systems centered on NVIDIA Jetson product lines, then expanded to RKNN / DEEPX NPU-based inference on ODROID and Orange Pi platforms. Beyond simple model execution, built a complete Edge Pipeline covering video input → AI inference → post-processing → counting → server transmission, optimized to handle multiple cameras stably on limited compute resources.",
    role: ["Edge AI development", "Inference pipeline optimization", "Device integration", "Field deployment"],
    problem:
      "There was a requirement to run AI models independently in field environments without relying on cloud or central servers. A system was needed that could operate across diverse Edge Device platforms (GPU, NPU), stably handle multiple cameras under limited compute resources, and transmit inference results to a server in real time as part of an end-to-end pipeline.",
    solution:
      "Built a GPU pipeline using NVIDIA DeepStream on Jetson products as the primary platform, establishing a multi-camera real-time inference environment. Jetson Orin Nano served as the primary Edge Device for traffic counting and crowd counting systems, with CPU usage minimized and GPU and Hardware Decoder fully utilized for multi-RTSP stream processing. Subsequently expanded to RKNN NPU on ODROID and DEEPX NPU on Orange Pi for low-power compact Edge Devices, building an Edge AI architecture not locked to a specific platform.",
    responsibilities: [
      "Set up NVIDIA Jetson-based Edge AI execution environments",
      "Developed DeepStream-based multi-camera video pipeline",
      "RTSP multi-stream real-time processing",
      "Model optimization and inference with TensorRT",
      "Detection / Tracking / Counting pipeline development",
      "Performance and compatibility validation per Jetson device",
      "RKNN NPU-based AI model conversion and runtime integration",
      "DEEPX NPU-based Edge AI system development",
      "CPU / GPU / NPU compute distribution and pipeline optimization",
      "Data integration between Edge Device and central server",
      "Transmission of inference results, images, and device status",
      "Field network and Edge Device installation",
      "Field incident analysis and response",
    ],
    achievements: [
      "Acquired hands-on experience with diverse Edge AI hardware platforms spanning Jetson to NPU",
      "Built Orin Nano-based multi-camera real-time video analysis system",
      "Optimized GPU video processing pipeline with DeepStream and TensorRT",
      "Deployed traffic counting and crowd counting systems to actual Edge Devices in the field",
      "Extended Edge AI architecture to NPU environments using RKNN and DEEPX",
      "Built complete end-to-end Edge AI system: Device → Inference → Network → Server → Field Deployment",
    ],
  },

  spacehong: {
    title: "Spacehong Venue Full-Stack Web Service Development",
    subtitle: "Reservation system for Hongdae's largest performance venue",
    summary:
      "I was responsible for the end-to-end development of the official website for Spacehong, one of the most well-known performance venues in Hongdae, from design to deployment. I built a real-time reservation management system using a React-based frontend, Node.js backend, and infrastructure with Vercel, Render, and Supabase.",
    role: ["Full-stack development", "Infrastructure setup", "Service planning"],
    problem:
      "Spacehong, a leading Hongdae performance venue, needed a systematic web platform for customer reservation management and venue information. A system capable of efficiently handling real-time reservation requests, customer inquiries, and performance schedule management was required.",
    solution:
      "I built the user interface as a React and TypeScript SPA (Single Page Application) and developed the reservation management API with a Node.js backend. I established a stable service infrastructure using Vercel for frontend deployment, Render for backend server operation, and Supabase for database and authentication management. I also implemented an automated email dispatch system for reservation requests to support real-time communication between customers and administrators.",
    responsibilities: [
      "Service planning and requirements definition",
      "Full frontend development with React + TypeScript",
      "Responsive UI/UX design and implementation",
      "Node.js backend API server development",
      "Reservation management system design and implementation",
      "Implemented automated email dispatch for customer reservations",
      "Designed and integrated Supabase database schema",
      "Deployment and infrastructure setup using Vercel and Render",
      "Real-time reservation status management system implementation",
      "Administrator dashboard development",
      "Service operation and continuous maintenance",
      "Feature improvements based on customer feedback",
    ],
    achievements: [
      "Live service with 600+ monthly visitors",
      "Completed full website development for a leading Hongdae performance venue",
      "Commercialized real-time reservation management system",
      "Improved customer response efficiency through automated email dispatch",
      "Stable service operation based on Vercel + Render + Supabase",
      "Gained full-stack development experience with React + Node.js",
    ],
  },

  "ocr-scene-text": {
    title: "Scene Text OCR-Based Image Translation Service",
    subtitle: "Natural environment text recognition and translation system",
    summary:
      "I developed an OCR service that recognizes and translates text from natural environments (Scene Text) rather than documents. Using an EAST-based detection pipeline with separated Detection and Recognition stages, I achieved high accuracy on real-world signs, menus, and other scene text.",
    role: ["OCR model development", "Detection & Recognition pipeline design"],
    problem:
      "Conventional OCR achieves high accuracy with structured documents but suffers significant accuracy degradation on Scene Text such as real-world signs or menus, due to varying backgrounds, lighting conditions, and rotated text.",
    solution:
      "I took a decoupled approach, separating Text Detection and Recognition. In the detection stage, I applied the EAST model specialized for Scene Text, and in the recognition stage, I designed a structure that individually recognizes each detected text region. Each module was designed to be independently improvable through modularization, enhancing the overall system's maintainability.",
    responsibilities: [
      "Analyzed OCR papers and understood EAST model architecture",
      "Implemented Scene Text Detection model",
      "Built dataset and designed preprocessing pipeline",
      "Post-processed detection results and integrated with recognition",
      "Composed Detection-Recognition integrated pipeline",
      "Integrated translation API and implemented end-to-end service",
      "Trained model and evaluated performance",
      "Designed and implemented the entire system",
    ],
    achievements: [
      "Built Scene Text Detection and Recognition pipeline",
      "Enabled independent performance improvement through separated Detection and Recognition modules",
      "Implemented end-to-end service from image input to translation output",
      "Experienced the entire process from paper analysis to actual implementation",
      "Gained AI service development capability from a system design perspective",
    ],
    lessonsLearned:
      "Through this project, I learned that reading and implementing research papers is fundamentally different from building a real service. I experienced firsthand that data quality, preprocessing, pipeline construction, and post-processing methods have a significant impact on overall performance—beyond merely understanding model architecture.\n\nIn subsequent projects, I began approaching problems from a system design perspective rather than focusing solely on model performance, and this experience became the foundation for developing NLP, Computer Vision, Edge AI, and RAG systems. The experience of designing a separated Detection and Recognition architecture—allowing each to be improved independently—was invaluable in applying the principles of modularity and Separation of Concerns in future projects.",
  },
};
