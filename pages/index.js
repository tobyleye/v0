import Image from "next/image";
import { client, groq } from "../lib/client";
import {
  GolangLogo,
  PythonLogo,
  TypescriptLogo,
  ReactLogo,
  NodejsLogo,
} from "../components/logos";
import { HiOutlineMail } from "react-icons/hi";
import { TfiGithub } from "react-icons/tfi";

export async function getStaticProps() {
  const data = await client
    .fetch(
      groq`*[_type == "homePage"]{
    "avatar": {
        "url": avatar.asset->url,
        "placeholder": avatar.asset->metadata.lqip,
    }
  }`
    )
    .then((results) => results[0]);
  return {
    props: {
      data,
    },
  };
}

export default function Home({ data }) {
  return (
    <section className="welcome-section">
      <div>
        <figure>
          {data && (
            <Image
              fill
              src={data.avatar.url}
              alt="avatar"
              priority={true}
              placeholder="blur"
              blurDataURL={data.avatar.placeholder}
              style={{ objectFit: "cover" }}
            />
          )}
          <figcaption>my avatar</figcaption>
        </figure>
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

      <style global>
        {`
        .tech-stack svg {
          width: 24px;
          height: 24px;
        }
          `}
      </style>

      <style jsx>{`
        figure {
          width: 150px;
          height: 150px;
          position: relative;
          border-radius: 50%;
          overflow: hidden;
          margin: 0 auto;
          margin-bottom: 20px;
        }
        .welcome-section {
          /* border: 1px solid red; */
          text-align: center;
          padding-top: 15vh;
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
          justify-content: center;
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

        @media (max-width: 600px) {
          .welcome-section {
            padding-top: 10vh;
          }

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
