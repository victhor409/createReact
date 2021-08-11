import React from 'react'
import './App.css'

import Nav from './components/template/nav/Nav'
import Footer from './components/template/Footer/Footer'
import Logo from './components/template/Logo/Logo'
import Main from './main/Main'


export default props =>

<div className = "app">

    
    <Logo/>
    <Nav/>
    <Main/>
    <Footer/>
    
</div>