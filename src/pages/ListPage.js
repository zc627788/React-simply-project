import React, { Component } from 'react'
import Header from '../component/Header'
import LongList from '../component/LongList'
import { Link } from 'react-router'

export default class ListPage extends Component {
    render() {
        return (
            <div>
                {/* 头部 */}
                <Link to="/HomePage"><Header /></Link>
                {/* 长列表页 */}
                <div className="sub-list=header" style={{ margin: "15px", fontWeight: "20px", fontSize: '18px' }}>相关咨询</div>
                <LongList />
            </div>
        )
    }
}
