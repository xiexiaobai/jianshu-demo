import React, { Component, Fragment } from 'react';
import Header from '../../common/header';

class detail extends Component {
        render(){
            return(
                <Fragment>
                    <Header />
                    <div>id:{this.props.match.params.id}</div>
                </Fragment>
            )
        }       
}
export default detail
    
