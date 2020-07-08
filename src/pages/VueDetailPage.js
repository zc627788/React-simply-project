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
                    <h3>Vue是一个很出色的前端框架</h3>
                    <p><span>作者:某某</span><span>2020-1-26</span></p>
                    <IMG src={'vue.png'} imgTwo />
                    <WingBlank >
                        <h4>Vue 是什么？</h4>
                        <p>vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。</p>
                        <p>与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。</p>

                        <p>在为AngularJS工作之后，Vue的作者尤雨溪开发出了这一框架。他声称自己的思路是提取Angular中为自己所喜欢的部分，构建出一款相当轻量的框架。Vue最早发布于2014年2月。作者在Hacker News、Echo JS与Reddit的/r/javascript版块发布了最早的版本。一天之内，Vue就登上这三个网站的首页。[10]Vue是Github上最受欢迎的开源项目之一。同时，在JavaScript框架/函数库中，Vue所获得的星标数已超过React，并高于Backbone.js、Angular 2、jQuery等项目。</p>
                        <h4>Vue组件</h4>
                        <p>组件是Vue最为强大的特性之一。为了更好地管理一个大型的应用程序，往往需要将应用切割为小而独立、具有复用性的组件。在Vue中，组件是基础HTML元素的拓展，可方便地自定义其数据与行为。下方的代码是Vue组件的一个示例，渲染为一个能计算鼠标点击次数的按钮。</p>
                        <p>响应式是指MVC模型中的视图随着模型变化而变化。在Vue中，开发者只需将视图与对应的模型进行绑定，Vue便能自动观测模型的变动，并重绘视图。这一特性使得Vue的状态管理变得相当简单直观。</p>
                    </WingBlank>
                    <p><span><i className="iconfont icon-eye"></i>6666人观看</span>
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
