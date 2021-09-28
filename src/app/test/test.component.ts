import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import html2canvas from 'html2canvas';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @ViewChild('downloadLink') downloadLink: ElementRef;
  //@ViewChild('grid') grid: ElementRef;

  title: string = 'Test Technique Shipzzer';
  multi: number[][];
  green: number[] = [];
  red: number[] = [];
  random: number;
  numbers = [];
  clickme() {
    console.log('it does nothing', this.random);
  }

  randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  generateXRandomNumbers(x) {
    var numbers = [];
    for (let i = 0; i < x; i++) {
      const rand = this.randomIntFromInterval(-100, 100);
      numbers.push(rand);
    }
    return numbers;
  }

  numToRgb(x) {
    this.green = [];
    this.red = [];
    this.random = x;

    this.numbers = this.generateXRandomNumbers(this.random);
    for (let i = 0; i < this.random; i++) {
      if (this.numbers[i] < 0) {
        let green = (this.numbers[i] * 255) / 100;
        green = Math.round(green);
        green = Math.abs(green);
        this.green.push(green);
        this.red.push(0);
      } else if (this.numbers[i] > 0) {
        let red = (this.numbers[i] * 255) / 100;
        red = Math.round(red);
        this.red.push(red);
        this.green.push(0);
      } else {
        this.green.push(0);
        this.red.push(0);
      }
    }
  }

  downloadImage() {
    html2canvas(document.querySelector('.container')).then((canvas) => {
      this.downloadLink.nativeElement.href = canvas.toDataURL('image/png');
      this.downloadLink.nativeElement.download = 'screenshot.png';
      this.downloadLink.nativeElement.click();
    });
  }

  /*   removeAllChildNodes(parent) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  } */

  /*   clear() {
    this.green = [];
    this.red = [];
  } */
}
