/*global cy */



describe('pizza app', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3002/pizza')
})
const sizeInput = () => cy.get('.size')
const sauceInput = () => cy.get('input[name="sauce"]')
const cheeseCheck = () => cy.get('input[name="cheese"]')
const pepperoniCheck = () => cy.get('input[name="pepperoni"]')
const mushroomCheck = () => cy.get('input[name="mushroom"]')
const sasuageCheck = () => cy.get('input[name="sasuage"]')
const pineappleCheck = () => cy.get('input[name="pineapple"]')
const hamCheck = () => cy.get('input[name="ham"]')
const specialInput = () => cy.get('.special')
const nameInput = () => cy.get('.name')
const submitBtn = () => cy.get('#submitBtn')
const orderPizzaLink = () => cy.get('#form-page')


it('checking test', () => {
    expect(1+1).to.equal(2)
    nameInput().type('hello world')
    specialInput().type('hello world')
})
it('checking Route to pizzaform', () => {
   orderPizzaLink().click()
})
it('can type in the inputs', () => {
    orderPizzaLink().click()
    // .specialInput().type('look heres special instructions')
    // .specialInput().clear()
})
it('can fill out checkboxes check and uncheck', () => {
    orderPizzaLink().click()
    cheeseCheck().click()
    pepperoniCheck().click()
    mushroomCheck().click()
    sasuageCheck().click()
    pineappleCheck().click()
    hamCheck().click()
    orderPizzaLink().click()
    cheeseCheck().click()
    pepperoniCheck().click()
    mushroomCheck().click()
    sasuageCheck().click()
    pineappleCheck().click()
    hamCheck().click()
})
it('can submit form', () => {
    nameInput().type('Michael Hill')
    orderPizzaLink().click()
    cheeseCheck().click()
    pepperoniCheck().click()
    mushroomCheck().click()
    sasuageCheck().click()
    pineappleCheck().click()
    hamCheck().click()
    submitBtn().click()
})

})