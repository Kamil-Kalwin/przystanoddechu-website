import { Component, computed, OnDestroy, OnInit, signal } from '@angular/core';
import { ClientReviews } from '@core/config/reviews';
import { ServicesConfigList, ServicesTypeConfigData, ServiceTypeEnum } from '@core/config/services';
import { CarouselComponent } from '@features/carousel/carousel.component';
import { WordCloudComponent } from '@features/word-cloud/word-cloud.component';

@Component({
    selector: 'page-home',
    templateUrl: 'home.component.html',
    styleUrl: 'home.component.scss',
    imports: [
        WordCloudComponent, CarouselComponent
    ],
})
export class HomePage implements OnInit, OnDestroy {
    readonly ServiceTypes = Object.entries(ServicesTypeConfigData).map((service) => ({serviceType: service[0], ...service[1]}));
 
    readonly keywords: string[] = ['Uważność', 'Oddech', 'Ruch', 'Twórczość', 'Podróże', 'Spotkania'];

    private readonly intervalTime = 7000;
    private intervalId?: ReturnType<typeof setInterval>;

    readonly MainReviews = ClientReviews.filter((review) => review.main);

    private remainingTime = this.intervalTime;
    private timerStartedAt = 0;

    currentReviewId = signal<number>(0);
    showText = signal<boolean>(true);
    progress = signal(0);

    ngOnInit() {
        this.startTimer();
    }

    ngOnDestroy() {
        this.stopTimer();
    }

    currentReview = computed(() => {
        return this.MainReviews.at(this.currentReviewId()) || null;
    })

    startTimer() {
        this.stopTimer();
        this.timerStartedAt = Date.now();

        this.intervalId = setInterval(() => {
            const elapsed = Date.now() - this.timerStartedAt;
            const totalElapsed = this.intervalTime - this.remainingTime + elapsed;

            this.progress.set(Math.min((totalElapsed / this.intervalTime) * 100, 100));

            if (elapsed >= this.remainingTime) {
                this.changeReview((this.currentReviewId() + 1) % this.MainReviews.length);
            }
        }, 30);
    }

    stopTimer() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = undefined;
        }
    }

    pauseTimer() {
        if (!this.intervalId) return;

        const elapsed = Date.now() - this.timerStartedAt;

        this.remainingTime = Math.max(this.remainingTime - elapsed, 0);

        this.stopTimer();
    }

    resumeTimer() {
        if (this.intervalId) return;

        this.startTimer();
    }

    getServicesByType(serviceType: ServiceTypeEnum) {
        return ServicesConfigList.filter((service) => service.serviceType == serviceType);
    }

    changeReview(id: number) {
        if (id === this.currentReviewId()) return;

        this.stopTimer()
        this.showText.set(false);

        setTimeout(() => {
            this.currentReviewId.set(id);
            this.showText.set(true);

            this.remainingTime = this.intervalTime;
            this.progress.set(0);

            this.startTimer();
        }, 200)
    }
}
