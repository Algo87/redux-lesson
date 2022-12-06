
import {put, takeEvery} from "redux-saga/effects"
import {ADD_ASYNC_CASH, decrementAction, GET_ASYNC_CASH, incrementAction} from "../srore/cashReducer";

const delay = (ms)=> new Promise(res=>setTimeout(res, ms));


function* incrementWorker (){
yield delay(1000);
yield put(incrementAction())
}

function* decrementWorker (){
  yield delay(1000);
  yield put(decrementAction())
}

export function* countWatcher (){
yield takeEvery(ADD_ASYNC_CASH, incrementWorker)
yield takeEvery(GET_ASYNC_CASH, decrementWorker)
}