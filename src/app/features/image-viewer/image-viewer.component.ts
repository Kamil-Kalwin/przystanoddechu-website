import { Component, computed, effect, input, output, signal } from "@angular/core";

export interface ViewerImage {
    src: string,
    author: string
}

@Component({
    selector: 'image-viewer',
    templateUrl: 'image-viewer.component.html',
    styleUrl: 'image-viewer.component.scss',
    imports: []
})
export class ImageViewerComponent {
    activeIdx = input<number>(0);
    images = input<ViewerImage[]>([]);
    onClose = output();

    activeImage = computed(() => {
        return this.images().at(this.activeImageIdx());
    });

    activeImageIdx = signal<number>(0);

    constructor() {
        effect(() => {
            this.activeImageIdx.set(this.activeIdx());
        })
    }

    next() {
        this.activeImageIdx.update((idx) => (idx + 1) % this.images().length);
    }

    prev() {
        this.activeImageIdx.update((idx) => (idx - 1) < 0 ? this.images().length-1 : idx - 1);
    }

    close() {
        this.onClose.emit();
    }
}