import * as React from 'react';
import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Context from './Context';

function Atualizador() {
  const [dados, setDados] = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/FormSetor');
  }, [dados]);

  return <div></div>;
}

export default Atualizador;
