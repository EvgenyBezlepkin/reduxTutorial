import './styles.css'

// ручная имплементация ридакса
//import {createStore} from './createStore'
import {rootReducer} from './redux/rootReducer'
// миддлвар для асинхронности
import thunk from 'redux-thunk'
// логгер, достаточно просто установить и передать в миддлвар
import logger from 'redux-logger'

// redux
import {applyMiddleware, createStore} from 'redux'
import {asyncIncrement, changeTheme, decrement, increment} from "./actions";


const counter = document.getElementById('counter')
const addBtn = document.getElementById('add')
const subBtn = document.getElementById('sub')
const asyncBtn = document.getElementById('async')
const themeBtn = document.getElementById('theme')


// передаем наш редьюсер, initial state и миддлвар для асинхронноти (по шаблону)
const store = createStore(rootReducer, applyMiddleware(thunk, logger));


addBtn.addEventListener('click', ev => {
    // нажатие кнопки -> отправляем action ->
    // store вызывает редьюсер -> он меняет состояние ->
    // store вызывает subscribe() -> подписчики уведомлены
    store.dispatch(increment())
})


subBtn.addEventListener('click', ev => {
    // функия возвращает объект action
    store.dispatch(decrement())
})


asyncBtn.addEventListener('click', ev => {
    store.dispatch(asyncIncrement())
})

themeBtn.addEventListener('click', ev => {
    let theme = document.body.classList.contains("light") ? "dark" : "light"
    store.dispatch(changeTheme(theme))
})

// связываем counter с переменной из store (подписываем counter на получение измнений из store)
store.subscribe(() => {
    counter.textContent = store.getState().counter
    document.body.className = store.getState().theme.value
})

// инициализация
store.dispatch({type:'init'})
