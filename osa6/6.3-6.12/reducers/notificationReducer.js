const initialState = {
    anecdote: [
        'If it hurts, do it more often'
    ],
    chosenNote: null,
    type: null,
    isNotificationShowing: false  // Not sure if booleans is the *best* way, but for this simple thing it works
}

export const hideNotification = () => {
    return {
        type: 'HIDE_NOTIFICATION',
        data: {
            isNotificationShowing: false
        }
    }
}

export const setAnecVote = (content) => {
    return {
        type: 'VOTED_ANEC',
        data: {
            content,
            type: 'VOTED_ANEC',
            isNotificationShowing: true
        }
    }
}

export const setNewAnec = (content) => {
    return {
        type: 'CREATE_NEW_ANEC',
        data: {
            content,
            type: 'CREATE_NEW_ANEC',
            isNotificationShowing: true
        }
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'CREATE_NEW_ANEC':
            return {
                ...state,
                chosenNote: action.data.content,
                type: 'CREATE_NEW_ANEC',
                isNotificationShowing: action.data.isNotificationShowing
            }
        
        case 'VOTED_ANEC':
            return {...state,
                chosenNote: action.data.content,
                type: 'VOTED_ANEC',
                isNotificationShowing: action.data.isNotificationShowing
            }
    
        case 'HIDE_NOTIFICATION': {
            return {...state, isNotificationShowing: false}
        }
        case 'SHOW_NOTIFICATION': {
            return {...state, isNotificationShowing: true}
        }
        default: return state
    }    
}

export default reducer