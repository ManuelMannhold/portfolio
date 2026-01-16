import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { PortfolioService } from './portfolio.service';
import { Project, ProjectType } from './project.model';

type FilterType = 'all' | ProjectType;

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss', './media.scss']
})
export class PortfolioComponent implements OnInit {
  private translateService = inject(TranslateService);
  private portfolioService = inject(PortfolioService);

  activeFilter: FilterType = 'all';
  filteredProjects: Project[] = [];
  private allProjects: Project[] = [];

  ngOnInit(): void {
    this.allProjects = this.portfolioService.getProjects();
    this.applyFilter();
  }

  setFilter(filter: FilterType): void {
    this.activeFilter = filter;
    this.applyFilter();
  }

  private applyFilter(): void {
    if (this.activeFilter === 'all') {
      this.filteredProjects = this.allProjects.slice();
    } else {
      this.filteredProjects = this.allProjects.filter(
        (project) => project.type === this.activeFilter
      );
    }
  }
}
