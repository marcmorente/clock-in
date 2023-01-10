/// <reference types="cypress" />

describe("Time tracking", () => {
    beforeEach(() => {
        cy.visit("http://localhost:5173/");
    });

    it("frontpage can be opened", () => {
        cy.contains("Clock-In kata");
    });
});
