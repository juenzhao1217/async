/**
 * Created by dllo on 17/5/2.
 */

var async=require('async');
var class1217 = [{name: '文冠龙', age: 1000,delay:500},
    {name: '李青', age: 998,delay:100},
    {name: '刁刁', age: 997,delay:5800},
    {name: '班长', age: 996,delay:1500},
    {name: '小秦', age: 995,delay:700}
];
var date = new Date();
var time = date.getTime();
async.map(class1217, function (item, callback) {

    if (item.age === 997) {
        callback('这个人是假的');
    } else {
        console.log('map 1:' + item.name + time);
        callback(null, item);
    }


    // setTimeout(function () {
    //     var date = new Date();
    //     var time = date.getTime();
    //     console.log('map2:' + item.name + time);
    //     callback(null,item);
    // },item.delay);


}, function done(error) {
    console.log(error);
});


async.mapSeries(class1217, function (item, callback) {

    if (item.age === 997) {
        callback('这个人是假的6666');
    } else {
        console.log('map 6:' + item.name + time);
        callback(null, item);
    }

    // setTimeout(function () {
    //     var date = new Date();
    //     var time = date.getTime();
    //     console.log('map 3:' + item.name + time);
    //     callback(null,item);
    // },item.delay);

}, function done(error) {
    console.log(error);
});



//mapValues 看起来和map的执行顺序一样,但是它输出的是obj对象,把整个元素都输出来
//并没有只返回value值
async.mapValues(class1217, function (file, key, callback) {
    // console.log(file);
}, function(err, result) {

});
//{ name: '文冠龙', age: 999, delay: 500 }
// { name: '李青', age: 998, delay: 200 }
// { name: '刁刁', age: 997, delay: 1000 }
// { name: '班长', age: 996, delay: 500 }
// { name: '于谦义', age: 995, delay: 1000 }


//mapValuesLimit
//和上面的功能一样,但是他只返回第二个参数,规定数量的元素,如果规定数量超过了原数组
//就只显示原数组的所有元素,不会有重复
async.mapValuesLimit(class1217,1, function (file, key, callback) {
    // console.log(file);
}, function(err, result) {

});








//mapValuesSeries顺序执行异步处理函数。
async.mapValuesSeries(class1217, function (item, callback) {

    var date = new Date();
    var time = date.getTime();
    console.log( item.name + time);

}, function done(error,results) {
    console.log(error,results);
});























