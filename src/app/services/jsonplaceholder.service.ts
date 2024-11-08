import { Injectable } from "@angular/core";
import { catchError, Observable, of } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class JsonplaceholderService {
  private environment: { jsonplaceholderUrl: string } = environment;

  constructor(private http: HttpClient) {
  }

  public getPosts(): Observable<any> {
    return this.http
      .get(`${this.environment.jsonplaceholderUrl}posts`)
      .pipe(catchError(this.handleError<any>()));
  }

  private handleError<T>() {
    return (error: any): Observable<any> => {
      const errorBody: { error: boolean, message: string } = {
        error: true,
        message: '',
      }

      if (error.status === 0) {
        errorBody.message = 'something bad happened, please try again later.';
      } else {
        errorBody.message = Array.isArray(error.error.message)
          ? error.error.message[0]
          : error.error.message;
      }

      return of(errorBody);
    };
  }
}
