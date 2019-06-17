import React, { Component } from 'react';
import { connect } from 'react-redux';
import Club from './Club';
import axios from 'axios';
import { 
    RightContain,

} from '../style';
class Aside extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clubList: []
        };
    }
   
        render(){
            return(
                <RightContain>
                    <Club clubList={this.state.clubList}/>
                </RightContain>
            )
        }
        componentDidMount(){
            axios.get("/api/headerList.json")
            .then((res) => {
                this.setState({
                    clubList : res.data.club
                })

            })
            .catch(() => {
                console.log('error')
            })
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

export default connect(mapStateToProps, mapDispatchToProps)(Aside)
    

