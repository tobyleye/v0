import { useState } from "react";
import Image from "next/image";
import profilePicture from "../assets/profile.jpg";
import {
  GolangLogo,
  PythonLogo,
  TypescriptLogo,
  ReactLogo,
  NodejsLogo,
} from "../components/logos";
import { HiOutlineMail } from "react-icons/hi";
import { TfiGithub } from "react-icons/tfi";

export default function Home() {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section className="welcome-section">
      <div className="intro">
        <figure>
          <Image
            fill
            src={profilePicture}
            alt="Oyeleye Oluwatobi"
            priority={true}
            sizes="(max-width: 768px) 200px, 280px"
            onLoadingComplete={() => {
              setImageLoaded(true);
            }}
            style={{
              objectFit: "cover",
              objectPosition: "center top",
              opacity: imageLoaded ? 1 : 0,
              transition: "opacity 0.4s ease",
            }}
          />
          {!imageLoaded && <span className="image-loader" aria-hidden="true" />}
        </figure>
        <div className="intro-text">
          <h1 className="who">Oyeleye Oluwatobi</h1>
          <h4 className="what">Software Engineer</h4>
          <div className="tech-stack">
            <span>Fluent in</span>
            <ul>
              <li>
                <GolangLogo />
                Go,
              </li>
              <li>
                <TypescriptLogo />
                Typescript,
              </li>

              <li>
                <NodejsLogo />
                Nodejs,
              </li>

              <li>
                <ReactLogo />
                React,
              </li>

              <li>
                & <PythonLogo /> Python
              </li>
            </ul>
          </div>
        </div>
      </div>

      <section className="contact-links">
        <a
          href="mailto:krisella74@gmail.com?subject=Hello"
          target="_blank"
          rel="noreferrer"
        >
          <span>
            <HiOutlineMail />
          </span>
          Email
        </a>

        <a href="https://github.com/tobyleye" target="_blank" rel="noreferrer">
          <span>
            <TfiGithub />
          </span>
          Github
        </a>
      </section>

      <style jsx global>
        {`
          .tech-stack svg {
            width: 24px;
            height: 24px;
          }
        `}
      </style>

      <style jsx>{`
        .welcome-section {
          padding-top: 12vh;
        }

        .intro {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 56px;
        }

        figure {
          width: 280px;
          aspect-ratio: 4 / 5;
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          flex-shrink: 0;
          background: rgba(255, 255, 255, 0.05);
        }

        .image-loader {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            100deg,
            rgba(255, 255, 255, 0) 30%,
            rgba(255, 255, 255, 0.08) 50%,
            rgba(255, 255, 255, 0) 70%
          );
          background-size: 200% 100%;
          animation: shimmer 1.4s linear infinite;
        }

        @keyframes shimmer {
          from {
            background-position: 200% 0;
          }
          to {
            background-position: -200% 0;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .image-loader {
            animation: none;
          }
        }

        .who {
          font-size: 2.5rem;
          margin-bottom: 0.4rem;
        }

        .what {
          font-size: 1.4rem;
          margin-bottom: 2rem;
          color: rgba(255, 255, 255, 0.8);
        }

        .contact-links {
          position: fixed;
          bottom: 5%;
          left: 5%;
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .contact-links a {
          display: flex;
          align-items: center;
          gap: 4px;
          color: rgba(255, 255, 255, 0.8);
          border-radius: 5px;
          transition: background 0.3s ease;
        }

        .contact-links a span {
          display: inline-grid;
          place-items: center;
        }

        .tech-stack {
          display: flex;
          align-items: center;
          flex-shrink: 0;
        }

        .tech-stack > span {
          margin-right: 15px;
          white-space: nowrap;
          font-weight: 500;
        }

        .tech-stack ul {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 6px;
        }

        .tech-stack li {
          display: inline-flex;
          align-items: center;
          gap: 4px;
        }

        @media (max-width: 768px) {
          .welcome-section {
            padding-top: 6vh;
            padding-bottom: 80px;
          }

          .intro {
            flex-direction: column;
            gap: 24px;
            text-align: center;
          }

          figure {
            width: 200px;
          }

          .tech-stack {
            justify-content: center;
          }
        }

        @media (max-width: 600px) {
          .who {
            font-size: 1.85rem;
          }

          .what {
            font-size: 1.2rem;
          }

          .tech-stack {
            flex-direction: column;
            align-items: center;
            gap: 8px;
          }

          .tech-stack ul {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
