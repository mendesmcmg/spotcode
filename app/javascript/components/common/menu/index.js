import React, { Fragment } from "react";
import { Navbar, Container, Columns, Button, Dropdown } from "react-bulma-components";
import logoImage from '../../../assets/images/logo.png'
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { faUserCircle } from 'react-icons/fa';

const ColumnsFullWidth = styled(Columns)`
    width:100%;
    padding-top: 20px;
    padding-top: 10px;
    padding-top: 10px;
`
	
const Menu = () => {
  let actionButton;
 
  if (useLocation().pathname == '/') {
    actionButton = <a href='/users/sign_in' className="is-pulled-right is-right">
        <Button outlined={true} color="white">ENTRAR</Button>
      </a>
  } else {
   act
  }


  return (
    <Fragment>
      <Navbar color="dark">
        <Container>
          <ColumnsFullWidth className="is-mobile">
            <Columns.Column desktop={{ size: 2 }} mobile={{ size: 5 }}>
                <img src={logoImage} className='image'/>
            </Columns.Column>
            <Columns.Column>
              {actionButton}
            </Columns.Column>
          </ColumnsFullWidth>
        </Container>
      </Navbar>
    </Fragment>
  );
};

export default Menu;