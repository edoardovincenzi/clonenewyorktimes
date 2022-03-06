import React from "react";
import { useParams } from "react-router-dom";
import { SectionSingle } from "../Utils/Components";
import { ErrorBoundary } from "../Utils/Components/ErrorBoundary";
import useDataSection from "../Hooks/useDataSection";

const Section: React.FC = () => {
  const { nameSection } = useParams();
  let { data, error } = useDataSection(nameSection);
  return (
    <ErrorBoundary>
      <SectionSingle data={data} error={error} />
    </ErrorBoundary>
  );
};

export default Section;
