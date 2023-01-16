import Image from "next/image";
import { client, groq } from "../lib/client";
import Link from "next/link";
import { Contact } from "../components/contact";
import { useState } from "react";

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
  const [showContact, setShowContact] = useState(false);
  return (
    <section className="index">
      <Contact open={showContact} onClose={() => setShowContact(false)} />
      <header className="intro">
        <div className="intro-row">
          <div className="intro-left">
            <h1 className="intro-text">
              <div>Hey There,</div>
              <div>
                {`My name is Tobi Oyeleye, I'm a software engineer focusing on
              building performant, modern & delightful web experiences.
              `}
              </div>
            </h1>
            <div className="btns">
              <Link href="/projects">
                <button className="project-btn">See projects</button>
              </Link>
              <button
                className="resume-btn"
                onClick={() => setShowContact(true)}
              >
                Contact me
              </button>
            </div>
          </div>
          <div>
            <div className="avatar-frame">
              <div className="avatar">
                <Image
                  fill
                  src={data.avatar.url}
                  alt="avatar"
                  priority={true}
                  placeholder="blur"
                  blurDataURL={data.avatar.placeholder}
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="body"></div>

      <style jsx>{`
        .intro {
          border-bottom: 1px solid #f4f4f4;
          padding-bottom: 28px;
        }

        .intro-row {
          margin-bottom: 5px;
          display: flex;
          flex-direction: column-reverse;
          gap: 24px;
        }

        .intro-left {
          width: 100%;
        }

        .intro-right {
          width: 30%;
        }

        .btns {
          display: flex;
          flex-wrap: wrap;
          margin-top: 28px;
          column-gap: 14px;
          row-gap: 10px;
        }

        .btns button {
          border: none;
          background: trasparent;
          cursor: pointer;
          font-size: 18px;
          padding: 0px 20px;
          height: 46px;
          border-radius: 5px;
        }

        .btns .resume-btn {
          background: none;
          color: yellow;
          border: 2px solid white;
        }

        .btns .resume-btn:hover {
        }

        .btns .project-btn {
          background: white;
          color: var(--black);
          text-transform: capitalize;
        }

        .intro-text {
          font-size: 30px;
          animation: come_in 0.95s ease;
        }

        .intro-text div:first-child {
          font-size: 36px;
          margin-bottom: 8px;
        }

        .intro-text div:last-child {
          font-size: 24px;
          font-weight: 600;
          color: #ccc;
          font-weight: 400;
        }

        .avatar-frame {
          border: 3px solid yellow;
          padding: 5px;
          border-radius: 99px;
          display: inline-block;
        }

        .avatar {
          width: 100px;
          height: 100px;
          border-radius: 99px;
          overflow: hidden;
          position: relative;
          animation: roll_in_avatar 0.8s ease;
        }

        .body {
          animation: body 1.2s ease 0.6s both;
          margin-top: 50px;
          color: #ccc;
          line-height: 1.6;
          font-size: 18px;
        }

        .body p {
          margin-bottom: 20px;
        }

        @media (min-width: 600px) {
          .intro-row {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
          }

          .intro-left {
            width: 66%;
          }

          .intro-text div:first-child {
            font-size: 48px;
          }

          .avatar-frame {
            border: 4px solid yellow;
            padding: 6px;
          }

          .avatar {
            width: 160px;
            height: 160px;
          }
        }

        @keyframes roll_in_avatar {
          0% {
            transform: translateX(115%) rotate(180deg);
          }

          100% {
            transform: translateX(0) rotate(0);
          }
        }

        @keyframes come_in {
          0% {
            transform: scale(1.2);
            opacity: 0;
          }

          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes body {
          0% {
            transform: translateY(20px);
            opacity: 0;
          }

          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
}
