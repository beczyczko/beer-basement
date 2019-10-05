import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, ViewChild, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy, OnInit {
    mobileQuery: MediaQueryList;

    @ViewChild(MatSidenav, { static: true }) sideNav: MatSidenav;

    private mobileQueryListener: (any) => void;

    constructor(changeDetectorRef: ChangeDetectorRef, private media: MediaMatcher) {
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this.mobileQueryListener = (event) => {
            changeDetectorRef.detectChanges();
            this.sideNav.toggle(!event.matches);
        };
        this.mobileQuery.addListener(this.mobileQueryListener);
    }

    ngOnInit(): void {
        const isMobile = this.media.matchMedia('(max-width: 600px)').matches;
        this.sideNav.toggle(!isMobile);
    }

    ngOnDestroy(): void {
        this.mobileQuery.removeListener(this.mobileQueryListener);
    }
}
