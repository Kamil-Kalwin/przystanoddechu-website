import { Component, signal } from '@angular/core';
import { Gallery } from '@core/config/gallery';
import { ImageViewerComponent } from '@features/image-viewer/image-viewer.component';

@Component({
    selector: 'page-gallery',
    templateUrl: './gallery.component.html',
    styleUrl: './gallery.component.scss',
    imports: [ImageViewerComponent],
})
export class GalleryPage {
    readonly GalleryImages = Gallery;

    readonly imageViewerImages = Gallery.map((img) => ({
        src: img.image,
        author: img.author
    }))

    isViewerOpen = signal<boolean>(false);
    activeIdx = signal<number>(0);

    onClose() {
        this.isViewerOpen.set(false);
    }

    openViewer(idx: number) {
        this.isViewerOpen.set(true);
        this.activeIdx.set(idx);
    }
}
