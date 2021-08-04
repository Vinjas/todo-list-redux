export const initialState = {
    todos: [
        { id: 0, text: "Buy some bread", completed: true },
        { id: 1, text: "Bake cookies", completed: false, color: "purple" },
        { id: 2, text: "Do homework", completed: false, color: "blue" }
    ],
    filters: {
        status: "Active",
        colors: []
    }
}

