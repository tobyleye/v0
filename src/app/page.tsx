import { About } from "@/components/about";
import { ExperienceList } from "@/components/experience-list";
import { Footer } from "@/components/footer";
import { MobileTabBar } from "@/components/mobile-tab-bar";
import { ProjectCard } from "@/components/project-card";
import { Section } from "@/components/section";
import { SideProjectList } from "@/components/side-project-list";
import { Sidebar } from "@/components/sidebar";
import { projects, sections } from "@/content/site";

const [work, experience, sideProjects, about] = sections;

export default function Home() {
  return (
    <div className="mx-auto max-w-[1440px] lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-[clamp(48px,8.33vw,120px)]">
      <Sidebar />
      <MobileTabBar />

      <div className="mx-auto flex w-full max-w-[728px] flex-col gap-16 px-6 pt-9 pb-10 lg:col-span-6 lg:col-start-7 lg:mx-0 lg:max-w-none lg:gap-24 lg:px-0 lg:py-[clamp(48px,13vh,120px)]">
        <main className="flex flex-col gap-16 lg:gap-24">
          <Section section={work}>
            <div className="mt-[18px] flex flex-col gap-[18px] lg:mt-6 lg:gap-6">
              {projects.map((project) => (
                <ProjectCard key={project.name} project={project} />
              ))}
            </div>
          </Section>

          <Section section={experience}>
            <ExperienceList />
          </Section>

          <Section section={sideProjects}>
            <SideProjectList />
          </Section>

          <Section section={about}>
            <About />
          </Section>
        </main>

        <Footer />
      </div>
    </div>
  );
}
