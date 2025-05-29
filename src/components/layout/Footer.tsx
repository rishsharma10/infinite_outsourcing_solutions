import dynamic from "next/dynamic";
import Head from "next/head";
import styles from "@/styles/Footer.module.css";
import { FacebookFilled, FacebookOutlined, InstagramOutlined, LinkedinOutlined } from "@ant-design/icons";

const ParticlesScene = dynamic(() => import("@/components/animationFooter"), {
  ssr: false,
});

export default function Footer() {
  return (
    <>
      <footer className="pb-0">
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-12">
              <ParticlesScene />
            </div>
          </div>
          <div className="row align-items-center position-absolute bottom-0 start-0 end-0 mx-auto z-3">
             <div className="col-12">
              <ul className="d-flex align-items-center gap-3 justify-content-center list-unstyled">
                <li>
                  <a href="/" className="text-white opacity-50 fs-14"><FacebookOutlined/></a>
                </li>
                <li>
                  <a href="/" className="text-white opacity-50 fs-14"><LinkedinOutlined/></a>
                </li>
                <li>
                  <a href="/" className="text-white opacity-50 fs-14"><InstagramOutlined/></a>
                </li>
              </ul>
              <ul className="d-flex align-items-center gap-3 justify-content-center list-unstyled">
                <li>
                  <a href="/" className="text-white opacity-50 fs-14">
                    About Us
                  </a>
                </li>
                <li className="text-white opacity-50 fs-14">|</li>
                <li>
                  <a href="/" className="text-white opacity-50 fs-14">
                    Contact Us
                  </a>
                </li>
                <li className="text-white opacity-50 fs-14">|</li>
                <li>
                  <a href="/" className="text-white opacity-50 fs-14">
                    Privacy Policy
                  </a>
                </li>
                <li className="text-white opacity-50 fs-14">|</li>
                <li>
                  <a href="/" className="text-white opacity-50 fs-14">
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
