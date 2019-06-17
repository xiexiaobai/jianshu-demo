import React, { Component, Fragment } from 'react';
import Topic from './components/Topic';
import { BackTop } from './style';
import Header from '../../common/header';

class Main extends Component {
        render(){
            return(
                <Fragment>
                    <Header />
                    <Topic />
                    <BackTop onClick={this.toTop}>△</BackTop>
                </Fragment>
            )
        }
        toTop(){
            (function smoothscroll(){
                var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
                if (currentScroll > 0) {
                     window.requestAnimationFrame(smoothscroll);
                     window.scrollTo (0,currentScroll - (currentScroll/5));
                }
            })();
        }
}
export default Main
    
