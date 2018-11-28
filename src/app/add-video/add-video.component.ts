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
  manufacturers: any;
  public loading = false;
  @ViewChild("fileInput") inputEl: ElementRef;
  constructor(
    private toastr: ToastrService,
    private diamondsService: DiamondsService
  ) {}

  ngOnInit() {
    this.loading = true;
    this.diamondsService.getManufacturers().subscribe(
      res => {
        this.loading = false;
        console.log(res);
        
        this.manufacturers = res;
      },
      err => {
        this.loading = false;
        this.error = err.error;
          this.showError();
      }
    );
  }
  addVideo() {
    console.log(this.model);
    this.upload();
  }
  setManufacture(id) {
    this.model.manufacture = id;
  }
  upload() {
    let inputEl: HTMLInputElement = this.inputEl.nativeElement;
    let fileCount: number = inputEl.files.length;
    let formData = new FormData();
    if (fileCount > 0) {
      formData.append("file", inputEl.files.item(0));
      this.loading = true;
      this.diamondsService.uploadVideo(this.model, formData).subscribe(
        ({ result_text }: any) => {
          this.loading = false;
          this.success = result_text;
          this.showSuccess();
        },
        err => {
          this.loading = false;
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
