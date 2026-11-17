import { CommonModule } from '@angular/common';
import {
    AfterViewInit,
    ChangeDetectorRef,
    Component,
    ContentChild,
    ElementRef,
    HostListener,
    inject,
    Input,
    OnDestroy,
    signal,
    TemplateRef,
    ViewChild
} from '@angular/core';

@Component({
    selector: 'carousel',
    templateUrl: './carousel.component.html',
    styleUrl: './carousel.component.scss',
    imports: [CommonModule],
})
export class CarouselComponent<T> implements AfterViewInit, OnDestroy {
    private readonly cdr = inject(ChangeDetectorRef);

    @Input() items: T[] = [];

    @ContentChild(TemplateRef) cardTemplate!: TemplateRef<{
        $implicit: T;
        index: number;
    }>;

    @ViewChild('track') track!: ElementRef<HTMLDivElement>;
    @ViewChild('firstSlide') firstSlide!: ElementRef<HTMLDivElement>;

    slideNumber = signal<number>(3);

    currentIndex = signal<number>(0);
    offset = signal<number>(0);

    transitionEnabled = signal<boolean>(true);

    private resizeObserver?: ResizeObserver;

    get trackItems(): { item: T; index: number }[] {
        if (!this.items.length) return [];

        return Array.from({ length: 5 }, (_, i) => {
            const index = (
                (this.currentIndex() + i - 1) % this.items.length
                + this.items.length
            ) % this.items.length;

            return {
                item: this.items[index],
                index
            };
        });
    }

    @HostListener('window:resize', ['$event'])
    onResize(event: Event) {
        let count = 1;

        if (window.innerWidth >= 1250) {
            count = 3;
        } else if (window.innerWidth >= 850) {
            count = 2;
        }

        this.slideNumber.set(count);

    }

    ngAfterViewInit(): void {
        this.resizeObserver = new ResizeObserver(() => {
            requestAnimationFrame(() => {
                this.offset.set(this.getStepSize());
            });
        });

        this.resizeObserver.observe(this.track.nativeElement);

        this.offset.set(this.getStepSize());
    }

    ngOnDestroy(): void {
        this.resizeObserver?.disconnect();
    }

    private getStepSize(): number {
        if (!this.firstSlide || !this.track) return 0;

        const slideWidth = this.firstSlide.nativeElement.getBoundingClientRect().width;
        const gap = parseFloat(getComputedStyle(this.track.nativeElement).gap) || 0;

        return slideWidth + gap;
    }

    next(): void {
        if (this.items.length <= 1) return;

        this.offset.set(this.getStepSize() * 2);
    }

    previous(): void {
        if (this.items.length <= 1) return;

        this.offset.set(0);
    }

    onTransitionEnd(event: TransitionEvent): void {
        if (
            event.target !== this.track.nativeElement ||
            event.propertyName !== 'transform'
        ) return;

        this.transitionEnabled.set(false);

        if (this.offset() === 0) {
            this.currentIndex.update((idx) => (idx - 1 + this.items.length) % this.items.length);
        } else {
            this.currentIndex.update((idx) => (idx + 1) % this.items.length);
        }

        this.offset.set(this.getStepSize());

        this.cdr.detectChanges();

        requestAnimationFrame(() => {
            this.transitionEnabled.set(true);
        });
    }
}