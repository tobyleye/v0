import Link from "next/link";
import { client, groq } from "../../lib/client";
import { BackArrow } from "../../components/back-arrow-icon";
import { RichText } from "../../components/rich-text";
import Image from "next/image";

export async function getStaticProps({ params }) {
  const project = await client
    .fetch(
      groq`*[_type == "project" && slug.current == $projectSlug]{
      ...,
      "gallery": gallery[].asset->{
        "dimensions": metadata.dimensions,
        "placeholder": metadata.lqip,
        "palette":  metadata.palette,
        "url": url
      }
    }`,
      {
        projectSlug: params.slug,
      }
    )
    .then((result) => result[0] ?? null);

  return {
    props: {
      project,
    },
  };
}

export async function getStaticPaths() {
  const projects = await client.fetch(
    groq`*[_type == "project"]{
        slug
    }`
  );
  const paths = projects.map((project) => {
    return {
      params: { slug: project.slug.current },
    };
  });
  return {
    paths: paths,
    fallback: false,
  };
}

export default function ProjectDetails({ project }) {
  return (
    <div className="" style={{ position: "relative" }}>
      {project ? (
        <div>
          <div className="project-details">
            <div style={{ marginBottom: 10 }}>
              <Link href="/projects">
                <span className="back-link">
                  <BackArrow />
                  Back
                </span>
              </Link>
            </div>

            <h1 className="project-name">{project.name}</h1>
            <div className="project-description">
              <RichText content={project.description} />
            </div>
            <div className="project-tags">
              {project.tools
                .filter((tool) => tool !== "")
                .map((tool, index) => (
                  <div className="project-tag" key={`tag-${index}`}>
                    {tool}
                  </div>
                ))}
            </div>
            <a
              className="project-link"
              href={project.link}
              target="_blank"
              rel="noreferrer"
            >
              Visit site
            </a>
          </div>

          <div className="project-gallery">
            {project.gallery?.map((img, idx) => {
              if (!img) {
                return null;
              }
              return (
                <div key={`media-${idx}`} className="project-media-wrapper">
                  <div
                    className="project-media-bg"
                    style={{
                      background: img.palette.muted.background,
                    }}
                  />
                  <div
                    className="project-media"
                    style={{
                      aspectRatio: img.dimensions.aspectRatio,
                    }}
                  >
                    <Image
                      src={img.url}
                      alt={`gallery ${idx}`}
                      fill
                      style={{ objectFit: "cover", borderRadius: 8 }}
                      placeholder="blur"
                      blurDataURL={img.placeholder}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div>
          <div>😞</div>
          <p>Project not found </p>
        </div>
      )}

      <style jsx>{`
        .project-name {
          font-size: 40px;
          margin-bottom: 10px;
        }

        .back-link {
          margin-bottom: 18px;
          padding-top: 5px;
          display: inline-flex;
          align-items: center;
          gap: 5px;
        }

        .project-description {
          margin-bottom: 16px;
        }

        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 40px;
        }

        .project-tag {
          position: relative;
          display: inline-flex;
          padding-left: 4px;
          padding-right: 10px;
          background: yellow;
          text-transform: capitalize;
          color: rgb(21, 21, 21);
          border-radius: 3px;
        }
        .project-link {
          display: inline-block;
          background: white;
          color: #222;
          padding: 6px 12px;
          border-radius: 5px;
          transition: 0.2s ease;
        }
        .project-link:hover {
          transform: scale(1.02);
        }

        .project-details {
          position: sticky;
          top: 0;
        }

        .project-gallery {
          margin-top: 55px;
          position: relative;
          z-index: 5;
          display: grid;
          gap: 25px;
        }

        .project-media-wrapper {
          border-radius: 5px;
          position: relative;
          overflow: hidden;
        }

        .project-media-bg {
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          width: 100%;
          display:none;
        }

        .project-media {
          display: flex;
          justify-content: center;
          border-radius: 5px;
          position: relative;
          overflow: hidden;
        }

        @media (min-width: 640px) {
          .project-media-bg {
            display: block;
          }
          .project-media {
            max-height: 650px;
            margin: auto;
          }
          .project-media-wrapper {
            border-radius: 5px;
            padding: 20px;
          }
        }
      `}</style>
    </div>
  );
}
