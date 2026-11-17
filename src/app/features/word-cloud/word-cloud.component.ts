import {
    Component,
    OnChanges,
    OnDestroy,
    OnInit,
    SimpleChanges,
    input,
    signal
} from '@angular/core';

interface WordItem {
    id: number;
    text: string;
    x: number;
    y: number;
    size: number;
    color: string;
    duration: number;
    rotation: number;
}

@Component({
    selector: 'word-cloud',
    templateUrl: 'word-cloud.component.html',
    styleUrl: 'word-cloud.component.scss'
})
export class WordCloudComponent implements OnInit, OnDestroy, OnChanges {
    readonly words = input<string[]>([]);
    readonly maxVisible = input<number>(14);

    readonly minFontSize = input<number>(12);
    readonly maxFontSize = input<number>(32);

    readonly hue = input<number>(210);
    readonly spawnInterval = input<number>(600);

    items = signal<WordItem[]>([]);

    private interval?: ReturnType<typeof setInterval>;
    private timers: ReturnType<typeof setTimeout>[] = [];
    private nextId = 0;
    private initialized = false;

    ngOnInit(): void {
        this.initialized = true;
        this.startAnimation();
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (this.initialized && changes['words']) this.startAnimation();
    }

    ngOnDestroy(): void {
        this.stopAnimation();
    }

    private startAnimation(): void {
        this.stopAnimation();

        if (!this.words().length) return;

        for (let i = 0; i < this.maxVisible(); i++) this.spawnWord();

        this.interval = setInterval(() => this.spawnWord(), this.spawnInterval());
    }

    private spawnWord(): void {
        if (!this.words().length) return;

        if (this.items().length >= this.maxVisible()) return;

        const text = this.words()[Math.floor(Math.random() * this.words().length)];

        const item: WordItem = {
            id: this.nextId++,
            text,
            x: this.random(5, 95),
            y: this.random(8, 92),
            size: this.random(this.minFontSize(), this.maxFontSize()),
            color: `hsl(${this.hue() + this.random(-15, 15)}, ${this.random(35, 75)}%, ${this.random(35, 70)}%)`,
            duration: this.random(6, 10),
            rotation: this.random(-12, 12)
        };

        this.items.update((arr) => [...arr, item]);

        const timer = setTimeout(() => {
            this.items.update(arr => arr.filter(x => x.id !== item.id));
        }, item.duration * 1000);

        this.timers.push(timer);
    }

    private random(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    private stopAnimation(): void {
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = undefined;
        }

        this.timers.forEach(timer => clearTimeout(timer));
        this.timers = [];

        this.items.set([]);
    }
}