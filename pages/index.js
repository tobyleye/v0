import Image from "next/image";
import { client, groq } from "../lib/client";

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
    <section className="index">
      <header className="intro">
        <div className="intro-row">
          <div className="intro-left">
            <h1 className="intro-text">
              <div>Hi Deer,</div>
              <div>
                {`My name is Tobi Oyeleye, I'm a software engineer focusing on
              building performant, modern & delightful web experiences.
              `}
              </div>
            </h1>
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
      <div className="body">
        <p></p>
      </div>

      <style jsx>{`
        .intro-row {
          border-bottom: 1px solid #f4f4f4;
          padding-bottom: 28px;
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

        .intro-text {
          font-size: 30px;
          animation: come_in 0.95s ease;
        }

        .intro-text div:first-child {
          font-size: 44px;
          margin-bottom: 10px;
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
          animation: body 1.4s ease;
          animation-delay: 0.68s;
          animation-fill-mode: both;
          margin-top: 50px;
          font-size: 20px;
          color: #ccc;
          line-height: 1.6;
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
