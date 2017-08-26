
// will eventually fetch the user from the api
export function fetch() {
  console.log( "(>'')>  in action" )
  return {
        type: "FETCH_USER",
        payload: {
          id: 1,
          username: 'jhallman5'
        }
      }
    }
