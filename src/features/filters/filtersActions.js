export function statusFilterChange(filterValue) {
    return {
        type: "filters/statusFilterChanged",
        payload: filterValue
    }
}
export function colorFilterChanged(color, changeType) {
    return {
        type: "filters/colorFilterChanged",
        payload: {
            color, 
            changeType
        }
    }
}