import styled from "styled-components";
import logoPic from "../../statics/logo.png";
import zuanPic from "../../statics/zuan.png";

export const HeaderWrapper = styled.div`
  position: fixed;
  height: 56px;
  border-bottom:1px solid #f0f0f0;
  background-color: #fff;
  z-index: 2;
  min-width: 768px;
  max-width: 1440px;
  right: 0;
  left: 0;
  margin: 0 auto;
`
export const Logo = styled.div`
  float:left;
  height:56px;
  width:100px;
  background:url(${logoPic});
  background-size:contain;
`
export const Nav = styled.div`
padding: 0 15px;
width: 80%;
height: 100%;
`
export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;
  cursor: pointer;
  &.zuan {
    height:100%;
    align-items: center;
    display: flex;
  }
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.login {
    font-size: 15px;
  }
  &.active {
    color: #ea6f5a;
  }
  .iconfont{
    display:none;
    margin-right: 5px;
  }
  @media only screen and (min-width: 1450px) {
    .iconfont{
      display:inline-block;
    }
  }
  
  @media only screen and (max-width: 925px) {
    .iconfont{
      display:inline-block;
    }
    .pcShow{
      display:none;
    }
  }

`
export const NavSearch = styled.input.attrs({
  placeholder:'搜索'
})`
  width:240px;
  height:38px;
  border-radius:19px;
  background:#eee;
  margin-top:9px;
  border:none;
  outline:none;
  padding:0 35px 0 20px;
  box-sizing:border-box;
  font-size:14px;
  color:#777;
  &::placeholder{
    color:#999;
  }

  @media only screen and (max-width: 925px) {
    width:150px;
    transition: all .4s ease-out;
  }
  @media only screen and (min-width: 925px) {
    width:240px;
    transition: all .4s ease-out;
    &.focused{ 
      width:300px;
    }
  }
  
`
export const Zuan = styled.a`
  background:url(${zuanPic});
  background-size:contain;
  width: 56px;
  height: 25px;
  float: left;
` 
export const Addition = styled.div`
  float:right;
  height:100%;
  margin:10px;
`
export const Buttom = styled.div`
  &.zuce{
    width:80px;
    height:40px;
    color:rgba(236,97,73,.7)
  }
  &.xie{
    width:100px;
    height:40px;
    background:rgba(236,97,73,.7);
    color:white;
  }
  cursor: pointer;
  margin-left:8px;
  float:left;
  line-height:40px;
  text-align:center;
  border-radius: 20px;
  font-size:15px;
  border: 1px solid rgba(236,97,73,.7);
`
export const SearchWrapper = styled.div`
  float:left;
  position:relative;
  .boom{
    position:absolute;
    right:5px;
    bottom:5px;
    width:30px;
    height:30px;
    line-height:30px;
    text-align:center;
    border-radius:15px;
    font-size:20px;
    &.focused{
      background:#777;
      color:#fff;
    }
  }
`
export const SearchInfo = styled.div`
  position:absolute;
  left:0;
  top:56px;
  width:200px;
  padding: 0 20px;
  box-shadow: 0 0 8px rgba(0,0,0,.2);
  z-index: 1001;
  background-color: #fff;
`
export const SearchTitle = styled.div`
  margin: 20px 0;
  font-size:14px;
  color:#969696;
`
export const SearchSwitch = styled.span`
  float:right;
  font-size:13px;
  cursor:pointer;
  height:20px;
  line-height:20px;
  .spinIcon{
    float:left;
    font-size:18px;
   transform: rotate(0deg);
   transition: 1s;
   transform-origin: center center
  }
`
export const SearchInfoItem = styled.a`
  display:block;
  float:left;
  font-size:12px;
  line-height:20px;
  padding: 0 5px;
  color:#787878;
  border: 1px solid #ddd;
  border-radius: 3px;
  margin: 0 10px 15px 0;

`
