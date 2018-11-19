import { fromJS } from 'immutable'

const defaultState = fromJS({
  topicList: [
    {
      id: 1,
      title: '社会热点',
      imgUrl:
        'https://upload-images.jianshu.io/upload_images/7562289-c6de671e0f2043fb.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
    },
    {
      id: 2,
      title: '手绘',
      imgUrl:
        'https://upload-images.jianshu.io/upload_images/12302394-483ff38f10261280.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
    }
  ],
  articleList: [
    {
      id: 1,
      title: 'js骚操作骂人不带脏',
      desc:
        '很多小伙伴们觉得javaScript很简单,下面的这行 javaScript代码可能会让你怀疑人生。',
      imgUrl:
        'https://upload-images.jianshu.io/upload_images/3529981-0049d9e0df5de2c5?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
    },
    {
      id: 2,
      title: '她是乱伦界一姐，也是中国第一位女外交家',
      desc:
        '她，生得秋水为神，芙蓉满面，比花花解语，比玉玉生香，是广大高富帅梦寐以求的绝世佳人。',
      imgUrl:
        'https://upload-images.jianshu.io/upload_images/6356961-c41730b8bf2934df.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/554/format/webp'
    },
    {
      id: 3,
      title: '姑娘你为何为娼',
      desc:
        '零四年，我从江苏南京到四川阆中去，途经婺源，在婺源休息了一个晚上，也是在那个晚上，我认识了娼妓何秀。',
      imgUrl: ''
    }
  ],
  RecommendList: [
    {
      id: 1,
      url: '',
      imgUrl:
        'https://cdn2.jianshu.io/assets/web/banner-s-3-7123fd94750759acf7eca05b871e9d17.png'
    },
    {
      id: 2,
      url: '',
      imgUrl:
        'https://cdn2.jianshu.io/assets/web/banner-s-4-b70da70d679593510ac93a172dfbaeaa.png'
    },
    {
      id: 3,
      url: '',
      imgUrl:
        'https://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png'
    },
    {
      id: 4,
      url: '',
      imgUrl:
        'https://cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png'
    },
    {
      id: 5,
      url: '',
      imgUrl:
        'https://cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png'
    }
  ]
})

export default (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state
  }
}
