import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  availableIcons = ['user', 'check', 'book', 'search', 'times'];
  sizeClasses = ['1x', '2x', '3x', '4x', '5x'];

  currentIcon = 'user';
  currentSize = '1x';
  fixedWidth = false;
  showBackgroundColor = true;

  constructor() { }

  ngOnInit(): void {
  }

  getCurrentIcon(): string {
    return `fa-${this.currentIcon}`;
  }

  getCurrentSize(): string {
    return `fa-${this.currentSize}`;
  }

  getFixedWidth(): string {
    return (this.fixedWidth ? 'fa-fw' : '');
  }

  getShowBackgroundColor(): string {
    return (this.showBackgroundColor ? 'bg-danger' : '')
  }
}
