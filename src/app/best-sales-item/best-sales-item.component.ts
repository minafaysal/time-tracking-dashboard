import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/services/api.service';
import { takeUntil } from 'rxjs';
import { ComponentBase } from '../shared/base/common.base';
import { bestSellerItem } from '../shared/models/common.models';

@Component({
  selector: 'app-best-sales-item',
  templateUrl: './best-sales-item.component.html',
  styleUrls: ['./best-sales-item.component.scss'],
})
export class BestSalesItemComponent extends ComponentBase implements OnInit {
  bestSeller: bestSellerItem[] = [];
  isLoading: boolean = true;
  constructor(private apiService: ApiService) {
    super();
  }
  ngOnInit(): void {
    this.apiService
      .getBestSelling()
      .pipe(takeUntil(this.destroy$))
      .subscribe((res) => {
        this.bestSeller = res;
        this.isLoading = false;
      });
  }

  getRandomColor(): string {
    const colors = ['#FF8B64', '#55C2E6', '#FF5E7D', '#4BCF82', '#7335D2'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }
}
