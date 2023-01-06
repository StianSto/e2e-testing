describe("no.wikipedia.org", () => {
  it("can search for noroff", () => {
    cy.visit("https://no.wikipedia.org");
    cy.get("input#searchInput").type("Noroff{enter}");
    cy.get("h1").contains("Noroff");
  });
});
