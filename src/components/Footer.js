import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from '../assets/img/tg.png';
import navIcon2 from '../assets/img/what.png';
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://wa.me/996500264686" target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://t.me/SamuAI" target="_blank" rel="noopener noreferrer"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://instagram.com/bakytbekov.j" target="_blank" rel="noopener noreferrer"><img src={navIcon3} alt="Instagram Icon" /></a>
            </div>
            <p></p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}