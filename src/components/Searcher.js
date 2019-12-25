import React, { useState } from 'react';
import Error from './Error';

const Searcher = ({ mainSetSearch }) => {

    const [search, setSearch] = useState('');
    const [error, setError] = useState(false);

    const handleSubmit = event => {
        event.preventDefault();
        if (search.trim().length === 0) {
            setError(true)
        } else {
            mainSetSearch(search);
            setError(false);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="form-group col-md-8">
                    <input className="form-control form-control-lg" type="text" placeholder="Busca una imagen, ejemplo: Paisaje o Café" onChange={event => setSearch(event.target.value)} />
                </div>
                <div className="form-group col-md-4">
                    <input className="btn btn-primary btn-block" type="submit" value="Buscar" />
                </div>
            </div>
            {error ? <Error message="Agrega un término de búsqueda" /> : null}
        </form>
    );
}

export default Searcher;