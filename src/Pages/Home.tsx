import React from "react";
import { useGlobalContext } from "../Hooks/MyGlobalContext";
import { SectionSingle } from "../Utils/Components";
import { ErrorBoundary } from "../Utils/Components/ErrorBoundary";

const Home: React.FC = () => {
  const { home, errorHome } = useGlobalContext();
  return (
    <ErrorBoundary>
      <SectionSingle data={home} error={errorHome} />
    </ErrorBoundary>
  );
};

export default Home;
