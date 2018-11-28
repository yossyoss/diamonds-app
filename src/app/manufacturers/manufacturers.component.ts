import { Component, OnInit } from "@angular/core";
import { DiamondsService } from "../diamonds.service";
import { ToastrService } from "ngx-toastr";
@Component({
  selector: "app-manufacturers",
  templateUrl: "./manufacturers.component.html",
  styleUrls: ["./manufacturers.component.scss"]
})
export class ManufacturersComponent implements OnInit {
  manufacturers: any;
  videosList: any = [];
  public loading = false;
  error: String;
  success: String;
  showVideos: Boolean = false;
  constructor(
    private toastr: ToastrService,
    private diamondsService: DiamondsService
  ) {}

  ngOnInit() {
    this.loading = true;
    this.diamondsService.getManufacturers().subscribe(
      res => {
        this.loading = false;
        this.manufacturers = res;
      },
      err => {
        this.loading = false;
        this.error = "It seems like the server is down";
        this.showError();
      }
    );
  }
  getManufacture(id) {
    this.loading = true;
    this.diamondsService.getVideoByManufacturerId(id).subscribe(
      res => {
        this.loading = false;
        this.showVideos = true;
        this.videosList = res;
      },
      err => {
        this.loading = false;
        this.showVideos = false;
        this.error = err.error;
        this.showError();
      }
    );
  }
  showSuccess() {
    this.toastr.success(`${this.success}`, "Success!", {
      timeOut: 3000
    });
  }
  showError() {
    this.toastr.error(`${this.error}`, "Something went wrong!", {
      timeOut: 3000
    });
  }
}
