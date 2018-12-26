import React, { Component } from 'react'
import {Container, Button, Header, Image, Modal } from 'semantic-ui-react'
import styled from "styled-components" ;
import { Link } from 'react-router-dom'



const Wrapper = styled.div`
a{
  color: #fff ;
  text-decoration: none ;
}
.modal-content{
  align-items: center ;
}
.inscription-option{
 margin-bottom: 20px ;
 padding: 20px ;
 width: 200px ;
}

`
const buttonStyle = {
  padding: "13px" ,
  textAlign:"center" ,
}

class ModalExampleDimmer extends Component {
  state = { open: false }

  show = dimmer => () => this.setState({ dimmer, open: true })
  close = () => this.setState({ open: false })

  render() {
    const { open, dimmer } = this.state

    return (
      
      <div>
        <a style={buttonStyle} onClick={this.show('blurring')}>Inscription</a>
        
        <Modal className="container" size="small" dimmer={dimmer} open={open} onClose={this.close}>
          <Modal.Header>Inscrivez vous en tant que :</Modal.Header>
          <Wrapper>
          <Modal.Content className="modal-content" image scrolling>
          <div className="inscription-option">
            <Image wrapped size='small' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' rounded />
            <Modal.Description>
              <Header></Header>
              <Button color='black' onClick={this.close}>
              <Link className="inscription-link" to="/Inscription/InscriptionNormal">Etudiant</Link>
            </Button>
            </Modal.Description>    
            </div>      

            <div className="inscription-option">
            <Image wrapped size='small' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' rounded />
            <Modal.Description>
              <Header></Header>
              <Button color='black' onClick={this.close}>
              <Link to="/Inscription/InscriptionFormateur">Formateur</Link>
            </Button>
            </Modal.Description>
            </div>

            <div className="inscription-option">
            <Image wrapped size='small' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' rounded />
            <Modal.Description>
              <Header> </Header>
              <Button color='black' onClick={this.close}>
              <Link to="/Inscription/InscriptionCentre">Centre de formation</Link>
            </Button>
            </Modal.Description>
            </div>
          </Modal.Content>
          </Wrapper>
          <Modal.Actions>
            <Button color='black' onClick={this.close}>
              Annuler
            </Button>
          </Modal.Actions>
        </Modal>
        
      </div>
      
    )
  }
}

export default ModalExampleDimmer