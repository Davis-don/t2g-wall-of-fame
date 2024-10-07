import React from 'react'
import {OvearallContactUsContainer, ContactUsMainHeading,Contactparagraph,CardsContactHolder,LeftSideStyledSection,ContactDetailsOvearall,ContactIconContainer,RightSideStyledSection,ContactForm,ContactText,SubmitBtn} from '../Styled/Contact.styled'
import ContactData from '../Data/ContactData';

function  Contact() {
  return (
    <OvearallContactUsContainer>
        <ContactUsMainHeading>Contact Me</ContactUsMainHeading>
        <Contactparagraph>Get In Touch with me through</Contactparagraph>
      
    <CardsContactHolder>

      
        

        <LeftSideStyledSection>


        {
  ContactData.map((contactData, index) => {
    return (
      <ContactDetailsOvearall key={index}>
        <ContactIconContainer>
          <h1 style={{color:'blue',fontSize:'4rem'}}>{contactData.iconValue}</h1>
        </ContactIconContainer>
        <ContactText>
          <div className="left-text">
            <h1 className='text-light'>{contactData.SocialName}</h1>
          </div>
          <div className="right-text">
            <p className='text-light'>{contactData.ContactDetail}</p>
          </div>
        </ContactText>
      </ContactDetailsOvearall>
    );
  })
}
   
        </LeftSideStyledSection>







        <RightSideStyledSection>
          <h1 style={{color:'white',textAlign:'center'}}>Message Me</h1>
          <ContactForm >
            <div>
            <label style={{color:'white'}} for='fullName'>Full Names</label><br/>
            <input style={{width:'100%'}}  id='fullName'placeholder='full names'/><br/>
            </div>
            <div>
            <label style={{color:'white'}} for='email'>Email</label><br/>
            <input style={{width:'100%'}}  id='email'placeholder='full names'/><br/>
            </div>
            <div>
            <label style={{color:'white'}} for='message'>Message</label><br/>
            <textarea style={{width:'100%'}} id='message' placeholder='comment'/><br/>
            </div>
            <div>
            <SubmitBtn type='submit'> Submit</SubmitBtn>
            </div>
            
     
          
            
          </ContactForm>
        </RightSideStyledSection>
        </CardsContactHolder>
      
        </OvearallContactUsContainer>
  )
}

export default  Contact