import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaGitlab } from "react-icons/fa";
import InstagramIcon from "@material-ui/icons/Instagram";

const Footer = () => {
  return (
    <footer className="footerGral">
      <Container fluid>
        <Row>
          <Col className="d-flex justify-content-center align-items-center">
            <div className="footer-logo pe-5">
              <FaGitlab />
              <span className="logo-titulo">Tienda Fornite</span>
            </div>
            <div className="redes">
              <div>
                <div className="instagram">
                  <a
                    href="https://www.instagram.com/tiendafornite.arg"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <InstagramIcon />
                  </a>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        {/* <Col className="contenedor-redes">
          <div className="redes">
            <div>
              <div className="instagram">
                <a
                  href="https://www.instagram.com/tiendafornite.arg"
                  target="_blank"
                  rel="noreferrer"
                >
                  <InstagramIcon />
                </a>
              </div>
            </div>
          </div>
        </Col> */}

        {/* <Row className='bg-dark'>
          <Col>
            <div className='copyright'>
              <p >Ponete en contacto con nosotros | This website is made by blabl</p>
            </div>
          </Col>
        </Row> */}
      </Container>
    </footer>
  );
};

export default Footer;
