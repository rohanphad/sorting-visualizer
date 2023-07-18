export function getMergeSortAnimation (array) {
    const animations = [];
    if(array.length <= 1) return array;
    const auxillaryArray = array.slice();
    mergeSort(array, auxillaryArray, 0, array.length - 1, animations);
    return animations;
}

function mergeSort(array, auxillaryArray, startIdx, endIdx, animations){

    // base case
    if(startIdx === endIdx) return;

    const midIdx = Math.floor((startIdx + endIdx)/2);
    mergeSort(auxillaryArray,array, startIdx, midIdx, animations);
    mergeSort(auxillaryArray,array, midIdx+1, endIdx, animations);
    merge(array, auxillaryArray, startIdx, midIdx, endIdx, animations);
}

function merge(array, auxillaryArray, startIdx, midIdx, endIdx, animations){
    
    let k = startIdx;
    let i = startIdx;
    let j = midIdx+1;

    while(i<=midIdx && j<=endIdx){
        // to change color
        animations.push([i,j]);
        // to change color back to original
        animations.push([i,j]);
        if(auxillaryArray[i] <= auxillaryArray[j]){
            animations.push([k, auxillaryArray[i]]);
            array[k++] = auxillaryArray[i++]
            // to change the height
        }else{
            animations.push([k,auxillaryArray[j]]);
            array[k++] = auxillaryArray[j++];
        }
    }

    while(i<=midIdx){
        animations.push([i,i]);
        animations.push([i,i]);
        animations.push([k, auxillaryArray[i]]);
        array[k++] = auxillaryArray[i++]
    }

    while(j<=endIdx){
        animations.push([j,j]);
        animations.push([j,j]);
        animations.push([k,auxillaryArray[j]]);
        array[k++] = auxillaryArray[j++];
    }
}