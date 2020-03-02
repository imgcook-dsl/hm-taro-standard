import Taro from '@tarojs/taro';
export default {
  hmNewsDetail: {
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    width: '100.00vw',
    height: '163.73vw'
  },
  hd: { display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: '6.93vw', width: '99.73vw' },
  yunshu: { width: '10.13vw', height: '10.13vw', filter: 'drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.09))' },
  container: {
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    marginLeft: '2.67vw',
    height: '10.13vw'
  },
  outer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '0.27vw',
    width: '68.00vw',
    height: '6.13vw'
  },
  author: {
    maxWidth: '49.07vw',
    height: '5.87vw',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    lineHeight: '5.87vw',
    whiteSpace: 'nowrap',
    color: '#000000',
    fontSize: '4.27vw',
    fontWeight: 400
  },
  wrap: { display: 'flex', alignItems: 'flex-start', flexDirection: 'row', marginTop: '1.60vw', height: '4.53vw' },
  time: {
    opacity: '0.60',
    maxWidth: '74.67vw',
    height: '3.73vw',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    lineHeight: '3.73vw',
    whiteSpace: 'pre',
    color: '#000000',
    fontFamily: 'Helvetica',
    fontSize: '3.20vw',
    fontWeight: 'normal'
  },
  title: {
    marginTop: '4.80vw',
    marginLeft: '9.07vw',
    width: '68.27vw',
    height: '13.33vw',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    lineHeight: '6.67vw',
    whiteSpace: 'pre-wrap',
    color: '#000000',
    fontSize: '4.80vw',
    fontWeight: 400
  },
  main: { display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: '2.13vw', width: '99.73vw' },
  entryPicWrap: {
    display: 'flex',
    position: 'relative',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '91.47vw',
    height: '49.07vw'
  },
  img: {
    position: 'relative',
    width: '91.47vw',
    height: '49.07vw',
    filter: 'drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.05))'
  },
  ft: { display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: '6.67vw', width: '99.73vw' },
  content: {
    width: '89.33vw',
    height: '66.13vw',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    lineHeight: '8.27vw',
    letterSpacing: '0px',
    whiteSpace: 'pre-wrap',
    color: '#000000',
    fontSize: '4.80vw',
    fontWeight: 400
  }
};
