describe('drag and drop tests', function () {
  const bun = 'Флюоресцентная булка R2-D3';
  const main = 'Филе Люминесцентного тетраодонтимформа';
  it('should be available to drag and drop and take an order', () => {
    cy.visit('/');

    // модальное окно
    cy.get('[data-cy="ingredients-list"]').contains(bun);
    cy.get(`[data-cy='${main}']`).click();
    cy.get(`[data-cy='modal']`).contains(main);
    cy.get(`[data-cy='modal'] [data-cy='close-modal'] `).click();

    // положили булку в конструктор
    cy.get(`[data-cy='${bun}']`).trigger('dragstart');
    cy.get("[data-cy='constructor-list'").trigger('drop');
    cy.get("[data-cy='constructor']").contains(bun);

    //положили филе в конструктор
    cy.get(`[data-cy='${main}']`).trigger('dragstart');
    cy.get("[data-cy='constructor-list'").trigger('drop');
    cy.get(`[data-cy='${main}'] .counter__num`).should('have.text', '1');
    cy.get("[data-cy='constructor']").contains(main);

    // нажали оформить
    cy.contains('button', 'Оформить заказ').click();

    // авторизовались
    cy.get('input[name=email]').type('email2@yandex.ru');
    cy.get('input[name=password]').type('199010');
    cy.get('button[type=submit]').click();

    //снова нажали оформить
    cy.contains('button', 'Оформить заказ').click();

    // проверили успешность
    cy.contains('Дождитесь готовности на орбитальной станции');
    cy.get(`[data-cy='modal'] [data-cy='close-modal'] `).click();
  });
});
