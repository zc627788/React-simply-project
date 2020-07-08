import React, { Component } from 'react'

import { NavBar, Icon, SearchBar } from 'antd-mobile';
import IMG from '../component/IMG'
import '../asset/styles/Header.less'

export default class Footer extends Component {
    render() {
        return (
            <div>
                <NavBar
                    leftContent={[



                    ]}

                    rightContent={[
                        <div class="img-logo"><IMG key="1" src="wings-2053515_640.png" height={30} />



                        </div>
                    ]}
                > </NavBar>
                <div style={{ textAlign: 'center' }}>
                    <p>2020 © Dashboard Theme By <span style={{ color: "#3498db" }}>JackSon</span></p>
                    <p>email:zc627788@gmail.com</p>
                </div>


            </div >
        )
    }
}

