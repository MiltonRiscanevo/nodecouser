const reverseString = (str) => {
    if(str.length<=1 || str.length >15){
        throw new Error('length is incorrect')
    }else if(typeof str === 'string')
    try {
        return str.split('').reverse().join('')    
    } catch (error) {
        return error;
    }
    
}

module.exports = {
    reverseString
}

