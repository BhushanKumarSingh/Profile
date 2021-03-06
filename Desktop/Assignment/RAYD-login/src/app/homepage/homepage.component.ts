import { Component, OnInit } from '@angular/core';
import { Chart } from "chart.js";
import { RaydService } from '../rayd.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private raydService:RaydService) { }
  PieChart=[];
  BarChart=[];

  async ngOnInit() {
    await this.raydService.getrequestType();
    this.PieChart=new Chart("pieChart",{
      type:'pie',
      data:{
        labels:["Electronics","Furniture","Plumber","Mechanic"],
        datasets:[{
          label:'Pie Chart',
          data:this.raydService.requestType[0],
          backgroundColor:[
            'YELLOW',
            'BLUE',
            'GREEN',
            'PINK'
          ],
        }]
      },
      options:{
        title:{
          text:"Pie Chart",
          display:true
        },
        scales:{
          yAxes:[{
            ticks:{
             beginAtZero:true
            }
          }]
        }
      }

    })

    this.BarChart=new Chart("barChart",{
      type:'bar',
      data:{
        labels:["Electronics","Furniture","Plumber","Mechanic"],
        datasets:[{
          label:'Bar Chart',
          data:this.raydService.requestType[0],
          backgroundColor:[
            'YELLOW',
            'BLUE',
            'GREEN',
            'PINK'
          ],
        }]
      },
      options:{
        title:{
          text:"Bar Chart",
          display:true
        },
        scales:{
          yAxes:[{
            ticks:{
             beginAtZero:true
            }
          }]
        }
      }

    })
  }

}
