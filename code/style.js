import Taro from '@tarojs/taro';
export default {
  'hm-news-detail': {
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    width: Taro.pxTransform(750),
    height: Taro.pxTransform(1228)
  },
  hd: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: Taro.pxTransform(52),
    width: Taro.pxTransform(748)
  },
  yunshu: {
    width: Taro.pxTransform(76),
    height: Taro.pxTransform(76),
    filter: 'drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.09))'
  },
  container: {
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    marginLeft: Taro.pxTransform(20),
    height: Taro.pxTransform(76)
  },
  outer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: Taro.pxTransform(2),
    width: Taro.pxTransform(510),
    height: Taro.pxTransform(46)
  },
  author: {
    maxWidth: Taro.pxTransform(368),
    height: Taro.pxTransform(44),
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    lineHeight: Taro.pxTransform(44),
    whiteSpace: 'nowrap',
    color: '#000000',
    fontSize: Taro.pxTransform(32),
    fontWeight: 400
  },
  wrap: {
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'row',
    marginTop: Taro.pxTransform(12),
    height: Taro.pxTransform(34)
  },
  like: { opacity: 0.5, width: Taro.pxTransform(38), height: Taro.pxTransform(34) },
  share: { opacity: 0.5, marginLeft: Taro.pxTransform(52), width: Taro.pxTransform(30), height: Taro.pxTransform(30) },
  time: {
    opacity: '0.60',
    maxWidth: Taro.pxTransform(560),
    height: Taro.pxTransform(28),
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    lineHeight: Taro.pxTransform(28),
    whiteSpace: 'pre',
    color: '#000000',
    fontFamily: 'Helvetica',
    fontSize: Taro.pxTransform(24),
    fontWeight: 'normal'
  },
  title: {
    marginTop: Taro.pxTransform(36),
    marginLeft: Taro.pxTransform(68),
    width: Taro.pxTransform(512),
    height: Taro.pxTransform(100),
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    lineHeight: Taro.pxTransform(50),
    whiteSpace: 'pre-wrap',
    color: '#000000',
    fontSize: Taro.pxTransform(36),
    fontWeight: 400
  },
  main: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: Taro.pxTransform(16),
    width: Taro.pxTransform(748)
  },
  entryPicWrap: {
    display: 'flex',
    position: 'relative',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    width: Taro.pxTransform(686),
    height: Taro.pxTransform(368)
  },
  img: {
    position: 'relative',
    width: Taro.pxTransform(686),
    height: Taro.pxTransform(368),
    filter: 'drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.05))'
  },
  ft: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: Taro.pxTransform(50),
    width: Taro.pxTransform(748)
  },
  content: {
    width: Taro.pxTransform(670),
    height: Taro.pxTransform(496),
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    lineHeight: Taro.pxTransform(62),
    letterSpacing: '0px',
    whiteSpace: 'pre-wrap',
    color: '#000000',
    fontSize: Taro.pxTransform(36),
    fontWeight: 400
  }
};
