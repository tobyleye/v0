export default function AboutPage() {
  return (
    <div className="about">
      <p>A really simple guy who loves to build amazing products.</p>
      <p>
        Besides building amazing products, I enjoy exploring new things and
        places, listening to music, maths, working out, and teaching.
      </p>
      <div className="fav-quote">
        <p> My favourite quote is</p>
        <p className="quote">
          Great things are done by a series of small things brought together.
        </p>
      </div>
      <p>
        <a href="https://vs.co/qjqnh58v" target="_blank" rel="noreferrer">
          Here
        </a>{" "}
        is a picture of me in the gym.
      </p>

      <style jsx>{`
        .about p {
          margin-bottom: 15px;
          font-size: 20px;
        }

        .about a {
          color: yellow;
          text-decoration: underline;
        }

        .fav-quote {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 5px;
          padding: 20px;
          margin-bottom: 20px;
        }

        .quote {
          position: relative;
          /* padding-left: 27px; */
          font-style: italic;
        }
        /* .quote::before {
          content: '"';
          display: block;
          font-size: 55px;
          position: absolute;
          left: 0;
          top: -25px;
        } */
      `}</style>
    </div>
  );
}
