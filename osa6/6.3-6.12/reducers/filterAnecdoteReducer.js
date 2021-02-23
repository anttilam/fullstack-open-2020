const initialState = {
    matchingAnecdotes: [],
}

export const filterAnecdotes = (anecdotes, filter) => {
    return {
        type: 'FILTER_ANECDOTES',
        data: {
            content: anecdotes,
            filter
        }
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type) {

        case 'FILTER_ANECDOTES':
            if (action.data.filter) {
                const matchingAnecdotes = action.data.content.filter(ane => ane.content.includes(action.data.filter.toLowerCase()));
                return {...state, matchingAnecdotes}
            } else return {...state, matchingAnecdotes: []}
                        
        default: return state
    }
}

export default reducer;
