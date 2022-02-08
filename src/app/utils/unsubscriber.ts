import { Component, OnDestroy } from "@angular/core";
import { Subject } from "rxjs";

@Component({
    template: ''
})

export class UnSubscriber implements OnDestroy {

    public unSubscriber$ = new Subject();

    public ngOnDestroy(): void {
        this.unSubscriber$.next(1);
        this.unSubscriber$.complete()
    }
}