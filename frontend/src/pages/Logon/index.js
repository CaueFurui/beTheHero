import React from 'react';
import { Link } from 'react-router-dom'
import { FiLogOut } from 'react-icons/fi'

import './styles.css';

import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

export default function Logon() {
    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt='Be The Hero!' />

                <form>
                    <h1>Faça seu logon</h1>

                    <input placeholder='Sua ID' />
                    <button className='button' type='submit'>Entrar</button>

                    <Link className='back-link' to="/register">
                        <FiLogOut size={16} color='#E02041' />
                        Não tenho cadastro
                    </Link>
                </form>
            </section>

            <img src={heroesImg} alt='Heroes' />
        </div>
    );
}