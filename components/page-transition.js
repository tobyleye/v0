import { useRouter } from "next/router";
import { useRef } from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";

export function PageTransition({ children }) {
  const router = useRouter();
  const key = router.pathname;
  const nodeRef = useRef();

  return (
    <SwitchTransition>
      <CSSTransition
        key={key}
        classNames="page"
        nodeRef={nodeRef}
        addEndListener={(done) =>
          nodeRef.current?.addEventListener("transitionend", done, false)
        }
      >
        <div
          ref={nodeRef}
          data-transition-child
          className="page-transition-container"
        >
          {children}
          <div className="page-revealer"></div>
        </div>
      </CSSTransition>
    </SwitchTransition>
  );
}
