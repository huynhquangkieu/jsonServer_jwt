const insertItemToOriginIndex = (originIndex, originItem, targetArray) => {
    if (originIndex < -1) {
        return "Invalid index!!!"
    } else {
        const subIndex = (originIndex) - 1;
        targetArray.splice(subIndex, 0, originItem)
        return targetArray
    }
}

var arr = [];
arr[0] = "Jani";
arr[1] = "Hege";
arr[2] = "Stale";
arr[3] = "Kai Jim";
arr[4] = "Borge";

console.log(arr.join()); // Jani,Hege,Stale,Kai Jim,Borge
arr.splice(2, 0, "Lene");
console.log(arr.join()); // Jani,Hege,Lene,Stale,Kai Jim,Borge

var originalArray = [0, 1, 2, 3, 4, 5]

// item = 3 has index 4
var arrayHasNotMatchItem = [0, 1, 2, 4, 5]

// arrayHasNotMatchItem.splice(-1, 0, 3)

console.log("Added edited Item to Add: ", arrayHasNotMatchItem);

console.log("-------------S2------------");
const resultArray = insertItemToOriginIndex(4, 3, arrayHasNotMatchItem)
console.log("resultArray🔵", resultArray);

