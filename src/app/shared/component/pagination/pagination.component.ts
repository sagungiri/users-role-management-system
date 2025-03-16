import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  Output,
  EventEmitter,
  SimpleChanges
} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
  imports: [CommonModule, FormsModule]
})
export class PaginationComponent {
  @Output() changePage = new EventEmitter<any>(true);

  @Input() pageSize: number = 10;
  @Input() maxPages: number = 5;
  @Input() count: number = 0;
  @Input() skip: number = 0;
  @Input() currentPageNumber: number = 1;

  pager: any = {};
  totalPageCount: number = 0;

  constructor() {}

  ngOnInit() {
    this.pageSize = Math.max(this.pageSize, 1);
    this.maxPages = Math.max(this.maxPages, 1);
    this.currentPageNumber = this.currentPageNumber || 1;
    this.pager = this.paginate(
      this.count,
      this.currentPageNumber,
      this.pageSize,
      this.maxPages,
      this.skip
    );
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['count'] || changes['currentPageNumber'] || changes['skip']) {
      this.totalPageCount = Math.ceil(this.count / this.pageSize);
      this.pager = this.paginate(
        this.count,
        this.currentPageNumber,
        this.pageSize,
        this.maxPages,
        this.skip
      );
    }
  }

  public setPage(page: number) {
    if (
      !page ||
      page < 1 ||
      page > this.totalPageCount ||
      this.pager.currentPage === page
    ) {
      return; // Prevent invalid page navigation
    }
    this.pager = this.paginate(
      this.count,
      page,
      this.pageSize,
      this.maxPages,
      this.skip
    );
    this.changePage.emit(this.pager);
  }

  public setPageSize(pageSize: number, page: number) {
    this.pageSize = pageSize;
    this.pager = this.paginate(
      this.count,
      page,
      this.pageSize,
      this.maxPages,
      this.skip
    );
    this.changePage.emit(this.pager);
  }

  paginate(
    totalItems: number,
    currentPage: number = 1,
    pageSize: number = 10,
    maxPages: number = 5,
    skip: number = 0
  ) {
    const totalPages = Math.ceil(totalItems / pageSize);
    if (currentPage < 1) {
      currentPage = 1;
    } else if (currentPage > totalPages) {
      currentPage = totalPages;
    }

    let startPage: number, endPage: number;
    if (totalPages <= maxPages) {
      startPage = 1;
      endPage = totalPages;
    } else {
      const maxPagesBeforeCurrentPage = Math.floor(maxPages / 2);
      const maxPagesAfterCurrentPage = Math.ceil(maxPages / 2) - 1;
      if (currentPage <= maxPagesBeforeCurrentPage) {
        startPage = 1;
        endPage = maxPages;
      } else if (currentPage + maxPagesAfterCurrentPage >= totalPages) {
        startPage = totalPages - maxPages + 1;
        endPage = totalPages;
      } else {
        startPage = currentPage - maxPagesBeforeCurrentPage;
        endPage = currentPage + maxPagesAfterCurrentPage;
      }
    }

    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
    const pages = Array.from(Array(endPage + 1 - startPage).keys()).map(
      i => startPage + i
    );

    this.totalPageCount = totalPages;

    return {
      totalItems,
      currentPage,
      pageSize,
      totalPages,
      startPage,
      endPage,
      startIndex,
      endIndex,
      pages,
      skip: (currentPage - 1) * pageSize
    };
  }
}
