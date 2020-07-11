
// "ручная" реализация хранилища
export function createStore(rootReducer, initialState) {

    // "приватные" переменные
    let state = rootReducer(initialState, {type: '_INIT_'})
    const subscribers = []

    return {
        // обновить состояние
        dispatch(action) {
            state = rootReducer(state, action)
            subscribers.forEach(sub => sub())
        },
        // подписаться на состояние
        subscribe(func) {
            subscribers.push(func)
        },
        // получить состояние
        getState() {
            return state
        }
    }
}