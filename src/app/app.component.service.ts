import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: "root"
})

export class AppComponentService {

    constructor(private httpClient: HttpClient) {}

    getDados() {
        let url="https://s3.amazonaws.com/orama-media/json/fund_detail_full.json?limit=1000&offset=0&serializer=fund_detail_full";
        return this.httpClient.get<any>(url)
    }

}