"use client";
import React, { useState } from "react";
import {
  Tabs,
  TabsHeader,
  Tab,
  TabsBody,
  TabPanel,
} from "@material-tailwind/react";
import CareerAffinityWithCurrentOccupationChart from "./charts/3001/CareerAffinityWithCurrentOccupationChart";
import IncomeVariationsByYearsOfExperienceChart from "./charts/3002/IncomeVariationsByYearsOfExperienceChart";
import EmployabilityByGraduateProfileChart from "./charts/3003/EmployabilityByGraduateProfileChart";
import EmployabilityByJobProfileTable from "./charts/3004/EmployabilityByJobProfileTable";
import IncomeByEducationLevelChart from "./charts/3005/IncomeByEducationLevelChart";
import OccupationalAutomationProbabilityChart from "./charts/3006/occupationalAutomationProbabilityChart";
import CareerAffinityWithCurrentOccupation from "./charts/3001/CareerAffinityWithCurrentOccupation";

const IncomeEmploymentTabs = () => {
  const tabs = [
    {
      label: "Pertinencia estudio-ocupación",
      value: "afinidad-carrera-con-ocupacion-actual",
      desc: <CareerAffinityWithCurrentOccupation />,
    },
    {
      label: "¿Cuánto vale mi experiencia?",
      value: "variaciones-de-ingreso-por-anio-de-experiencia",
      desc: <IncomeVariationsByYearsOfExperienceChart />,
    },
    {
      label: "Empleabilidad perfil egreso",
      value: "empleabilidad-por-perfil-de-egreso",
      // desc: <TechTransitionChart width="300" height="300" />,
      desc: <EmployabilityByGraduateProfileChart />,
    },
    {
      label: "Empleabilidad perfil laboral",
      value: "analisis-por-perfil-laboral",
      desc: <EmployabilityByJobProfileTable />,
    },
    {
      label: "Ingresos por nivel educativo",
      value: "ingresos-por-nivel-educativo",
      desc: <IncomeByEducationLevelChart />,
    },
    {
      label: "Probabilidad de automatización ocupacional",
      value: "probabilidad-de-automatizacion-ocupacional",
      desc: <OccupationalAutomationProbabilityChart />,
    },
  ];
  const [activeTab, setActiveTab] = useState(tabs[0].value);

  return (
    <>
      <>
        <Tabs value={activeTab}>
          <TabsHeader
            className=""
            indicatorProps={{
              className: "", //bg-blue-700
            }}
          >
            {tabs.map(({ label, value }) => (
              <Tab
                key={value}
                value={value}
                onClick={() => setActiveTab(value)}
              >
                {label}
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody
            animate={{
              initial: { y: 250 },
              mount: { y: 0 },
              unmount: { y: 250 },
            }}
          >
            {tabs.map(({ value, desc }) => (
              <TabPanel className="h-max" key={value} value={value}>
                {desc}
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      </>
    </>
  );
};

export default IncomeEmploymentTabs;
