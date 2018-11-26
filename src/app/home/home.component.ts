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
  video: {};
  constructor( private toastr: ToastrService,private diamondsService: DiamondsService) {}
  public loading = false;
  ngOnInit() {}

  btnClicked() {
    this.loading = true;
    this.diamondsService.getVideoByVideoId(this.videoid).subscribe(
      res => {
        this.loading = false;
        console.log(res);
        this.video = res;
      },
      err => {
        this.loading = false;
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
    this.toastr.error("Something is wrong!", "Error!", {
      timeOut: 3000
    });
}
