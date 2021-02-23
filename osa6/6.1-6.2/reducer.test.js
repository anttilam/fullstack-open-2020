import deepFreeze from 'deep-freeze'
import counterReducer from './reducers/counterReducer'


/*

As any unit test, it starts with boilerplate setup and writing empty tests
just to outline what needs to be tested.
I like to to test the initial state and then every switch/case 
in the reducer to see if action.payload will produce expected store.

const counterReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'GOOD':
            return {...state, good: +1 }
        case 'OK':
            return {...state, ok: +1 }
        case 'BAD':
            return {...state, bad: +1 }
        case 'ZERO':
            return initialState
        default:
            return state
    }
}

*/

describe ('unicafe reducer', () => {

    const initialState = {
        good: 0,
        bad: 0,
        ok: 0,
    }

    test('should return proper initial state when called with undefined state', ()=> {
        const state = initialState
        const action = {
            type: 'DO_NOTHING'
        }

        const newState = counterReducer(undefined, action);
        expect(newState).toEqual(state)
    })

    test('should increment GOOD by 1', () => {
        const state = initialState
        const action = {
            type: 'GOOD'
        }
        
        deepFreeze(state)

        const newState = counterReducer(initialState, action)
        expect(newState).toEqual({
            good: 1,
            bad: 0,
            ok: 0
        })
    });

    test('should increment BAD by 1', () => {
        const state = initialState
        const action = {
            type: 'BAD'
        }
        
        deepFreeze(state)

        const newState = counterReducer(initialState, action)
        expect(newState).toEqual({
            good: 0,
            bad: 1,
            ok: 0
        })
    });

    test('should increment OK by 1', () => {
        const state = initialState
        const action = {
            type: 'OK'
        }
        
        deepFreeze(state)

        const newState = counterReducer(initialState, action)
        expect(newState).toEqual({
            good: 0,
            bad: 0,
            ok: 1
        })
    });

    test('should reset everything by receiving ZERO action', () => {
        const state = initialState
        const action = {
            type: 'ZERO'
        }
        
        deepFreeze(state)

        const newState = counterReducer(initialState, action)
        expect(newState).toEqual({
            good: 0,
            bad: 0,
            ok: 0
        })
    });

})