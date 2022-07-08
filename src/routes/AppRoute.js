import DashBoard from "../container/components/dashBoard/DashBoard";
import CardGraph from "../container/components/cardGraph/CardGraph";
import { Routes, Route } from "react-router-dom";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<DashBoard />} />
      <Route path="/graphcard" element={<CardGraph />} />
    </Routes>
  );
};

export default AppRouter;
