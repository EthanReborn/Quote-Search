import { SyntheticEvent, useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
// import styles from './App.module.css'
import { SignUpPage } from './pages/SignUpPage';

interface Quote {
  _id: string
  content: string
  author: string
}

export function App() {
  const [quote, setQuote] = useState<Quote | null>(null); //null for object types 
  const [author, setAuthor] = useState("");
  const [quotes, setQuotes] = useState<Quote[]>([]);
  let hasSearched = false;

  async function search(e: SyntheticEvent) {
    hasSearched = true;
    let quoteList: Quote[] = [];
    e.preventDefault();
    const result = await fetch(`https://usu-quotes-mimic.vercel.app/api/search?query=${author}`);
    const json = await result.json();
    for (const i of await json.results) {
      const quote: Quote = {
        _id: i._id,
        content: i.content,
        author: i.author,
      };
      quoteList.push(quote);
    }
    setQuotes(quoteList);
    console.log(await quotes);
  }

  async function loadRandom() {
      const result = await fetch("https://usu-quotes-mimic.vercel.app/api/random");
      setQuote(await result.json());
      console.log("random called")
  }

  useEffect (() => {
    loadRandom();
  }, []);

  function setDisplay(){
    if (hasSearched) {
      return;
    }
    return ;
  }

  return(
    <div>
      <form>
        <h2> The Quote Searcher-ma-tron </h2>
        <br></br>
        <input
          type='text'
          placeholder='search for a quote'
          value={author}
          onChange={e => setAuthor(e.target.value)}
        />
        <br></br>
        <button 
          className='cool'
          type='submit'
          onClick={search}>Search
        </button>
      </form>
      <div id="outer-div" className='container'>
        {
          quotes.map((q) => (
            <div key={q._id} className="quote">
              {q.content}
              <div>-{q.author}</div>
            </div>
          ))
        }
      </div>
    </div>
    );
}
//useState is a hook