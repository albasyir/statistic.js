const { Statistic } = require('../index')

const statistic = new Statistic([10, 30, 10, 30, 10, 20]);
console.log('construction : ', statistic.getState());

statistic.setState([10, 20, 30]);
console.log('statistic.setState([10, 20, 30]) : ', statistic.getState());

statistic.pushState([40, 50, 60]);
console.log('statistic.pushState([40, 50, 60]) : ', statistic.getState());

statistic.pushState([40, 50, 60, 10, 20, 30]);
statistic.popStateBetween(30, 60);
console.log('statistic.popStateBetween(30, 60) : ', statistic.getState());

statistic.sortState();
console.log('statistic.sortState() : ', statistic.getState());

statistic.reverseState();
console.log('statistic.reverseState() : ', statistic.getState());