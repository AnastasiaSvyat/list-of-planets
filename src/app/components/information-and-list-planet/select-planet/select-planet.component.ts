import { Inject } from '@angular/core';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MainService } from 'src/app/services/main.service';
import { Planet } from 'src/app/shared/planet';
import { Resident } from 'src/app/shared/resident';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

interface DialogData {
  planet: Planet
}

@Component({
  selector: 'app-select-planet',
  templateUrl: './select-planet.component.html',
  styleUrls: ['./select-planet.component.css']
})

export class SelectPlanetComponent implements OnInit, OnDestroy {

  residentsList: Resident[] = [];
  loading: boolean = true;

  private unsubscribe$ = new Subject<void>();

  constructor(
    public dialogRef: MatDialogRef<SelectPlanetComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private mainService: MainService
  ) { }

  public dataSource: MatTableDataSource<Resident> = new MatTableDataSource();

  ngOnInit(): void {
    if (this.data.planet.residents.length) {
      this.getResidentsList();
    } else {
      this.loading = false;
    }
  }

  getResidentsList() {
    this.mainService.getResidentsList(this.data.planet.residents)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((res) => {
        this.residentsList = res;
        this.loading = false;
      });
  }

  closeBtn() {
    this.dialogRef.close();
  }

  public ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
