import { Component, OnInit } from "@angular/core";
import { DiamondsService } from "../diamonds.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-customers",
  templateUrl: "./customers.component.html",
  styleUrls: ["./customers.component.scss"]
})
export class CustomersComponent implements OnInit {
  model: any = {};
  error: String;
  success: String;
  manufacturers: any;
  customersList: any = [
    {
      name: "tal",
      email: "tal@dsi-usa.com",
      phone: "+1-235-6718444",
      barcode: "7290016094954",
      videoUrl:
        "https://s3.amazonaws.com/ttc-diamonds/Helzberg/7290016094954.mp4"
    },
    {
      name: "tal",
      email: "tal@dsi-usa.com",
      phone: "+1-235-6718444",
      barcode: "7290016094954",
      videoUrl:
        "https://s3.amazonaws.com/ttc-diamonds/Helzberg/7290016094954.mp4"
    }
  ];
  public loading = false;
  public showCustomers: Boolean = true;
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
        this.error = "It seems like the server is down";
        this.showError();
      }
    );
  }
  getManufacture(id) {
    this.loading = true;
    this.diamondsService.getCustomersByManufacturer(id).subscribe(
      res => {
        this.loading = false;
        this.showCustomers = true;
        this.customersList = res;
      },
      err => {
        // this.loading = false;
        // this.showCustomers = false;
        // this.error = err.error;
        // this.showError();
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
