import { Component, OnInit } from "@angular/core";
import { DiamondsService } from "../diamonds.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  videoid: String;
  video: {};
  constructor(private diamondsService: DiamondsService) {}

  ngOnInit() {}

  btnClicked() {
    console.log("click");

    this.diamondsService.getVideoByVideoId(this.videoid).subscribe(
      res => {
        console.log(res);
        let obj = {
          additionalInfo: "test",
          video: "http://techslides.com/demos/sample-videos/small.mp4"
        };
        this.video = obj;
      },
      err => {
        console.log(err);
      }
    );
  }
}
