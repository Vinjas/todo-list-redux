export function todoAdd(text) {
    return {
        type: "todos/todoAdded",
        payload: text
    }
}
export function todoToggle(id) {
    return {
        type: "todos/todoToggled",
        payload: id
    }
}
export function colorSelect(id, color) {
    return {
        type: "todos/colorSelected",
        payload: {
            id, 
            color
        }
    }
}
export function todoDelete(id) {
    return {
        type: "todos/todoDeleted",
        payload: id 
    }
}
export function allCompleted() {
    return {
        type: "todos/allCompleted",
    }
}
export function completedCleared() {
    return {
        type: "todos/completedCleared",
    }
}