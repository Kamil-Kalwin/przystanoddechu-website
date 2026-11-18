import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'svg-icon',
  templateUrl: 'svg-icon.component.html',
  styleUrls: ['svg-icon.component.scss']
})
export class SvgIconComponent implements OnInit {
    @Input() name!: string; // Nazwa pliku SVG bez rozszerzenia
    @Input() size: string = '24px'; // Opcjonalnie: szerokość ikony

    svgPath: string = '';

    ngOnInit(): void {
        this.svgPath = `assets/icons/${this.name}.svg`;
    }
}
