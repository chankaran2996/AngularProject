import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-img1',
  templateUrl: './banner-img1.component.html',
  styleUrls: ['./banner-img1.component.css']
})
export class BannerImg1Component implements OnInit {
  newArray=[{
    img:"01.jpg",
    para:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.",
    heading:"For those about to rock..."
  },
  {
    img:"02.jpg",
    para:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.",
    heading:"We salute you!"
  },
  {
    img:"03.jpg",
    para:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.",
    heading:"Let there be rock!"
  }
];
  constructor() { }

  ngOnInit() {
  }

}
