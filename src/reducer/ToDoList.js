const initialState = {
  list: [],
};
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      const {id, data} = action.payload;
      console.log('id', id, 'data', data);
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

    case 'DELETE_TODO':
      const newList = state.list.filter(ele => ele.id != action.id);
      return {
        ...state,
        list: newList,
      };
    default:
      return state;
  }
};

export default todoReducer;
