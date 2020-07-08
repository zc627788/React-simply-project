import React, { Component } from 'react'


export default class IMG extends Component {
    render() {
        return (
            <div>
                {/* 这个判断加一个class=imgTwo样式主要是为了设置不同图片时候的高度问题 */}
                {this.props.imgTwo ? <img src={require("../asset/images/" + this.props.src)} alt="" height="80px" className="classTwo" /> : <img src={require("../asset/images/" + this.props.src)} alt="" height="80px" width="80px" />}
            </div>
        )
    }
}

