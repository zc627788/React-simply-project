import React, { Component } from 'react'
import { Carousel } from 'antd-mobile';
import Banner1 from '../asset/images/banner1.jpg'
import Banner2 from '../asset/images/banner2.jpg'
import Banner3 from '../asset/images/banner3.jpg'

export default class Banner extends Component {
    state = {
        data: ['1', '2', '3'],
        imgHeight: 176,
    }
    componentDidMount() {
        // simulate img loading
        setTimeout(() => {
            this.setState({
                data: [Banner1, Banner2, Banner3],
            });
        }, 100);
    }
    render() {
        return (
            <Carousel
                autoplay={true}
                infinite

            >
                {this.state.data.map(val => (
                    <a
                        key={val}
                        style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                    >
                        <img
                            src={val}
                            style={{ width: '100%', verticalAlign: 'top' }}
                            onLoad={() => {
                                // fire window resize event to change height
                                window.dispatchEvent(new Event('resize'));
                                this.setState({ imgHeight: 'auto' });
                            }}
                        />
                    </a>
                ))}
            </Carousel>
        )
    }
}
