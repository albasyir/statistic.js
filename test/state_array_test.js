const { Statistic } = require('../dist/Statistic')

const statistic = new Statistic([10, 30, 10, 30, 10, 20]);
console.log('construction : ', statistic.getState());

statistic.setState([10, 20, 30]);
console.log('setter state : ', statistic.getState());

statistic.pushState([40, 50, 60]);
console.log('push state : ', statistic.getState());

statistic.pushState([40, 50, 60, 10, 20, 30]);
statistic.popStateBetween(30, 60);
console.log('pop between 30 and 60 : ', statistic.getState());

statistic.sortState();
console.log('sort : ', statistic.getState());

statistic.reverseState();
console.log('reverse : ', statistic.getState());