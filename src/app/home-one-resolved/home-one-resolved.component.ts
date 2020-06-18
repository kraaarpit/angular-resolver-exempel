import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home-one-resolved',
  templateUrl: './home-one-resolved.component.html',
  styleUrls: ['./home-one-resolved.component.css']
})
export class HomeOneResolvedComponent implements OnInit {
 posts:any
  constructor(private actr: ActivatedRoute) {
    this.actr.data.pipe(map(data=> data.cres)).subscribe(
res=>{
 this.posts=res
}
    )
   }

  ngOnInit() {
    console.log("HomeOneResolvedComponent component oninit")
  }

}