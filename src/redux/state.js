import profileReducer from "./profile-reducer"
import dialogsReducer from "./dialogs-reducer"


let store = {
  rerenderEntireTree() {
    console.log('ishlaydimi?')
  },
  _state: {
    profilePage: {
      posts: [
        { id: 1, post: "Bismillahir Rohmanir Rohiym " },
        { id: 3, post: "Subhaanalloh" },
        { id: 3, post: "Alhamdulillah" },
        { id: 4, post: "Allohu akbar" }
      ],
      postTextValue: ''
    },
    dialogsPage: {
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
        { id: 2, message: "How are you" },
        { id: 3, message: "I'm fine thank you" },
        { id: 4, message: "Hi" },
        { id: 5, message: "Hi" },
        { id: 6, message: "Hi" }
      ],
      dialogTextValue: 'ds'
    }
  },
  getState() {
    return this._state
  },
  subscribe(observer) {
    this.rerenderEntireTree = observer
  },

  dispatch(action) {
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this.rerenderEntireTree(this._state)
  }
}
export default store;