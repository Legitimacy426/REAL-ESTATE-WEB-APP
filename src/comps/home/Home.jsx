import React from 'react'
import Hero from './Hero'
import Houses from './Houses'
import Lands from './Lands'
import Services from './Services'
import Footer from './Footer'
import Nav from './Nav'
import Contacts from './Contacts'

const Home = () => {
  return (
    <>
    <Nav />
    <Hero />
    <Houses  id="houses"/>
    <Lands id="lands"/>
    <Services id="services"/>
    <Contacts id="contacts"/>
    <Footer />
    </>
  )
}

export default Home
