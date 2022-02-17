describe("Test 4", () =>{
    it("Tests stats page displaying a number of concurrent users", () =>{
        cy.visit("https://www.steampowered.com/")

        cy.get("#global_header > div > div.supernav_container > a:nth-child(1)").trigger("mouseover")
        cy.get("#global_header > div > div.supernav_container > div:nth-child(6) > div > a:nth-child(6)").click()
        cy.get("body > div.responsive_page_frame.with_header > div.responsive_page_content > div.responsive_page_template_content > div.page_header_ctn.search > div.page_content > div:nth-child(3) > div > div.block_content.block_content_inner.dark > div.statsTop > table > tbody > tr:nth-child(2) > td:nth-child(2) > span").invoke("val").should(value => {expect(Number.isNaN(+value), 'input should be a number').to.eq(false)})
    })
})