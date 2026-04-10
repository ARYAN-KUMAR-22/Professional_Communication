import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import './index.css'
import Home from './component/Home.jsx';
import Professsional_Communication_Skill from './component/Professional_Communication_Skills.jsx';
import About_Us from './component/About_Us.jsx';
import Keywords from './component/Keywords.jsx';
import Grammar from './component/Grammar.jsx';
import Vocabulary from './component/Vocabulary.jsx';
import CommunicationSkills from './component/Communication_Skills.jsx';
import WritingSkills from './component/Writing_Skills.jsx';
import BasicWritingSkills from './component/BasicWritingSkills.jsx';
import IdentifyingCommonErrors from './component/IdentifyingCommonErrors.jsx';
import NatureAndStyle from './component/NatureAndStyle.jsx';
import WritingPractices from './component/WritingPractices.jsx';
import OralCommunication from './component/OralCommunication.jsx';
import ProfessionalSkills from './component/ProfessionalSkills.jsx';
import CommunicationAndSoftSkills from './component/CommunicationAndSoftSkills.jsx';
import OtherImportantSoftSkills from './component/OtherImportantSoftSkills.jsx';
import Activities from './component/Activities.jsx';
import Dark_Psychology from './component/Dark_Psychology.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/professional_communication",
    element: <Professsional_Communication_Skill />,
  },
  {
    path: "/grammar",
    element: <Grammar />,
  },
  {
    path: "/vocabulary",
    element: <Vocabulary />,
  },
  {
    path: "/communication_skills",
    element: <CommunicationSkills />,
  },
  {
    path: "/writing_skills",
    element: <WritingSkills />,
  },
  {
    path: "/basic_writing_skills",
    element: <BasicWritingSkills />,
  },
  {
    path: "/identifying_common_errors",
    element: <IdentifyingCommonErrors />,
  },
  {
    path: "/nature_and_style",
    element: <NatureAndStyle />,
  },
  {
    path: "/writing_practices",
    element: <WritingPractices />,
  },
  {
    path: "/oral_communication",
    element: <OralCommunication />,
  },
  {
    path: "/professional_skills",
    element: <ProfessionalSkills />,
  },
  {
    path: "/communication_and_soft_skills",
    element: <CommunicationAndSoftSkills />,
  },
  {
    path: "/other_important_soft_skills",
    element: <OtherImportantSoftSkills />,
  },
  {
    path: "/activities",
    element: <Activities />,
  },
  {
    path: "/about_us",
    element: <About_Us />,
  },
  {
    path: "/keywords",
    element: <Keywords />,
  },
  {
    path: "/dark_psychology",
    element: <Dark_Psychology />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

