/// <reference types="Cypress" />
describe('Rediff site', () => {
    it('Site visit', () => {    
    cy.visit('http://register.rediff.com/register/register.php?FormName=user_details');
    /*cy.get('input[type="submit"]').click();      
    cy.on('window:alert',(txt)=>{
         expect(txt).to.contains('Your full name cannot be blank.');
    });*/
})
    it('fill data',()  => {

        cy.get('#tblcrtac > tbody > tr:nth-child(3) > td:nth-child(3) > input[type=text]').type('Rakesh');
        cy.get("#tblcrtac > tbody > tr:nth-child(7) > td:nth-child(3) > input[type=text]:nth-child(1)").type('rkshkrkrjr');
        cy.get("#tblcrtac > tbody > tr:nth-child(7) > td:nth-child(3) > input.btn_checkavail").click();
        cy.wait(100);
        cy.get("#check_availability > font > b").each((x) => {expect(x.text()).to.be.oneOf(["The system cannot process your request at this time.","Yippie! The ID you've chosen is available.","Sorry, the ID that you are looking for is taken."])
        //document.querySelector("#check_availability > font > b")
    })
        cy.get("#tblcrtac > tbody > tr:nth-child(10) > td:nth-child(3) > input[type=password]").type('Password123@');
        cy.get("#tblcrtac > tbody > tr:nth-child(12) > td:nth-child(3) > input[type=password]").type('Password123@');
        //cy.get("#div_mob > table > tbody > tr > td:nth-child(3) > div:nth-child(2)")
        cy.get("#div_mob > table > tbody > tr > td:nth-child(3) > div:nth-child(2) > div:nth-child(2)").contains('USA').click({force:true});
    });
    


});
