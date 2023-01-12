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

export function ProjectDescription({ description }) {
  return (
    <div className="description">
      {typeof description === "string" ? (
        <p>{description}</p>
      ) : (
        <PortableText value={description} components={portableTextComponents} />
      )}

      <style jsx global>{`
        .description {
        }
        .description a {
          color: yellow;
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
}
