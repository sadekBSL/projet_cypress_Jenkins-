
describe('Form Test', () => { // Définition d'un groupe de tests nommé 'Form Test'
 /* before(() => {// Avant tous les tests dans ce groupe, exécuter ce code
    Cypress.on('uncaught:exception', (err, runnable) => {// Ajoute un écouteur pour les exceptions non interceptées
      
      return false;// Retourne false pour empêcher Cypress d'échouer le test en cas d'exception non interceptée
    });
  });*/

  
  it('Test_1', () => {// Définition d'un test individuel nommé ''Test_1''
   
    cy.fixture('Data').then((data) => { // Charge les données de test à partir du fichier fixture 'DataTest'
      const entry = data[0];

      cy.visit('https://form.jotform.com/241565194131352');// ouvrir la page spécifiée
      cy.get('#header_1').should('contain', 'Event Registration Form'); // Vérifier que le text egale
      cy.get('#header_1').should('contain', 'Event '); // Vérifier que le text contien 'Event'
      
      cy.get('#prefix_4').select(entry.prefix); // Sélectionne le préfixe dans le menu déroulant
      cy.get('#first_4').type(entry.firstName); // Remplit le champ du prénom
      cy.get('#last_4').type(entry.lastName);// Remplit le champ du nom de famille
      cy.get('#input_5').type(entry.email);// Remplit le champ de l'email
      cy.get('#input_6_full').type(entry.phone);// Remplit le champ du numéro de téléphone
      cy.get('#label_input_7_0').click(); // Clique sur le bouton de choix radio
      cy.get('#prefix_11').select(entry.guest.prefix);// Sélectionne le préfixe pour l'invité dans le menu déroulant
      cy.get('#first_11').type(entry.guest.firstName);// Remplit le champ du prénom de l'invité
      cy.get('#last_11').type(entry.guest.lastName); // Remplit le champ du nom de famille de l'invité
      cy.get('#input_12').type(entry.guest.email);// Remplit le champ de l'email de l'invité
      cy.get('#input_13_full').type(entry.guest.phone);// Remplit le champ du numéro de téléphone de l'invité
     // condition 
      if (data.Information === "yes") { // Coche la case d'information en fonction de la valeur
        cy.get('#label_input_22_0').click(); // Coche 'Oui'
      } else {
        cy.get('#label_input_22_1').click(); // Coche 'Non'
      }

      //cy.get('#input_2').click();// Soumet le formulaire
    });
  });

  it('Test_2', () => {// Définition d'un test individuel nommé ''Test_2''
   
    cy.fixture('Data').then((data) => { // Charge les données de test à partir du fichier fixture 'DataTest'
      const entry = data[1];
      cy.visit('https://form.jotform.com/241565194131352');// ouvrir la page spécifiée
      cy.get('#prefix_4').select(entry.prefix); // Sélectionne le préfixe dans le menu déroulant
      cy.get('#first_4').type(entry.firstName); // Remplit le champ du prénom
      cy.get('#last_4').type(entry.lastName);// Remplit le champ du nom de famille
      cy.get('#input_5').type(entry.email);// Remplit le champ de l'email
      cy.get('#input_6_full').type(entry.phone);// Remplit le champ du numéro de téléphone
      cy.get('#label_input_7_0').click(); // Clique sur le bouton de choix radio
      cy.get('#prefix_11').select(entry.guest.prefix);// Sélectionne le préfixe pour l'invité dans le menu déroulant
      cy.get('#first_11').type(entry.guest.firstName);// Remplit le champ du prénom de l'invité
      cy.get('#last_11').type(entry.guest.lastName); // Remplit le champ du nom de famille de l'invité
      cy.get('#input_12').type(entry.guest.email);// Remplit le champ de l'email de l'invité
      cy.get('#input_13_full').type(entry.guest.phone);// Remplit le champ du numéro de téléphone de l'invité
     // condition 
      if (data.Information === "yes") { // Coche la case d'information en fonction de la valeur
        cy.get('#label_input_22_0').click(); // Coche 'Oui'
      } else {
        cy.get('#label_input_22_1').click(); // Coche 'Non'
      }

      //cy.get('#input_2').click();// Soumet le formulaire
    });
  });
 

});