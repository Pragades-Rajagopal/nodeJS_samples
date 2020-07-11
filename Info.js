const  sayName = () => {
    console.log('Hey there buddy');
};

const sayAddress = () => {
    console.log('50 street, New Jersey');
};

module.exports.sayName = sayName;
module.exports.sayAddress = sayAddress;

