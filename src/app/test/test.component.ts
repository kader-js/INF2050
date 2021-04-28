import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { ResultatsService } from '../resultats.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit, AfterViewInit {

  columnsToDisplay = ['localite', 'total', 'enfant', 'adulte', 'aine'];
  dataSource = new MatTableDataSource<ResultatInfo>(this.getAll());
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(private resultatService: ResultatsService) {
  }

  ngOnInit(): void {

  }

  getAll(): any[] {
    return this.resultatService.getAll();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


}

export interface ResultatInfo{
  localite: string;
  total: number;
  enfant: number;
  adulte: number;
  aine: number;
}
