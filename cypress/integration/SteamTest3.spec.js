// TeamsTest1.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
describe("Test 1", () =>{
    it("Tests Search and age gate", () =>{
        cy.visit("https://www.steampowered.com/")

        cy.get("[id=store_nav_search_term]").type("Elden Ring")
        cy.get("#store_search_link > img").click()
        cy.get("#search_resultsRows > a:nth-child(1) > div.col.search_capsule > img").click()
        cy.get("#ageYear").select("1993")
        cy.get("#view_product_page_btn").click()
        cy.url().should("include", "https://store.steampowered.com/app/1245620/ELDEN_RING/")
        cy.get("#btn_add_to_cart_432247").click()
        cy.url().should("include", "https://store.steampowered.com/cart/")
        cy.get("[id^=cart_row_]").should("include.text", "ELDEN RING")
        

    })
})