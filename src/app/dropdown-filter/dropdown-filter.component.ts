import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown-filter',
  templateUrl: './dropdown-filter.component.html',
  styleUrls: ['./dropdown-filter.component.scss'],
})
export class DropdownFilterComponent implements OnInit {
  cities = [
    {
      id: '1',
      name: 'Mumbai',
      state: 'Maharashtra',
    },
    {
      id: '2',
      name: 'Delhi',
      state: 'Delhi',
    },
    {
      id: '3',
      name: 'Bengaluru',
      state: 'Karnataka',
    },
    {
      id: '4',
      name: 'Pune',
      state: 'Maharashtra',
    }
  ];
  selectedCity: any;

  ngOnInit(): void {}
  customSearchFn(term: string, item: any) {
    item.name = item.name.replace(',', '');
    term = term.toLocaleLowerCase();
    return item.name.toLocaleLowerCase().indexOf(term) > -1;
  }
}
