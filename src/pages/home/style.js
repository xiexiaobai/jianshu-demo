import styled from 'styled-components';


export const Contain = styled.div`
    margin: 0 auto;
    width: 960px;
    &::after {
        content: " ";
        display: block;
        clear:both
    }
    .contain-style{

        width: 620px;
        @media only screen and (max-width: 1080px) {
            width:485px;  
          }
        float: left;
    }
`

export const ArticleItem = styled.div`
    padding: 20px 0;
    border-bottom: 1px solid #dcdcdc;
`
export const ItemTitle = styled.div`
    float:left;
    font-size:18px;
    font-weight:bold;
    line-height:27px;
    width:458px;
    height:54px;
    color:#000;
    @media only screen and (max-width: 1080px) {
        width:318px;
      }

`
export const ItemDesc = styled.div`
    float:left;
    font-size:10px;
    color:grey;
    width:458px;
    height:72px;
    @media only screen and (max-width: 1080px) {
        width:318px;
      }
`
export const ItemPic = styled.img`
    width:150px;
    height:100px;
    border-radius: 4px;
    margin-left:10px;
`
export const ImgBox = styled.div`
    .ant-carousel {
        text-align: center;
        overflow: hidden;
        height:270px; 
        width:625px;   
        @media only screen and (max-width: 1080px) {
            height:210px; 
            width:485px;  
          }
    }
`
export const ImgItem = styled.img`
    width:100%;
    height:100%;
    border-radius: 4px;
`
export const RightContain = styled.div`
    float:left;
    margin-left: 4.16667%;
    width: 280px;
    height: 100%;
`

export const ClubBox = styled.div`
    img {
        width: 280px;
        height: 50px;
    }
`
export const MoreList = styled.div`
    height: 40px;
    width: 100%;
    color: #fff;
    border-radius: 20px;
    background-color: #a5a5a5;
    text-align: center;
    line-height: 40px;
    font-size: 15px;
    margin: 30px 0;
`

export const BackTop = styled.div`
    position: fixed;
    right: 40px;
    bottom: 40px;
    width: 50px;
    height: 50px;
    z-index: 1040;
    border: 1px solid #dcdcdc;
    font-size: 30px;
    color: #000;
    text-align: center;
    cursor: pointer;
`

