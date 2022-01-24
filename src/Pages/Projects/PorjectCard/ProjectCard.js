import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
    const { image, projectTitle } = project;
    return (
        <div>
            <Col>
                <Card className='project-card text-center shadow p-3 mb-5 bg-white rounded'>
                    <Card.Img variant="top" src={`data:image/jpeg;base64,${image}`} />
                    <Card.Body>
                        <Card.Title >{projectTitle}</Card.Title>

                    </Card.Body>
                </Card>
            </Col>

        </div>
    );
};

export default ProjectCard;