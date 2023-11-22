import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  AllCategoryCriteria,
  Category,
  CategoryCriteria,
  Expense,
  ExpenseUpsertDto,
  Page,
  PagingCriteria
} from '../shared/domain';
import { environment } from '../../environments/environment';


getExpenses = (pagingCriteria: PagingCriteria): Observable<Page<Expense>> =>
  this.httpClient.get<Page<Expense>>(this.apiUrl, { params: new HttpParams({ fromObject: { ...pagingCriteria } }) });
