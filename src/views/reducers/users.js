export default function reducer(state={
  user: {
    id: null,
    username: null,
    plan: {}
  },
  fetching:false,
  fetched: false,
  error:null,
}, action){

  console.log( "(>'')>  in reducer" )
  switch(action.type){
    case "FETCH_USER": {
      return {
        ...state,
         fetching:true,
         user: action.payload
       }
      break
    }
  }
  return state
}
