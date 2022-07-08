const initialData = {
  cardData: [],
  selectedData: [],
};

export const cardReducers = (state = initialData, action) => {
  switch (action.type) {
    case "ADD_CARD_DATA":
      const data = action.payload;
      if (data.projectName && data.projectBudget && data.projectEndDate) {
        return {
          ...state,
          cardData: [
            { id: state.cardData.length + 1, ...data },
            ...state.cardData,
          ],
        };
      } else {
        alert("Entry Fields Can't Be Empty");
        return state;
      }

      break;

    case "DELETE_CARD_DATA":
      const deleteSelectedData = action.payload;
      const filteredData = state.cardData.filter(
        (data) => data.id !== deleteSelectedData.id
      );
      return {
        ...state,
        cardData: filteredData,
      };
      break;

    case "SELECTED_CARD_DATA":
      const selectedCardData = action.payload;
      console.log(selectedCardData);
      let editEnable = true;
      const fData = state.cardData.filter(
        (data) => data.id !== selectedCardData.id
      );
      return {
        ...state,
        selectedData: { editEnable, ...selectedCardData },
        cardData: fData,
      };
      break;

    case "EDIT_CARD_DATA":
      const editSelectedData = action.payload;
      let id = state.selectedData.id;
      return {
        ...state,
        cardData: [{ id, ...editSelectedData }, ...state.cardData],
        selectedData: [],
      };
      break;

    case "COPY_CARD_DATA":
      const copySelectedData = action.payload;
      return {
        ...state,
        cardData: [
          { ...copySelectedData, id: state.cardData.length + 1 },
          ...state.cardData,
        ],
      };
    default:
      return state;
      break;
  }
};

export default cardReducers;
