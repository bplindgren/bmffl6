import { Component, Input, OnChanges, SimpleChanges, SimpleChange, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';

@Component({
  selector: 'vertical-bar-chart',
  templateUrl: './vertical-bar-chart.component.html',
  styleUrls: ['./vertical-bar-chart.component.css']
})
export class VerticalBarChartComponent implements OnInit, AfterViewInit, OnChanges {
  @Input() data: Object[];
  @Input() yAxis: string;
  @ViewChild("chart") chart: ElementRef;
  private initialized: boolean = false;

  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
    scales: { yAxes: [{ ticks: { beginAtZero: true } }] }
  }

  private barChartLabels: string[] = [];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;
  private barChartData: any[] = [{}]

  ngOnInit() {
    let chartLabels = this.data.map(object => object['name'])
    this.barChartLabels = chartLabels;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['data']) {;
      this.updateData(changes);
    }
    if (changes['data'] && this.initialized) {
      this.updateLabels(changes)
    }
    this.initialized = true;
    console.log(changes['data']);
  }

  ngAfterViewInit() {
    console.log(this.chart)
  }

  updateLabels(changes: SimpleChanges) {
    let newLabels = this.data.map(object => object['name']);
    this.barChartLabels.length = 0;
    for (let i = newLabels.length - 1; i >= 0; i--) {
      this.barChartLabels.push(newLabels[i]);
    }
    this.barChartLabels.reverse();
  }

  updateData(changes: SimpleChanges) {
    let values = changes['data']['currentValue'].map(object => object.value);
    let newData : Object = {
      data: values,
      label: this.yAxis
    }
    this.barChartData = [newData];
  }

}
