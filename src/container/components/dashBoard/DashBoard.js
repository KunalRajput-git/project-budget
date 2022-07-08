import AddCard from "../addCard/AddCard";
import Card from "../card/Card";
import "./dashboard.css";
import Navbar from "../Navbar/Navbar";
import { useSelector } from "react-redux";

const DashBoard = () => {
  const state = useSelector((state) => state.cardReducers.cardData);
  return (
    <>
      <Navbar />
      <AddCard />
      <div className="mainCardsContainer">
        {state && state.map((data, index) => <Card key={index} data={data} />)}
      </div>
    </>
  );
};

export default DashBoard;
