import React,{Fragment} from 'react';
import { GlobalStyle } from './css/reset.js'
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Main from './pages/home';
import Login from './pages/login';
import Detail from './pages/detail';


function App(){
  return (
    <Provider store={store}>
      <Fragment>
        <GlobalStyle/>
          <BrowserRouter>
              <Route path="/" exact component={Main}></Route>
              {/* ?id= 这种方式获得的位置不一样，而且需要截取字符串取参数，没有动态路由方便 */}
              <Route path="/detail/:id" exact component={Detail}></Route>
              <Route path="/login" exact component={Login}></Route>
          </BrowserRouter>
      </Fragment>
    </Provider>
  );
}

export default App;
  