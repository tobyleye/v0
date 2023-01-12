import { client, groq } from "../../lib/client";
import ProjectCard from "../../components/project-card";

export async function getStaticProps() {
  const projects = await client.fetch(groq`*[_type == "project"]{
    ...,
    "cover": {
        "url": gallery[0].asset->url,
        "palette":  gallery[0].asset->metadata.palette
    }
  }`);
  return {
    props: {
      projects,
    },
  };
}

export default function Projects({ projects }) {
  return (
    <div>
      <ul className="project-list">
        {projects.map((project) => (
          <li key={project._id}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
      <style jsx>{`
        .project-list {
          display: grid;
          column-gap: 40px;
          row-gap: 30px;
          grid-template-columns: repeat(1, 1fr);
        }

        @media (min-width: 650px) {
          .project-list {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </div>
  );
}
