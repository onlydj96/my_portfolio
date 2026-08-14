interface CareerRoleTranslation {
  role?: string;
  responsibilities: string[];
}

interface CareerTranslation {
  position?: string;
  summary: string;
  roles: CareerRoleTranslation[];
  achievements: string[];
}

export const careerTranslationsEn: Record<string, CareerTranslation> = {
  "1": {
    summary:
      "Performing diverse roles from AI solution development to project management and workflow automation, contributing to the organization's technical capabilities and operational efficiency.",
    roles: [
      {
        role: "AI Engineer",
        responsibilities: [
          "Dense crowd monitoring system development (Crowd Density Estimation)",
          "Edge AI solution development (NVIDIA Jetson, ODROID, DEEPX)",
          "Video analysis solution development based on Computer Vision",
          "AI model optimization and field deployment",
        ],
      },
      {
        role: "Development PM",
        responsibilities: [
          "Project requirements definition and analysis",
          "Project schedule management and progress monitoring",
          "Client communication and requirements coordination",
        ],
      },
      {
        role: "AX Engineer",
        responsibilities: [
          "Design of AI Agent and generative AI tool adoption and usage framework",
          "Company-wide workflow collaboration platform design and operation based on Notion",
          "Development asset management system based on NAS and GitLab",
          "AI-based workflow automation process establishment",
          "Team collaboration workflow improvement",
        ],
      },
    ],
    achievements: [
      "Field deployment of dense crowd monitoring system and commercialization of Edge AI solution",
      "Establishment of AI Agent-based development processes",
      "Company-wide work database and automation system construction",
      "Successful project delivery and improved customer satisfaction",
    ],
  },

  "4": {
    position: "NLP Engineer",
    summary:
      "Worked as an NLP Engineer at a company operating voice consultation services (STT → Normalization → Intent Classification → TTS) for public health centers and insurance companies during the COVID-19 period. The Intent Classification stage relied on an external Azure API, which had limitations handling medical and insurance domain-specific terminology and neologisms. Developed a proprietary Intent Classification model using BERT-based Domain Adaptive Pre-training to replace the Azure API.",
    roles: [
      {
        role: "NLP Engineer",
        responsibilities: [
          "Led development of proprietary model to replace Azure Intent Classification",
          "Built medical and insurance domain corpus and designed preprocessing pipeline",
          "Acquired domain terminology and neologism handling capability through BERT-based Domain Adaptive Pre-training (MLM)",
          "Fine-tuned Intent Classification task and optimized Classification Head",
          "Analyzed misclassification patterns through Error Analysis and conducted improvement experiments",
          "Built PyTorch DDP distributed training environment using 4 A100 GPUs",
          "Applied Mixed Precision Training and optimized training time",
          "Conducted comparative analysis against Azure model and evaluated feasibility of proprietary model transition",
        ],
      },
    ],
    achievements: [
      "Verified technical feasibility and completed transition of Azure Intent Classification API to proprietary BERT model",
      "Acquired medical and insurance domain terminology and neologism handling capability through Domain Adaptive Pre-training",
      "Reduced intent misclassification rate and improved accuracy to commercial service levels",
      "Established large-scale model training infrastructure through distributed training environment (PyTorch DDP, Multi-GPU)",
    ],
  },

  "5": {
    position: "AI Deep Learning Course Graduate",
    summary:
      "Completed the Bitcamp AI Deep Learning curriculum, learning Python-based machine learning and deep learning, Computer Vision, and NLP using TensorFlow and PyTorch. As a graduation project, developed a Scene Text OCR-based image translation service, experiencing the entire process from paper analysis to actual service implementation.",
    roles: [
      {
        role: "Student",
        responsibilities: [
          "Python-based machine learning and deep learning study",
          "TensorFlow and PyTorch framework utilization",
          "Computer Vision technology learning and project work",
          "NLP technology learning and project work",
          "Model design, training, and performance improvement",
          "Scene Text OCR-based image translation service graduation project",
        ],
      },
    ],
    achievements: [
      "Completed AI deep learning curriculum",
      "Completed Scene Text OCR graduation project",
      "Experienced the full development process from paper analysis to actual implementation",
      "Established foundational competency in machine learning and deep learning",
    ],
  },
};
