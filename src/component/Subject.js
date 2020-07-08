import React, { Component } from 'react'
import { Flex } from 'antd-mobile';
import '../asset/styles/Subject.less'
import Axios from 'axios';



export default class Subject extends Component {
    constructor(props) {
        super(props)
        this.state = {
            subject_List: []
        }

    }
    componentDidMount() {

        Axios.get("/server/subject.json").then((resp) => {
            console.log(resp.data);
            this.setState({
                subject_List: resp.data

            })

        })

    }

    render() {
        return (
            <div class="subject">
                <Flex >
                    {
                        this.state.subject_List.map((v, k) => {
                            if (k < 4) {
                                return (
                                    <Flex.Item>
                                        <a href="#/ListPage">
                                            <i style={{ backgroundPositionX: -50 * k }}></i>
                                            <p>{v.subjectName}</p>
                                        </a>
                                    </Flex.Item>
                                )
                            }

                        })
                    }

                </Flex>
                <Flex>
                    {
                        this.state.subject_List.map((v, k) => {
                            if (k >= 4) {
                                return (
                                    <Flex.Item>
                                        <a href="#/ListPage">
                                            <i style={{ backgroundPositionX: -50 * k }}></i>
                                            <p>{v.subjectName}</p>
                                        </a>
                                    </Flex.Item>
                                )

                            }

                        })

                    }
                    {
                        <Flex.Item>

                        </Flex.Item>}

                </Flex>
            </div>
        )
    }
}
