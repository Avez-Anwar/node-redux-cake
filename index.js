const redux = require("redux")

const createStore=redux.createStore;


const BUY_CAKE="BUY_CAKE"

function buyCake(){
  return {
    type:BUY_CAKE
  }
}

const initialState={
  numberOfCakes:10
}


const reducer=(state=initialState,action)=>{
switch(action.type){
  case "BUY_CAKE":
  return{numberOfCakes:state.numberOfCakes-1} 
 default :return state
}
}

const store=createStore(reducer)

console.log("initial",store.getState())

const unsubscript = store.subscribe(()=>
console.log("Update state",store.getState()))

store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())



