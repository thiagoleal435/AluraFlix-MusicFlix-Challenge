import { styled } from "styled-components";

export const theme = {
    cores: {
        'primaria': '#2A7AE4',
        'secundaria': '#6BD1FF',
        'Rock': '#000000',
        'MPB': '#9CD33B',
        'Pop Internacional': '#6B5BE2',
        'pretoForte': 'rgba(0,0,0,1)',
        'pretoMedio': 'rgba(0,0,0,0.7)',
        'pretoFraco': 'rgba(0,0,0,0.5)',
        'cinza': '#C2C2C2',
        'corErro': '#E53935'
    }
}

export const Button = styled.button`
    font-size : 1.2rem;
    text-align: center;
    border: 2px solid ${props => props.corBorda};
    background-color: ${props => props.corFundo};
    color: ${props => props.corTexto};
    padding: .5rem 1.5rem;
    border-radius: 5px;
    cursor: pointer;
`;

export const TituloGenero = styled.h2`
        border: none;
        font-size: ${props => props.fontSize};
        padding: .5rem 1rem;
        background-color: ${props => theme.cores[props.corFundo]};
        border-radius: 5px;
        color: white;
    `;

export const SectionGenero = styled.section`
    display: flex;
    flex-direction: column;
    min-width: 280px;
    max-width: 100%;
    margin-left: 1rem;

    div{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
    }
`;
