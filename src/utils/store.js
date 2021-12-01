// import { createStore } from "redux";
// import rootReducer from "../redux/index";

// const store = createStore(rootReducer);

// export default store;


import { createStore, applyMiddleware } from "redux"; // importing to create store and applying midlleware to store
import rootReducer from "../redux/index";
import thunk from "redux-thunk"; // middleware used in our application

const store = createStore(rootReducer, applyMiddleware(thunk)); // middleware used thunk to update the store values

export default store;