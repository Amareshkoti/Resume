import type { Route } from "./+types/home";
import {Fragment} from "react";
import ResumeCard from "../../components/ResumeCard";
import Navbar from "../../components/Navbar";
import {resumes} from "../../constants";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "RESUMIND" },
    { name: "description", content: "Smart feedback for your dream job!" },
  ];
}

export default function Home() {
  return<main className="bg-[url('/images/bg-main.svg')] bg-cover" >
    <Navbar/>
  <section className="main-section">
    <div className="page-heading">
      <h1>Track Your Application & Resume Ratings</h1>
      <h2>Review your submissions and check AI-powered feedback.</h2>
    </div>
  </section>
    {resumes.length>0 &&(
    <div className="resume-section">
    {resumes.map((resume) => (
        <ResumeCard key={resume.id} resume={resume}/>
    ))}
    </div>
        )}
  </main>;
}
