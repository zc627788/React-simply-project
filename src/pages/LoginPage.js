import React, { Component } from 'react'


import FormBtn from '../component/FormBtn'

import '../asset/styles/loginPages.less'

import IMG from '../component/IMG'
import "../asset/js/loginPages"
import axios from "axios"
import { Toast } from 'antd-mobile';


export default class LoginPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: "",
            password: ""

        }
    }


    handleusername(e) {
        console.log(e.target.value);
        this.setState({
            username: e.target.value



        })
    }
    handleusername(e) {
        console.log(e.target.value);
        this.setState({
            username: e.target.value



        })
    }
    handlepassword(e) {

        console.log(e.target.value);
        this.setState({
            password: e.target.value

        })
    }
    btnclick(e) {
        e.preventDefault()
        let params = {
            username: 1,
            password: 2
        }


        axios.get("/server/data.json", params).then((resp) => {
            if (resp.data.username == this.state.username && resp.data.password == this.state.password && resp.data.username != "" && resp.data.password != "") {
                console.log(resp.data.message);
                this.props.router.push("/HomePage")
                Toast.success('登录成功', 1);
            } else {
                Toast.fail('登录成功,请重试', 1);
            }
        })
    }

    render() {
        return (
            <div className="login-page">
                <main>
                    <div class="img-wings">
                        <IMG src="wings-2053515_640.png" />
                    </div>
                    <form class="form">
                        <div class="form__cover"></div>
                        <div class="form__loader">
                            <div class="spinner active">
                                <svg class="spinner__circular" viewBox="25 25 50 50">
                                    <circle class="spinner__path" cx="50" cy="50" r="20" fill="none" stroke-width="4" stroke-miterlimit="10"></circle>
                                </svg>
                            </div>
                        </div>
                        <div class="form__content">
                            <h1>React</h1>
                            <div class="styled-input">
                                <input type="text" class="styled-input__input" value={this.state.username} onChange={this.handleusername.bind(this)} />
                                <div class="styled-input__placeholder"> <span class="styled-input__placeholder-text">Username</span> </div>
                                <div class="styled-input__circle"></div>
                            </div>
                            <div class="styled-input">
                                <input type="password" class="styled-input__input" value={this.state.password} onChange={this.handlepassword.bind(this)} />
                                <div class="styled-input__placeholder"> <span class="styled-input__placeholder-text">Password</span> </div>
                                <div class="styled-input__circle"></div>
                            </div>
                            <FormBtn name="SUBMIT" type="button" onclick={this.btnclick.bind(this)} />
                            <div class="small">
                                <FormBtn name="SUBMIT" name="register" />
                                <FormBtn name="SUBMIT" name="forget password?" />

                            </div>

                        </div>
                    </form>
                </main>
            </div>

        )

    }
}

