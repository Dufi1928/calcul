// cypress/e2e/calculatrice.cy.js
describe('Calculatrice E2E', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    });

    it('Effectue une addition et met à jour l’historique', () => {
        cy.get('.digit[data-digit="2"]').click();
        cy.get('.operator[data-operator="add"]').click();
        cy.get('.digit[data-digit="3"]').click();
        cy.get('#equals').click();
        cy.get('#display').should('contain', '5');
        cy.get('#history-list li')
            .should('have.length', 1)
            .and('contain', '2 + 3 = 5');
    });

    it('Effectue une soustraction et met à jour l’historique', () => {
        cy.get('.digit[data-digit="7"]').click();
        cy.get('.operator[data-operator="subtract"]').click();
        cy.get('.digit[data-digit="4"]').click();
        cy.get('#equals').click();
        cy.get('#display').should('contain', '3');
        cy.get('#history-list li')
            .should('contain', '7 – 4 = 3');
    });

    it('Effectue une multiplication et met à jour l’historique', () => {
        cy.get('.digit[data-digit="4"]').click();
        cy.get('.operator[data-operator="multiply"]').click();
        cy.get('.digit[data-digit="5"]').click();
        cy.get('#equals').click();
        cy.get('#display').should('contain', '20');
        cy.get('#history-list li')
            .should('contain', '4 × 5 = 20');
    });

    it('Efface l’historique lorsque le bouton "Effacer l\'historique" est cliqué', () => {
        // Effectuer une opération pour remplir l'historique
        cy.get('.digit[data-digit="2"]').click();
        cy.get('.operator[data-operator="add"]').click();
        cy.get('.digit[data-digit="3"]').click();
        cy.get('#equals').click();

        // Effacer l'historique
        cy.get('#clear-history').click();
        cy.get('#history-list li').should('have.length', 0);
    });

    it('Réinitialise l’affichage lorsque le bouton "C" est cliqué', () => {
        cy.get('.digit[data-digit="1"]').click();
        cy.get('.digit[data-digit="2"]').click();
        cy.get('#clear').click();
        cy.get('#display').should('contain', '0');
    });
});
