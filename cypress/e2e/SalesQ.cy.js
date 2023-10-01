




describe('salesq', () => {
  it('scenario', () => {
    cy.visit('https://web.cloudapper.com/').wait(2000);

    //Logs in to the website using credentials from cypress.env.json
    const { email, password } = Cypress.env('login').admin;  
        
        
        cy.get('#txtEmail').should('have.attr', 'placeholder', 'Email').type(email);
        cy.get('#txtUserPassword').type(password);
        cy.get('#btnLogin').click();
        
        cy.get('.introjs-skipbutton', { timeout: 60000 }).contains('SKIP').click();
        cy.get('.swal2-confirm').click();

        cy.get('#CADashboard').should('include.text', 'Dashboard');

        cy.get('#menuId-4eb34064-9605-4405-9e6e-f3a70084480a').should('include.text', 'Customers').click({force: true});

        cy.get('.dx-buttongroup-wrapper > .dx-button-has-text > .dx-button-content > .dx-button-text').should('include.text', 'Add').click();

        cy.get('.dx-lookup-field').click({force: true});

        cy.get('.dx-scrollview-content > :nth-child(1) > .dx-template-wrapper > .custom-item').click({force: true});

        const uniqueName = () => Cypress._.random(0, 1e6)
        const testid = uniqueName()
        const testname = `testname${testid}`
        cy.get('#stringField7 > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input').type(testname, {force: true});
        
        cy.get('#geoField0 > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input').type('Rajshahi', {force: true});
        cy.get('[title="Search Location"]').click({force: true});
        cy.get('#actionBtns > .dx-button-default > .dx-button-content').click({force: true});

        cy.get('#CAMoreMenu > .menu-title').click({force: true}),
        cy.contains('Sales Guidance').trigger('mouseover', {force: true}).click();

        cy.get('.dx-icon.las.la-plus').click({force: true});

        const uniqueTitle = () => Cypress._.random(0, 1e6)
        const titleid = uniqueTitle()
        const titlename = `titlename${titleid}`
        cy.get("input[name='stringField1']").type(titlename, {force: true});

        cy.get('#dateField0 > .dx-dropdowneditor-input-wrapper > .dx-texteditor-container > .dx-texteditor-buttons-container > .dx-widget > .dx-button-content > .dx-dropdowneditor-icon').click({force: true});
        cy.get(':nth-child(2) > [data-value="2023/10/04"]').trigger('mouseover').click({force: true});

        cy.get('#actionBtns > .dx-button-default > .dx-button-content > .dx-button-text').click();


        cy.get('#CADashboard').should('include.text', 'Dashboard').click().wait(2000);



      })

        
  })
