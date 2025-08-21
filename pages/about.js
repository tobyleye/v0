// import Image from "next/image";

export default function AboutPage() {
  return (
    <div id="about" className="about-container">
      {/* <div className="img-container">
        <img src="/hey.gif" alt="Hi" />
      </div> */}

      <p>
        Hey 👋, <br />
        I’m a software engineer, or more precisely a full stack engineer. That
        means I’m just as comfortable building robust backend systems as I am
        turning designs into responsive, accessible frontends.
      </p>
      <p>
        These days, I mostly work with Go, TypeScript, Nodejs, and React. I
        write Python too (still a fanboy at heart), just not as much.
      </p>

      <p>
        Outside of work, you’ll probably catch me on FIFA,{" "}
        <a href="https://vs.co/qjqnh58v" target="_blank" rel="noreferrer">
          in the gym
        </a>
        , or trying to read.
      </p>
      <p>
        I’m always open to new opportunities so whether you’re building the next
        big thing or looking to add a solid team player to your engineering
        crew, let’s talk. <br />
        Say hi: <a href="mailto:krisella74@gmail.com">krisella74@gmail.com</a>
      </p>

      <style jsx>{`
        .about-container {
          max-width: 52rem;
          margin: auto;
          margin-top: 5.2rem;
        }

        .img-container {
          display: flex;
          justify-content: center;
          margin-bottom: 2rem;
        }

        .img-container img {
          height: 12rem;
        }

        #about p {
          margin-bottom: 1.4rem;
          font-size: 1.2rem;
          line-height: 1.5;
        }

        #about a {
          color: yellow;
          text-decoration: underline;
        }

        @media (max-width: 600px) {
          #about p {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
}
