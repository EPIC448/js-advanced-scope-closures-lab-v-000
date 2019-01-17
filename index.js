
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
