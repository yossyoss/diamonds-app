import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, Subject } from "rxjs";
@Injectable({
  providedIn: "root"
})
export class DiamondsService {
  baseUrl = "http://localhost:8080/diamonds";

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
  uploadVideo(jewelry, video) {
    let headers = new HttpHeaders({
      "Content-Type": "multipart/form-data"
    });
    let jewelry2 = "asdasd"; //JSON.stringify(jewelry);
    let video2 = JSON.stringify(video);
    return this.http.post(
      `${this.baseUrl}/addJewelry?jewelryDto=${jewelry2}&file=${video2}`,
      { headers }
    );
  }
}
