export function getQuickSortAnimation (array) {
    const animations = [];    
    quickSort(array, 0, array.length-1, animations);
    return animations;
}

function quickSort(array, startIdx, endIdx, animations){

    if(startIdx >= endIdx) return;
 
    let pivotIdx = findPivotIndex(array, startIdx, endIdx, animations);


    quickSort(array, startIdx, pivotIdx - 1, animations);
    quickSort(array, pivotIdx + 1, endIdx, animations);
}

function findPivotIndex(array, startIdx, endIdx, animations){

    const pivot = array[endIdx];

    let i = startIdx-1;
    
    for(let j = startIdx; j<=endIdx; j++){
        if(array[j]<pivot){
            i++;
            animations.push([1,i,j,array[i],array[j], endIdx])
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }else{
            animations.push([0,i,j,array[i],array[j],endIdx]);
        }
    }
    animations.push([1,i+1,endIdx,array[i+1],array[endIdx], endIdx])
    let temp = array[endIdx];
    array[endIdx] = array[i+1];
    array[i+1] = temp;
    return i+1;
}

// let array = [2,5,1,7,3];
// const animations = [];

// quickSort(array, 0, array.length-1, animations);

// animations.forEach((e)=>{
//     console.log(e);
// })

// array.forEach((e)=>{
//     console.log(e);
// })