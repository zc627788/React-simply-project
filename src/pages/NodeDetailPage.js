import React, { Component, } from 'react'
import Header from '../component/Header'
import '../asset/styles/DetailPage.less'
import IMG from '../component/IMG'

import { Flex, WingBlank } from 'antd-mobile';

const sub_list_data = [
    {
        id: 3,
        img: 't0110974b6f051c1e5a.gif',
        title: ' React库',
        des: 'React 使创建交互式 UI 变得轻而易举',
    },
    {
        id: 2,
        img: 't0177ec8627c04e438b.gif',
        title: 'Vue框架',
        des: 'Vue框架适用于大中型项目',
    },
    {
        id: 1,
        img: 'node.png',
        title: 'Node平台',
        des: 'Node.js 是一个开源与跨平台的 JavaScript 运行时环境。',
    },
    {
        id: 2,
        img: 't0177ec8627c04e438b.gif',
        title: 'Vue框架',
        des: 'Vue框架适用于大中型项目',
    },
    {
        id: 3,
        img: 't0110974b6f051c1e5a.gif',
        title: ' React库',
        des: 'React 使创建交互式 UI 变得轻而易举',
    },
];


export default class ReactDetailPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sub_list_data
        }
    }
    render() {
        return (
            <div className="detail">
                {/* 头部 */}
                <Header detail />
                {/* 文章 */}
                <article>
                    <h3>Node平台</h3>
                    <p><span>作者:某某</span><span>2017-1-26</span></p>
                    <IMG src={'node.gif'} imgTwo />
                    <WingBlank >
                        <h4>Node 是什么？</h4>
                        <p>Node.js 是一个开源与跨平台的 JavaScript 运行时环境。 它是一个可用于几乎任何项目的流行工具！</p>
                        <p>Node.js 在浏览器外运行 V8 JavaScript 引擎（Google Chrome 的内核）。 这使 Node.js 表现得非常出色。</p>
                        <p>Node.js 应用程序运行于单个进程中，无需为每个请求创建新的线程。 Node.js 在其标准库中提供了一组异步的 I/O 原生功能（用以防止 JavaScript 代码被阻塞），并且 Node.js 中的库通常是使用非阻塞的范式编写的（从而使阻塞行为成为例外而不是规范）。</p>
                        <h4>大量的库</h4>
                        <p>npm 的简单结构有助于 Node.js 生态系统的激增，现在 npm 仓库托管了超过 1,000,000 个可以自由使用的开源库包。</p>

                    </WingBlank>
                    <p><span><i className="iconfont icon-eye"></i>5555人观看</span>
                        <span><i className="iconfont icon-gantanhao"></i>我要举报</span>
                    </p>

                </article>
                {/* 相关咨询 */}
                <hr />
                <div className="item-list">
                    <div className="sub-list=header" style={{ margin: "15px", fontWeight: "20px", fontSize: '18px' }}>相关咨询</div>

                    {
                        this.state.sub_list_data.map((v, k) => {
                            return (
                                <div className="flex-item">
                                    <WingBlank >
                                        <WingBlank size="sm"><hr /></WingBlank>
                                        <Flex>

                                            <Flex.Item align="start">
                                                <div className="img-list"><IMG src={v.img} /></div>

                                            </Flex.Item>
                                            <Flex.Item>
                                                <h4>{v.title}</h4>
                                                <div style={{ lineHeight: "20px" }}>{v.des}</div>
                                            </Flex.Item>
                                        </Flex>

                                    </WingBlank>
                                </div>
                            )


                        })
                    }


                </div>
                {/* 评论 */}
                <hr />
                <div className="item-list">
                    <div className="sub-list=header" style={{ margin: "15px", fontWeight: "20px", fontSize: '18px' }}>热门评论</div>
                    <div className="flex-item">
                        <WingBlank >
                            <WingBlank size="sm"><hr /></WingBlank>
                            <Flex>

                                <Flex.Item align="start">

                                    <div className="comment-list"><IMG src={"lion.jpg"} /></div>

                                </Flex.Item>
                                <Flex.Item>
                                    <div className="flex1">
                                        <h4>狮子小能手</h4>
                                        <i className="iconfont icon-zan"><span>3</span></i>

                                    </div>
                                    <div style={{ lineHeight: "20px" }}>逻辑清晰明了,可以的可以的,有空的朋友可以来看看我的项目....</div>
                                </Flex.Item>
                            </Flex>
                            <Flex>

                                <Flex.Item align="start">

                                    <div className="comment-list"><IMG src={"lion.jpg"} /></div>


                                </Flex.Item>
                                <Flex.Item>
                                    <div className="flex1">
                                        <h4>狮子小能手</h4>
                                        <i className="iconfont icon-zan"><span>3</span></i>
                                    </div>
                                    <div style={{ lineHeight: "20px" }}>逻辑清晰明了,可以的可以的,有空的朋友可以来看看我的项目...</div>
                                </Flex.Item>
                            </Flex>
                        </WingBlank>
                    </div>
                </div>


            </div>
        )
    }
}
