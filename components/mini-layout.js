import { Nav } from "./nav";
import { PageTransition } from "./page-transition";

export function MiniLayout({ children }) {
  return (
    <div className="layout">
      <div className="container">
        <Nav />
        <PageTransition>{children}</PageTransition>
      </div>

      <style jsx>{`
        .layout {
          min-height: 100vh;
          background: rgb(21,21,21);
          color: #f4f4f4;
          line-height: 1.5;
        }

        .container {
          max-width: 740px;
          margin: auto;
          padding-top: 20px;
          padding-left: 24px;
          padding-right: 24px;
          padding-bottom: 20px;
        }

      `}</style>
    </div>
  );
}
