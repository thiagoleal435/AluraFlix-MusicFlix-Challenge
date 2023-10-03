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
        'corErro': '#E53935',
        'fundoInput': '#181818',
    },
    styles: {
        'sombraCampo': '0 0 1px 0 #f1f1f1;'
    }
}

export const Button = styled.button`
    font-size : 1.2rem;
    text-align: center;
    border: 2px solid ${theme.cores['primaria']};
    background-color: ${theme.cores['primaria']};
    color: white;
    padding: .5rem 2rem;
    border-radius: 5px;
    cursor: pointer;
`;

export const SectionNovoEditarGenero = styled.section`
        color: white;
        height: 100vh;
        width: 95%;
        margin: 0 auto;
        margin-block: 6rem;
`;

export const TituloGenero = styled.h2`
    border: none;
    font-size: ${props => props.fontSize};
    padding: .5rem 1rem;
    background-color: ${props => props.corFundo};
    border-radius: 5px;
    color: white;
`;

export const ContainerCampo = styled.div`
    position: relative;
    display: flex;
    margin: 2rem 0;
    border-radius: 5px;
    box-shadow: ${theme.styles['sombraCampo']};

    span{
        color: #C62828;
        font-weight: bold;
        position: absolute;
        bottom: -1.25rem;
    }

    &.campo__color input{
        border: none;
        padding-inline: 0.5rem;
        padding-bottom: 0.1rem;
        height: 3rem;
    }
`;

export const Formulario = styled.section`
    display: flex;
    flex-direction: column;

    .btn{
        position: relative;
        display: flex;
        width: 100%;
        gap: 2rem;

        :nth-child(2n){
            color: black;
            background-color: ${theme.cores['cinza']};
            border-color: ${theme.cores['cinza']};
        }

        :nth-child(3n){
            position: absolute;
            right: 0;
        }

        :hover{
            background-color: ${theme.cores['fundoInput']}
        }
        :hover:nth-child(2n){
            background-color: ${theme.cores['primaria']}
        }
    }

    @media (max-width: 1024px){
        .btn{
            justify-content: space-between;

            :nth-child(3n){
                display: none;
            }
        }
    }
`;

export const Input = styled.input`
    display: flex;
    width: 100%;
    font-size: 1.25rem;
    padding-inline: .75rem 1rem;
    padding-block: 1.25rem .75rem;
    border: none;
    border-bottom: 3px solid transparent;
    border-radius: 5px;
    background-color: ${theme.cores['fundoInput']};
    color: white;
    transition: 0.3s;

    &:hover, &:valid, &:focus {
        outline: none;
        border-bottom: 3px solid ${theme.cores['primaria']}
    }

    &.selecionado{
        border-bottom: ${(props) => props.erroBorder ?
        `3px solid ${theme.cores['corErro']}` :
        `3px solid ${theme.cores['primaria']}`};
    }
`;

export const Label = styled.label`
    position: absolute;
    top: 30%;
    left: 1rem;
    pointer-events: none;
    transition: 0.2s ease all;

    ${Input}:hover+&,
    ${Input}:valid+&,
    ${Input}:focus-within+& {
        top: .25rem;
        left: .5rem;
        font-size: 0.8rem;
    }

    &.selecionado{
        top: .25rem;
        left: .5rem;
        font-size: 0.8rem;
    }
`;
