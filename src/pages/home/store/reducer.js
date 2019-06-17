import { fromJS } from 'immutable';

const defaultState = fromJS({
    articleList: [{
        id: 1,
        title: '女生要记住，给不了你这些东西的男生，对你再好都别嫁，别不在意',
        desc: '嫁人是女人人生中的一件大事，更是人生中的一个很重要的选择，如果选对了，就能幸福一生。如果选错了，那就是要用自己的青春为错误的选择买单。所以在这个...',
        imgUrl: '//upload-images.jianshu.io/upload_images/16133539-53b0d322a70fbba5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    },{
        id: 2,
        title: '尘世间所有相欠，都会以另一种形式回归',
        desc: '人生中很多遇见只是一瞬，可是为了这份遇见，我们已经在路途上走了太久。 很多事只有经历了才明白，总以为岁月漫长，可是当记忆袭上心间，那年那月那时的......',
        imgUrl: '//upload-images.jianshu.io/upload_images/16133539-53b0d322a70fbba5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    },{
        id: 3,
        title: '红楼梦奇怪的父女关系：父亲去世女儿不闻不问，相互从未有过互动',
        desc: '在《红楼梦》里经常写到迎春、探春、惜春这贾府三春在一起玩儿。通过邢夫人、尤氏等人的口碑，我们知道了大家都把探春作为学习的榜样了，大家言谈之中都以......',
        imgUrl: '//upload-images.jianshu.io/upload_images/16133539-53b0d322a70fbba5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    }],
    page: 1
});

export default ( state = defaultState, action ) => {
    switch(action.type){
        case 'topic/MORE_PAGE':
            return state.merge({
                'articleList': state.get('articleList').concat(action.articleList),
                'page':  action.page
            })
    }
    return state;
}