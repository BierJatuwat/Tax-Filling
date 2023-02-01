import { Component, OnInit } from '@angular/core';

export interface dataModel {
  filingType: String,
  month: String,
  year: String,
  saleAmount: number,
  taxAmount: number,
  surcharge: number,
  penalty: number,
  totalAmount: number
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  selectedOption: number = 0;
  currentMonth = new Date().getMonth();
  currentYear = new Date().getFullYear();
  setMonthList: any[] = [];
  yearList: any[] = [];
  inputValue: any;
  inputValue2: number = 0;
  tmpInputValue2: number = 0;
  forViewDetails: number = 0;
  isInvalidTax: boolean = false;
  stage: number = 1;
  json:any;
  monthList = [
    { value: 1, label: 'January' },
    { value: 2, label: 'February' },
    { value: 3, label: 'March' },
    { value: 4, label: 'April' },
    { value: 5, label: 'May' },
    { value: 6, label: 'June' },
    { value: 7, label: 'July' },
    { value: 8, label: 'August' },
    { value: 9, label: 'September' },
    { value: 10, label: 'October' },
    { value: 11, label: 'November' },
    { value: 12, label: 'December' },
  ]
  data: dataModel = {
    filingType: '0',
    month: 'January',
    year: '2020',
    saleAmount: 0,
    taxAmount: 0,
    surcharge: 0,
    penalty: 200,
    totalAmount: 0
  };
  constructor() {

  }

  ngOnInit(): void {
    this.setMonthList = this.monthList.slice(0, this.currentMonth + 1);
    const yearList1 = Array.from({ length: this.currentYear - 2019 }, (_, i) => 2020 + i);
    this.yearList = yearList1.map(year => ({ label: year, value: year }));
  }
  nextStage() {

    if (this.data.saleAmount && !this.isInvalidTax) {
      this.stage = 2;
    }

  }
  backStage() {
    this.stage = 1;
  }
  clearValue() {

    this.data.surcharge = 0;
    this.data.penalty = 0;
  }
  setMonthData(value: number) {
    this.data.month = value.toString();
  }
  setYearData(value: number) {
    this.data.year = value.toString();
  }
  calVAT() {
    this.data.taxAmount = +this.data.saleAmount * 0.07;
    this.tmpInputValue2 = this.data.taxAmount;
    this.calSurcharge();
  }
  subVAT() {
    const tmp = this.data.taxAmount - this.tmpInputValue2;
    if (Math.abs(tmp) > 20) {
      this.isInvalidTax = true;

    }
    else {
      this.isInvalidTax = false;
    }
    this.calSurcharge();
  }
  calSurcharge() {
    if (!this.isInvalidTax) {
      this.data.penalty = 200;
      this.data.surcharge = this.data.taxAmount * 0.1;
      if (this.data.filingType == '0') {
        this.data.totalAmount = this.data.taxAmount
      }
      else {
        this.data.totalAmount = this.data.taxAmount + this.data.surcharge + this.data.penalty;
      }
      this.json = JSON.stringify(this.data);
    }
    
  }
  openModal() {
    var myModal = document.getElementById('myModal')
    var myInput = document.getElementById('myInput')

    myModal!.addEventListener('shown.bs.modal', function () {
      myInput!.focus()
    })
  }
}
