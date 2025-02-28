import React from 'react'

const Card = ({ imageUrl, breed }) => {
    if (!breed) return null;
    
    return (
        <div className="card shadow border-0 overflow-hidden">
            <div className="row g-0">
                <div className="col-md-6">
                    <img 
                        src={imageUrl} 
                        className="img-fluid rounded-start" 
                        alt={breed.name}
                        style={{ objectFit: 'cover', height: '100%', width: '100%' }}
                    />
                </div>
                <div className="col-md-6">
                    <div className="card-body">
                        <h2 className="card-title">{breed.name}</h2>
                        <div className="card-text">
                            <div className="mb-3">
                                <span className="badge bg-primary me-2">Origin: {breed.origin}</span>
                                <span className="badge bg-info">Lifespan: {breed.life_span} years</span>
                            </div>
                            
                            <h5>Temperament</h5>
                            <p>{breed.temperament}</p>
                            
                            <h5>Description</h5>
                            <p>{breed.description}</p>
                            
                            <div className="mt-3">
                                <h5>Characteristics</h5>
                                <div className="d-flex flex-wrap gap-2">
                                    <div className="progress w-100" style={{ height: '20px' }}>
                                        <div className="progress-bar" role="progressbar" 
                                            style={{ width: `${breed.adaptability * 20}%` }} 
                                            aria-valuenow={breed.adaptability} aria-valuemin="0" aria-valuemax="5">
                                            Adaptability: {breed.adaptability}/5
                                        </div>
                                    </div>
                                    <div className="progress w-100" style={{ height: '20px' }}>
                                        <div className="progress-bar bg-success" role="progressbar" 
                                            style={{ width: `${breed.affection_level * 20}%` }} 
                                            aria-valuenow={breed.affection_level} aria-valuemin="0" aria-valuemax="5">
                                            Affection: {breed.affection_level}/5
                                        </div>
                                    </div>
                                    <div className="progress w-100" style={{ height: '20px' }}>
                                        <div className="progress-bar bg-info" role="progressbar" 
                                            style={{ width: `${breed.intelligence * 20}%` }} 
                                            aria-valuenow={breed.intelligence} aria-valuemin="0" aria-valuemax="5">
                                            Intelligence: {breed.intelligence}/5
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card