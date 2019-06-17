import styled from 'styled-components';
import bigPic from "../../statics/bigPic.png";

export const LoginBox = styled.div`
    width: 400px;
    margin: 0 auto;
    padding: 50px 50px 30px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0,0,0,.1);
    vertical-align: middle;
    text-align: center;
    font-size: 14px;
    box-sizing: border-box;
    .title{
        font-weight: 700;
        color: #ea6f5a;
        font-size: 30px;
        padding: 10px;
    }
    .tip {
        display:flex;
        justify-content:space-between;
        margin-left: 5px;
        font-size: 15px;
        color: #969696;
        vertical-align: middle;
    }
`

export const Main = styled.div`
    justify-content: center;
    display: flex;
    align-items: center;
    height: 100%;
    min-height: 750px;
    text-align: center;
    font-size: 14px;
    background-color: #f1f1f1;
}
`
export const Logo = styled.div`
    position: absolute;
    top: 56px;
    margin-left: 50px;
    width: 98px;
    height: 46px;
    background:url(${bigPic});
    background-size:contain;
`

export const Input = styled.input` 
    width: 100%;
    height: 50px;
    margin-bottom: 20px;
    padding: 4px 12px;
    border: 1px solid #c8c8c8;
    border-radius: 0 0 4px 4px;
    background-color: hsla(0,0%,71%,.1);
    vertical-align: middle;
}
`

export const LoginBt = styled.div`
    margin-top: 20px;
    width: 100%;
    padding: 9px 18px;
    font-size: 18px;
    border: none;
    border-radius: 25px;
    color: #fff;
    background: #3194d0;
    cursor: pointer;
    outline: none;
    display: block;
    clear: both;
`