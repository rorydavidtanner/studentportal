import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';


const Footer = () => {
    return (
        <FooterContainer>
            <span 
                style={{
                    color: "#fff",
                    top: "0.5rem",
                    left: "1rem",
                    position: "relative",
                }}
            >
                &copy; Hunter First Aid. {new Date().getFullYear()}. All Rights Reserved. 
            </span>
        </FooterContainer>
    )
}
export default Footer

//Footer Container

const FooterContainer = styled.footer`
    background: #27D6C0 !important;
    height: 2.5 rem;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    padding: 10px;
`;