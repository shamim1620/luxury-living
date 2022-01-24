import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import ProjectCard from '../PorjectCard/ProjectCard';

const Project = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/projects')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])

    return (
        <div>
            <p className='text-center mt-5'>projects</p>
            <h3 className='text-center mb-4'>Discover the latest Interior Design
                <br />
                available today</h3>
            <div className="container">
                <Row xs={1} md={3} className="g-4">
                    {
                        projects.slice(0, 3).map(project => <ProjectCard
                            key={project._id}
                            project={project}
                        ></ProjectCard>)
                    }
                </Row>
            </div>

        </div>
    );
};

export default Project;