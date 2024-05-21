import './css/projectitem.css';

const ProjectItem = ({project, index, isOpen, onClick}) =>
{
    return (
        <div className="project-item" key={index}>
            <img src={project.image} alt={project.name}/>
            <div className="project-item-top">
                <h2>{project.name}</h2>
                <button className="project-item-top-button" onClick={onClick}>
                    <span>Ver Más</span>
                    <div className="project-item-top-button-icon">
                        {isOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M25.1087 21.7442C24.6011 22.2322 23.794 22.2164 23.3059 21.7088L17 15.0146L10.6941 21.7088C10.206 22.2164 9.39887 22.2322 8.89129 21.7442C8.3837 21.2561 8.36788 20.449 8.85594 19.9414L16.0809 12.2914C16.3213 12.0414 16.6532 11.9001 17 11.9001C17.3468 11.9001 17.6787 12.0414 17.9191 12.2914L25.1441 19.9414C25.6321 20.449 25.6163 21.2561 25.1087 21.7442Z"
                                      fill="white"/>
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34"
                                 fill="none">
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M8.89129 12.2558C9.39887 11.7678 10.206 11.7836 10.6941 12.2912L17 18.9854L23.3059 12.2912C23.794 11.7836 24.6011 11.7678 25.1087 12.2558C25.6163 12.7439 25.6321 13.551 25.1441 14.0586L17.9191 21.7086C17.6787 21.9586 17.3468 22.0999 17 22.0999C16.6532 22.0999 16.3213 21.9586 16.0809 21.7086L8.85594 14.0586C8.36788 13.551 8.3837 12.7439 8.89129 12.2558Z"
                                      fill="white"/>
                            </svg>
                        )}
                    </div>
                </button>
            </div>

            {isOpen ? (
                <div className="project-item-info">
                    <div className="project-features">
                        {project.features.map((feature, indexFeatures) => (
                            <div key={indexFeatures} className="project-feature-item">
                                <span dangerouslySetInnerHTML={{__html: feature.icon}}/>
                                <p>{feature.name}</p>
                            </div>
                        ))}
                    </div>
                    <div className="project-item-info-container">
                        <div className="project-item-info-top">
                            <h2>Descripción del Proyecto</h2>
                            <p>{project.description}</p>
                        </div>
                        <div className="project-item-info-bottom">
                            <div className="project-item-info-data">
                                <div className="project-item-info-data-item-first">
                                    <p>Categoría</p>
                                    <h3>{project.category}</h3>
                                </div>
                                <div className="project-item-info-data-item">
                                    <p>Cliente</p>
                                    <h3>{project.client}</h3>
                                </div>
                                <div className="project-item-info-data-item">
                                    <p>Fecha Inicial</p>
                                    <h3>{project.startdate}</h3>
                                </div>
                                <div className="project-item-info-data-item">
                                    <p>Fecha Finalización</p>
                                    <h3>{project.enddate}</h3>
                                </div>
                            </div>
                            
                            <div className="project-item-info-results">
                                <h2>Resultados del Proyecto</h2>
                                <div className="project-item-info-results-data">
                                    <div className="project-item-info-results-data-item-first">
                                        <p><span>Lectores:</span> {project.satisfaction}</p>
                                    </div>
                                    <div className="project-item-info-results-data-item">
                                        <p><span>Espectadores:</span> {project.scope}</p>
                                    </div>
                                    <div className="project-item-info-results-data-item">
                                        <p><span>Métricas:</span> {project.roi}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="project-item-description">
                    <h2>Descripción del Proyecto</h2>
                    <p>{project.description}</p>
                </div>
            )}
        </div>
    );
}

export default ProjectItem;