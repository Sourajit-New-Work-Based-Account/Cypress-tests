/// <reference types="Cypress" />
describe('Rediff site', () => {
    it('Site visit', () => {    
    cy.visit('http://register.rediff.com/register/register.php?FormName=user_details');
    
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
        cy.get("#country_id > ul > li:nth-child(3)").click({force:true});
        //cy.get("#div_mob > table > tbody > tr > td:nth-child(3) > div:nth-child(2) > div:nth-child(2)").contains('USA').click({force:true});
        cy.wait(100);
        //cy.get("#div_hintQS > table > tbody > tr:nth-child(2) > td:nth-child(3) > select > option:nth-child(2)").click()
        //document.querySelector("#div_hintQS > table > tbody > tr:nth-child(2) > td:nth-child(3) > select")
        cy.get("#tblcrtac > tbody > tr:nth-child(16) > td:nth-child(2) > table > tbody > tr > td:nth-child(1) > input").click({force:true});
        cy.wait(200);
        cy.get("#div_hintQS > table > tbody > tr:nth-child(2) > td:nth-child(3) > select").select("What is your favourite food?");
        cy.wait(150);
        cy.get("#div_hintQS > table > tbody > tr:nth-child(4) > td:nth-child(3) > input[type=password]").type('Kulcha');
        cy.get("#div_hintQS > table > tbody > tr:nth-child(6) > td:nth-child(3) > input[type=text]").type('AAAAAAA BBBB');
        cy.get("#mobno").type('1234567890');
        cy.wait(100);
        cy.get("#tblcrtac > tbody > tr:nth-child(23) > td:nth-child(3) > select:nth-child(1)").select("16");
        cy.wait(100);
        cy.get("#tblcrtac > tbody > tr:nth-child(23) > td:nth-child(3) > select:nth-child(2)").select("SEP");
        cy.wait(1000);
        cy.get("#tblcrtac > tbody > tr:nth-child(23) > td:nth-child(3) > select:nth-child(3)").select('1997', { force: true }).invoke('val').should('eq', '1997'); 
        cy.wait(100);
        cy.get("#tblcrtac > tbody > tr:nth-child(25) > td:nth-child(3) > input[type=radio]:nth-child(2)").click();
        cy.wait(100);
        cy.get("#tblcrtac > tbody > tr:nth-child(25) > td:nth-child(3) > input[type=radio]:nth-child(1)").click();
        cy.get("#country").select('Egypt');
        cy.wait(100);
        cy.get("#tblcrtac > tbody > tr:nth-child(33) > td:nth-child(3) > input").type('ABCD');
        cy.wait(100);
        cy.get("#Register").click({force:true});
        cy.wait(300);
        cy.get('#Register').click();     
        cy.on('window:alert',(txt)=>{
         expect(txt).to.contains('Your full name cannot be blank.');
        })
     });
    });
