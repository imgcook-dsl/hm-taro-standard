'use strict';

import Taro, { Component } from '@tarojs/taro';
import { View, Text, Image } from '@tarojs/components';

import styles from './style.js';

class HmNewsDetail extends Component {
  constructor(props) {
    super(props);
    let defaultState = {
      yunshu: "'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/e8691a80583311ea9fc8bd65d7cec1a5.png'",
      author: '毫末科技',
      time: '2 minutes ago',
      title: '如何用 Python 在笔记本上分析100GB 数据',
      img: "'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/ea36ae90583311eaa48ec157efa466c6.png'",
      content:
        '第 1 种是对数据进行子抽样，但它有一个明显缺点：可能因忽略部分数据而错失关键信息，甚至误解数据表达的含义。第 2 种是使用分布式计算。虽然在某些情况下这是一种有效的方法，但是管理和维护集群会带来巨大开销。想象一下，要为一个刚超出内存大小、大概 30-50GB 的数据集就建立一套集群，对我来说，这似乎有点“用力过猛”。'
    };
    this.state = Object.assign(defaultState, JSON.parse(JSON.stringify(props)));
  }

  render() {
    return (
      <View style={styles.hmNewsDetail} responsive={'vw'}>
        <View style={styles.hd}>
          <Image style={styles.yunshu} src={this.state.yunshu} />
          <View style={styles.container}>
            <View style={styles.outer}>
              <Text style={styles.author}>{this.state.author}</Text>
              <View class="wrap">{'hm-component=van-field'}</View>
            </View>
            <Text style={styles.time}>{this.state.time}</Text>
          </View>
        </View>
        <Text style={styles.title}>{this.state.title}</Text>
        <View style={styles.main}>
          <View style={styles.entryPicWrap}>
            <Image style={styles.img} src={this.state.img} />
          </View>
        </View>
        <View style={styles.ft}>
          <Text style={styles.content}>{this.state.content}</Text>
        </View>
      </View>
    );
  }
}
export default HmNewsDetail;
