import Navbar from "../Navbar/Navbar";
import "./cardGraph.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

import { DollarOutlined, FileDoneOutlined } from "@ant-design/icons";
import ReChart from "./reChart";

const CardGraph = () => {
  const [totalInvested, setTotalInvested] = useState(0);

  const state = useSelector((state) => state.cardReducers.cardData);

  useEffect(() => {
    setTotalInvested(
      state.reduce((total, state) => {
        return total + parseInt(state.projectBudget);
      }, 0)
    );
  }, [state]);

  const eState = [...state].sort((a, b) => {
    if (a.id < b.id) return -1;
    if (a.id > b.id) return 1;
    return 0;
  });

  return (
    <>
      <div style={{ width: "100%", heigh: "100%" }}>
        <Navbar />
        <div className="dataContainer" style={{ width: "100%", heigh: "100%" }}>
          <h1>
            <FileDoneOutlined /> Total Projects : {state.length}
          </h1>
          <h1>
            <DollarOutlined /> Total Amount : {totalInvested}₹
          </h1>
        </div>
        <div className="graphContainer">
          <ReChart eState={eState} />
        </div>
      </div>
    </>
  );
};

export default CardGraph;
