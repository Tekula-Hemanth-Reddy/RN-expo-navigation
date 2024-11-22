
import { createStore, combineReducers } from 'redux';
import reducers from "./reducers"
const rootReducer = combineReducers({
    places: reducers
});
const store = createStore(rootReducer);
export default store;
