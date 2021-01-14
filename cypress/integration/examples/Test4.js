describe('2nd tests', () => {

    it('Checkingout', () => {
        cy.visit("https://sunilkumarvj.github.io/React-Snipcart-practice/#/");
        cy.contains("Add to cart").click();
        cy.wait(300);
        //cy.get('button[class="snipcart-cart-button snipcart__font--bold snipcart__font--secondary snipcart-cart-button--large snipcart-cart-button--highlight snipcart-cart-button--spaced snipcart__font--large"]').click({ force: true });
        //cy.contains("Checkout").click();
       // cy.get('button[class="snipcart-cart-button"]').click({force : true});
       cy.get('footer').find('button').click({force : true});
    })
    it('Info', () =>{
        cy.contains('h1','Billing');
        cy.get("#name").type('Jason');
        cy.get("#email").type('jason@gmail.com');
        cy.get("#address1").type('California');
        cy.get("#address2").type('CTX');
        cy.get("#city").type('LA');
        cy.get("#postalCode").type('A59');
        //cy.get("select[name='country-target']").select('CA').should('have.text','Canada');
        cy.get('div.snipcart-form__footer').find('button').click({force : true});
        cy.wait(200);
    
        cy.contains('h1','Payment');
        cy.wait(500); //document.querySelector("#card-number")
        cy.get('#card-number').type('1234553500036767{enter}');
        //cy.get('div[class="snipcart-payment-form__column snipcart-payment-form__card-number"]').find("input").type('1111222233334444');
        cy.get("input.snipcart-payment-form__input").type('12/53');
        cy.wait(500);
        cy.get("#cvv").type('123');
        cy.get('button[class="snipcart-cart-button snipcart__font--bold snipcart__font--secondary snipcart-cart-button--medium snipcart-cart-button--highlight snipcart__font--large"]').click({force : true});
        //Place Order button
    
    
    
    });
    
    
    });
    
    
    

