export const initialStore=()=>{
  return{
    message: null,
    signup: [],
    login: []
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'signup':
      return {
        ...store,
        signup: [...store.signup, action.payload]
      };
      
    default:
      throw Error('Unknown action.');
  }    
}
