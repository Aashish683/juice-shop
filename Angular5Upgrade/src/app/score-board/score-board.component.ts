import { MatTableDataSource } from '@angular/material';
import { ChallengeService } from './../Services/challenge.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-score-board',
  templateUrl: './score-board.component.html',
  styleUrls: ['./score-board.component.css']
})
export class ScoreBoardComponent implements OnInit {

  challenges:any[];
  displayedColumns = ['name', 'description', 'status'];
  defaultDataSource = new MatTableDataSource();
  constructor(private challengeServe:ChallengeService) { }

  ngOnInit() {
    this.challengeServe.find().subscribe((challenges) => {
      console.log(challenges.data);
      this.challenges = challenges.data;
    })

    /*this.challengeServe.find().toPromise().then((challenges) => {
      console.log(challenges.data);
      this.challenges = challenges.data;
    })*/
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
