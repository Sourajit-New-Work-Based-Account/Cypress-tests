describe("Shopping Content Page", () => 
{
  it("Has the Link opened?", () =>
  {
    cy.visit("https://sunilkumarvj.github.io/React-Snipcart-practice/#/");
    cy.contains("Sunil Shopping Cart");
 })
it('Count images and Visibility', () => {
    //const expCount= document.getElementsByClassName("album").length;
    //const expCount= 15;
    cy.wait(300);
    cy.get("#root > div > div > div.item2 > div > div > button").invoke("text").then((val) => {
        let expCount = (val.match(/Add to cart/g)).length  
    cy.get('div[class="album"]').find('img').should('be.visible');
    cy.get('div[class="album"]').should('have.length',expCount); //Number of image cells in the grid
    cy.get('div[class="desc"]').should('have.length',expCount); //Number of Title in total ;
    cy.get('button[class="buy-button snipcart-add-item"]').should('have.length',expCount);
})
})
it('Does cart Summary open on Add to cart', () => {
    //cy.contains("Add to cart").click();
    cy.get('#root > div > div > div.item2 > div > div > button').click({multiple:true, force : true});
    cy.wait(3000);
    let sum=0;
    //const total=0;
    cy.get('div[class="snipcart-item-quantity__total-price snipcart__font--bold snipcart__font--secondary"]').each(($val) => {
        const value = $val.text();
        cy.log(value);
        value.startsWith('$');
        sum=sum+parseFloat(value.substring(1));
        //total=sum;
    });
    cy.wait(3000);
    cy.contains("Cart summary");
    //cy.wait(400);
    //cy.get('div[class="snipcart-item-quantity__total-price snipcart__font--bold snipcart__font--secondary"]').should('contain','$10.00');
    /*cy.get(".snipcart-cart-summary-fees__amount").invoke("text").then((bill) =>{
        expect(bill.replace(/,/g, '')).to.eq("$"+total);
    })*/
})
it('Check if cart gets empty', () => {
    cy.get('button[class="snipcart__button--icon"]').click({multiple : true, force: true});
    cy.wait(3000);
    cy.contains('Your cart is empty.');

})


});
