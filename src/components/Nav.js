import React, { useState } from 'react';
//Animation
import styled from 'styled-components';
import { motion } from 'framer-motion';
import logo from '../img/logo.png';
//Redux and Routes
import { fetchSearch } from '../actions/gamesAction';
import { useDispatch } from 'react-redux';
import { fadeIn } from '../animations';

const Nav = () => {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState('');

  const inputHandler = e => {
    setTextInput(e.target.value);
  };
  const submitSearch = e => {
    e.preventDefault();
    dispatch(fetchSearch(textInput));
    setTextInput('');
  };
  const clearSearched = () => {
    dispatch({ type: 'CLEAR_SEARCHED' });
  };
  return (
    <StyledNav variants={fadeIn} initial='hidden' animate='show'>
      <Logo onClick={clearSearched}>
        <img src={logo} alt='logo' />
        <h1>GamePhoenix</h1>
      </Logo>
      <form className='search'>
        <input value={textInput} onChange={inputHandler} type='text' />
        <button onClick={submitSearch} type='submit'>
          Search
        </button>
      </form>
    </StyledNav>
  );
};

const StyledNav = styled(motion.nav)`
  padding: 3rem 5rem;
  text-align: center;
  input {
    width: 30%;
    font-size: 1.3rem;
    padding: 0.5rem;
    border: none;
    height: 3rem;
    margin-top: 1rem;
  }
  button {
    font-size: 1.5rem;
    border: none;
    padding: 0.5rem 2rem;
    height: 3rem;
    cursor: pointer;
    background: #ff7676;
    color: white;
  }
`;

const Logo = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  cursor: pointer;
  color: white;
  img {
    height: 5rem;
    width: 5rem;
    margin-right: 1rem;
  }
`;

export default Nav;
