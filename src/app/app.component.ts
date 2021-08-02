import { Component, ViewChildren, ElementRef, QueryList } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { ResizeEvent } from 'angular-resizable-element';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})


export class AppComponent  {
    @ViewChildren('divs') divs: QueryList<ElementRef>;
    @ViewChildren('outsideDivs') outsideDivs: QueryList<ElementRef>;
   callActivityForm = [{header: 'Call Detail',
                        rows: [
                            [{key: 'Name', label: 'Name',   width: 100 }],
                            [{key: 'Roll no.', label: 'Roll no.',  width: 50},
                                    {key: 'Blood', label: 'Blood', width: 50}],
                            [{key: 'Address', label: 'Address',  width: 100}],
                            [{key: 'Guardian name', label: 'Guardian name', width: 100}]
                        ]
                    }];
  name = 'Angular';

 drop(event: CdkDragDrop<string[]>) {
      moveItemInArray(this.callActivityForm[0].rows, event.previousIndex, event.currentIndex);
  }

  dropHorizon(event: CdkDragDrop<string[]>, i: number) {
      moveItemInArray(this.callActivityForm[0].rows[i], event.previousIndex, event.currentIndex);
  }

  getDivs(rectangle, i, m) {
      //this.divs.forEach((div: ElementRef) => console.log(div.nativeElement.id));
      const field = this.divs.find((div: ElementRef) => div.nativeElement.id === 'div-' + i + '-' + m);
      const field2 = this.outsideDivs.find((div: ElementRef) => div.nativeElement.id === 'outside-div-' + i + '-' + m);
      console.log(field2);
      if (field) {
        field.nativeElement.style.width = `${rectangle.width}px`;
        field.nativeElement.style.height = `${rectangle.height}px`;
      }
      
      if (field2) {
        field2.nativeElement.style.width = `${rectangle.width}px`;
        field2.nativeElement.style.height = `${rectangle.height}px`;    
      }
     
  }

  onResizeEnd(event: ResizeEvent, i, m): void {
      console.log('Element was resized', event);
      this.getDivs(event.rectangle, i, m);      
  }
}
