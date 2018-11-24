import { Component, OnInit, ElementRef, Input, ViewChild } from "@angular/core";
import { DiamondsService } from "../diamonds.service";

@Component({
  selector: "app-add-video",
  templateUrl: "./add-video.component.html",
  styleUrls: ["./add-video.component.scss"]
})
export class AddVideoComponent implements OnInit {
  model: any = {};
  @ViewChild("fileInput") inputEl: ElementRef;
  constructor(private diamondsSerivse: DiamondsService) {}

  ngOnInit() {}
  addVideo() {
    console.log(this.model);
    this.upload();
  }
  upload() {
    let inputEl: HTMLInputElement = this.inputEl.nativeElement;
    let fileCount: number = inputEl.files.length;
    let formData = new FormData();
    if (fileCount > 0) {
      formData.append("file", inputEl.files.item(0));
      console.log(formData.get("file"));

      this.diamondsSerivse.uploadVideo(this.model, formData).subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log(err);
        }
      );

      // do whatever you do...
      // subscribe to observable to listen for response
    }
  }
}
