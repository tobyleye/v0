import { PortableText } from "@portabletext/react";

const portableTextComponents = {
  marks: {
    link: ({ children, value }) => {
      const isExternalLink = !value.href.startsWith("/");
      const rel = isExternalLink ? "noreferrer noopener" : undefined;
      const target = isExternalLink ? "_blank" : undefined;
      return (
        <a href={value.href} rel={rel} target={target}>
          {children}
        </a>
      );
    },
  },
};

export function RichText({ content }) {
  return (
    <div className="rich-text">
      {typeof content === "string" ? (
        <p>{content}</p>
      ) : (
        <PortableText value={content} components={portableTextComponents} />
      )}

      <style jsx global>{`
        .rich-text a {
          color: yellow;
        }

        .rich-text p:not(:last-child) {
          margin-bottom: 10px;
        }
      `}</style>
    </div>
  );
}
