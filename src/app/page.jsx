import AboutSection from "@/sections/AboutSection"
import ContactSection from "@/sections/ContactSection"
import HomeSection from "@/sections/HomeSection"
import ProjectsSection from "@/sections/ProjectsSection"
import SkillsSection from "@/sections/SkillsSection"

const HomePage = () => {
  return (
    <main>
      <HomeSection/>
      <ProjectsSection/>
      <AboutSection/>
      <SkillsSection/>
      <ContactSection/>
    </main>
  )
}

export default HomePage