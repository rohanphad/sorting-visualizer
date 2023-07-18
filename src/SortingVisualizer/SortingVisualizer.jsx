import React from "react";
import "./SortingVisualizer.css";
import * as mergeSort from '../SortingAlgorithms/mergeSort.js';
import * as bubbleSort from '../SortingAlgorithms/bubbleSort.js';
import * as quickSort from '../SortingAlgorithms/quickSort.js';
import * as selectionSort from '../SortingAlgorithms/selectionSort.js';
import * as insertionSort from '../SortingAlgorithms/insertionSort.js';

const ANIMATION_SPEED = 1;
const NUMBER_OF_BARS = 300;
const PRIMARY_COLOR = 'turquoise';
const SECONDARY_COLOR = 'black';

export default class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [],
    };
  }

  componentDidMount() {
    this.resetArray();
  }

  resetArray() {
    const array = [];
    for (let i = 0; i < NUMBER_OF_BARS; i++) {
      array.push(randomIntInInterval(5, 500));
    }
    this.setState({ array });
  }

  mergeSort(){
        const animations = mergeSort.getMergeSortAnimation(this.state.array);

        for(let i=0; i<animations.length; i++){
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i % 3 !== 2;

            if(isColorChange){
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;

                setTimeout(()=>{
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i*ANIMATION_SPEED);
            } else {
                setTimeout(()=>{
                    const[barOneIdx, newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                    
                }, i*ANIMATION_SPEED)
            }
        }
  }

  quickSort(){
        const animations = quickSort.getQuickSortAnimation(this.state.array);
        for(let i = 0; i<animations.length; i++){
            const arrayBars = document.getElementsByClassName('array-bar');
            console.log(animations[i]);
            let [needToChange, barOneIdx, barTwoIdx, barOneHeight, barTwoHeight,pivotIdx] = animations[i];

            const pivotBarStyle = arrayBars[pivotIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;


            setTimeout(()=>{
                if(needToChange){
                    const barOneStyle = arrayBars[barOneIdx].style;
                    pivotBarStyle.backgroundColor = 'black';
                    barTwoStyle.backgroundColor = 'red';

                    barOneStyle.height = `${barTwoHeight}px`;
                    barTwoStyle.height = `${barOneHeight}px`;
                }else{
                    pivotBarStyle.backgroundColor = 'black';
                    barTwoStyle.backgroundColor = 'green';
                    
                }
            }, i* ANIMATION_SPEED)

            setTimeout(()=>{
                barTwoStyle.backgroundColor = PRIMARY_COLOR;
                pivotBarStyle.backgroundColor = PRIMARY_COLOR;
            }, (i+1)*ANIMATION_SPEED);

        }
  }

  selectionSort(){
        const animations = selectionSort.getSelectionSortAnimation(this.state.array);

        for(let i = 0; i<animations.length; i++){
            const arrayBars = document.getElementsByClassName('array-bar');
            const [type, barOneIdx, barTwoIdx, barOneHeight, barTwoHeight] = animations[i];

            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;



            if(type===1){
                setTimeout(()=>{
                    barOneStyle.backgroundColor = 'red';
                    barTwoStyle.backgroundColor = 'black';
                },i*ANIMATION_SPEED)
            }else if(type===0){
                setTimeout(()=>{
                    barOneStyle.backgroundColor = 'black';
                    barTwoStyle.backgroundColor = 'red';
                },i*ANIMATION_SPEED)
            }else{
                setTimeout(()=>{
                    barOneStyle.backgroundColor = 'black';
                    barTwoStyle.backgroundColor = 'black';

                    barOneStyle.height = `${barTwoHeight}px`;
                    barTwoStyle.height = `${barOneHeight}px`;
                },i*ANIMATION_SPEED)
            }

            setTimeout(()=>{
                barOneStyle.backgroundColor = PRIMARY_COLOR;
                barTwoStyle.backgroundColor = PRIMARY_COLOR;
            },(i+1)*ANIMATION_SPEED)
        }

  }

  bubbleSort(){
        const animations = bubbleSort.getbubbleSortAnimation(this.state.array);

        for(let i = 0; i<animations.length; i++){
            const arrayBars = document.getElementsByClassName('array-bar');
            const [isCorrectOrder, barOneIdx, barTwoIdx, barOneHeight, barTwoHeight] = animations[i];
            
            let color = isCorrectOrder === 1 ? 'green':'red';

            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;

            setTimeout(()=>{
                barTwoStyle.backgroundColor = color;
                barOneStyle.backgroundColor = color;

                if(!isCorrectOrder){
                    barOneStyle.height = `${barTwoHeight}px`;
                    barTwoStyle.height = `${barOneHeight}px`;
                }
            }, i*ANIMATION_SPEED);
            setTimeout(()=>{
                barTwoStyle.backgroundColor = PRIMARY_COLOR;
                barOneStyle.backgroundColor = PRIMARY_COLOR;
            }, (i+1)*ANIMATION_SPEED);
        }
  }

  insertionSort(){
        const animations = insertionSort.getinsertionSortAnimation(this.state.array);

        for(let i = 0; i<animations.length; i++){
            const arrayBars = document.getElementsByClassName('array-bar');
            const [isCorrectOrder, barOneIdx, barTwoIdx, barOneHeight, barTwoHeight] = animations[i];

            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;

            setTimeout(()=>{
                if(isCorrectOrder){
                    barOneStyle.backgroundColor = 'green';
                    barTwoStyle.backgroundColor = 'green';
                }else{
                    barOneStyle.backgroundColor = 'red';
                    barTwoStyle.backgroundColor = 'red';

                    barTwoStyle.height = `${barOneHeight}px`;

                }
            }, i * ANIMATION_SPEED)
            setTimeout(()=>{
                barOneStyle.backgroundColor = PRIMARY_COLOR;
                barTwoStyle.backgroundColor = PRIMARY_COLOR;
            }, (i+1)*ANIMATION_SPEED);
        }
  }
  

  render() {
    const { array } = this.state;

    return (
      <>
        <div className="navbar">
            <h2>Sorting Visualizer</h2>
            <button className="generate" onClick={()=> this.resetArray()}>Generate New Array</button>
            <button onClick={()=> this.mergeSort()}>Merge Sort</button>
            <button onClick={()=> this.quickSort()}>Quick Sort</button>
            <button onClick={()=> this.selectionSort()}>Selection Sort</button>
            <button onClick={()=> this.bubbleSort()}>Bubble Sort</button>
            <button onClick={()=> this.insertionSort()}>Insertion Sort</button>
            
        </div>
        <div className="array-container">
          {array.map((value, idx) => (
            <div 
                className="array-bar" 
                key={idx} 
                style={({height: `${value}px`, backgroundColor: PRIMARY_COLOR,})}></div>
          ))}
        </div>
      </>
    );
  }
}

function randomIntInInterval(from, to) {
  return Math.floor(Math.random() * (to - from + 1) + from);
}

