import { createGlobalStyle } from "styled-components";
 
export const GlobalStyle = createGlobalStyle`
  html {
    width: 600px;
    background-color: #f5f5f5;
    border-radius: 5px;
    padding: 20px;
    text-align:center;
  }
  ul{
    list-style-type: none;
    padding: 0;
  }
  li{
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }
  span{
    flex: 1;
    font-size: 20px;
  }
  #delBtn{
    background-color: #ff6b6b;
    color: #ffffff;
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
    margin-left: 5px;
    font-size: 14px;
    cursor: pointer;
    height: 40px;
  }
  #updateBtn{
    background-color: #C4F4Fe;
    color: #000000;
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
    margin-left: 5px;
    font-size: 14px;
    cursor: pointer;
    height: 40px;
    border: solid 1px #ccc;
  }
  #inputBtn{
    background-color: #E2FFAF;
    color: #000000;
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
    margin-left: 10px;
    font-size: 14px;
    cursor: pointer;
    height: 40px;
    border: solid 1px #ccc;
    
  }
  input{
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
  }
  a { cursor: pointer; text-decoration: none; }
`;