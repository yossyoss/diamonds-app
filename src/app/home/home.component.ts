import { Component, OnInit } from "@angular/core";
import { DiamondsService } from "../diamonds.service";
import { ToastrService } from "ngx-toastr";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  videoid: String;
  error: String;
  success: String;
  showVideo: Boolean = false;
  video: {};
  constructor(
    private toastr: ToastrService,
    private diamondsService: DiamondsService
  ) {}
  public loading = false;
  ngOnInit() {}

  btnClicked() {
    this.loading = true;
    this.diamondsService.getVideoByVideoId(this.videoid).subscribe(
      res => {
        this.loading = false;
        this.showVideo = true;
        this.video = res;
      },
      err => {
        console.log(err);        
        this.loading = false;
        this.showVideo = false;
        if (err.status === 404 ) {
          this.error = "Jewelry not found!";
        } else {
          this.error = "Something went wrong! It seems like the server is down";
        } 
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
    this.toastr.error(`${this.error}`, "Error!", {
      timeOut: 3000
    });
  }
}
