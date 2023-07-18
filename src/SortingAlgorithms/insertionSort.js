export function getinsertionSortAnimation(array){
    const animations = [];
    insertionSort(array, animations);
    return animations;
}

function insertionSort(array,animations){

    for(let i = 1; i<array.length; i++){
        let temp = array[i];
        let j = i - 1;
        if(array[j] <= temp){
            animations.push([1,j,i,array[j],array[i]])
        }
       
        
        while(j>=0 && array[j] > temp){
            animations.push([0,j,j+1,array[j], array[j+1]])
            array[j+1] = array[j];
            j--;
        }
        animations.push([0, i-1, j+1, temp, array[j+1]]);
        array[j+1] = temp;
    }
}

// let array = [2,3,4,5,8,1,2,6,4,3];
// const animations = [];

// insertionSort(array, animations)

// array.forEach((e)=>{
//     console.log(e);
// })
// animations.forEach((e)=>{
//     console.log(e);;
// })