import styled from "styled-components";

export const FooterWrapper = styled.footer`
    min-height: 50px;
    background: #0067A3;
    color: #fff;
    display: flex;
    align-items: center;
    padding: 0 17px;
    @media screen and (max-width: 768px){
        display: none;
    }
;
`

export const FooterCounts = styled.div`
    display: flex;
`
export const ListCout = styled.p`
    position: relative;
    margin-right: 30px;
    font-size: 18px;
`
export const FooterCopy = styled.div`
    margin-left: auto;
`



