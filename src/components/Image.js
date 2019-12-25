import React from 'react';

const Image = ({ element }) => {

    const { largeImageURL, likes, previewURL, tags, views } = element;

    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card">
                <img src={previewURL} className="card-img-top" alt={tags} />
                <div className="card-body">
                    <p className="card-text">{likes} Me Gusta</p>
                    <p className="card-text">{views} Vistas</p>
                </div>
                <div className="card-footer">
                    <a href={largeImageURL} className="btn btn-warning btn-block text-light" rel="noopener noreferrer" target="_blank">Ver Imagen</a>
                </div>
            </div>
        </div>
    );
}

export default Image;