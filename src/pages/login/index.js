import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { LoginBox,
         Main,
         Input,
         LoginBt,
         Logo
        } 
from './style';

class Login extends Component {
    render(){
            return(
                <Main>
                    <Link to="/">
                        <Logo></Logo>
                    </Link>
                    <LoginBox>
                        <h4 className="title" >登录</h4>
                        <Input placeholder="手机号或邮箱"  onChange={this.getName}></Input>
                        <Input placeholder="密码" onChange={this.getPassWord} ></Input>
                        <div className="tip">
                        <div><input type="checkbox" value="true" ></input>记住我 </div>
                            <div>登录时遇到问题?</div>
                        </div>   
                        <LoginBt >登录</LoginBt>
                    </LoginBox>
                </Main>
            )
        }
  
}
const mapStateToProps = (state) => {

    return{
        loginStatus: state.getIn(['login','loginStatus']),
    }

}
const mapDispathToProps = (dispatch) => {
    var angle = 360;
    return{
        getName(e){
            const action = {
                type: "NAME",
            }
        }  

    }
}

export default connect(mapStateToProps, mapDispathToProps)(Login)
    
