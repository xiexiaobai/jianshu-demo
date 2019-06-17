import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Carousel } from 'antd';
import 'antd/dist/antd.css';
import pic1 from "../../../statics/1.jpg";
import pic2 from "../../../statics/2.jpg";
import Aside from './Aside';
import { 
    Contain,
    ArticleItem,
    ItemTitle,
    ItemDesc,
    ItemPic,
    ImgBox,
    ImgItem,
    MoreList
} from '../style';

class Topic extends Component {

    render() {

        this.getArticleList = this.getArticleList.bind(this)
        const {page, getMoreArticle, articleList} = this.props
        return (
            <Contain>
                <div className="contain-style">
                    <ImgBox>
                        <Carousel autoplay>
                        <div>
                        <ImgItem src={pic1}/>
                        </div>
                        <div>
                        <ImgItem src={pic2}/>
                        </div>
                        </Carousel>
                    </ImgBox>
                    { this.getArticleList() }
                    <MoreList onClick={() => {getMoreArticle(page, articleList)}}>阅读更多</MoreList>
                </div>
                <Aside />
            </Contain>
        )
    }
    getArticleList()  {
        let { articleList } = this.props
        console.log(articleList)
        return articleList.map((item,index) => {
            return <Link key={index} to={'/detail/'+ item.get('id')}>
                        <ArticleItem >
                            <ItemTitle> {item.get('title')}</ItemTitle> 
                            <ItemDesc> {item.get('desc')}</ItemDesc> 
                            <ItemPic src={item.get('imgUrl')}/> 
                        </ArticleItem>
                    </Link>
        })
    }
}
const mapStateToProps = (state) => {
    return{
        articleList: state.getIn(['home','articleList']),
        page: state.getIn(['home','page'])
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        getMoreArticle(page, articleList) {
            const action = {
                type: 'topic/MORE_PAGE',
                page: page + 1,
                articleList: articleList
            }
            dispatch(action)
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Topic)   
