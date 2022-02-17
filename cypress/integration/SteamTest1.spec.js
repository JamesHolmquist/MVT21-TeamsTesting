describe("Test 1", () =>{
    it("Tests Search and age gate", () =>{
        cy.visit("https://www.steampowered.com/")

        cy.get("[id=store_nav_search_term]").type("Elden Ring")
        cy.get("#store_search_link > img").click()
        cy.get("#search_resultsRows > a:nth-child(1) > div.col.search_capsule > img").click()
        cy.get("#view_product_page_btn").click()
        cy.get("body > div.newmodal > div.newmodal_content_border > div > div:nth-child(1)").should("include.text", "Please enter a valid date")
        cy.get("body > div.newmodal > div.newmodal_content_border > div > div.newmodal_buttons > div").click()
        cy.get("#ageYear").select("1993")
        cy.get("#view_product_page_btn").click()
        cy.url().should("include", "https://store.steampowered.com/app/1245620/ELDEN_RING/")

    })
})