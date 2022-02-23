// Define a function named buyChocolate. The function needs no parameters.
//  It should return an object with a type property whose value is "Milk chocolate".


const buyChocolate = () => {
  const chocolateThing = { property : "Milk chocolate" }
    return chocolateThing
}
//Define a function named addFlavoring. The function needs one parameter to accept an object as input. 
//It should add a new flavor property to the object with a value of "Mint".

const addFlavoring = (chocolateObject) => {
    chocolateObject.flavor = "Mint"

    return chocolateObject
}
//Define a function named makeBarkMixture. It should have one parameter for an incoming object to be stored for
//use in the function.
//Time for another if block. This time, you will also need a corresponding else block.
//The function must verify that the right flavor is being used to make the mixture. 
//If the flavor property on the object is equal to "Mint", 
//then you should add a new mixed property to 
//the object with a value of true. 
//If the flavor is not "Mint" then the property value should be false.

const makeBarkMixture = (chocolateObject) => {
    if (chocolateObject.flavor === "Mint" ) {
        return chocolateObject.mixed = true
    } else {
        if ( chocolateObject !== "Mint") {
        return chocolateObject.mixed = false
        }
    }
}

//Define a function named bakeCandy. It should have one parameter for an incoming object to be stored for use 
//in the function.
//Time for another if block. This time, you will also need a corresponding else block.
//The function should check if the mixed property on the incoming object has a value of true. 
//If it does, then add a baked property to the object with a value of true.
//If the mixed property is not true, then add a baked property with a value of false.

const bakeCandy = (chocolateObject) => {
    if (chocolateObject.mixed === true) {
        return chocolateObject.baked = true
    } else {
        if (chocolateObject.mixed !== true) {
            return chocolateObject.baked = false
        }
    }
}

//Define a function named breakBark. It should have one parameter for an incoming object to be stored for use 
//in the function.
//Time for another if block. No else block needed this time.
//If the incoming object's baked property is true, the function should return a new array with 6 strings in it.
//Each string should be "Mint Chocolate Bark Piece".
//If the baked property value is false, the function should not return anything. 
//This means that the return statement should be inside the if block instead of outside of it.

const breakBark = (chocolateObject) => {
    const chocolateArr = ["Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece" ,"Mint Chocolate Bark Piece" , "Mint Chocolate Bark Piece" ,"Mint Chocolate Bark Piece "]
    if( chocolateObject.baked = true) {
   chocolateObject.mintList = chocolateArr
    }
    return chocolateArr
    }


const chocolateDessert = buyChocolate()

addFlavoring(chocolateDessert)
makeBarkMixture(chocolateDessert)
breakBark(chocolateDessert)

console.log(chocolateDessert)