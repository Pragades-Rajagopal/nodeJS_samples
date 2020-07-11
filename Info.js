const  sayName = () => {
    console.log('Hey there mate');
};

const sayAddress = () => {
    console.log('50 street, New Jersey');
};

module.exports.sayName = sayName;
module.exports.sayAddress = sayAddress;

