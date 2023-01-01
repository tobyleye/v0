import Link from "next/link";

export default function Home() {
  return (
    <section>
      <header className="intro">
        <h1>
          Hi my name is Tobi Oyeleye, I'm a software engineer focusing on
          building performant & delightful web experiences
        </h1>
      </header>

      <Link href="/work">see works</Link>

      <style jsx>{`
        .intro {
          border-bottom: 1px solid #f4f4f4;
          padding-bottom: 12px;
          margin-bottom: 20px;
        }
      `}</style>
    </section>
  );
}
