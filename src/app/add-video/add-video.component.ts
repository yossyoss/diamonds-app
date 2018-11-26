import { Component, OnInit, ElementRef, Input, ViewChild } from "@angular/core";
import { DiamondsService } from "../diamonds.service";
import { ToastrService } from "ngx-toastr";
@Component({
  selector: "app-add-video",
  templateUrl: "./add-video.component.html",
  styleUrls: ["./add-video.component.scss"]
})
export class AddVideoComponent implements OnInit {
  model: any = {};
  error: String;
  success: String;
  @ViewChild("fileInput") inputEl: ElementRef;
  constructor(
    private toastr: ToastrService,
    private diamondsSerivse: DiamondsService
  ) {}

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
        ({result_text}) => {
          console.log(result_text);
          this.success = result_text;
          this.showSuccess();
        },
        err => {
          console.log(err);
          this.error = err.error;
          this.showError();
        }
      );
    }
  }
  showSuccess() {
    this.toastr.success(`${this.success}`, "Success!", {
      timeOut: 3000
    });
  }
  showError() {
    this.toastr.error(`${this.error}`, "Error!", {
      timeOut: 3000
    });
  }
}
