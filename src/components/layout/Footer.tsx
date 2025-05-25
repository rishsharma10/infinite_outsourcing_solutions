import dynamic from "next/dynamic";
import Head from "next/head";
import styles from "@/styles/Footer.module.css";

const ParticlesScene = dynamic(() => import("@/components/animationFooter"), { ssr: false });

export default function Footer() {
  
  return (
    <>
       <Head>
        <title>MIOTI Style Page</title>
      </Head>
      <ParticlesScene />
    </>
  );
}
