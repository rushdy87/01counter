let step = 1;
const getStep = () => {
  step = document.getElementById('stape').value;
};

// Reducer
const initState = { counter : 0 };

const counterReducer = (state = initState, action) => {
  if(action.type === 'increase') {
    return {...state, counter:state.counter + action.payload};
  } else if(action.type === 'decrease') {
    return {...state, counter:state.counter - action.payload};
  }
  return state;
};

// Store
const store = Redux.createStore(counterReducer);

// app Component func
const counterApp = () => {
  document.getElementById('counter').innerText = store.getState().counter;
}

counterApp();

// subscribe the app component with store
store.subscribe(counterApp);

// Actions
document.getElementById('increase').addEventListener('click', () => {
  const action = {
    type: 'increase',
    payload: +step
  };
  store.dispatch(action);
});

document.getElementById('decrease').addEventListener('click', () => {
  const action = {
    type: 'decrease',
    payload: +step
  };
  store.dispatch(action);
})