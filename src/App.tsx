import { SyntheticEvent, useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { SignUpPage } from './pages/SignUpPage';

interface Quote {
  _id: string
  content: string
  author: string
}

export function App() {
  const [quote, setQuote] = useState<Quote | null>(null); //null for object types 
  const [author, setAuthor] = useState("");

  async function search(e: SyntheticEvent) {
    e.preventDefault();
    const result = await fetch(`https://usu-quotes-mimic.vercel.app/api/search?query=${author}`);
    setQuote(await result.json());
  }

  async function loadRandom() {
      const result = await fetch("https://usu-quotes-mimic.vercel.app/api/random");
      setQuote(await result.json());
      console.log("random called")
  }

  useEffect (() => {
    loadRandom();
  }, []);

  return(
    <div>
      <form >
        <h2> The Quote Searcher-ma-tron </h2>
        <br></br>
        <input
          type='text'
          placeholder='search for a quote'
          value={author}
          onChange={e => setAuthor(e.target.value)}
        />
        <button 
          className='cool'
          type='submit'
          onClick={search}>Search
        </button>
      </form>
    </div>
    );
}
//useState is a hook