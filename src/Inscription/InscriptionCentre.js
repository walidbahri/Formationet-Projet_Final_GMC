import React from "react" ;
import styled from "styled-components" ;

const Wrapper = styled.div`
*{
        box-sizing:border-box ;
}
  font-weight: 700;
  padding: 23px;
  background-color: rgba(232, 232, 232, 0.3);
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  width: 350px;
  border-radius: 5px;
  box-shadow: 0px 0px 5px #0000004a;
  margin: 65px auto;
 .logo{
  display: flex ;
  justify-content: center ; 
  margin: 20px ;
 }

 input[type=text],
 input[type=password],
 input[type=date],
 input[type=tel],
 textarea{
  border-radius: 5px;
  border: solid 1px rgba(105, 105, 105, 0.44);
  height: 40px;
  padding: 0 20px;
  margin-bottom: 20px;
  max-width: 100%;
 }
  label {
    display: block;
    padding-bottom: 10px;
    font-weight: 400;
    color: #6e6e6e;
  }
 .Log-in-radio{
         display: flex ;
         align-items: center ;
 }
 .Log-in-buttons{
         display: flex ;
         justify-content: space-around ;
         text-align: center ;
 }
 .Log-in-button{
         width: 40% ;
         height: 40px ;
         margin: 20px ;
         padding:10px; 
         font-weight: bold ;
         font-size: 15px ;
         cursor: pointer ;
 }
 #submit{
    background-color: green;
    border: solid green 2px;
    color: #fff;
    font-weight: 200;
    text-transform: uppercase;
 }
 #submit:hover{
  background-color: transparent;
    color: green;
    margin-top: 19px;
    transition: .2s;
 }
 #cancel{
  background-color: #c00000;
    border: solid #c00000 2px;
    color: #fff;
    font-weight: 200;
    text-transform: uppercase;
    transition: .2s;
         
 }
 input[type=radio] {
   color:red;
 }
 .Log-in-radio {
   padding-bottom: 20px;
   label {
    padding-bottom: 0;
  }
}
 #cancel:hover{
         background-color: transparent;
         color: #c00000 ;
         margin-top: 19px ;
 }
`

class InscriptionCentre extends React.Component {
        constructor(props) {
                super(props);
        }

        render() {
            return(
                    <Wrapper>
                <div className="container">
                            {/* Log IN FORM */}
                <form>
                        <h2>Inscrire votre centre de formation</h2>
                            {/* First Name input */}
                    <label htmlFor="Nom-du-centre"> Nom du centre : </label>
                    <input id="Nom-du-centre" type="text"></input>

                            {/* Last Name input */}
                    <label htmlFor="Nom-du-responsable"> Nom du responsable : </label>
                    <input id="Nom-du-responsable" type="text"></input>

                            {/* Description du centre input */}
                    <label htmlFor="Description-du-centre"> Description du centre : </label>
                    <textarea></textarea>

                            {/* Email input */}
                    <label htmlFor="Adresse"> Adresse : </label>
                    <input id="Adresse" type="text"></input>

                            {/* Email input */}
                    <label htmlFor="Adresse-email"> Adresse email : </label>
                    <input id="Adresse-email" type="text"></input>

                            {/* PassWord input */}
                    <label htmlFor="Mot-de-passe"> Mot de passe : </label>
                    <input id="Mot-de-passe" type="password"></input> 

                            {/* phone number input */}
                    <label htmlFor="Numero-de-téléphone"> Numero de téléphone : </label>
                    <input id="Numero-de-téléphone" type="tel" pattern="[0-9]{2}-[0-9]{3}-[0-9]{3}"required></input>

                            {/* Email input */}
                    <label htmlFor="Site-web"> Site web : </label>
                    <input id="Site-web" type="text"></input>

                            {/* Submit Button */}
                    <div className="Log-in-buttons">
                        <input className="Log-in-button" id="submit" type="submit" value="Sign In" />
                        <input className="Log-in-button" id="cancel" type="button" value="Cancel"/>
                    </div>
                    </form>
                </div>
                </Wrapper>
            )
        }
}

export default InscriptionCentre ;