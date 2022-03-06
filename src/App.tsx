import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Home, Section, NotFound } from "./Pages/";
import { FooterNavbar } from "./Utils/Components";
import useDataHome from "./Hooks/useDataHome";
import useDataListSection from "./Hooks/useDataListSection";

function App(): React.ReactElement {
  useDataHome();
  useDataListSection();
  return (
    <div>
      <Routes>
        <Route path="/" element={<FooterNavbar />}>
          <Route path="" element={<Home />} />
          <Route path="Section/:nameSection" element={<Section />} />
        </Route>
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </div>
  );
}

export default App;
