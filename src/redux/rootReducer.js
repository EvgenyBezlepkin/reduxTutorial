import {CHANGE_THEME, DECREMENT, INCREMENT} from "../types";
import {combineReducers} from "redux";

function counterReducer(state = 0, action){

    switch (action.type) {
        case INCREMENT: {
            return ++state
        }
        case DECREMENT: {
            return --state
        }
        default: {
            return state
        }
    }
}

const initVal = {
    value: 'light'
}

function themeReducer(state = initVal, action){
    switch (action.type) {
        case CHANGE_THEME:
            return {...state, value: action.payload}
        default: return state
    }
}

// описание store
export const rootReducer = combineReducers({
    counter: counterReducer,
    theme: themeReducer
})