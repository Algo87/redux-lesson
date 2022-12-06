import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {addCustomerAction, addFetchCustomers, removeCustomerAction} from "./srore/customerReducer";
import {fetchCustomers} from "./AsyncActions/customers";
import {asyncDecrementAction, asyncIncrementAction, decrementAction, incrementAction} from "./srore/cashReducer";

function App() {
  const dispatch = useDispatch();
  const cash = useSelector(state => state.cash.cash);
  const customers = useSelector(state => state.customers.customers);

  const addCash = (cash) => {
    dispatch({type: "ADD_CASH", payload: cash})
  }

  const getCash = (cash) => {
    dispatch(({type: "GET_CASH", payload: cash}))
  }

  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now()
    }
    dispatch(addCustomerAction(customer))
  }

  const removeCustomer = (customer)=>{
    dispatch(removeCustomerAction(customer.id))
  }

  return (
    <div className="App">
      <div>{cash}</div>
      <div style={{display: "flex", textAlign: "center", justifyContent: "center"}}>
        <button onClick={() => dispatch(asyncIncrementAction())}>+</button>
        <button onClick={() => dispatch(asyncDecrementAction())}>-</button>

      </div>
      <button onClick={() => addCustomer(prompt())}>+ client</button>
      <button onClick={() => dispatch(addFetchCustomers())}>get clients from BD</button>
      {customers.length <= 0
        ? <div>Клиентов нет</div>
        : <div>{customers.map((customer, index) => {
          return <div key={index} onClick={()=>removeCustomer(customer)}>{customer.name}</div>
        })}</div>}
    </div>
  );
}

export default App;
