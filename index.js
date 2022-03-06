// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    let result = (someValue - 42) 
     return Math.abs(result)
}
      
function distanceFromHqInFeet(someValue) {
    let result2 = (someValue - 42)*264
    return Math.abs(result2)
}

function distanceTravelledInFeet(start, destination) {
    let result3 = Math.abs(start - destination)*264
    return result3
}

function calculatesFarePrice(start, destination) {
    let result4 = distanceTravelledInFeet(start, destination) 
        if (result4 <= 400) {
            return 0
        }
        else if (result4 > 2500) {
            return 'cannot travel that far'
        }
        else if (result4 <2000 && result4 >400) {
            return (result4-400)*.02
        }
        else if (result4 >= 2000 && result4 <=2500) {
            return 25
        }


    

}