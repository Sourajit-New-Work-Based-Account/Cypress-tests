describe("Shopping Content Page", () => 
{
  it("Has the Link opened?", () =>
  {
    cy.visit("https://sunilkumarvj.github.io/React-Snipcart-practice/#/");
    cy.contains("Sunil Shopping Cart");
 })
it('Count images and Visibility', () => {
    //const expCount= document.getElementsByClassName("album").length;
    const expCount= 15;
    cy.get('div[class="album"]').find('img').should('be.visible');
    cy.get('div[class="album"]').should('have.length',expCount); //Number of image cells in the grid
    cy.get('div[class="desc"]').should('have.length',expCount); //Number of Title in total ;
    cy.get('button[class="buy-button snipcart-add-item"]').should('have.length',expCount);
})
it('Does cart Summary open on Add to cart', () => {
    cy.contains("Add to cart").click();
    cy.contains("Cart summary");
    cy.get('.snipcart-item-quantity__total-price snipcart__font--bold snipcart__font--secondary').each(($val) => {
        const value=$val.text();
        cy.log(value);
        value.startsWith('$');

    })
})
/*it('PromoCodes and Checkout Buttons', () => {
    cy.get('button[class="snipcart-discount-box__button snipcart__font--bold"]').click();
    //cy.get('form').find('input').type('Hello');
    //cy.get('div[class="snipcart-input--no-style snipcart-input"]').get('input[class="snipcart-input__input snipcart__font--secondary snipcart__font--bold"]').type('DemoPromoCode{enter}');    
    cy.get('button[class="snipcart-cart-button snipcart__font--bold snipcart__font--secondary snipcart-cart-button--large snipcart-cart-button--highlight snipcart-cart-button--spaced snipcart__font--large"]').click();
    //cy.get('button[class="snipcart-cart-button snipcart__font--bold snipcart__font--secondary snipcart-cart-button--medium snipcart-cart-button--highlight snipcart__font--large"]').click();
})*/
it("Payment privacy policy", () => {
    cy.visit("https://sunilkumarvj.github.io/React-Snipcart-practice/#/");
    cy.contains("Add to cart").click();
    cy.get('div[class="snipcart-featured-payment-methods"]').find('a').invoke('removeAttr', 'target').click();
    cy.url().should('eq','https://snipcart.com/security?utm_source=cart_referral&utm_medium=powered_by&utm_campaign=powered_by_ref&utm_term=null');

});
});