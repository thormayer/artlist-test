import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boxes',
  templateUrl: './boxes.component.html',
  styleUrls: ['./boxes.component.scss']
})
export class BoxesComponent implements OnInit {

  constructor() { }

  boxesArray = [2,5,1,2,3,4,8,7,6];
  waterObject = [];
  direction = 1;
  drawObj = [];

    


  ngOnInit() {
    this.init();
    this.waterObject = this.clean();
    let bounderiesArr = this.getBounderiesObject(this.boxesArray);
    this.draw(bounderiesArr);
  }


  getBounderiesObject(obj){
    let arr = [];
    let height = Math.max(...obj);
    let width = obj.length;
    console.log('obj', obj.length)
    for (let i = 0; i < width; i++) {
      let innerArr = [];
      innerArr.fill(-1,0, width);
       for (let j = 0; j < height; j++) {
         innerArr[j] = -1;
       }
      arr.push(innerArr);
      
    }
    return arr;
  }

  draw(obj){
    let counterWater = 0;
    let threshold = -1;
    console.log('obji', obj)
    obj.forEach((el, index)=> {
      let temp = [];
      console.log('ok ?', this.boxesArray[index])
      for (let i = 0; i < obj[index].length ; i++) {
        
        if(this.boxesArray[index] > i) {
          temp.push(0);
         } else{
          this.isWater(el, index, i) ? temp.push(1) : temp.push(-1);       
         }
      }
      this.drawObj.push(temp);
    })
  }

  isWater(elem, widthIndex, heightIndex){
    let ok = false;
    if((this.waterObject[0].start.index < widthIndex) && (this.waterObject[0].start.value > heightIndex)) {
      ok = true;
    }
    return ok;
  }

  clean(){
    let temp = [];
    this.waterObject.forEach((el, index)=> {
      if(('end' in el)) 
        temp.push(el);
      
    })
    return temp;
  }

  init(){
    for (let i = 0; i < this.boxesArray.length; i++) {
      const element = this.boxesArray[i];
      let nextEl = this.nextRowCheckUp(i, this.direction);
      if(nextEl !== undefined) {
        let isSmaller = this.isNextElementSamller(element, nextEl);
        if(isSmaller) {
          this.insertToWaterObject(element, i);
        }
      }
    }
  }

  insertToWaterObject(el, index) {
    let startIndex = this.isWaterObjectHasStart();
    if(startIndex !== -1) {
      this.waterObject[startIndex].end = {
        index: index,
        value: el
      }
    } else{
      let item = {start: {
        index: index,
        value: el
      }}
      this.waterObject.push(item)
    }
  }

  isWaterObjectHasStart(){
    let ok = -1;
    this.waterObject.forEach((el, index) => {
      if('start' in el && !('end' in el)) {
        ok = index;
      }
    })
    return ok;
  }


  isNextElementSamller(currentEl, nextEl) {
    return currentEl > nextEl;
  }

  nextRowCheckUp(index, direction){
    return this.boxesArray[index + direction]
  }

}
