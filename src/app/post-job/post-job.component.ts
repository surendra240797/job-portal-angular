import { HttpClient } from '@angular/common/http';
import { compileNgModule } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-job',
  templateUrl: './post-job.component.html',
  styleUrls: ['./post-job.component.scss'],
})
export class PostJobComponent implements OnInit {
  constructor(private http: HttpClient) {}

  postjob: any = {};

  handlepostjob() {
    console.log(
      this.postjob.job_title,
      this.postjob.company_name,
      this.postjob.qualification,
      this.postjob.experience,
      this.postjob.location,
      this.postjob.vacancy,
      this.postjob.job_description,
      this.postjob.skills
    );

    this.http
      .post(
        'https://3300-gentle-breeze-14716613.in-ws1.runcode.io/post-job',
        this.postjob
      )
      .subscribe((response) => {
        console.log(response);
      });
  }
  ngOnInit(): void {}
}
