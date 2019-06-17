import React,{ Component, Fragment}from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { Link } from 'react-router-dom';
import {
    HeaderWrapper,
    Nav,
    Logo,
    NavSearch,
    NavItem,
    Zuan,
    Addition,
    Buttom,
    SearchWrapper,
    SearchInfo,
    SearchTitle,
    SearchSwitch,
    SearchInfoItem
} from "./style.js";
class Header extends  Component {
    constructor(props){
        super(props);
        this.state={
            mouseIn: false,
        }
    }
    render(){
        const { focused, handleInputFocus, handleInputBlur, list} = this.props;
        return(
            <Fragment>
                <HeaderWrapper>
                    <Link to="/">
                        <Logo></Logo>
                    </Link>
                <Addition>
                    <Buttom className='zuce'>注册</Buttom>
                    <Buttom className='xie'>写文章</Buttom>
                </Addition>
                <Nav>
                    <NavItem className='left active'>
                    <i className='iconfont'>&#xe695;</i>
                    <span className='pcShow'>首页</span>
                    </NavItem>
                    <NavItem className='left'>
                    <i className='iconfont'>&#xe638;</i>
                    <span className='pcShow'>下载App</span>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition
                        in={focused}
                        timeout={200}
                        classNames="slide"
                        >
                            <NavSearch
                            className={focused?'focused':''}
                            onFocus={() => {handleInputFocus(list)}}
                            onBlur={handleInputBlur}
                            />
                        </CSSTransition>
                    <i className={focused?'iconfont boom focused':'iconfont boom'}>
                    &#xe61e;
                    </i>
                        {this.getSearchInfo()}
                        </SearchWrapper>
                        <Link to="/login">
                            <NavItem className='right login'>登录</NavItem>
                        </Link>
                    <NavItem className='right zuan'>
                    <Zuan/>
                    </NavItem>
                    <NavItem className='right'>Aa</NavItem> 
                </Nav>
                </HeaderWrapper>
                <div style={{height:"76px",width:"100%"}}></div>
            </Fragment>
        )
    }
    getSearchInfo() {
        const { focused, changeSearchPage, list, page, totalPage } = this.props;
        if(focused || this.state.mouseIn){
            return(
                <SearchInfo onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave} >
                <SearchTitle>
                    热门搜索
                    <SearchSwitch onClick={() => changeSearchPage(page,totalPage,this.spinIcon)} >
                    <i className='iconfont spinIcon' ref={(icon) => {this.spinIcon = icon}}>&#xe88c;</i>
                        换一批
                    </SearchSwitch> 
                </SearchTitle>
                    <div>
                        {  
                            list.map((item,index) => {
                                 if(  index > (page-1)*10 && index < page*10){
                                   return <SearchInfoItem key={item}>{item}</SearchInfoItem>
                                 }
                            })
                        }
    
                    </div> 
            </SearchInfo>
            )
        }
        else{
            return null
        }
    }
    mouseEnter = () => {
        this.setState({
            mouseIn: true
        })
    }
    mouseLeave = () => {
        this.setState({
            mouseIn: false
        })
    }
}

 
const mapStateToProps = (state) => {

    return{
        // focused: state.get('header').get('focused')
        focused: state.getIn(['header','focused']),
        list: state.getIn(['header','list']),
        page: state.getIn(['header','page']),
        totalPage: state.getIn(['header','totalPage']),
    }

}
const mapDispathToProps = (dispatch) => {
    var angle = 360;
    return{
        handleInputFocus(list){

            if(list.size === 0){
            dispatch(actionCreators.getList());
        }
            dispatch(actionCreators.searchFocus());
        },
        handleInputBlur(){
            dispatch(actionCreators.searchBlur());
        },
        changeSearchPage(page,totalPage,spinIcon){

            (page === totalPage) && (page = 0);
             dispatch(actionCreators.changePage(page+1));
            (() => {
                spinIcon.style.transform = `rotate(${angle}deg)`;
                angle = angle + 360; 
			})()
        },
    }
}

export default connect(mapStateToProps,mapDispathToProps)(Header)   