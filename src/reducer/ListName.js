const initialState = {
    list: [],
  };
  const ListName = (state = initialState, action) => {
    switch (action.type) {
      case 'LIST_NAME':
        const {id, data} = action.payload;
        console.log('id', id, 'data', data,"list name");
        if (!data) {
        } else {
          return {
            ...state,
            list: [
              ...state.list,
              {
                id: id,
                data: data,
              },
            ],
          };
        }
  
      case 'DELETE_NAME':
        const newList = state.list.filter(ele => ele.id != action.id);
        return {
          ...state,
          list: newList,
        };
      default:
        return state;
    }
  };
  
  export default ListName;
  