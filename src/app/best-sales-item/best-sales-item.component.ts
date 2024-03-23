import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/services/api.service';
import { takeUntil } from 'rxjs';
import { ComponentBase } from '../shared/base/common.base';
import { bestSellerItem } from '../shared/models/common.models';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-best-sales-item',
  templateUrl: './best-sales-item.component.html',
  styleUrls: ['./best-sales-item.component.scss'],
})
export class BestSalesItemComponent extends ComponentBase implements OnInit {
  bestSeller: bestSellerItem[] = [];
  isLoading: boolean = true;
  itemColors: string[] = [];
  constructor(private apiService: ApiService, private toastr: ToastrService) {
    super();
  }
  ngOnInit(): void {
    this.apiService
      .getBestSelling()
      .pipe(takeUntil(this.destroy$))
      .subscribe(
        (res) => {
          this.bestSeller = res;
          this.isLoading = false;
          this.toastr.success('API call successful!', 'Success');
          this.generateItemColors();
        },
        (error) => {
          console.error('API call error:', error);
          this.toastr.error('API call failed!', 'Error');
          this.isLoading = false;
        }
      );
  }

  generateItemColors(): void {
    const colors = ['#FF8B64', '#55C2E6', '#FF5E7D', '#4BCF82', '#7335D2'];
    this.itemColors = this.bestSeller.map(
      (_, index) => colors[index % colors.length]
    );
  }
}
