import { Component, computed, inject, signal } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { TravelConfig, Travels } from "@core/config/travels";
import { ImageViewerComponent } from "@features/image-viewer/image-viewer.component";

@Component({
    selector: 'page-travel',
    templateUrl: 'travel.component.html',
    styleUrl: 'travel.component.scss',
    imports: [ImageViewerComponent]
})
export class TravelPage {
    private route = inject(ActivatedRoute);

    currentTravel = signal<TravelConfig | undefined>(undefined);

    isViewerOpen = signal<boolean>(false);
    activeImageIdx = signal<number>(0);
    viewerImages = computed(() => {
        return this.currentTravel()?.content.map((part) => {
            if (part.images) {
                return part.images.map((image) => ({src: image, author: ""}));
            }

            return null;
        })
        .filter((part) => part != null).flat() || [];
    })

    constructor() {
        this.route.paramMap.subscribe(params => {
            const url = params.get('url');

            const travel = Travels.find(p => p.path === url);

            this.currentTravel.set(travel);
        });
    }

    openViewer(idx: number) {
        this.activeImageIdx.set(idx);
        this.isViewerOpen.set(true);
    }

    close() {
        this.isViewerOpen.set(false);
    }
}