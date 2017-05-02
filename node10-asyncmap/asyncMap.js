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



























