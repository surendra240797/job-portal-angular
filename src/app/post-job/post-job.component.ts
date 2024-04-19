import { HttpClient } from '@angular/common/http';
import { compileNgModule } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post-job',
  templateUrl: './post-job.component.html',
  styleUrls: ['./post-job.component.scss'],
})
export class PostJobComponent implements OnInit {
  
  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) {}

  postjob: any = {};
  jobId: any = '';

  ngOnInit(): void {
    this.jobId = this.route.snapshot.paramMap.get('id');
    console.log(this.jobId);

    if (this.jobId) {
      
      this.http.get('https://1337-shrill-disk-50897621.in-ws2.runcode.io/jobs/' + this.jobId).subscribe((response) => {
          console.log(response);
      this.postjob = response;
                  

        });
    }
  }

  handlepostjob() {
    console.log(this.postjob);
    
    if(this.jobId){
    this.http.patch('https://1337-shrill-disk-50897621.in-ws2.runcode.io/jobs/' +this.jobId, this.postjob).subscribe((response) => {
        console.log(response);
        alert('Updated Successfully');
        this.router.navigate(['/jobs-list']);
      });
    }
    else{
         this.http.post('https://1337-shrill-disk-50897621.in-ws2.runcode.io/jobs',this.postjob).subscribe((response) => {
        console.log(response);
        alert('Posted Job Successfully');
        this.router.navigate(['/jobs-list']);
        })
      }
  }
}
