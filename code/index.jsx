'use strict';

import Taro, { Component } from '@tarojs/taro';

import styles from './style.js';
const print = function(value) {
  console.log(value);
};
class Page extends Component {
  state = {
    data: [
      {
        title: '小户型卫浴怎样才能装得高大上？',
        coverImage: 'https://img.alicdn.com/tfs/TB1Txq6o7T2gK0jSZFkXXcIQFXa-684-684.png',
        readCount: 200,
        user: { userImage: 'https://img.alicdn.com/tfs/TB1DWe6oYj1gK0jSZFOXXc7GpXa-60-60.png', userName: '时尚家居' },
        url: 'https://www.imgcook.com'
      },
      {
        title: '拥有超多功能的40平米简约小公寓了解一下',
        coverImage: 'https://img.alicdn.com/tfs/TB1XRQTo7P2gK0jSZPxXXacQpXa-684-648.png',
        readCount: 500,
        user: {
          userImage: 'https://img.alicdn.com/tfs/TB1DWe6oYj1gK0jSZFOXXc7GpXa-60-60.png',
          userName: '花花设计工作'
        },
        url: 'https://www.imgcook.com/docs'
      }
    ]
  };
  constructor(props, context) {
    super();
    console.log('super props');
  }
  componentDidUpdate(prevProps, prevState, snapshot) {}
  isReadCountShow(readCount) {
    return readCount > 300;
  }
  render() {
    return (
      <div style={styles.box}>
        {this.state.data.map((item, index) => {
          return (
            <div
              onClick={e => {
                window.open(item.url, '_blank');
              }}
              data-url={item.url}
              key={item.index}
            >
              <div style={styles.bd}>
                <img style={styles.layer} src={'https://img.alicdn.com/tfs/TB1bLoWoYH1gK0jSZFwXXc7aXXa-684-684.png'} />
                <img style={styles.bg} src={item.coverImage} />
                <div style={styles.wrap}>
                  <img
                    style={styles.riverdinwei}
                    src={'https://img.alicdn.com/tfs/TB1mtZRoVT7gK0jSZFpXXaTkpXa-28-36.png'}
                  />
                  <span style={styles.distance}>距离500m</span>
                </div>
              </div>
              <div style={styles.main}>
                <span style={styles.title}>{item.title}</span>
              </div>
              <div style={styles.ft}>
                <div style={styles.block}>
                  <img
                    style={styles.xianjin}
                    src={'https://img.alicdn.com/tfs/TB1OvsYoW61gK0jSZFlXXXDKFXa-60-60.png'}
                  />
                  <span style={styles.fashionHome}>{item.user.userName}</span>
                </div>
                {this.isReadCountShow(item.readCount) && (
                  <div style={styles.group}>
                    <img
                      style={styles.favorite}
                      src={'https://img.alicdn.com/tfs/TB1arwYo7T2gK0jSZFkXXcIQFXa-46-44.png'}
                    />
                    <span style={styles.num}>{item.readCount}</span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
export default Page;
