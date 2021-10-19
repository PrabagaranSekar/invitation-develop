import { Component, OnInit, ViewChildren } from '@angular/core';
import { NzCarouselFlipStrategy, NzCarouselTransformNoLoopStrategy, NZ_CAROUSEL_CUSTOM_STRATEGIES } from 'ng-zorro-antd/carousel';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [
    {
      provide: NZ_CAROUSEL_CUSTOM_STRATEGIES,
      useValue: [
        { name: 'transform-no-loop', strategy: NzCarouselTransformNoLoopStrategy },
        { name: 'flip', strategy: NzCarouselFlipStrategy }
      ]
    }
  ]
})
export class HomeComponent implements OnInit {
  @ViewChildren('homeComponent') homeComponent: { first: { elementRef: { nativeElement: { querySelector: (arg0: string) => { (): any; new(): any; children: { setAttribute: (arg0: string, arg1: string) => void; }[]; }; }; }; }; };

  isCollapsed: boolean = false;

  private subscription: Subscription;

  public dateNow = new Date();
  public dDay = new Date('Oct 17 2021 00:00:00');
  milliSecondsInASecond = 1000;
  hoursInADay = 24;
  minutesInAnHour = 60;
  SecondsInAMinute = 60;

  public timeDifference;
  public secondsToDday;
  public minutesToDday;
  public hoursToDday;
  public daysToDday;


  private getTimeDifference() {
    this.timeDifference = this.dDay.getTime() - new Date().getTime();
    this.allocateTimeUnits(this.timeDifference);
  }

  private allocateTimeUnits(timeDifference) {
    this.secondsToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond) % this.SecondsInAMinute);
    this.minutesToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour) % this.SecondsInAMinute);
    this.hoursToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute) % this.hoursInADay);
    this.daysToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute * this.hoursInADay));
  }
  constructor() { }

  ngOnInit(): void {
    this.subscription = interval(1000)
      .subscribe(x => { this.getTimeDifference(); });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngAfterViewInit() {
    this.homeComponent.first.elementRef.nativeElement.querySelector('nz-sider').children[1]
      .setAttribute("Style", "top: 12px;left: 8px;position: fixed;border-radius: 8px");
  }

  onClickSideMenu(event: any, compone: any) {

  }

  onClickSideMenuButton() {

  }


  onSectionChange(sectionId: string) {
  }

  scrollTo(section: string) {
    document.querySelector('#' + section)
      .scrollIntoView();
  }

}
