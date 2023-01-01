import { useRef, useState } from "react";
import Typewriter from "typewriter-effect";

function PreviousHome() {
  const introRef = useRef(null);
  const [showRest, setShowRest] = useState(false);
  return (
    <div>
      <h3 ref={introRef}>
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("Hi, my name is Tobi. Nice to meet you")
              .callFunction(() => {
                setShowRest(true);
              })
              .start();
          }}
        />
      </h3>

      <div hidden={showRest === false} className="rest">
       I'm a seasoned Javascript engineer, skilled at
        both frontend & backend. I use an array of tools to
        get my work done such as typescript, react, nextjs, nodejs and less
        frequently, python.
      </div>

      <style jsx>{`
        h3 {
          margin-top: 40px;
          font-size: 30px;
          max-width: 600px;
          padding-bottom: 20px;
          border-bottom: 0.4px solid #fff;
        }

        .rest {
          margin-top: 120px;
          animation: slidein 0.85s ease;
          background: white;
          min-height: 800px;
          /* margin-left: -20px; */
          /* margin-right: -20px; */
        }

        @keyframes slidein {
          0% {
            transform: translateY(20px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
