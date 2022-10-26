import React from 'react'
import FormHome from '../components/home/FormHome'
import './styles/home.css'

const Home = () => {
  return (
    <article className='pokedex__body'>
      <div className='pokedex'>
        <img className='pokedex__img' src='/images/home/pokedex.png' alt='img' />
        <header className='pokedex__header'>
          <h2 className='pokedex__subtitle'>Hello Trainer!</h2>
          <p className='pokedex__text'>Give me your name, to see the pokedex</p>
        </header>
        <FormHome className='pokedex__form' />
      </div>
      <img className='pokedex__img2' src='./images/personajes/personaje1.png' alt='img' />
    </article>
  )
}

export default Home
