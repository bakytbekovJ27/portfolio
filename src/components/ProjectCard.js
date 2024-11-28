import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, gitLink }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <a 
            href={gitLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn"
          >
            View Project
          </a>
        </div>
      </div>
    </Col>
  );
};
