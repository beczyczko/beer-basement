import { Component, OnDestroy, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MatSidenav } from "@angular/material";
import { MediaMatcher } from "@angular/cdk/layout";

@Component({
    selector: 'app-nav-menu',
    templateUrl: './nav-menu.component.html',
    styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent implements OnDestroy, OnInit {
    private readonly mobileMatchQuery = '(max-width: 600px)';

    mobileQuery: MediaQueryList;

    @ViewChild(MatSidenav, { static: true }) sideNav: MatSidenav;

    private mobileQueryListener: (any) => void;

    constructor(changeDetectorRef: ChangeDetectorRef, private media: MediaMatcher) {
        this.mobileQuery = media.matchMedia(this.mobileMatchQuery);
        this.mobileQueryListener = (event) => {
            changeDetectorRef.detectChanges();
            this.sideNav.toggle(!event.matches);
        };
        this.mobileQuery.addListener(this.mobileQueryListener);
    }

    ngOnInit(): void {
        const isMobile = this.media.matchMedia(this.mobileMatchQuery).matches;
        this.sideNav.toggle(!isMobile);
    }

    ngOnDestroy(): void {
        this.mobileQuery.removeListener(this.mobileQueryListener);
    }
}
