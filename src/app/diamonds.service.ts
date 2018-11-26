import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpUrlEncodingCodec
} from "@angular/common/http";
import { Observable, Subject } from "rxjs";
@Injectable({
  providedIn: "root"
})
export class DiamondsService {
  baseUrl = "http://localhost:8081/diamonds";

  constructor(private http: HttpClient) {}

  getVideoByVideoId(diamondId) {
    return this.http.get(`${this.baseUrl}/findJewelry?barcode=${diamondId}`);
  }
  getManufacturers() {
    return this.http.get(`${this.baseUrl}/manufacturers`);
  }
  getVideoByManufacturerId(manufacturerId) {
    return this.http.get(
      `${
        this.baseUrl
      }/findJewelryByManufacturer?manufacturerId=${manufacturerId}`
    );
  }
  uploadVideo(jewelry, file) {
    console.log("uploading");

    let headers = new HttpHeaders();
    headers.append("Content-Type", "multipart/form-data");
    let jewelry2 = JSON.stringify(jewelry);
    jewelry2 = encodeURI(jewelry2);
    return this.http.post(
      `${this.baseUrl}/addJewelry?jewelryDto=${jewelry2}`,
      file,
      { headers }
    );
  }
}
