import React, { useState } from 'react';
import axios from 'axios';
import * as S from './styled'
import githubShowcase from '../../assets/img/githubShowcase.png'

function Home() {
    const [usuario, setUsuario] = useState('')

    function handleSearch() {
        axios.get(`https://api.github.com/users/${usuario}/repos`)
            .then(response => {
                const repositories = response.data;
                const repositoriesNames = [];

                // eslint-disable-next-line array-callback-return
                repositories.map(repository => {
                    repositoriesNames.push(repository.name)
                });
                localStorage.setItem('repositoriesNames', JSON.stringify(repositoriesNames));
            });
    }
    return (
        <S.Container>
            <div>
                <img src={githubShowcase} alt="Github Showcase Logo" />
            </div>

            <S.FormWrapper>
                <S.Input
                    type="text"
                    className="usuarioInput"
                    placeholder="Seu usuário do Github"
                    value={usuario}
                    onChange={
                        e => setUsuario(e.target.value)
                    }
                />

                <S.Button type="button" onClick={handleSearch}>Pesquisar</S.Button>
            </S.FormWrapper>
        </S.Container>
    );
}
export default Home;