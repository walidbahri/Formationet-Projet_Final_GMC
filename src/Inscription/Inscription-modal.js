import React, { Component } from 'react'
import {Container, Button, Header, Image, Modal } from 'semantic-ui-react'
import styled from "styled-components" ;
import { Link } from 'react-router-dom'



const Wrapper = styled.div`
Link{
  color: white ;
}

`

class ModalExampleDimmer extends Component {
  state = { open: false }

  show = dimmer => () => this.setState({ dimmer, open: true })
  close = () => this.setState({ open: false })

  render() {
    const { open, dimmer } = this.state

    return (
      <Wrapper>
      <div>
        <a onClick={this.show('blurring')}>Inscription</a>
        
        <Modal className="container" size="small" dimmer={dimmer} open={open} onClose={this.close}>
          <Modal.Header>Inscrivez vous en tant que :</Modal.Header>
          
          <Modal.Content image scrolling>
          <div className="inscription-option">
            <Image wrapped size='small' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' rounded />
            <Modal.Description>
              <Header>Etudiant</Header>
              <Button color='black' onClick={this.close}>
              <Link className="inscription-link" to="/Inscription/InscriptionNormal">Selectionner</Link>
            </Button>
            </Modal.Description>    
            </div>      

            <div className="inscription-option">
            <Image wrapped size='small' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' rounded />
            <Modal.Description>
              <Header>Formateur</Header>
              <Button color='black' onClick={this.close}>
              <Link to="/Inscription/InscriptionFormateur">Selectionner</Link>
            </Button>
            </Modal.Description>
            </div>

            <div className="inscription-option">
            <Image wrapped size='small' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' rounded />
            <Modal.Description>
              <Header>Centre de formation </Header>
              <Button color='black' onClick={this.close}>
              <Link to="/Inscription/InscriptionCentre">Selectionner</Link>
            </Button>
            </Modal.Description>
            </div>

          </Modal.Content>

          <Modal.Actions>
            <Button color='black' onClick={this.close}>
              Annuler
            </Button>
          </Modal.Actions>
        </Modal>
        
      </div>
      </Wrapper>
    )
  }
}

export default ModalExampleDimmer