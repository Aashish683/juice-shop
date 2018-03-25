import { environment } from './../../environments/environment';
import { MatTableDataSource } from '@angular/material';
import { ChallengeService } from './../Services/challenge.service';
import { Component, OnInit, NgZone } from '@angular/core';
import * as io from "socket.io-client";

@Component({
  selector: 'app-score-board',
  templateUrl: './score-board.component.html',
  styleUrls: ['./score-board.component.css']
})
export class ScoreBoardComponent implements OnInit {

  public challenges: any[];
  public displayedColumns = ['name', 'description', 'status'];
  public defaultDataSource = new MatTableDataSource();
  private url = environment.hostServer;
  private socket;
  constructor(private challengeServe: ChallengeService,private ngZone:NgZone) { }

  ngOnInit() {
    this.challengeServe.find().subscribe((challenges) => {
      console.log(challenges.data);
      this.challenges = challenges.data;
    })
    this.ngZone.runOutsideAngular(()=>{
      this.socket = io.connect(this.url);
      this.socket.on('challenge solved' , (data) => {
        if (data && data.challenge) {
          for (let i = 0; i < this.challenges.length; i++) {
            if (this.challenges[i].name === data.name) {
              this.challenges[i].solved = true
              break;
            }
          }
        }
      });
    })

  }


  filterToDataSource(challenges,difficulty,key){
    if(!challenges) return [];

    challenges = challenges.filter((challenge) => challenge.difficulty == difficulty);
    challenges = challenges.sort((challenge1:any,challenge2:any) =>{
      let x = challenge1[key];
      let y = challenge2[key];
      return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });

    let dataSource = new MatTableDataSource();
    dataSource.data = challenges;
    return dataSource;
  }

}
