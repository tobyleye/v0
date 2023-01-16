import { HiOutlineMail } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";
import { TfiGithub } from "react-icons/tfi";

export function Contact({ open, onClose }) {
  return (
    <div className={"contact-modal " + (open ? "open" : "")}>
      <div className="overlay" onClick={onClose}></div>
      <div className="content">
        <div className="contact-links">
          <a
            href="mailto:krisella74@gmail.com?subject=Hello"
            target="_blank"
            rel="noreferrer"
          >
            <span>
              <HiOutlineMail />
            </span>
            Email
          </a>
          <a
            href="https://wa.me/+2348022022211?text=Hello"
            target="_blank"
            rel="noreferrer"
          >
            <span>
              <FaWhatsapp />
            </span>
            Whatsapp
          </a>
          <a
            href="https://github.com/tobyleye"
            target="_blank"
            rel="noreferrer"
          >
            <span>
              <TfiGithub />
            </span>
            Github
          </a>
        </div>
      </div>

      <style jsx>{`
        .contact-modal {
          display: flex;
          align-items: flex-end;
          justify-content: center;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          visibility: hidden;
        }

        .contact-modal.open {
          pointer-events: visible;
          visibility: visible;
        }

        .overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: transparent;
          visibility: hidden;
          opacity: 0;
          background: rgba(0, 0, 0, 0.6);
          z-index: 5;
          transition: 0.18s ease;
        }

        .content {
          z-index: 6;
          width: 100%;
          padding: 20px;
          background: white;
          color: var(--black);
          transform: translateY(105%);
          transition: 0.18s ease;
        }

        .contact-modal.open .content {
          transform: translateY(0);
        }

        .contact-modal.open .overlay {
          visibility: visible;
          opacity: 1;
        }

        @media (min-width: 640px) {
          .contact-modal {
            align-items: center;
          }
          .content {
            max-width: 400px;
            border-radius: 5px;
            transform: translateY(20px);
            opacity: 0;
          }
          .contact-modal.open .content {
            opacity: 1;
          }
        }

        .contact-links {
          display: grid;
        }

        .contact-links a {
          padding: 10px 0;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .contact-links a span {
          font-size: 20px;
          display: inline-flex;
        }
        .contact-links a:not(:last-child) {
          border-bottom: 1px solid #eee;
        }
      `}</style>
    </div>
  );
}
