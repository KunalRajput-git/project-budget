import { CopyOutlined, DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCardData,
  copyCardData,
  selectedCardData,
} from "../../../redux/actions";
import "./card.css";
const Card = ({ data }) => {
  const { projectName, projectBudget, projectEndDate } = data;
  const dispatch = useDispatch();

  return (
    <div className="cardContainer">
      <div className="cardContent">
        <h2>{projectName}</h2>
        <h3>Project Budget : {projectBudget}₹</h3>
        <h3>Project End Date : {projectEndDate}</h3>
        <hr />
        <div className="actionsContainer">
          <EditOutlined
            onClick={() => dispatch(selectedCardData(data))}
            style={{ color: "#8cbed6" }}
          />
          <DeleteOutlined
            onClick={() => dispatch(deleteCardData(data))}
            style={{ color: " #EA3C53" }}
          />
          <CopyOutlined
            onClick={() => dispatch(copyCardData(data))}
            style={{ color: "green" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
