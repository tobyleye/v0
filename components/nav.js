import { useRouter } from "next/router";
import Link from "next/link";

export function Nav() {
  return (
    <nav className="nav">
      <NavLink href="/">
        {`<`}Tobi{`/>`}
      </NavLink>
      <NavLink href="/projects">work</NavLink>
      <NavLink href="/about">personal</NavLink>
      <style jsx>{`
        .nav {
          display: flex;
          margin-bottom: 50px;
          gap: 20px;
        }
      `}</style>
    </nav>
  );
}

function NavLink({ href, children }) {
  const router = useRouter();
  const path = router.asPath;
  const active = href === "/" ? href === path : path.includes(href);

  return (
    <div>
      <Link href={href} className={`nav-link ${active ? "active" : ""}`}>
        {children}
      </Link>

      <style jsx global>{`
          .nav-link {
            position: relative;
            transition: 0.24s ease;
            font-size: 18px;
            text-tra
          }
  
          .nav-link::before {
            content: "";
            height: 1px;
            position: absolute;
            left: 0;
            bottom: -2px;
            background: yellow;
            width: 0;
            transition: 0.24s ease;
          }
          .nav-link.active {
            color: yellow;
          }
  
          .nav-link.active::before {
            width: 100%;
          }
        `}</style>
    </div>
  );
}
