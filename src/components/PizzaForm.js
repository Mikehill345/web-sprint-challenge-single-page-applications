import React from 'react'
import Order from './Order'

export default function PizzaForm(props) {
    const { values, change, submit, disabled, errors, order } = props

    const onChange = evt => {
        const { name, value, type, checked } = evt.target
        const valueToUse = type === 'checkbox' ? checked : value
        change(name, valueToUse)
    }

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }


    return (
        <div>
            <div className='form-header'>
                <h1>Pizza Maker !</h1>
                <label>name
          <input
                                value={values.name}
                                onChange={onChange}
                                name="name"
                                type="text"
                                className='name'
                            />
                        </label>
            </div>
            <div className='form-container'>
                <form onSubmit={onSubmit}>
                    <label>Pizza Size
          <select name='size' className='size' value={values.size} onChange={onChange}>
                            <option value="">-- select --</option>
                            <option value="Small">Small</option>
                            <option value="Medium">Medium</option>
                            <option value="Large">Large</option>
                        </select>
                    </label>
                    <div>
                        <h3>Choice of Sauce</h3>
                        <label>Light Sauce
                            <input
                                type='radio'
                                name='sauce'
                                value='Light Sauce'
                                checked={values.sauce === 'Light Sauce'}
                                onChange={onChange}
                            />
                        </label>

                        <label>More Sauce
                            <input
                                type='radio'
                                name='sauce'
                                value='More Sauce'
                                checked={values.sauce === 'More Sauce'}
                                onChange={onChange}
                            />
                        </label>

                        <label>SO MUCH SAUCE!!
                            <input
                                type='radio'
                                name='sauce'
                                value='SO MUCH SAUCE!!'
                                checked={values.sauce === 'SO MUCH SAUCE!!'}
                                onChange={onChange}
                            />
                        </label>
                    </div>
                    <div>
                        <h3>Pick your toppings!</h3>
                        <label> Extra Cheese
                        <input
                                type='checkbox'
                                name='cheese'
                                checked={values.cheese}
                                onChange={onChange}
                            />
                        </label>

                        <label>pepperoni
                        <input
                                type='checkbox'
                                name='pepperoni'
                                checked={values.pepperoni}
                                onChange={onChange}
                            />
                        </label>

                        <label>mushroom
                        <input
                                type='checkbox'
                                name='mushroom'
                                checked={values.mushroom}
                                onChange={onChange}
                            />

                        </label>

                        <label>sasuage
                        <input
                                type='checkbox'
                                name='sasuage'
                                checked={values.sasuage}
                                onChange={onChange}
                            />

                        </label>
                        <label>pineapple
                        <input
                                type='checkbox'
                                name='pineapple'
                                checked={values.pineapple}
                                onChange={onChange}
                            />
                        </label>

                        <label>ham
                        <input
                                type='checkbox'
                                name='ham'
                                checked={values.ham}
                                onChange={onChange}
                            />

                        </label>
                    </div>
                    <div>
                        <label>special
          <input
                                value={values.special}
                                onChange={onChange}
                                name='special'
                                type='text'
                                className='special'
                            />
                        </label>
                    <div>
                        </div>
                    </div>
                    <button disabled= {disabled} id='submitBtn'>submit</button>
                    <div className='errors'>
                        <div>{errors.size}</div>
                        <div>{errors.sauce}</div>
                        <div>{errors.toppings}</div>
                        <div>{errors.special}</div>
                        <div>{errors.name}</div>
                    </div>
                    <div>
                    {
        order.map(order => {
          return (
            <Order key={Order.id} details={order} />
          )
        })
      }
                    </div>

                </form>
            </div>






        </div >

    )
}