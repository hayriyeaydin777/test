import {combineReducers} from "redux";
import {counterReducers} from "./reducers/counter";

import { getSearchText, getDisplayCategories } from "./reducers/search-action";
import { toastToggle } from "./reducers/toast";

const reducers = combineReducers({
    counterReducers,
    getSearchText,
    getDisplayCategories,
    toastToggle,
});
  
export default reducers;