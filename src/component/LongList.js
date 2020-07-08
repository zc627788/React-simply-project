import React, { Component } from 'react'
import { ListView, Flex, WingBlank } from 'antd-mobile';
import IMG from '../component/IMG'
import { Link } from 'react-router'
const data = [
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
];

const NUM_ROWS = 8;
let pageIndex = 0;

function genData(pIndex = 0) {
    const dataBlob = {};
    for (let i = 0; i < NUM_ROWS; i++) {
        const ii = (pIndex * NUM_ROWS) + i;
        dataBlob[`${ii}`] = `row - ${ii}`;
    }
    return dataBlob;
}

export default class LongList extends Component {
    constructor(props) {
        super(props);

        const dataSource = new ListView.DataSource({

            rowHasChanged: (row1, row2) => row1 !== row2,

        });

        this.state = {
            dataSource,
            isLoading: true,
        };
    }

    componentDidMount() {
        // 模拟ajax
        setTimeout(() => {
            this.rData = genData();
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(this.rData),
                isLoading: false,
            });
        }, 600);
    }
    // 触发滚动时间再重新渲染
    onEndReached = (event) => {
        // load new data
        // hasMore: from backend data, indicates whether it is the last page, here is false
        if (this.state.isLoading && !this.state.hasMore) {
            return;
        }
        this.setState({ isLoading: true });
        setTimeout(() => {
            this.rData = { ...this.rData, ...genData(++pageIndex) };
            // 控制滚动次数

            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(this.rData),
                isLoading: false,
            });
            // 滚动次数限制了的次数后返回 false 



        }, 1000);
    }


    render() {
        let index = data.length - 1;
        const row = (rowData, sectionID, rowID) => {
            if (index < 0) {
                index = data.length - 1;
            }
            const obj = data[index--];
            return (
                <div className="flex-item">
                    <WingBlank >
                        <WingBlank size="sm"><hr /></WingBlank>
                        <Flex>

                            <Flex.Item align="start">
                                <div className="img-list"><IMG src={obj.img} /></div>

                            </Flex.Item>
                            <Flex.Item>
                                <Link to={"/DetailPage/" + obj.id}><h4>{obj.title}</h4></Link>
                                <div style={{ lineHeight: "20px" }}>{obj.des}</div>
                            </Flex.Item>
                        </Flex>
                    </WingBlank>
                </div>
            )
        }

        return (
            <ListView

                dataSource={this.state.dataSource}
                className="am-list sticky-list"
                useBodyScroll

                renderRow={row}

                renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
                    {this.state.isLoading ? '耐心一点...' : '我也是有底线的'}
                </div>)}

                // scrollEventThrottle={200}
                onEndReached={this.onEndReached}
            // onEndReachedThreshold={10}
            />
        )
    }
}
