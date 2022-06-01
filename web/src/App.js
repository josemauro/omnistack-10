import React, { useEffect, useState } from 'react';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App() {
  const [gitHubUsername, setGitHubUsername] = useState('');
  const [techs, setTechs] = useState('');

  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const {latitude, longitude} = position.coords;
        
        setLatitude(latitude);
        setLongitude(longitude);
      },
      (err) => {
        console.log(err);
      },
      {
        timeout: 30000,
      }
    );
  }, []);

  
async function handleAddDev(e) {
  e.preventDefault();
  
}

  return (
    <div id="app">
      <aside>
          <strong>Cadastrar</strong>
          <form> 
            <div className="input-block">
              <label htmlFor="github_username"> Usuário do Github </label>
              <input
                name="github_username"
                id="github_username"
                required
                value={gitHubUsername} 
                onChange={e => setGitHubUsername(e.target.gitHubUsername)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="techs"> Tecnologias </label>
              <input
                name="techs"
                id="techs"
                required
                value={techs}
                onChange={e => setTechs(e.target.techs)}
              />
            </div>
            
            <div className="input-group">
              <div className="input-block">
                <label htmlFor="latitude"> Latitude </label>
                <input
                  type="number"
                  name="latitude"
                  id="latitude"
                  required
                  value={latitude}
                  onChange={e => setLatitude(e.target.latitude)}
                />
              </div>

              <div className="input-block">
                <label htmlFor="longitude"> Longitude </label>
                <input
                  type="number"
                  name="longitude"
                  id="longitude"
                  required value={longitude}
                  onChange={e => setLatitude(e.target.longitude)}
                />
              </div>
            </div>
             
            <button type="submit"> Salvar </button>
          </form>
        </aside>

      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars.githubusercontent.com/u/18131211?v=4" alt="Jose Mauro"></img>
              <div className="user-info">
                <strong>Jose Mauro</strong>
                <span>Python, Node.js, React</span>
              </div>
            </header>
            <p>SDN, Complex Networks, Bioinformatics, Astronomy and Physics</p>
            <a href="https://github.com/josemauro"> Acessar perfil do Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars.githubusercontent.com/u/18131211?v=4" alt="Jose Mauro"></img>
              <div className="user-info">
                <strong>Jose Mauro</strong>
                <span>Python, Node.js, React</span>
              </div>
            </header>
            <p>SDN, Complex Networks, Bioinformatics, Astronomy and Physics</p>
            <a href="https://github.com/josemauro"> Acessar perfil do Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars.githubusercontent.com/u/18131211?v=4" alt="Jose Mauro"></img>
              <div className="user-info">
                <strong>Jose Mauro</strong>
                <span>Python, Node.js, React</span>
              </div>
            </header>
            <p>SDN, Complex Networks, Bioinformatics, Astronomy and Physics</p>
            <a href="https://github.com/josemauro"> Acessar perfil do Github</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
