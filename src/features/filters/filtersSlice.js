const initialState = {
    status: "Active",
    colors: []
}

export default function filtersReducer(state = initialState, action) {
    switch(action.type) {
        // Choose a different "completed" filter value
        case "filters/statusFilterChanged": {
            return {
                ...state,
                status: action.payload
            }
        }
        // Add a new color filter
        case "filters/colorFilterChanged": {
            return {
                ...state,
                colors: action.payload.color
            }
        }
        // Remove a color filter
        
        default:
            return state
    }
}