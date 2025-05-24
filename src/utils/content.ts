import { Zap, Layers, Atom, Globe, Handshake } from 'lucide-react';
import staffing from "@/assets/staffing.jpg"
import recruiting from "@/assets/recruiting.jpg"
import consilting from "@/assets/consulting.jpg"
import warehouse from "@/assets/warehouse.jpg"

export const HOMEPAGE = {
  heading: "Transform Your Business with",
  sub_heading: `Empower Your Growth with AI-Driven Workforce Solutions
In today’s fast-paced US market, businesses need agile, cost-effective solutions to stay
competitive. Infinite Outsourcing Solutions delivers AI-powered staffing, recruiting, consulting,
and warehouse automation services tailored to your needs. Reduce hiring time, boost efficiency,
and scale smarter with our innovative approach.`,

  company_overview: {
    desc_1: `Infinite Outsourcing Solutions is a global leader in workforce solutions, bringing over 13 years of
experience to the US market. With operations in 20 cities across three countries, we’ve placed
over 8,000 candidates and served more than 100 satisfied clients. Our mission is to be the only
workforce solutions provider you need, driving growth, enhancing efficiency, and delivering
exceptional service.`,
    desc_2: `Our unique blend of human expertise and artificial intelligence sets us apart. By leveraging our
proprietary Vorkz.ai platform, we match talent to roles with unmatched speed and precision,
reducing hiring time by up to 70%. Whether you’re a small business seeking temporary staff or a
large corporation needing advanced warehouse automation, we provide scalable solutions that
align with your goals.`,
    desc_3: `In the US, businesses face challenges like rising labor costs, talent shortages, and operational
inefficiencies. We address these pain points by offering flexible staffing, expert consulting, and
cutting-edge automation technologies. Our recent expansion into the US market builds on our
global success, including strategic acquisitions like EMC Global Consulting and partnerships
with innovators like RAPYUTA ROBOTICS.`,
  },
  why_choose_us: [
    {
      title: "Speed to Hire",
      description:
        "Our AI-driven Vorkz.ai platform analyzes candidate data in real-time, filling roles in days, not weeks. This ensures your business stays agile and responsive.",
      icon: Zap, // ⚡ Represents speed and energy
    },
    {
      title: "Scalability",
      description:
        "From one hire to hundreds, our solutions flex with your needs, eliminating costly long-term commitments.",
      icon: Layers, // 📚 Represents scalable stacked layers
    },
    {
      title: "Innovation",
      description:
        "We integrate AI and automation to deliver smarter workforce management and operational efficiency.",
      icon: Atom, // ⚛️ Represents science, innovation, and technology
    },
    {
      title: "Global Expertise",
      description:
        "With a presence in 20 cities, we bring best practices and diverse talent pools to US businesses.",
      icon: Globe, // 🌐 Represents worldwide expertise
    },
    {
      title: "Client-Centricity",
      description:
        "We prioritize your success, offering personalized support and tailored solutions.",
      icon: Handshake, // 🤝 Represents partnership and customer focus
    },
  ],
  about_us: {
    our_story: [
      `Founded in 2010, Infinite Outsourcing Solutions began with a vision to transform workforce
    management. Starting as a small staffing firm, we quickly recognized the potential of technology
    to solve common business challenges. Over 13 years, we’ve grown into a global leader,
    operating in 20 cities across three countries and serving over 100 clients`,

      `Our entry into the US market in 2020 marked a significant milestone. Building on our global
    success, we brought our AI-driven solutions to American businesses facing talent shortages and
    rising costs. Strategic moves, like acquiring EMC Global Consulting, expanded our expertise in
    IT, finance, and operations, while partnerships with innovators like RAPYUTA ROBOTICS
    enhanced our warehouse automation offerings.`,

      `Today, Infinite Outsourcing Solutions is trusted by US businesses for our ability to deliver fast,
    scalable, and innovative solutions. From placing over 8,000 candidates to implementing
    AI-driven automation, we’re committed to driving your success.`,
    ],
    mission: `To be the sole workforce solutions firm our clients need by driving growth, enhancing efficiency,
and elevating customer experience with premium service and support.`,
    vision: `To redefine workforce solutions by integrating human expertise with artificial intelligence,
creating a smarter, faster, and more personalized recruiting experience that empowers
businesses and talent`,
    core_values: [
      {
        title: "Innovation",
        description:
          "We pioneer AI-driven solutions to stay ahead of industry trends.",
      },
      {
        title: "Client-Centricity",
        description: "Your goals drive our strategies and actions.",
      },
      {
        title: "Excellence",
        description: "We deliver unmatched quality in every service.",
      },
      {
        title: "Collaboration",
        description: "We build partnerships for long-term success.",
      },
      {
        title: "Integrity",
        description: "Transparency and ethics guide our operations.",
      },
      {
        title: "Adaptability",
        description: "We evolve to meet changing market demands.",
      },
    ],
    global_presense: `With operations in 20 cities across three countries, we bring a wealth of experience to the US
market. Our global network allows us to access diverse talent pools and implement best
practices, ensuring US clients benefit from world-class solutions.`,
    community_involvement: `We believe in giving back. Our initiatives include workforce training programs and partnerships
with local US charities to support economic development.`,
    leadership: [
      {
        title: "CEO",
        name: "Ragavan Baladurai",
      },
      {
        title: "CTO",
        name: "Binu Vijayvasankar",
      },
      {
        title: "VPO",
        name: "Wallace Chase",
      },
    ],
  },
  our_services: {
    title: `We offer a comprehensive suite of outsourcing services designed for US businesses.`,
    services: [
      {
        image:staffing.src,
        title: "Staffing",
        description:
          "Need temporary workers for industrial, clerical, or call center roles? Our staffing solutions provide pre-vetted candidates quickly, ensuring seamless operations.",
        cta: "Learn More",
      },
      {
        image:recruiting.src,
        title: "Recruiting",
        description:
          "From executives to specialists, our permanent placement services deliver top talent aligned with your business goals.",
        cta: "Learn More",
      },
      {
        image:consilting.src,
        title: "Consulting",
        description:
          "Our experts in IT, finance, and operations provide strategic insights to navigate complex challenges and drive growth.",
        cta: "Learn More",
      },
      {
        image:warehouse.src,
        title: "Warehouse Automation",
        description:
          "Transform your logistics with AI-driven robotics and automation solutions.",
        cta: "Learn More",
      },
    ],
    service_desc: `Each service leverages Vorkz.ai to deliver faster, smarter results. For instance, our warehouse
automation solutions have helped US supply chain companies reduce order fulfillment errors by
25%.`,
  },
  client_success_stories: `"Infinite Outsourcing Solutions revolutionized our hiring process. Their AI-driven staffing filled
critical roles in days, helping us meet tight deadlines." – HR Director, US Manufacturing Firm
"The warehouse automation solutions from Infinite cut our operational costs by 20%. Their team
was with us every step of the way." – Logistics Manager, Supply Chain Company`,
};
