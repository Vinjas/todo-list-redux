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
        // Color filter
        case "filters/colorFilterChanged": {
            let { color, changeType } = action.payload
            const { colors } = state
            
            switch(changeType) {
                // Add a color filter
                case "added": {
                    if(colors.includes(color)) {
                        return state
                    }

                    return {
                        ...state,
                        colors: state.colors.concat(color)
                    }
                }
                // Remove a color filter
                case "removed": {
                    return {
                        ...state,
                        colors: state.colors.filter(
                            (existingColor) => existingColor !== color
                        )
                    }
                }
                default: 
                    return state
            }
        }
        default:
            return state
    }
}