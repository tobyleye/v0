export default function AboutPage() {
  return (
    <div className="about">
      <p>Life of the party, aspiring eccentric and other things.</p>
      <p>
        I like maths, reading, travelling, working out, pretty things, and recently teaching.
      </p>
      <p>
        My favourite quote is "Great things are done by a series of small things
        brought together."
      </p>
      <p>
        <a href="https://vs.co/t4mrhelh" target="_blank">
          Here
        </a>{" "}
        is a picture of me in the gym.
      </p>

      <style jsx>{`
        .about p {
          margin-bottom: 15px;
        }

        .about a {
          color: yellow;
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
}
