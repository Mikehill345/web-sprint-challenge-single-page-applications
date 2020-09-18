
import React, {useState, useEffect} from "react";
import PizzaForm from './components/PizzaForm'
import schema from './validation/formSchema'
import * as yup from 'yup'
import { Route, Switch, Link } from 'react-router-dom'


const initialFormValues = {
  size: '',
  sauce: '',
  cheese: false,
  pepperoni: false,
  mushroom: false,
  sasuage: false,
  pineapple: false,
  ham: false,
  special: '',
  name: '',
}

const initialFormErrors = {
  size: '',
  sauce: '',
  toppings: '',
  special: '',
  name: '',
}

const initialorder = []
const initialDisabled = true

export default function App(){

  const [order, setOrder] = useState(initialorder)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)


  const validate = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(valid => { setFormErrors({ ...formErrors, [name]: "" }); })
      .catch(err => { setFormErrors({ ...formErrors, [name]: err.errors[0] }); });
  }

  const inputChange = (name, value) => {
    validate(name, value)
    setFormValues({ ...formValues, [name]: value })
  }

  const formSubmit = () => {
    const newOrder = {
      size: formValues.size,
      sauce: formValues.sauce,
      toppings: [ 
        'cheese',
        'pepperoni',
        'mushroom',
        'sasuage',
        'pineapple',
        'ham'].filter(topping => formValues[topping]),
      special: formValues.special.trim(),
      name: formValues.name.trim(),
    }
    setOrder([...order, newOrder])
    setFormValues(initialFormValues)
  }
console.log(order)
  useEffect(() => {
    schema.isValid(formValues).then(valid => {
      setDisabled(!valid);
    })
  }, [formValues])

  return (
    <>
      <h1>Lambda Eats</h1>
      <img src='/Assets/Pizza.jpg' alt="pizza"></img>
      <Link to={'/'}>Home</Link>
      <Link to={'/pizza'} id='form-page'>Order a pizza!</Link>

      <Switch>
        <Route path='/pizza'>
        <PizzaForm
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
        order={order}
      />
        </Route> 
       </Switch>

    </>
  )}