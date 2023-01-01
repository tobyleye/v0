import { useRouter } from "next/router";
import Link from "next/link";


export function NavLink({ href, children }) {
    const router = useRouter();
    // direct comparison will be just fine since there are no nested paths
    let active = router.asPath === href;
    return (
      <div>
        <Link href={href} className={`link ${active ? "active" : ""}`}>
          {children}
        </Link>
  
        <style jsx global>{`
          .link {
            position: relative;
            transition: 0.24s ease;
          }
  
          .link::before {
            content: "";
            height: 1px;
            position: absolute;
            left: 0;
            bottom: -2px;
            background: yellow;
            width: 0;
            transition: 0.24s ease;
          }
          .link.active {
            color: yellow;
          }
  
          .link.active::before {
            width: 100%;
          }
        `}</style>
      </div>
    );
  }
  