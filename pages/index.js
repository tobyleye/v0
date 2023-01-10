import Link from "next/link";

export default function Home() {
  return (
    <section className="index">
      <header className="intro">
        <h1>
          {`Hi, my name is Tobi Oyeleye, I'm a software engineer focusing on
          building performant, modern & delightful web experiences`}
        </h1>
      </header>
      {/* <div className="body">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        </p>
        <Link href="/work">see works</Link>
      </div> */}

      <style jsx>{`


        .intro {
          border-bottom: 1px solid #f4f4f4;
          padding-bottom: 12px;
          margin-bottom: 5px;
        }

        .intro h1 {
          font-size: 30px;
          animation: come_in 0.8s ease;
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

        .body {
          animation: body 1.4s ease;
          animation-delay: 0.68s;
          animation-fill-mode: both;
          font-size: 18px;
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
