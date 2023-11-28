"use client"
import { useEffect, useState } from "react";
import ProjectSlider from "./ProjectSlider"
import { projects } from "@/data/projects";

const ProjectsSliderContainer = () => {

  const [listProjects, setListProjects] = useState(projects);
  const [selected, setSelected] = useState(0);

  const next = () => {
    if (listProjects.length - 1 > selected) {
      setSelected(selected + 1)
    } else {
      setSelected(0)
    }
  }
  const prev = () => {
    if (selected != 0) {
      setSelected(selected - 1)
    } else {
      setSelected(listProjects.length - 1)
    }
  }

  return (
    <ProjectSlider listProjects={listProjects} onNext={next} onPrev={prev} selected={selected} />
  )
}

export default ProjectsSliderContainer