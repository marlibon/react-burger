describe('modal window tests', function () {
    it('should be opened and closed by clicking', () => {
        cy.visit('/');
        cy.get("[data-cy='Флюоресцентная булка R2-D3']").click();
        cy.get("[data-cy='title']").should("have.text", "Детали ингредиента");
        cy.get("[data-cy='ingredient title']").should("have.text", "Флюоресцентная булка R2-D3");
        cy.get("[data-cy='close']").click();
        cy.get("[data-cy='constructor title']").should("have.text", "Соберите бургер");
    })
})