describe('service is available', function () {
  it('должно быть доступно на localhost:3000', function () {
    cy.visit('http://localhost:3000');
  });
  it('есть страница авторизации + можно войти', function () {
    cy.visit('/login');
    cy.get('input[name=email]').type('email2@yandex.ru');
    cy.get('input[name=password]').type('199010');
    cy.get('button[type=submit]').click();
  });
  it('после перезагрузки авторизация не слетает', function () {
    cy.visit('/');
    cy.contains('Личный кабинет').click();
  });
});
