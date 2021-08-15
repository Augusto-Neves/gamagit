import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  max-width: 991px;
  margin: 0 auto;
`;

export const Title = styled.h1`
    text-align: center;
    font-size: 2rem;    
    color: #333;
`;

export const List = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    
`;

export const ListItem = styled.li`
    margin: .9rem 0;
    background: #000;
    color: #fff;
    padding: .5rem;
    border-radius: .25rem;
    box-shadow: 8px 2px 2px 3px rgba(105,201,208,0.73);
`;

export const LinkHome = styled(Link)`
    display: block;
    width: 6rem;
    border-radius: .25rem;
    text-align: center;
    margin: 2rem auto;
    background-color: #000;
    padding: .5rem 0;
    text-decoration: none;
    color: #fff;
    box-shadow: 2px 2px 2px 3px rgba(105,201,208,0.73);
    transition: .2s;
    font-weight: 600;

    &:hover{
        box-shadow: 2px 2px 2px 3px #000;
        color: #000;
        background-color:rgba(105,201,208,0.73) ;
    }
`