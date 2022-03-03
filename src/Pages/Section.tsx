import React from "react";
import { useParams } from "react-router-dom";
import { SectionSingle } from "../Components";
import { ErrorBoundary } from "../Components/ErrorBoundary";

const Section: React.FC = () => {
  const { nameSection } = useParams();
  return nameSection ? (
    <ErrorBoundary>
      <SectionSingle nameSection={nameSection} key="notHome" />
    </ErrorBoundary>
  ) : (
    <ErrorBoundary>
      <SectionSingle nameSection={"home"} key="notHome" />
    </ErrorBoundary>
  );
};

export default Section;
