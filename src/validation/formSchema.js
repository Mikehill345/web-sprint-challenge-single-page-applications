import * as yup from 'yup'

export default yup.object().shape({
    size: yup.string(),
    sauce: yup.string(),
    cheese: yup.boolean(),
    pepperoni: yup.boolean(),
    mushroom: yup.boolean(),
    sasuage: yup.boolean(),
    pineapple: yup.boolean(),
    ham: yup.boolean(),
    special: yup.string(),
    name: yup.string()
    .required('Must have 2 chars or more')
    .min(2,'Must have more than 2 chars')
})