import { Injectable } from '@angular/core';
import { SelectContainerDirective } from './select-container.directive';

@Injectable({
  providedIn: 'root'
})
export class SelectContainerService {
  private container: SelectContainerDirective | null = null;
  
  setContainer(container: SelectContainerDirective) {
    this.container = container;
  }

  getContainer() {
    return this.container;
  }

}
