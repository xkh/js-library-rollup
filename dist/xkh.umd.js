(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = global || self, global.xkh = factory());
}(this, function () { 'use strict';

    var foo = 'hello world!';

    const toSay = (num) => {
        console.log(foo);
        console.log(`hello xkh~ 你输入了${num}`);
    };

    var main = {
        toSay
    };

    return main;

}));
