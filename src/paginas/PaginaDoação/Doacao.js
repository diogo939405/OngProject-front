import React, { useRef } from 'react'
import { Outlet } from 'react-router'
import AnimatedPage from '../../AnimatedPage'
import Menu from '../../menu/Menu'
import './Doacao.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import foto from '../../assets/icons/banner-blog-post-01.png'
import Button from 'react-bootstrap/Button';
import logo1 from '../../assets/icons/information (1).png';
import logo2 from '../../assets/icons/search.png'
import logo3 from '../../assets/icons/information (1).png'
import logo4 from '../../assets/icons/list.png'

import Footer from '../../footer/Footer'
import Float from '../../floatButton/Float'



export default function Doacao() {
  const dados = useRef(null)

  const scrollToDados = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth"
    })
  }

  return (
    <>

      <header className='cabeca'>
        <Menu />
        <div className='div-texto'>
          <div >
            <h4 className='div-titulo'>titulo pagina</h4>
          </div>
          <div className='div-info'>
            <span>
              <a href='/' className='link-home'> Home</a>
            </span>
            <span style={{ color: 'white', fontSize: '1.3rem' }}>/</span>
            <span className='pagina-atual'>Doação</span>
            <span></span>
          </div>
        </div>


      </header>
      <AnimatedPage>
        <body className='corpo'>

          <section className='secao1'>

            <Container>
              <Row id='corpo-mensagem'>
                <Col id='mensagem-imagem'>
                  <Image src={foto} id='foto-texto'
                  // width={'640vw'} height={'700vh'} 
                  />
                </Col>

                <Col className='mensagem-texto'>
                  <h4 id='titulo'>Titulo</h4>
                  {/* <h5 id='subtitulo'>subtitulo</h5> */}
                  <p id='conteudo'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                    and Lembre-se: cada doação, por menor que seja, faz a diferença. Seja parte da solução!.
                  </p>
                </Col>
              </Row>
            </Container>
          </section>


          <section className='secao2'>
            <Container id='container-icons'>
              <Row id='corpo-icons' className='gx-5'>
                <Col id='icons'>
                  <div className='mensagem-icons'>
                    <div className='imagem-icons'>
                      <img src={logo1} height='95px' width='100px' alt='oie' />
                    </div>
                    <p className='texto-icon'>Toda ajuda é importante! Você pode doar dinheiro, bens materiais, tempo ou trabalho voluntário. Escolha uma ONG confiável, pesquise a reputação e o histórico da instituição, e faça sua doação com segurança.</p>
                  </div>
                </Col>
                <Col id='icons'>
                  <div className='mensagem-icons'>
                    <div className='imagem-icons'>
                      <img src={logo2} height='95px' width='100px' alt='oie' />
                    </div>
                    <p className='texto-icon'>Existem mais de 820 mil ONGs no Brasil, cada uma com sua causa e impacto. Elas trabalham em diversas áreas</p>
                  </div>
                </Col>

              </Row>
              <Row id='corpo-icons' className='gx-5'>
                <Col id='icons'>
                  <div className='mensagem-icons'>
                    <div className='imagem-icons'>
                      <img src={logo3} height='95px' width='100px' alt='oie' />
                    </div>
                    <p className='texto-icon'>84% dos brasileiros doam para um futuro melhor!
                      Junte-se a essa corrente do bem e faça a diferença na vida de quem mais precisa. Doar para uma ONG é investir em educação, saúde, meio ambiente e um futuro mais justo para todos.</p>
                  </div>
                </Col>
                <Col id='icons'>
                  <div className='mensagem-icons'>
                    <div className='imagem-icons'>
                      <img src={logo4} height='95px' width='100px' alt='oie' />
                    </div>
                    <p className='texto-icon'>Escolha uma ONG confiável: pesquise a reputação e o histórico da instituição, verifique se ela possui registro no CNAS(Conselho Nacional de Assistência Social) e visite a instituição pessoalmente, se possível.</p>
                  </div>
                </Col>
                {/* <Col id='icons'>
                  <div className='mensagem-icons'>
                    <div className='imagem-icons'>
                      <img src={logo1} height='95px' width='100px' alt='oie' />
                    </div>
                    <p className='texto-icon'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                  </div>
                </Col>
                <Col id='icons'>
                  <div className='mensagem-icons'>
                    <div className='imagem-icons'>
                      <img src={logo1} height='95px' width='100px' alt='oie' />
                    </div>
                    <p className='texto-icon'> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                  </div>
                </Col> */}
              </Row>
              <Row>
                <Col>
                  <div className='seta'>
                    <Button id='botao-seta' behavior="smooth" href='/Ongs'> Doe Agora</Button>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
        </body>
      </AnimatedPage>
      <footer className='rodape-doacao'>
        <Footer />
      </footer>
      <Float />


    </>

  )
}