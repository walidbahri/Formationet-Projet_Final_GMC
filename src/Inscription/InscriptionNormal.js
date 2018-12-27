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
 input[type=date]{
  border-radius: 5px;
  border: solid 1px rgba(105, 105, 105, 0.44);
  height: 40px;
  padding: 0 20px;
  margin-bottom: 20px;
  width: 100%;
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

class InscriptionNormal extends React.Component {
      
 

        render() {
            return(
                    <Wrapper>
                <div className="container">
                            {/* Log IN FORM */}
                <form>
                        <h2>Inscription utilisateur</h2>
                            {/* First Name input */}
                    <label htmlFor="Nom"> Nom : </label>
                    <input id="Nom" type="text"></input>

                            {/* Last Name input */}
                    <label htmlFor="Prénom"> Prénom : </label>
                    <input id="Prénom" type="text"></input>

                            {/* Email input */}
                    <label htmlFor="Adresse email"> Adresse email : </label>
                    <input id="Adresse email" type="text"></input>

                            {/* PassWord input */}
                    <label htmlFor="Mot de passe"> Mot de passe : </label>
                    <input id="Mot de passe" type="password"></input> 

                            {/* Gender Radio */}
                    <div className="Log-in-radio">
                           <label> sexe : </label>
                           <input type="radio" name="gender" value="female" /> <span>Femme</span>
                           <input type="radio" name="gender" value="male" /> <span>Homme</span>
                    </div>
                            {/* Birthday Date */}
                    <label htmlFor="Birth-day-date"> date de naissance : </label>
                    <input type="date" id="Birth-day-date"></input>

                            {/* Niveau d'éducation */}
                    <label htmlFor="Birth-day-date"> Niveau d'éducation : </label>
                    <input id="Adresse email" type="text"></input>

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

export default InscriptionNormal ;