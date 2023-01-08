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
  console.log("projects:", project);
  return (
    <div>
      {project ? (
        <div>
          <h1>{project.name}</h1>
          <p>{project.description}</p>
          <div>
            {project.tools.map((tool, index) => (
              <div key={index}>{tool}</div>
            ))}
          </div>

          <div>
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
    </div>
  );
}
