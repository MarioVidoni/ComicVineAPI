import { useState, useEffect } from 'react'
import salida  from '../Services/service_comic'
import { useNavigate } from 'react-router-dom'
import "../Styles/Comiclist.css"

const ComicList_Component = () => {
    const res = salida.GetComicslist(); 
    const nav = useNavigate();
    const [comics, setComics] = useState([]);
    useEffect(() => {
    salida.GetComicslist().then((res) => {
      console.log(res.data.results);
      setComics(res.data.results);
    });
  },[]);  
  return (
    <div className="App">
      {comics.map((c) => (
          <div key={c.id}>
            <img 
            onClick={() => {
                nav("/ComicDetails/" + c.id);
              }}
            src={c.image.original_url} 
            />
            <h2>{c.name ? c.name : c.volume.name} </h2>
            <h2>{c.issue_number}</h2>
            <p>{c.date_added}</p>
          </div>
        ))}
    </div>
  );
}

export default ComicList_Component;