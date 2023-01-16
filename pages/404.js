import Link from "next/link";

export default function PageNotFound() {
  return (
    <div className="not-found">
      <p>
        Sorry, the page you are looking for does not exist.
      </p>
      <Link href="/" className="link">
        Take me home
      </Link>
      <style jsx>{`
        .not-found {
          text-align: center;
        }
        .not-found p {
          margin-bottom: 10px;
          font-size: 18px;
        }
      `}</style>
    </div>
  );
}
