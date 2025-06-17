import React from "react";

import { Accordion, AccordionTab } from "primereact/accordion";
import { Avatar } from "primereact/avatar";

const Certifications = ({ data, isDarkMode }) => {
  const bgColor = isDarkMode ? "#333" : "#F9F5EF";
  const textColor = isDarkMode ? "#F4EDE4" : "#3E3A36";

  return (
    <div
      className="rounded-2xl p-4 mb-4"
      style={{
        backgroundColor: bgColor,
        color: textColor,
        boxShadow: isDarkMode
          ? "0 4px 12px rgba(255, 255, 255, 0.05)"
          : "0 4px 12px rgba(0, 0, 0, 0.1)",
        transition: "all 0.3s ease",
      }}
    >
      <Accordion activeIndex={null} className="border-none bg-transparent">
        <AccordionTab
          header={
            <span className="flex items-center gap-3 p-2">
              <Avatar image={data.image} shape="circle" />
              <span className="font-bold text-lg">{data.title}</span>
            </span>
          }
        >
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
            <p className="m-0 font-medium w-10/12 sm:ml-5 text-justify">{data.description}</p>
            <a
              href={data.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold border border-amber-500 p-2 mb-1 rounded hover:bg-amber-500 hover:text-white transition-colors"
            >
              View Certificate
            </a>
          </div>
        </AccordionTab>
      </Accordion>
    </div>
  );
};

export default Certifications;
