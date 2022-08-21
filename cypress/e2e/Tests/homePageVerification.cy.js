import {homepage} from '../Pages/homepage.cy'
import {aboutus} from '../Pages/AboutUs.cy'
import {contactus} from '../Pages/contactus.cy'
import datafile from "../../fixtures/datafile.json"


let home = new homepage()
let about = new aboutus()
let contact = new contactus()


it('Verify Menu Items', ()=>
{
    
   home.navigate()
   home.verifyMenuLinks()
   home.login()
   home.verifyFooter()
}  
)

it('Verify About Us Page',()=>

{
   cy.log(datafile.pagelink)
   about.verifyAboutUsPage(datafile.pagelink)

}
)
it('Verify contact us form submission',()=>
{
contact.verifyContactUs(datafile.name, datafile.email, datafile.body)

}

)


