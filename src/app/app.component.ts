import { testData } from './testData';
import { TestService } from './test.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatTableDataSource, MatSort,} from '@angular/material';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  displayedColumns: string[] = ['size', 'unit', 'amount', 'totalAmount'];
  dataSource = new MatTableDataSource(testData);
  title = 'Angular Material Table ';
  data:any;
  amount=[];
  amount1=[];
  previousAmount=0
  totalAmount=[];
  constructor(private testservice:TestService){}
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  ngOnInit() {
    this.data = this.testservice.getData
    for(let i=0;i<this.data.length; i++){
      this.amount1.push(this.data[i]);
      this.amount[i] = this.amount1[i].size * this.amount1[i].size;
      
     this.totalAmount= this.amount.reduce(function(a, b) { return a + b; }, this.previousAmount);
     console.log("data", this.amount1[i].size)
     console.log("total", this.totalAmount)
     this.data[i].amount = this.amount[i];
     this.data[i].totalAmount = this.totalAmount
    }
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;

    console.log("dddddd",this.totalAmount)
   
  }

   

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
