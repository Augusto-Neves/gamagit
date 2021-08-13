import React, { useState } from 'react';
import axios from 'axios';

function App(props) {
  const [usuario, setUsuario] = useState('')

  function handleSearch() {
    axios.get(`https://api.github.com/users/${usuario}/repos`)
    .then(response => console.log(response.data))
  }

  return (
    <>
      <input
        type="text"
        className="usuarioInput"
        placeholder="Seu usuário do Github"
        value={usuario}
        onChange={
          e => setUsuario(e.target.value)
        }
      />
      <button type="button" onClick={handleSearch}>Pesquisar</button>
    </>
  );
}

export default App;
