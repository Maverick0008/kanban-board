import styled from "styled-components";
import  {Link} from 'react-router-dom'
export const ListItem = styled.div`
    width: 292px;
    height: auto;
    background: #EBECF0;
    margin-right: 24px;
    padding-bottom: 8px;
    border-radius: 10px;

    @media screen and (max-width: 768px) {
        margin-top: 50px;
       display: flex;
       flex-direction: column;
       align-items: flex-start;
       justify-content: flex-start;
    }

 ;
`
export const LinkDescription = styled(Link)`
    color: black;
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
`
export const ListTitle = styled.h2`
    font-size: 18px;
    line-height: 21px;
    font-weight: normal;
    margin: 12px;

`
export const ListTitleTask = styled.h5`
    margin-left: 12px;
    margin: 0 0 12px 12px;
`
export const ListTask = styled.div`
    background: #fff;
	margin: 15px 12px ;
	padding: 8px;
	border-radius: 8px;
    width: 242px;
`
// export const Link = styled(Link)`
//     color:red;
// `
export const ListButton = styled.button`
    background: none;
	border: none;
	appearance: none;
	font-size: 18px;
	color:#5E6C84;
	cursor: pointer;
    margin-left: 8px;
    margin-bottom: 20px;
    padding: 4px;

    :hover {
        background: #fff;
        border-radius: 5px;
    }
`
