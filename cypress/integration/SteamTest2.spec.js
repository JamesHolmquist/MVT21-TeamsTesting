// TeamsTest1.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
describe("Test 2", () =>{
    it("Tests switching languages", () =>{
        cy.visit("https://www.steampowered.com/")

        cy.get("#foryou_tab > span > a.pulldown_desktop").should("include.text", "Your Store")
        cy.get("#language_pulldown").click()
        cy.get("#language_dropdown > div > a:nth-child(24)").click()
        cy.get("#foryou_tab > span > a.pulldown_desktop").should("include.text", "Din butik")

    })
})