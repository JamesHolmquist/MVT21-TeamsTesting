describe("Test 3", () =>{
    it("Tests adding and removing to cart", () =>{
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
        cy.get("[id^=cart_row_] > div > div.cart_item_price_container > div > a").click()
        cy.get("body > div.responsive_page_frame.with_header > div.responsive_page_content > div.responsive_page_template_content > div.page_background > div.page_content > div.leftcol.cart_status_message_area > div.cart_status_message_ctn > div.cart_status_message").should("include.text", "Your item has been removed!")

    })
})