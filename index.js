
function produceDrivingRange(blockRange){
 return function(startingBlock, endingBlock){
    n = startingBlock.split("th")[0]
    e = endingBlock.split("th")[0]
   
     if (e - n <= blockRange){
        return `within range by ${(blockRange - (e - n))}`
       }else
       {
     return `${((e - n) - blockRange )} blocks out of range`

    }
 }
}


function produceTipCalculator(tip){
   //  return the tip percentage of the fare
   return function(fare){
      return fare * tip
   }
}


// createDriver is a function that returns a Driver class. 
// The class has reference to a driverId that is 
// incremented each time a new driver is created. 
// The rest of the code base does not have access to driverId.

function createDriver(){

   let DriverId = 0;
   return class {
   constructor(name){
     // we encapsulations right here. 
      this.name = name;
      this.id = ++DriverId;
     }
   }
}

// ;','