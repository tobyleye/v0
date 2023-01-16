export default function AboutPage() {
  return (
    <div className="about">
      <p>A simple guy, and a real crowd pleaser.</p>
      <p>
        I love travelling, exploring new things and places, working out, maths
        and recently teaching.
      </p>
      <p>
        I listen to a shit ton of music. Last year alone i listened to over 95k
        minutes of music on youtube music. A feat none of my friends could reach.
      </p>
      <p>
        {`
        My favourite quote is "Great things are done by a series of small things
        brought together."
        `}
      </p>
      <p>
        <a href="https://vs.co/t4mrhelh" target="_blank" rel="noreferrer">
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
      `}</style>
    </div>
  );
}
