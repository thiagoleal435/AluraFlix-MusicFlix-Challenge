import { styled } from "styled-components";

const Container = ({ children }) => {
    const Section = styled.section`
    width: 100%;
    background-color: transparent;
    color: #fff;
    text-align: center;
    overflow: hidden;
    margin-top: 70px;
`;

    return (
        <Section>
            {children}
        </Section>
    )
}

export default Container;