import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private items: string[];
  constructor() { 
    this.items = ["Raj","Pooja","Manoj","Rajesh","Nitesh","Boby"];
  }

  public getItems(): string[] {
    return this.items;
  }

  public setItems(items: string[]): void {
    this.items = items;
  }

}
