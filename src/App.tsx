import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Section, NotFound } from "./Pages/";
import { FooterNavbar } from "./Components";

function App(): React.ReactElement {
  return (
    <div>
      <Routes>
        <Route path="/" element={<FooterNavbar />}>
          <Route path="" element={<Section />} />
          <Route path="Section/:nameSection" element={<Section />} />
        </Route>
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </div>
  );
}

export default App;
