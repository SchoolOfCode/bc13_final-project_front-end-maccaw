describe("visits the home page and then navigates to the listings page", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000");
    cy.get('[href="/listings"] > li', { timeout: 10000 }).click();

    cy.url({ timeout: 10000 }).should(
      "be.equal",
      "http://localhost:3000/listings"
    );
    cy.get(".ListingContainer_input-bar__ZDahT")
      .type("strawberries")
      .get(".ListingContainer_search-button__IcPHz", { timeout: 10000 })
      .click({ timeout: 10000 });
  });
});

describe("visit listings page, searches by post-code and then clears search", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000/listings").wait(1000);
    cy.get(".ListingContainer_input-bar__ZDahT")
      .type("M")
      .wait(1000)
      .get(".ListingContainer_search-button__IcPHz")
      .click()
      .wait(1000);
    cy.get(".ListingContainer_clear-button__jewrU").click();
  });
});

describe("visit homepage, navigates to log-in, inputs details. Then clicks forgot password", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000/").wait(1000);
    cy.get("ul > :nth-child(4) > li").click().wait(1000);
    cy.get(".Login_form-email-input__3q0BK > .Login_input__r_1vS").type(
      "amina@gmail.com"
    );
    cy.get(".Login_form-password-input__XOMuN > .Login_input__r_1vS").type(
      "passrd"
    );
    cy.get(".Login_button__ejJ5H").click().get("h2").should("be.visible");
  });
});

describe.only("logged in user flow", () => {
  it("visit homepage, navigates to log-in, inputs details. and checke if logs in", () => {
    // cy.session('login', ()=>{
    cy.visit("http://localhost:3000/", { timeout: 10000 });
    cy.get("ul > :nth-child(4) > li").click({ timeout: 10000 });
    cy.get(".Login_form-email-input__3q0BK > .Login_input__r_1vS").type(
      "amina@gmail.com"
    );
    cy.get(".Login_form-password-input__XOMuN > .Login_input__r_1vS").type(
      "password"
    );
    cy.get(".Login_button__ejJ5H").click({ timeout: 10000 });
    cy.url().should("be.equal", "http://localhost:3000/dashboard");
    // });
  });
  it.only("checking correct user data in dashboard", () => {
    cy.visit("http://localhost:3000/dashboard", { timeout: 10000 });
    cy.get(".DashboardContainer_h1element__GkbFV").contains("Amina's Patch");
    cy.get(".profileInformation > :nth-child(3)").contains(
      "Location: TS26 8JA"
    );
    cy.get(".CropTable_crop-table__Lyqem").contains("White Mushrooms");
    cy.get('[href="/"] > li').click({ timeout: 10000 });
  });
});
