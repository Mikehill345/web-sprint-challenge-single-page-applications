import * as yup from 'yup'

export default yup.object().shape({
    size: yup.string()
    .required('pick a size'),
    sauce: yup.string()
    .required('Must pick a sauce option'),
    cheese: yup.boolean(),
    pepperoni: yup.boolean(),
    mushroom: yup.boolean(),
    sasuage: yup.boolean(),
    pineapple: yup.boolean(),
    ham: yup.boolean(),
    special: yup.string(),
})