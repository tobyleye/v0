import Link from "next/link";
import { ProjectDescription } from "./project-description";

export default function ProjectCard({ project }) {
  const { cover } = project;
  return (
    <Link
      href={{
        pathname: "projects/[slug]",
        query: {
          slug: project.slug.current,
        },
      }}
    >
      <article className="project-card">
        <div
          className="cover"
          style={{
            background: `linear-gradient(
                  ${cover.palette.darkMuted.background},
                  ${cover.palette.dominant.background}
              )
            `,
            marginBottom: 10,
            borderRadius: 9,
          }}
        ></div>
        <div>
          <h3>{project.name}</h3>
          <div className="desc">
            <ProjectDescription description={project.description} />
          </div>
        </div>

        <style jsx>{`
          .project-card .cover {
            height: 200px;
          }
          .project-card h3 {
            font-size: 22px;
          }
          .project-card .desc {
            max-height: 24px;
            overflow: hidden;
            color: #ccc;
          }
        `}</style>
      </article>
    </Link>
  );
}

/*
  function OldProjectCard({ project }) {
    return (
      <Link href={`/projects/${project?.slug?.current}`}>
        <div className="project">
          <div>
            <h3>{project.name}</h3>
            <ProjectDescription description={project.description} />
          </div>
  
          <div className="border border-left" />
          <div className="border border-right" />
          <div className="border border-top" />
          <div className="border border-bottom" />
  
          <style jsx>{`
            .project {
              border: 1px solid gray;
              padding: 20px;
              padding-top: 80px;
              border-radius: 5px;
              background: rgba(0, 0, 0, 0.09);
              color: white;
              position: relative;
            }
  
            .project h3 {
              font-size: 30px;
            }
  
            .border {
              position: absolute;
            }
  
            .border-left {
              left: 0;
              top: 0;
              bottom: 0;
              width: 2px;
              background: yellow;
            }
          `}</style>
        </div>
      </Link>
    );
  }
  
  */
