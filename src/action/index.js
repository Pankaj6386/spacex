export const incNumber = num => {
  return {
    type: 'INCREMENT',
    payload: num,
  };
};

export const decNumber = num => {
  return {
    type: 'DECREMENT',
    payload: num,
  };
};

export const toDoAdd = data => {
  return {
    type: 'ADD_TODO',
    payload: {
      id: new Date().getTime().toString(),
      data: data,
    },
  };
};

export const toDoDelete = id => {
  return {
    type: 'DELETE_TODO',
    id: id,
  };
};

export const toDoRemove = () => {
  return {
    type: 'REMOVE_TODO',
  };
};


export const showListName = data => {
  console.log(data,"data")
  return {
    type: 'LIST_NAME',
    payload: {
      id: new Date().getTime().toString(),
      data: data,
    },
  };
};


export const deleteListName = id => {
  return {
    type: 'DELETE_NAME',
    id: id,
  };
};