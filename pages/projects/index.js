import Link from "next/link";
import { client, groq } from "../../lib/client";

export async function getStaticProps() {
    const projects = await client.fetch(groq`*[_type == "project"]`);
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
          gap: 10px;
        }
      `}</style>
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <Link href={`/projects/${project?.slug?.current}`}>
      <div className="project">
        <h3>{project.name}</h3>
        <p>{project.description}</p>

        <style jsx>{`
          .project {
            border: 1px solid gray;
            padding: 20px;
            padding-top: 80px;
            border-radius: 5px;
            background: rgba(0,0,0,.09);
            color: white;
          }

          .project h3 {
            font-size: 30px;
          }
        `}</style>
      </div>
    </Link>
  );
}

