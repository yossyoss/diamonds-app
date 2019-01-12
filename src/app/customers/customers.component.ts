import { Component, OnInit } from "@angular/core";
import { DiamondsService } from "../diamonds.service";
import { ToastrService } from "ngx-toastr";
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-customers",
  templateUrl: "./customers.component.html",
  styleUrls: ["./customers.component.scss"]
})
export class CustomersComponent implements OnInit {
  model: any = {};
  error: String;
  success: String;
  id: String;
  manufacturers: any;
  manufacturer: any;
  customersList: any = [
    // {
    //   name: "tal",
    //   email: "tal@dsi-usa.com",
    //   phone: "+1-235-6718444",
    //   barcode: "7290016094954",
    //   videoUrl:
    //     "https://s3.amazonaws.com/ttc-diamonds/Helzberg/7290016094954.mp4"
    // },
    // {
    //   name: "Uri",
    //   email: "Uri@dsi-usa.com",
    //   phone: "+1-111-3454812",
    //   barcode: "1212316094321",
    //   videoUrl:
    //     "https://s3.amazonaws.com/ttc-diamonds/Helzberg/7290016094954.mp4"
    // }
  ];
  public loading = false;
  public showCustomers: Boolean = true;
  constructor(
    private toastr: ToastrService,
    private diamondsService: DiamondsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("manufacturerId");
    console.log(this.id);
    this.loading = true;
    this.diamondsService.getCustomersByManufacturer(this.id).subscribe(
      res => {
        this.loading = false;
        this.showCustomers = true;
        this.customersList = res;
        this.diamondsService.getManufacturers().subscribe(
          res => {
            this.loading = false;

            this.manufacturers = res;
            this.manufacturer = this.manufacturers.find(manufacture => {
              return manufacture.id == this.id;
            });
          },
          err => {
            this.loading = false;
            this.error = "It seems like the server is down";
            this.showError();
          }
        );
      },
      err => {
        this.loading = false;
        this.showCustomers = false;
        this.error = err.error;
        this.showError();
      }
    );
  }
  getManufacture() {
    this.loading = true;
    this.diamondsService.getCustomersByManufacturer(this.id).subscribe(
      res => {
        this.loading = false;
        this.showCustomers = true;
        this.customersList = res;
      },
      err => {
        this.loading = false;
        this.showCustomers = false;
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
