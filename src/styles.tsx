import styled, {createGlobalStyle} from 'styled-components';

export const Heading = styled.h2`
    font-size: 1.5rem;
    font-weight: bold;
`

export const Columns = styled.div`
    @media (min-width: 769px) {
        display: flex;
    }
`

export const ColumnThird = styled.div`
    @media (min-width: 769px) {
        flex: none;
        width: 33.3333%;
    }
    padding: 0.75rem;
`;

export const Column = styled.div`
    flex-basis: 0;
    flex-grow: 1;
    flex-shrink: 1;
    padding: 0.75rem;
`

export const GlobalStyle = createGlobalStyle`
    html, body, p, ol, ul, li, dl, dt, dd, blockquote, figure, fieldset, legend, textarea, pre, iframe, hr, h1, h2, h3, h4, h5, h6 {
        margin: 0;
        padding: 0;
    }

    html {
        background-color: white;
        font-size: 16px;
    }
    body {
        font-family: "Nunito", sans-serif;
        color: #4a4a4a;
        font-size: 1em;
        font-weight: 400;
        line-height: 1.5;
    }
`;

export const Dots = styled.span`
    padding: 1em;
`

export const Nav = styled.nav`
    max-width: 750px;
    margin-bottom: 0;
    margin-top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 0.75rem;
`

export const PaginationList = styled.ul`
    align-items: center;
    display: flex;
    justify-content: center;
    text-align: center;
    list-style: none;
`

export const Button = styled.button`
    background-color: ${props => props.className==='active' ? '#485fc7' : '#ffffff'};
    border-color: ${props => props.className==='active' ? '#485fc7' : '#dbdbdb'};
    color: ${props => props.className==='active' ? '#fff' : '#363636'};
    min-width: 2.5em;
    height: 2.5em;
    justify-content: center;
    margin: 0.25rem;
    text-align: center;
    border-width: 1px;
    cursor: pointer;
    border-radius: 4px;
    box-shadow: none;

    :disabled {
        border: none;
        background-color: #dbdbdb;
        border-color: #dbdbdb;
        color: #7a7a7a;
        opacity: 0.5;
        cursor: not-allowed;
    }
`

type PropsTitle = {
    active: boolean,
}

export const Title = styled.div<PropsTitle>`
    background-color: ${props => props.active ? '#bdbdbd' : '#ffffff'};
    cursor: pointer;

    p {
        padding: 0 1em;
        font-size: 1rem;
        font-weight: 600;
        line-height: 1.25rem;
        min-height: 4rem;
        cursor: 'pointer';

        display: flex;
        align-items: center;
    }
`

export const Detail = styled.div`
    h2 {
        font-size: 1.5rem;
    }
    h2, h3, h4, ul {
        padding: 0.5em 1rem;
    }

    h3 {
        span {
        cursor: pointer;
        text-decoration: underline;
    }}

    div {
        p {
            padding: 0 0 0 2rem;

            a {
                margin-left: 0.5rem;
            }
        }
    }

    p {
        padding: 0.5em 1em;
        font-size: 1rem;
        cursor: 'pointer';

        display: flex;
        align-items: center;
    }

    ul {
        list-style: none;

        li {
            margin-bottom: 0.5rem;
        }
    }
`
