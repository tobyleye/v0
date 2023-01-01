import Link from "next/link";

export default function Work() {
  return (
    <section className="work">
      <h2 style={{ marginBottom: 20 }}>
        A few projects i had the honor to work on...
      </h2>
      <div style={{ display: "flex" }}>
        <Project name="Memory" desc="a game for training your brain" />
      </div>
      <div style={{ marginTop: 20 }}>
        <Link href="/">Go back</Link>
      </div>
    </section>
  );
}

function Project({ name, desc }) {
  return (
    <div className="project">
      <h3>{name}</h3>
      <p>{desc}</p>

      <style jsx>{`
        .project {
          border: 1px solid gray;
          padding: 20px;
          padding-top: 80px;
          border-radius: 5px;
          background: white;
          color: black;
        }
      `}</style>
    </div>
  );
}
