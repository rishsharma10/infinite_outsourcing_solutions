import { HOMEPAGE } from "@/utils/content";
import {
  ComputerIcon,
  HandIcon,
  Zap,
  Layers,
  Atom,
  Globe,
  Handshake,
} from "lucide-react";

const why_choose_us = [
  {
    title: "Scalability",
    description:
      "From one hire to hundreds, our solutions flex with your needs, eliminating costly long-term commitments.",
    icon: <Layers />, // 📚 Represents scalable stacked layers
  },
  {
    title: "Innovation",
    description:
      "We integrate AI and automation to deliver smarter workforce management and operational efficiency.",
    icon: <Atom />, // ⚛️ Represents science, innovation, and technology
  },
  {
    title: "Global Expertise",
    description:
      "With a presence in 20 cities, we bring best practices and diverse talent pools to US businesses.",
    icon: <Globe />, // 🌐 Represents worldwide expertise
  },
  {
    title: "Client-Centricity",
    description:
      "We prioritize your success, offering personalized support and tailored solutions.",
    icon: <Handshake />, // 🤝 Represents partnership and customer focus
  },
];
const NewWhyChooseUs = () => {
  return (
    <>
      <section className="new-why-chooseUs">
        <div className="container">
          <div className="row g-3" style={{ alignItems: "stretch" }}>
            <div className="col-md-4">
              <div className="choose-us-title-container">
                <div className="choose-us-title-inner chooseUs-flip-card-1">
                  <HandIcon />
                  <h3 className="mt-3">Why Choose Us</h3>
                  <p className="mb-4">
                    For example, a US manufacturing client needed to scale
                    production during a peak season. Using Vorkz.ai, we placed
                    50 skilled workers within a week, increasing output by 30%
                    without delays. This commitment to speed and quality defines
                    our approach.
                  </p>
                </div>
                <div className="choose-us-title-inner chooseUs-flip-card-2">
                  <Zap />
                  <h3 className="mt-3">{HOMEPAGE.why_choose_us[0].title}</h3>
                  <p className="mb-4">
                    {HOMEPAGE.why_choose_us[0]?.description}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="row g-2">
                {why_choose_us.map((res, index) => (
                  <div key={index} className="col-md-6">
                    <div className="choose-us-card h-100">
                      {res.icon}
                      <h3 className="mt-3">{res.title}</h3>
                      <p>{res.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default NewWhyChooseUs;
