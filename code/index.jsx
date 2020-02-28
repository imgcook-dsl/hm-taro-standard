'use strict';

import Taro, { Component } from '@tarojs/taro';
import { View, Text, Image } from '@tarojs/components';

import styles from './style.js';
const print = function(value) {
  console.log(value);
};
class Page extends Component {
  render() {
    return (
      <View style={styles.hm - news - detail}>
        <View style={styles.hd}>
          <Image
            style={styles.yunshu}
            src={'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/e8691a80583311ea9fc8bd65d7cec1a5.png'}
          />
          <View style={styles.container}>
            <View style={styles.outer}>
              <Text style={styles.author}>毫末科技</Text>
              <View style={styles.wrap}>
                <Image
                  style={styles.like}
                  src={'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/e8918a10583311eabb555f2886f52e85.png'}
                />
                <Image
                  style={styles.share}
                  src={'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/e8bc1c80583311ea8651ad80c1bd5775.png'}
                />
              </View>
            </View>
            <Text style={styles.time}>2 minutes ago</Text>
          </View>
        </View>
        <Text style={styles.title}>如何用 Python 在笔记本上分析100GB 数据</Text>
        <View style={styles.main}>
          <View style={styles.entryPicWrap}>
            <Image
              style={styles.img}
              src={'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/ea36ae90583311eaa48ec157efa466c6.png'}
            />
          </View>
        </View>
        <View style={styles.ft}>
          <Text style={styles.content}>
            第 1 种是对数据进行子抽样，但它有一个明显缺点：可能因忽略部分数据而错失关键信息，甚至误解数据表达的含义。第
            2
            种是使用分布式计算。虽然在某些情况下这是一种有效的方法，但是管理和维护集群会带来巨大开销。想象一下，要为一个刚超出内存大小、大概
            30-50GB 的数据集就建立一套集群，对我来说，这似乎有点“用力过猛”。
          </Text>
        </View>
      </View>
    );
  }
}
export default Page;
