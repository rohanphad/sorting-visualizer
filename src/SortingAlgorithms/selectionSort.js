export function getSelectionSortAnimation(array){
    const animations= [];
    selectionSort(array, 0, array.length-1, animations);
    return animations;
}

function selectionSort(array, startIdx, endIdx, animations){

    if(startIdx===endIdx) return;

    let max = array[endIdx];
    let maxIdx = endIdx;

    for(let i = endIdx; i>= startIdx; i--){
        if(array[i]>max){
            animations.push([1,i,maxIdx,array[i],array[maxIdx]]);
            max = array[i];
            maxIdx = i;
        }else{
            animations.push([0,i,maxIdx,array[i],array[maxIdx]]);
        }
    }
    animations.push([-1,endIdx,maxIdx, array[endIdx], array[maxIdx]]);
    let temp = array[endIdx];
    array[endIdx] = array[maxIdx];
    array[maxIdx] = temp;
    selectionSort(array, startIdx, endIdx - 1, animations);
}