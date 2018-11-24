import { Component, OnInit } from "@angular/core";
import { DiamondsService } from "../diamonds.service";
@Component({
  selector: "app-manufacturers",
  templateUrl: "./manufacturers.component.html",
  styleUrls: ["./manufacturers.component.scss"]
})
export class ManufacturersComponent implements OnInit {
  manufacturers: any;
  videosList: any = [];
  constructor(private diamondsService: DiamondsService) {}

  ngOnInit() {
    this.diamondsService.getManufacturers().subscribe(
      res => {
        console.log(res);

        this.manufacturers = res;
      },
      err => {
        console.log(err);
      }
    );
  }
  getManufacture(id) {
    console.log(id);
    this.diamondsService.getVideoByManufacturerId(id).subscribe(
      res => {
        console.log(res);
        // let obj = {
        //   additionalInfo: "test",
        //   video: "http://techslides.com/demos/sample-videos/small.mp4"
        // };
        this.videosList = res;
      },
      err => {
        console.log(err);
      }
    );
  }
}
