export function getbubbleSortAnimation(array){
    const animations = [];
    bubbleSort(array, 0, array.length - 1, animations);
    return animations;
}

function bubbleSort(array, startIdx, endIdx, animations){

    if(startIdx===endIdx) return;
    let swapped = false;
    
    for(let i=startIdx; i<endIdx; i++){
        if(array[i]<=array[i+1]){
            // green
            animations.push([1,i,i+1, array[i], array[i+1]]);
        }else{
            swapped = true;

            // red
            animations.push([0,i,i+1, array[i], array[i+1]]);

            // swap
            let temp = array[i+1];
            array[i+1] = array[i];
            array[i] = temp;
        }
    }
    if(swapped){
        bubbleSort(array, startIdx, endIdx-1, animations);
    }else{
        return;
    }
}

