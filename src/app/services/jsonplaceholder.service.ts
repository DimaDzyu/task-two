import { Injectable } from "@angular/core";
import { BehaviorSubject, catchError, finalize, Observable, of } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Post } from "../post/post.interface";

@Injectable({
  providedIn: 'root'
})
export class JsonplaceholderService {
  private environment: { jsonplaceholderUrl: string } = environment;
  private loading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  loading$: Observable<boolean> = this.loading.asObservable();
  private posts: BehaviorSubject<Post[]> = new BehaviorSubject<Post[]>([]);
  posts$: Observable<Post[]> = this.posts.asObservable();

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {
  }

  public loadPosts(): void {
    this.loading.next(true);
    this.http
      .get(`${this.environment.jsonplaceholderUrl}posts`)
      .pipe(catchError(this.handleError<any>()))
      .pipe(
        finalize((): void => {
            setTimeout((): void => {
              this.loading.next(false);
            }, 500);
          }
        ))
      .subscribe(
        (res): void => {
          if (res.error) {
            this.showError(res.message);
          } else {
            this.posts.next(res);
          }
        });
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
        errorBody.message = error.message;
      }

      return of(errorBody);
    };
  }

  private showError(message: string): void {
    this.snackBar.open(
      `Error: ${message}`,
      '✕',
      {
        duration: 5000,
        verticalPosition: 'top',
        panelClass: ['snackbar-error']
      });
  }
}
