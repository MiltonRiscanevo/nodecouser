const reverseInt = (number) => {
    if(typeof number != 'number'){
        throw new Error('Not is  number')
    }else if(number<0){
        return Number(number.toString().split('').indexOf(1).pop().reverse().join(''))
    }else{
      return Number(number.toString().split('').reverse().join(''))
    }
}

module.exports = {
    reverseInt
}