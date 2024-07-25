"use client";
import {
  Tabs,
  TabsHeader,
  Tab,
  TabsBody,
  TabPanel,
} from "@material-tailwind/react";
import React, { useState } from "react";
import InnovationTypeChart from "./charts/InnovationTypeChart";
import TechExpensesChart from "./charts/TechExpensesChart";
import TechTransitionChart from "./charts/TechTransitionChart";
import CompanyGeographyChart from "./charts/CompanyGeographyChart";
import TechTransitionChart2 from "./charts/TechTransitionChart2";

export default function TechnologicalAnalysisTabs() {
  const tabs = [
    {
      label: "Gastos en tecnologías",
      value: "gastos-tecnologia",
      desc: <TechExpensesChart />,
    },
    {
      label: "Tipo Innovación",
      value: "tipo-innovacion",
      desc: <InnovationTypeChart />,
    },
    {
      label: "Análisis transición tecnologica",
      value: "analisis-transicion-tecnologica",
      // desc: <TechTransitionChart width="300" height="300" />,
      desc: <TechTransitionChart2 />,
    },
    {
      label: "Análisis empresas por región",
      value: "analisis-empresa-region",
      desc: <CompanyGeographyChart />,
    },
  ];
  const [activeTab, setActiveTab] = useState(tabs[0].value);
  return (
    <>
      <Tabs value={activeTab}>
        <TabsHeader
          className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
          indicatorProps={{
            className:
              "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
          }}
        >
          {tabs.map(({ label, value }) => (
            <Tab
              key={value}
              value={value}
              onClick={() => setActiveTab(value)}
              className={activeTab === value ? "text-gray-900" : ""}
            >
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody>
          {tabs.map(({ value, desc }) => (
            <TabPanel className="h-max" key={value} value={value}>
              {desc}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </>
  );
}
