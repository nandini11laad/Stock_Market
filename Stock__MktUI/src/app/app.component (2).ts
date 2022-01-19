import { Component, Inject } from '@angular/core';
import { NgbCollapseModule } from '../../node_modules/bootstrap';
import { TransactionServiceEnv } from 'src/environments/TransactionService';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'StockMarket';
  isShown:boolean=false;

  constructor(@Inject(TransactionServiceEnv) private service: TransactionServiceEnv){}
  ngOnInit(){
    this.service.getAllTransaction()
  }
}

