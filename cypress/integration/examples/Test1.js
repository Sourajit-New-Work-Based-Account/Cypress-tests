describe("Beer Store Page", () => 
{
  it("Has the Link opened?", () =>
  {
    cy.visit("https://sunilkumarvj.github.io/gatsby-demo/");
    cy.contains("Beer Products");
    cy.contains("Beer Lovers");
    cy.contains("About Us");
  })
  it("Is there a Company logo and Beer Gif?", () =>
  {
    cy.get('div[class="logo"]').find('img').should('be.visible');
    cy.get('div[class="gif"]').find('img').should('be.visible');

  })
  it('Gives Wikipedia page of Beer Store', () =>
  {
    cy.visit("https://sunilkumarvj.github.io/gatsby-demo/Products/");
    cy.contains("About Us").click();
    cy.url().should('eq', 'https://en.wikipedia.org/wiki/The_Beer_Store');
    cy.contains("The Beer Store");
  });
});




describe('Beer Product Activities', () =>
{
it("Can we move to Beer Products Page?", () =>
  {
    cy.visit("https://sunilkumarvj.github.io/gatsby-demo/");
    cy.get(".ytube").click();
    cy.url().should('eq','https://sunilkumarvj.github.io/gatsby-demo/Products');
    cy.contains("Buy your Products... Please say Cheers!!!");
  })
  it('Add cart functionality', () =>
  {
    cy.visit("https://sunilkumarvj.github.io/gatsby-demo/Products/");
    cy.contains("Add Item").click();
    cy.on('window:alert',(txt)=>{
      expect(txt).to.contains('added to the cart');
    })
  })
  it('check count', () =>
  {
    const expCount= 10;
    
    cy.get('button').should('have.length',expCount); //Number of Add Item Buttons
    cy.get('div[class="title"]').should('have.length',expCount); //Title for each beer product
    cy.get('div[class="price"]').should('have.length',expCount); //Price for each Beer product
    cy.get('div[class="description"]').should('have.length',expCount); //Description for each Beer product
    cy.get('img[class="imgbeers"]').should('have.length',expCount); //Number of Beer product images    
  });
});



describe("Beer Lover Page", () => 
{
  it("Can we move to Beer Lovers Page?", () =>
  {
    cy.visit("https://sunilkumarvj.github.io/gatsby-demo/");
    cy.get(".home").click();
    cy.url().should('eq','https://sunilkumarvj.github.io/gatsby-demo/Blovers');
    cy.contains('Beer & Food Pairing');
  })
  it('check count', () =>
  {
    const expectedCount= 8;
    cy.get('div[class="mine"]').should('have.length',expectedCount); //Number of cells in the grid
    cy.get('div[class="mine"]').find('img').should('be.visible'); //See if the images are visible
    cy.get('div[class="mine"]').find('img').should('have.length',expectedCount); //Number of images must be equal to the number of grid cells
    cy.get('.black').should('have.length',expectedCount); //Number of LEARN MORE HyperLinks should be same too
})
  it('See if clicking on learn more, article about the dish opens', () => {
    cy.visit('https://sunilkumarvj.github.io/gatsby-demo/Blovers');
    cy.contains('Learn More..').click();
    cy.url().should('contain','https://www.thebeerstore.ca/articles/');
  });
});
describe("Scrolling", () => {
  it('Is Scrolling working', () =>{
    cy.scrollTo("bottom");
  });
});









//npx cypress run --spec cypress\integration\examples\Test1.js

