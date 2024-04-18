import { HttpClient } from '@angular/common/http';
import { compileNgModule } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-job',
  templateUrl: './post-job.component.html',
  styleUrls: ['./post-job.component.scss'],
})
export class PostJobComponent implements OnInit {
  // handlejobDetails() {
  // throw new Error('Method not implemented.');
  // }

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  jobDetails: any = {};
  jobId: any = '';

  ngOnInit(): void {
    this.jobId = this.route.snapshot.paramMap.get('id');
    console.log(this.jobId);
    if (this.jobId) {
      this.http.get('https://1337-shrill-disk-50897621.in-ws1.runcode.io/jobs/' + this.jobId).subscribe((response) => {
          console.log(response);
          this.jobDetails = response;
        });
    }
  }

  handlepostjob() {
    console.log(this.jobDetails);
    if(this.jobId){
    this.http.patch('https://1337-shrill-disk-50897621.in-ws1.runcode.io/jobs/' +this.jobId, this.jobDetails).subscribe((response) => {
        console.log(response);
      });
    }
    else{
         this.http.post('https://1337-shrill-disk-50897621.in-ws1.runcode.io/jobs',this.jobDetails).subscribe((response) => {
        console.log(response);
        })
      }
  }
}
