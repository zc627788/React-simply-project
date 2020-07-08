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
                    <h3>React是的JavaScript库</h3>
                    <p><span>作者:某某某</span><span>2019-11-26</span></p>
                    <IMG src={'React.png'} imgTwo />
                    <WingBlank >
                        <h4>React 是什么？</h4>
                        <p>React 是一个声明式，高效且灵活的用于构建用户界面的 JavaScript 库。使用 React 可以将一些简短、独立的代码片段组合成复杂的 UI 界面，这些代码片段被称作“组件”。</p>
                        <p>从这几个问题出发我就在网上搜查了一下，有这样的解释。</p>
                        <p>Facebook认为MVC无法满足他们的扩展需求，由于他们非常巨大的代码库和庞大的组织，使得MVC很快变得非常复复杂，每当需要添加一项新的功能或特性时，系统的复杂度就成级数增长，致使代码变得脆弱和不可预测，结果导致他们的MVC正在土崩瓦解。认为MVC不适合大规模应用，当系统中有很多的模型和相应的视图时，其复杂度就会迅速扩大，非常难以理解和调试，特别是模型和视图间可能存在的双向数据流动。</p>
                        <p>解决这个问题需要“以某种方式组织代码，使其更加可预测”，这通过他们(Facebook)提出的Flux和React已经完成。</p>
                        <h4>React主要的原理</h4>
                        <p>传统的web应用，操作DOM一般是直接更新操作的，但是我们知道DOM更新通常是比较昂贵的。而React为了尽可能减少对DOM的操作，提供了一种不同的而又强大的方式来更新DOM，代替直接的DOM操作。就是Virtual DOM,一个轻量级的虚拟的DOM，就是React抽象出来的一个对象，描述dom应该什么样子的，应该如何呈现。通过这个Virtual DOM去更新真实的DOM，由这个Virtual DOM管理真实DOM的更新。</p>
                        <p>为什么通过这多一层的Virtual DOM操作就能更快呢？ 这是因为React有个diff算法，更新Virtual DOM并不保证马上影响真实的DOM，React会等到事件循环结束，然后利用这个diff算法，通过当前新的dom表述与之前的作比较，计算出最小的步骤更新真实的DOM。</p>
                    </WingBlank>
                    <p><span><i className="iconfont icon-eye"></i>7777人观看</span>
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
