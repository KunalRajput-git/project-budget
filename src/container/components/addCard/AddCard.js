import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCardData, editCardData } from "../../../redux/actions";
import "./addCard.css";

const AddCard = () => {
  const dispatch = useDispatch();
  const [cName, setCName] = useState("");
  const [budget, setBudget] = useState("");
  const [endDate, setEndDate] = useState("2022-07-08");
  const [isEditEnabled, setIsEditEnabled] = useState(false);

  const state = useSelector((state) => state.cardReducers.selectedData);

  useEffect(() => {
    setCName(state.projectName || "");
    setBudget(state.projectBudget || "");
    setEndDate(state.projectEndDate || "");
    setIsEditEnabled(state.editEnable || false);
  }, [state]);

  const cardData = {
    projectName: cName,
    projectBudget: budget,
    projectEndDate: endDate,
  };

  const onAddHandler = () => {
    dispatch(addCardData(cardData));
    setCName("");
    setBudget("");
    setEndDate("");
  };

  return (
    <div className="cardAddContainer">
      <input
        value={cName}
        onChange={(e) => {
          setCName(e.target.value);
        }}
        placeholder="Project name"
        type="text"
      />
      <input
        value={budget}
        onChange={(e) => {
          setBudget(e.target.value);
        }}
        placeholder="Project budget"
        type="number"
      />
      <input
        value={endDate}
        onChange={(e) => {
          setEndDate(e.target.value);
        }}
        className="date"
        type="date"
      />

      {!isEditEnabled ? (
        <button onClick={() => onAddHandler()} className="cardAddBtn">
          Add Card
        </button>
      ) : (
        <button
          onClick={() => {
            dispatch(editCardData(cardData));
            setIsEditEnabled(false);
            setCName("");
            setBudget("");
            setEndDate("");
          }}
          className="cardAddBtn"
        >
          Save Changes
        </button>
      )}
    </div>
  );
};

export default AddCard;
