const SEND_MESSAGE = 'SEND_MESSAGE'; 

let initialState = {
  dialogs: [
    { id: 1, name: "Sohib" },
    { id: 2, name: "Javohir" },
    { id: 3, name: "Dilshod" },
    { id: 4, name: "Salohiddin" },
    { id: 5, name: "Ma'ruf" },
    { id: 6, name: "G'iyos" }
  ],
  messages: [
    { id: 1, message: "Hi" },
    { id: 3, message: "I'm fine thank you" },
    { id: 4, message: "Hi" },
    { id: 5, message: "Hi" },
    { id: 6, message: "Hi" }
  ]
}
const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:{
      let row = {
        id: 7,
        message: action.text
      };
      return {
        ...state,
        messages: [...state.messages, row]
      };
    }
    default: 
      return state;
  }
}

export const sendMessageCreator = (text) =>({ type: SEND_MESSAGE, text })

export default dialogsReducer;