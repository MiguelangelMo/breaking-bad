import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import '../css/App.css';
import Button from './Button.js'
import Container from './Container'

const Contenedor = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
` ;

function App(props) {


  return (
    <Contenedor>
      <Button>
        Obtener Frese
      </Button>
    </Contenedor>
  );
}

export default App;
