import { NavLink } from "./nav";

export function MiniLayout({ children }) {
  return (
    <div className="layout">
      <div className="container">
        <nav className="nav">
          <NavLink href="/">/tobi <span title="in progress">🚧</span></NavLink>
          <NavLink href="/work">work</NavLink>
          <NavLink href="/about">personal</NavLink>
        </nav>
        {children}
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
          max-width: 540px;
          margin: auto;
          padding-top: 20px;
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
