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
    cy.get('.editable').click().type('Heading h2');
    cy.get('#toolbar-save').click();
    cy.visit('/document');
    cy.get('h2:contains(Heading h2)').should('be.visible');
  });

  it('As editor I can add a Heading H3 block ', () => {
    cy.visit('/document/edit');
    cy.addNewBlock('heading');
    cy.get('#field-tag > .react-select__control').click();
    cy.get('#react-select-38-option-1').click();
    cy.get('.editable').click().type('Heading h3');
    cy.get('#toolbar-save').click();
    cy.visit('/document');
    cy.get('h3:contains(Heading h3)').should('be.visible');
  });

  it('As editor I can add a Heading block with special characters', () => {
    cy.visit('/document/edit');
    cy.addNewBlock('heading');
    cy.get('.editable')
      .click()
      .type('& ` ~ ! @ # $ % ^ & * - _ = + [ ] ; : , . < > / ? /(/)/}/{');
    cy.get('#toolbar-save').click();
    cy.visit('/document');
    cy.get(
      'h2:contains(& ` ~ ! @ # $ % ^ & * - _ = + [ ] ; : , . < > / ? /(/)/}/{)',
    ).should('be.visible');
  });

  it('As editor I can add a Heading block with html encodable characters', () => {
    cy.visit('/document/edit');
    cy.addNewBlock('heading');
    cy.get('.editable')
      .click()
      .type('&nbsp &#160 < &lt &#60 > &gt &#62 & &amp &#38 ”');
    cy.get('#toolbar-save').click();
    cy.visit('/document');
    cy.get(
      'h2:contains(&nbsp &#160 < &lt &#60 > &gt &#62 & &amp &#38 ”) ',
    ).should('be.visible');
  });

  it('As editor I can add a Heading block with html tags', () => {
    cy.visit('/document/edit');
    cy.addNewBlock('heading');
    cy.get('.editable')
      .click()
      .type(
        '<script>document.getElementById();</script> <a href=“foo”>whatever</a>',
      );
    cy.get('#toolbar-save').click();
    cy.visit('/document');
    cy.get(
      'h2:contains(<script>document.getElementById();</script> <a href=“foo”>whatever</a>)',
    ).should('be.visible');
  });
});
