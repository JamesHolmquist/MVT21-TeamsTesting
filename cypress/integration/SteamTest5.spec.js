describe("Test 5", () =>{
    it("Tests download page for links to download app on Win, Mac and Linux", () =>{
        cy.visit("https://www.steampowered.com/")

        cy.get("#global_action_menu > div.header_installsteam_btn.header_installsteam_btn_green > a").click()
        cy.get("#about_greeting > div.about_install_wrapper > div.about_install.win > a").invoke("attr", "href").should("include", "https://cdn.akamai.steamstatic.com/client/installer/SteamSetup.exe")
        cy.get("#about_greeting > div.about_install_wrapper > div.installer_list > a:nth-child(2)").invoke("attr", "href").should("include", "https://cdn.akamai.steamstatic.com/client/installer/steam.dmg")
        cy.get("#about_greeting > div.about_install_wrapper > div.installer_list > a:nth-child(3)").invoke("attr", "href").should("include", "https://cdn.akamai.steamstatic.com/client/installer/steam.deb")

    })
})