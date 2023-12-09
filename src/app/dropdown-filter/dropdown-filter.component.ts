import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown-filter',
  templateUrl: './dropdown-filter.component.html',
  styleUrls: ['./dropdown-filter.component.scss']
})
export class DropdownFilterComponent implements OnInit {
  cities = [
    {id: 1, name: 'MA, Boston'},
    {id: 2, name: 'FL, Miami'},
    {id: 3, name: 'NY, New York', disabled: true},
    {id: 4, name: 'CA, Los Angeles'},
    {id: 5, name: 'TX, Dallas'}
];
selectedCity:any;

ngOnInit(): void {
  
}
 customSearchFn(term: string, item:any) {
    item.name = item.name.replace(',','');
    term = term.toLocaleLowerCase();
    return item.name.toLocaleLowerCase().indexOf(term) > -1;
}
}
