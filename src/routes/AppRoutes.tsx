import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";
import IPhone from "../pages/IPhone";
import Mac from "../pages/Mac";
import IPad from "../pages/IPad";
import Watch from "../pages/Watch";
import AirPods from "../pages/AirPods";
import Support from "../pages/Support";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/iphone" element={<IPhone />} />
          <Route path="/mac" element={<Mac />} />
          <Route path="/ipad" element={<IPad />} />
          <Route path="/watch" element={<Watch />} />
          <Route path="/airpods" element={<AirPods />} />
          <Route path="/support" element={<Support />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}