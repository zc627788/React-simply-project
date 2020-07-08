import React, { Component } from 'react'

import { NavBar, Icon, SearchBar } from 'antd-mobile';
import IMG from '../component/IMG'
import '../asset/styles/Header.less'
import { Link } from 'react-router'


export default class Header extends Component {
    render() {
        return (
            <div>
                <NavBar
                    leftContent={[

                        <div class="img-logo"><IMG key="1" src="wings-2053515_640.png" height={30} /></div>


                    ]}
                    // mode="light"
                    icon={this.props.detail ? <Icon type="left" /> : ""}
                    // 返回上一页
                    onLeftClick={() => window.history.go(-1)}
                    // onLeftClick={() => console.log('onLeftClick')}
                    rightContent={[

                    ]}
                >    {this.props.detail ? "" : <SearchBar placeholder="Search" maxLength={8} />}</NavBar>

            </div>
        )
    }
}

