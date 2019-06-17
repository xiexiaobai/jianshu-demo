import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ClubBox } from '../style'

class Club extends Component {
        render(){
            return(
                <ClubBox>         
                    {
                        this.props.clubList.map((item) => {
                            return <img key={item} src={'https:'+ item}/>
                        })
                    }
                </ClubBox>
            )
        }
}
const mapStateToProps = (state) => {
    return{

    }
}
const mapDispatchToProps = (dispatch) => {
    return{

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Club)
    
