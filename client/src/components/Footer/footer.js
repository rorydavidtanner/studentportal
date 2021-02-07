import React from 'react';
import styled from 'styled-components';


const Footer = () => {
    return (
        <FooterContainer>
            <span 
                style={{
                    color: "#fff",
                    top: "1rem",
                    left: "1rem",
                    position: "relative",
                }}
            >
                &copy;{new Date().getFullYear()} All Rights Reserved. Hunter First Aid.
            </span>
        </FooterContainer>
    )
}
export default Footer

//Footer Container

const FooterContainer = styled.footer`
    background: #27D6C0 !important;
    height: 4rem;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    padding: 10px;
`;