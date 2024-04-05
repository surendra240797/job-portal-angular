import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jobs-list',
  templateUrl: './jobs-list.component.html',
  styleUrls: ['./jobs-list.component.scss']
})
export class JobsListComponent implements OnInit {

  jobslist: any = {}
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get("https://1337-shrill-disk-50897621.in-ws1.runcode.io/jobs").subscribe((response) => {
      console.log(response)
      this.jobslist=response;
      console.log(this.jobslist)
    })
  }

}