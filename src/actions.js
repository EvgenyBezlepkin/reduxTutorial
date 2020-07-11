import {CHANGE_THEME, DECREMENT, INCREMENT} from "./types";

export function increment() {
    return {
        type: INCREMENT
    }
}

export function decrement() {
    return {
        type: DECREMENT
    }
}

export function changeTheme(newTheme) {
    return {
        type: CHANGE_THEME,
        payload: newTheme
    }
}

export function asyncIncrement() {
    // возвращает объект action через заданное время
    return function (d) {
        setTimeout(() => {
            d({type: INCREMENT })
        }, 2000)


    }
}