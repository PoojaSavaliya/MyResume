import { Component } from '@angular/core';
import { portfolioDetail } from './portfolio-detail';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent {
  filteredPortfolio = portfolioDetail;
  portfolioFilters = ['All', 'Design', 'Development', 'Marketing'];
  activeFilter = 'All';

  ngOnInit() {
    this.filterPortfolioItems('All');
  }

  onFilterClick(filter: string) {
    this.activeFilter = filter;
    this.filterPortfolioItems(filter);
  }

  private filterPortfolioItems(filter: string) {
    this.filteredPortfolio =
      filter === 'All'
        ? portfolioDetail
        : portfolioDetail.filter(
            (item) => item.category.toLowerCase() === filter.toLowerCase()
          );
  }
}
