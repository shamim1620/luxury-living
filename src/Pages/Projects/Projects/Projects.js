import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import ProjectCard from '../PorjectCard/ProjectCard';

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/projects')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])

    return (
        <div>
            <Navigation></Navigation>
            <h3 className='text-center'>Our Projects</h3>
            <div className="container">
                <Row xs={1} md={3} className="g-4">
                    {
                        projects.map(project => <ProjectCard
                            key={project._id}
                            project={project}
                        ></ProjectCard>)
                    }
                </Row>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Projects;