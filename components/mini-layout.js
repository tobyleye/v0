import { NavLink } from "./nav";
import { PageTransition } from "./page-transition";

export function MiniLayout({ children }) {
  return (
    <div className="layout">
      <div className="container">
        <nav className="nav">
          <NavLink href="/">
            /tobi <span title="in progress">🚧</span>
          </NavLink>
          <NavLink href="/projects">work</NavLink>
          <NavLink href="/about">personal</NavLink>
        </nav>
        <PageTransition>{children}</PageTransition>
      </div>

      <style jsx>{`
        .layout {
          min-height: 100vh;
          background: #212121;
          color: #f4f4f4;
          line-height: 1.5;
          padding: 18;
        }

        .container {
          max-width: 840px;
          margin: auto;
          padding-top: 20px;
          padding-left: 16px;
          padding-right: 16px;
        }

        .nav {
          display: flex;
          margin-bottom: 50px;
          gap: 20px;
        }
      `}</style>
    </div>
  );
}
