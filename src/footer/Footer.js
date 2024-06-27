import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { HiOutlineComputerDesktop } from "react-icons/hi2";


import './Footer.css'
import brand from '../Imagens/logo_diogo-removebg-preview.png'

export default function Footer() {
    return (
        <Container>
            <Row>

                <footer>
                    <div class="footerContainer">

                        <div class="footerNav">
                        </div>

                        <div class="socialIcons">
                            <a class="navbar-brand" href="https://diogo-portfolioo.netlify.app/">
                                <img src={brand} alt="Bootstrap" width="30" height="30" className='logo-image' />
                            </a>
                            <a href="https://diogo-portfolioo.netlify.app/" alt='Portfólio'><i><HiOutlineComputerDesktop /></i></a>
                            <a href="https://github.com/"><i><AiFillGithub /></i></a>
                            <a href="https://www.linkedin.com/in/diogo-favilla-g-jacintho-8728041ba/"><i><AiFillLinkedin /></i></a>
                        </div>


                    </div>
                    {/* <div class="footerBottom">
                        <p>Copyright &copy;2023; Designed by <span class="designer">Noman</span></p>
                    </div> */}
                </footer>

            </Row>
        </Container>

    )
}