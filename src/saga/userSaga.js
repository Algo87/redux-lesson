import {put, takeEvery, call} from "redux-saga/effects";
import {ADD_FETCH_CUSTOMER, addFetchCustomers, addManyCustomerAction} from "../srore/customerReducer";

const fetchUsersFromApi = ()=>fetch("https://jsonplaceholder.typicode.com/users?_limit=10")

function* userWorker() {
  const data=yield call(fetchUsersFromApi);
  const json=yield call(()=>new Promise(res=>res(data.json())));
  yield put(addManyCustomerAction(json))
}

export function* userWatcher() {
 yield takeEvery(ADD_FETCH_CUSTOMER, userWorker)
}