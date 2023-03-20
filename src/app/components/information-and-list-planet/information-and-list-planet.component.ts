import { Component, OnInit, OnDestroy } from '@angular/core';
import { Planet } from 'src/app/shared/planet';
import { MainService } from '../../services/main.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatOptionSelectionChange } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { Overlay } from '@angular/cdk/overlay';
import { SelectPlanetComponent } from './select-planet/select-planet.component';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-information-and-list-planet',
  templateUrl: './information-and-list-planet.component.html',
  styleUrls: ['./information-and-list-planet.component.css']
})
export class InformationAndListPlanetComponent implements OnInit, OnDestroy {

  planetsList: Planet[] = [];
  loadingplanetsList: boolean = true;

  private unsubscribe$ = new Subject<void>();

  public dataSource: MatTableDataSource<Planet> = new MatTableDataSource();

  constructor(
    private mainService: MainService,
    private dialog: MatDialog,
    private overlay: Overlay
  ) { }

  ngOnInit(): void {
    this.getPlanets();
  }

  getPlanets() {
    this.mainService.getPlanets()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((res) => {
        this.planetsList = res;
        this.loadingplanetsList = false;
      })
  }

  selectPlanet(event: MatOptionSelectionChange, planet: Planet) {
    if (event.isUserInput) {
      this.dataSource = new MatTableDataSource([planet])
    }
  }

  showInfoAboutPlanet(planet: Planet) {
    const dialogRef = this.dialog.open(SelectPlanetComponent, {
      width: '600px',
      scrollStrategy: this.overlay.scrollStrategies.reposition(),
      minHeight: '125px',
      height: 'auto',
      disableClose: true,
      data: { planet: planet }
    });
  }

  public ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
