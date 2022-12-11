import { useState, useEffect } from 'react'
import salida  from '../Services/service_comic'
import { useNavigate, useParams } from 'react-router-dom'
import "../Styles/ComicDetails.css"

const ComicDetails_Component = () => {
    const params = useParams();
    const navigate = useNavigate();

    const [comic, setComic] = useState([]);
    useEffect(() => {
        salida.GetComicDetail(params.id).then((res) => {
          setComic(res.data.results);
        });
      },[]); 

      return (
        <div>
          <img src={comic?.image?.original_url} />
          <div>
            <h1>Characters</h1>
            {comic.character_credits?.map((cc) => (
              <div key={cc.id}>
                <h2>{cc.name ? cc.name : cc.volume.name}</h2>
              </div>
            ))}
          </div>
          <div>
            <h1>Teams</h1>
            {comic.team_creadits?.map((tc) => (
              <div key={tc.id}>
                <h2>{tc.name}</h2>
              </div>
            ))}
          </div>
          <div>
            <h1>Locations</h1>
            {comic.location_credits?.map((lc) => (
              <div key={lc.id}>
                <h3>{lc.name}</h3>
              </div>
            ))}
          </div>
    
          <button
            onClick={() => {
              navigate("/");
            }}
          >
        Return!
      </button>
    </div>
    );
};

export default ComicDetails_Component;