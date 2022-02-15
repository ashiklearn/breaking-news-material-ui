
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import News from './components/News/News';

function App() {
  const [articles,setArticles] = useState([]);
//   useEffect(() => {
// const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=9ba36bd62f834c478ed36d81cce7c27d';
// fetch(url)
// .then(response => response.json())
// .then(data => setArticles(data.articles))
//   },[])
  useEffect(() =>{
    const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=9ba36bd62f834c478ed36d81cce7c27d';
axios(url)
.then(data => setArticles(data.data.articles))
  },[])
  return (
    <div>
      <h2> Headlines: {articles.length}</h2>
      {
        articles.map(article => <News article={article}></News>)
      }
    </div>
  );
}

export default App;
