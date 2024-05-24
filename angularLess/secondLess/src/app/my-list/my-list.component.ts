import { Component,Input } from '@angular/core';
import { Iproduct } from '../models/product';
import { CommonModule, CurrencyPipe,DecimalPipe,UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-my-list',
  standalone: true,
  imports: [CommonModule,CurrencyPipe,DecimalPipe,UpperCasePipe],
  templateUrl: './my-list.component.html',
  styleUrl: './my-list.component.css'
})
export class MyListComponent {
@Input() product:Iproduct
details:boolean=false

}
