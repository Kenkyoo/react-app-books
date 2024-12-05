import { useState, useEffect } from 'react'
import axios from 'axios';
// Import our custom CSS
import './styles.scss'
import Card from './Card';

type BooksProps = {
  q: string;
  numFound: string;
  docs: Book[];
}

type Book = {
  title: string;
  author_name: string;
  publish_year: string;
  _version_: string;
  cover_edition_key: string;
};

function App() {
  const [query, setQuery] = useState('');
  const [booksData, setBooksData] = useState<BooksProps | null>(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://openlibrary.org/search.json?q=${query}&page=1`
      );
      setBooksData(response.data);
      console.log(response.data); //You can see all the weather data in console log
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchData();
  };

  return (

  <div className='container text-center px-2 mx-auto'>  

    <h1 className="heading text-center">
      Books Search 
    </h1>

    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Buscar:</label>
        <input 
          type="text" 
          className="form-control form-control-sm" 
          placeholder="Enter book name" 
          value={query}
          onChange={handleInputChange}
        />
        <div className="form-text">ej: ficciones, the lords of the rings, harry potter, matilda...</div>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form> 

      {booksData ? (
      <>
        <div className="row text-center mb-4 mt-4">
          <div className='col'>Resultados para: {booksData.q}</div>
          <div className='col'>Encontrados: {booksData.numFound} resultados</div>
        </div>

        <div className='row row-cols-1 row-cols-md-4 g-4 justify-content-md-center text-center'>
          {booksData.docs.map(book => (
            <Card
              key={book._version_}
              title={book.title ? book.title : 'Unknown'}
              author={book.author_name ? book.author_name[0] : 'Unknown'}
              year={book.publish_year? book.publish_year[0] : 'Unknown'}
              image={`https://covers.openlibrary.org/b/olid/${book.cover_edition_key}.jpg`} 
            />
          ))}  
        </div>
      </>  
      ) : (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
  </div>  
  );
}

export default App
