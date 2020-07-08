import React, { Component } from 'react'
import ReactDOM from 'react-dom'

// 引入登录界面
import LoginPage from "./LoginPage"
//引入首页
import HomePage from './HomePage'
// 引入列表页
import ListPage from './ListPage'
// 引入React详情页
import ReactDetailPage from './ReactDetailPage'
// 引入Vue详情页
import VueDetailPage from './VueDetailPage'
// 引入Node详情页
import NodeDetailPage from './NodeDetailPage'

//导入路由
import { Router, Route, hashHistory } from 'react-router'
export default class App extends Component {
    render() {
        return (
            <div>
                {/* <LoginPage /> */}
                {/* <HomePage /> */}
                {/* <ListPage /> */}
                {/* <DetailPage /> */}




            </div>
        )
    }
}
const router2 = <Router history={hashHistory}>
    <Route path="/" component={LoginPage}></Route>
    <Route path="/HomePage" component={HomePage}></Route>
    <Route path="/ListPage" component={ListPage}></Route>
    {/* React */}
    <Route path="/DetailPage/3" component={ReactDetailPage}></Route>
    {/* Vue */}
    <Route path="/DetailPage/2" component={VueDetailPage}></Route>
    {/* node */}
    <Route path="/DetailPage/1" component={NodeDetailPage}></Route>


</Router>
ReactDOM.render(router2, document.getElementById('root'))