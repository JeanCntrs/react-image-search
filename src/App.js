import React, { useState, useEffect } from 'react';
import Searcher from './components/Searcher';
import ImagesList from './components/ImageList';

const App = () => {

  const [mainSearch, mainSetSearch] = useState('');
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    if (mainSearch === '') return;
    const consultApi = async () => {
      const imagesPerPage = 30;
      const key = '14727480-e646cf080f17b4c87a9c22faa';
      const url = `https://pixabay.com/api/?key=${key}&q=${mainSearch}&per_page=${imagesPerPage}&page=${currentPage}`;
      const response = await fetch(url);
      const result = await response.json();
      setImages(result.hits);
      const calculatePages = Math.ceil(result.totalHits / imagesPerPage);
      setTotalPages(calculatePages);
      const jumbotron = document.querySelector('.jumbotron');
      jumbotron.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    consultApi();
  }, [mainSearch, currentPage]);

  const handlePreviousPage = () => {
    let newCurrentPage = currentPage - 1;
    setCurrentPage(newCurrentPage);
  }

  const handleNextPage = () => {
    let newCurrentPage = currentPage + 1;
    setCurrentPage(newCurrentPage);
  }

  return (
    <div className="app container">
      <div className="jumbotron">
        <p className="lead text-center">Buscador de Imágenes</p>
        <Searcher mainSetSearch={mainSetSearch} />
      </div>
      <div className="row justify-content-center">
        <ImagesList images={images} />
        {currentPage === 1 ? null : <button onClick={handlePreviousPage} className="btn btn-info mr-1" type="button">&laquo; Anterior</button>}
        {currentPage === totalPages ? null : <button onClick={handleNextPage} className="btn btn-info" type="button">Siguiente &raquo;</button>}
      </div>
    </div>
  );
}

export default App;