import React, { Component } from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'

import Banner from '../component/Banner'
import Subject from '../component/Subject'
import { Flex, Tabs, WingBlank, List } from 'antd-mobile';
import IMG from '../component/IMG'
import '../asset/styles/item-list.less'
import '../asset/styles/Tabs.less'
// 字体图标
import '../asset/fonts/iconfont.css'


// 小列表
const Item = List.Item;
const Brief = Item.Brief;

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
const tabs = [
    { title: 'HTML', sub: '1' },
    { title: 'JS', sub: '2' },
    { title: 'CSS', sub: '3' },
];

export default class HomePage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            sub_list_data,


        }
    }

    render() {
        return (
            <div>
                {/* 导航栏 */}
                <Header />
                {/* 轮播 */}
                <Banner />
                {/* 学科 */}
                <Subject />
                {/* 小列表頁 */}
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
                {/* tabs栏 */}
                <div className="tabs">
                    <Tabs tabs={tabs}
                        initialPage={0}>
                        <div style={{ height: '250px', backgroundColor: '#fff' }}>
                            <div className="tabs-item">
                                {/* 两边留空白 */}
                                <WingBlank >
                                    <Flex>
                                        <Flex.Item><IMG src={'htm.jpg'} /></Flex.Item>
                                        <Flex.Item>
                                            <h4>
                                                语义化HTML是什么？所谓语义化HTML，就是从代码层次表达程序员的想法</h4>
                                            <div className="icon-flex">
                                                <div><i className="iconfont icon-time"></i><span>2小时前</span></div>
                                                <div><i className="iconfont icon-eye"></i><span>65</span></div>
                                            </div>
                                        </Flex.Item>
                                    </Flex>
                                </WingBlank >
                            </div>

                            <Item arrow="horizontal" multipleLine onClick={() => { }}>HTML字元符號&Nbsp; &Ensp; &Emsp; 的差異| ShunNien's Blog </Item>
                            <Item arrow="horizontal" multipleLine onClick={() => { }}>HTML字元符號&Nbsp; &Ensp; &Emsp; 的差異| ShunNien's Blog </Item>
                            <Item arrow="horizontal" multipleLine onClick={() => { }}>HTML字元符號&Nbsp; &Ensp; &Emsp; 的差異| ShunNien's Blog </Item>
                            <Item arrow="horizontal" multipleLine onClick={() => { }}>HTML字元符號&Nbsp; &Ensp; &Emsp; 的差異| ShunNien's Blog </Item>
                            <Item arrow="horizontal" multipleLine onClick={() => { }}>HTML字元符號&Nbsp; &Ensp; &Emsp; 的差異| ShunNien's Blog </Item>
                            <Item arrow="horizontal" multipleLine onClick={() => { }}>HTML字元符號&Nbsp; &Ensp; &Emsp; 的差異| ShunNien's Blog </Item>



                        </div>
                        <div style={{ height: '250px', backgroundColor: '#fff' }}>
                            <div className="tabs-item">
                                <WingBlank >
                                    <Flex>
                                        <Flex.Item><IMG src={'JS.jpg'} /></Flex.Item>
                                        <Flex.Item>
                                            <h4>
                                                语义化HTML是什么？所谓语义化HTML，就是从代码层次表达程序员的想法</h4>
                                            <div className="icon-flex">
                                                <div><i className="iconfont icon-time"></i><span>4小时前</span></div>
                                                <div><i className="iconfont icon-eye"></i><span>80</span></div>
                                            </div>
                                        </Flex.Item>
                                    </Flex>
                                </WingBlank >
                            </div>

                            <Item arrow="horizontal" multipleLine onClick={() => { }}>JavaScript ( JS ) 是一种具有函数优先的轻量级，解释型或即时编译型的编程语言。 </Item>
                            <Item arrow="horizontal" multipleLine onClick={() => { }}>JavaScript ( JS ) 是一种具有函数优先的轻量级，解释型或即时编译型的编程语言。 </Item>
                            <Item arrow="horizontal" multipleLine onClick={() => { }}>JavaScript ( JS ) 是一种具有函数优先的轻量级，解释型或即时编译型的编程语言。 </Item>
                            <Item arrow="horizontal" multipleLine onClick={() => { }}>JavaScript ( JS ) 是一种具有函数优先的轻量级，解释型或即时编译型的编程语言。 </Item>
                            <Item arrow="horizontal" multipleLine onClick={() => { }}>JavaScript ( JS ) 是一种具有函数优先的轻量级，解释型或即时编译型的编程语言。 </Item>
                            <Item arrow="horizontal" multipleLine onClick={() => { }}>JavaScript ( JS ) 是一种具有函数优先的轻量级，解释型或即时编译型的编程语言。 </Item>

                        </div>
                        <div style={{ height: '250px', backgroundColor: '#fff' }}>
                            <div className="tabs-item">
                                <WingBlank >
                                    <Flex>
                                        <Flex.Item><IMG src={'CSS.jpg'} /></Flex.Item>
                                        <Flex.Item>
                                            <h4>
                                                由于允许同时控制多重页面的样式和布局，CSS 可以称得上 WEB 设计领域的一个突破。</h4>
                                            <div className="icon-flex">
                                                <div><i className="iconfont icon-time"></i><span>3小时前</span></div>
                                                <div><i className="iconfont icon-eye"></i><span>55</span></div>
                                            </div>
                                        </Flex.Item>
                                    </Flex>
                                </WingBlank >
                            </div>

                            <Item arrow="horizontal" multipleLine onClick={() => { }}>1 和 p 元素都有 center 类。这意味着两者都将遵守 ".center" 选择器中的规则。 </Item>
                            <Item arrow="horizontal" multipleLine onClick={() => { }}>1 和 p 元素都有 center 类。这意味着两者都将遵守 ".center" 选择器中的规则。 </Item>
                            <Item arrow="horizontal" multipleLine onClick={() => { }}>1 和 p 元素都有 center 类。这意味着两者都将遵守 ".center" 选择器中的规则。 </Item>
                            <Item arrow="horizontal" multipleLine onClick={() => { }}>1 和 p 元素都有 center 类。这意味着两者都将遵守 ".center" 选择器中的规则。 </Item>
                            <Item arrow="horizontal" multipleLine onClick={() => { }}>1 和 p 元素都有 center 类。这意味着两者都将遵守 ".center" 选择器中的规则。 </Item>
                            <Item arrow="horizontal" multipleLine onClick={() => { }}>1 和 p 元素都有 center 类。这意味着两者都将遵守 ".center" 选择器中的规则。 </Item>

                        </div>
                    </Tabs>


                </div>

                {/* 结束页 */}
                <Footer />

            </div>
        )
    }
}
