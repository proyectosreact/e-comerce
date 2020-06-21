import React from 'react'
import Nav from '../../components/Menu/Nav'
import Menu from '../../components/Menu/Menu'
import Carrousel from '../../components/Carrousel/Carrusel'
import Footer from '../../components/Footer/index'
import Vista from '../../components/Vistaprincipal/index'
const Vistaprincipal = () => {
    return ( 
        <div>
            <Nav></Nav>
            <Menu></Menu>
            <Carrousel/>
            <Vista/>
            <Footer></Footer>
        </div> 
    );
}
 
export default Vistaprincipal;