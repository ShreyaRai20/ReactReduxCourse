
// import {createStore} from 'redux'

// const INITIAL_VALUE = {
//     counter: 0,
//     privacy: false
// }

// const counterReducer = (store = INITIAL_VALUE, action) => {
//     if (action.type === "INCREMENT"){
//         return {...store, counter: store.counter += 1}
//     }else if (action.type === "DECREMENT"){
//         return {...store, counter: store.counter -= 1}
//     }else if (action.type === "ADD"){
//         return {...store, counter: store.counter += parseInt(action.payload.num)}
//     }else if (action.type === "SUB"){
//         return {...store,counter: store.counter -= parseInt(action.payload.num)}
//     }else if (action.type === "PRIVACY_TOGGLE"){
//         return {...store, privacy: !store.privacy }
//     }
//     return store
// }

// const counterReducer = (store = INITIAL_VALUE, action) => {
//     if (action.type === "INCREMENT"){
//         return {counter: store.counter += 1, privacy: store.privacy}
//     }else if (action.type === "DECREMENT"){
//         return {counter: store.counter -= 1, privacy: store.privacy}
//     }else if (action.type === "ADD"){
//         return {counter: store.counter += parseInt(action.payload.num), privacy: store.privacy}
//     }else if (action.type === "SUB"){
//         return {counter: store.counter -= parseInt(action.payload.num), privacy: store.privacy}
//     }else if (action.type === "PRIVACY_TOGGLE"){
//         return {counter: store.counter, privacy: !store.privacy }
//     }
//     return store
// }

// const counterStore = createStore(counterReducer)

// export default counterStore


/*

1. Npm install redux
2. Npm install react-redux
3. Create store folder with Index.js file
4. Creating the store using
Import {createStore} from redux.
5. Providing the store with react
1. Provider from react-redux
2. <Provider store={store}><App /></Provider>
6. Using the store
1. useSelector hook gets a slice of the store.
Const counter = useSelector(state => state.counter);
2. Subscription is already setup and only will re-execute when only your slice is changed. Subscription is automatically cleared also.
7. Dispatch Actions using the useDispatch hook.

*/


import {createStore} from 'redux'

const INITIAL_VALUE = {
    counter: 0,
    privacy: false
}


const counterReducer = (store = INITIAL_VALUE, action) => {
    console.log(action)
    if(action.type === "INCREMENT"){
        return {...store, counter: store.counter + 1}
    } else if(action.type === "DECREMENT"){
        return {...store, counter: store.counter - 1}
    } else if(action.type === "ADD"){
        return {...store, counter: store.counter + Number(action.payload.num)}
    } else if(action.type === "SUB"){
        return {...store, counter: store.counter - Number(action.payload.num)}
    }else if(action.type === "PRIVACY"){
        return {...store, privacy: !store.privacy}
    }
    return store
}


const store = createStore(counterReducer)

export default store


