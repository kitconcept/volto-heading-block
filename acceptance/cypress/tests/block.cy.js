context('Block Acceptance Tests', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.viewport('macbook-16');
    cy.createContent({
      contentType: 'Document',
      contentId: 'document',
      contentTitle: 'Document',
      path: '/',
    });
    cy.autologin();
  });

  it('As editor I can add a Heading block', () => {
    cy.visit('/document/edit');
    cy.addNewBlock('heading');
    cy.get('#toolbar-save').click();
  });
});
