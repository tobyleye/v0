import { client, groq } from "../../lib/client";

export async function getStaticProps({ params }) {
  const project = await client
    .fetch(groq`*[_type == "project" && slug.current == $projectSlug]{
      ...,
      "gallery": gallery[].asset->url,
    }`, {
      projectSlug: params.slug,
    })
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
    <div>
      {project ? (
        <div>

          <div className="project-details">
            <h1 className="project-name">{project.name}</h1>
            <p className="project-description">{project.description}</p>
            <div className="project-tags">
              {project.tools.filter(tool => tool !== '').map((tool, index) => (
                <div className="project-tag" key={index}>{tool}</div>
              ))}
            </div>
            <a className="project-link" href={project.link} target="_blank" rel="noreferrer">
              Visit site
            </a>
          </div>
            

          <div className="project-gallery">
            {project.gallery?.map((img, idx) => (
              <div key={idx}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={img} alt={`gallery ${idx}`} />
              </div>
            ))}
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
        .project-description {
          margin-bottom: 8px;
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
          color: rgb(21,21,21);
        }
        .project-link {
          display: inline-block;
          background: white;
          color: #222;
          padding: 6px 12px;
          border-radius: 5px;
          transition: .2s ease;
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
      `}</style>
    </div>
  );
}
