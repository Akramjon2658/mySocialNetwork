import { getAuthUser } from './auth-reducer'

const INITIALIZE_SUCCESS = 'INITIALIZE_SUCCESS'

let initialState =  {
  initialized: false
}

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZE_SUCCESS:
      return {
        ...state, 
        initialized: true
      }
    default: 
      return state;
  }
}
export const InitializeSuccess = () =>({ type: INITIALIZE_SUCCESS })

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUser())
    
    Promise.all([promise]).then(() => {
      dispatch(InitializeSuccess())
    })
  }

export default appReducer;