import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { IgdbService } from 'src/app/services/igdb.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {
  search: Object;
  private ngUnsubscribe: Subject = new Subject();

  constructor(private igdb: IgdbService) { }

  ngOnInit(): void {
  }

  onSearch(args) {
    this.igdb.getSearch(args.Value)
      .subscribe(
        data => {
          this.search = data;
          console.log(data)
        }
      );
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.unsubscribe();
  }
}
