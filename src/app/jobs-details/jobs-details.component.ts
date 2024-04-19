import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-jobs-details',
  templateUrl: './jobs-details.component.html',
  styleUrls: ['./jobs-details.component.scss'],
})
export class JobsDetailsComponent implements OnInit {
  id: any = ' ';
  job: any = {};

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log('Job ID : ', this.id);

    this.http
      .get(
        'https://1337-shrill-disk-50897621.in-ws2.runcode.io/jobs/' + this.id
      )
      .subscribe((response) => {
        console.log(response);
        this.job = response;
      });
  }
}
