import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {

  @Input() label: string = "";
  @Input() placeholder: string = "";
  @Input() type: string = "text";

  @Output() eventChange: EventEmitter<string> = new EventEmitter<string>();

  content: string = "";

  emitirContent(){
    this.eventChange.emit(this.content);
    
  }

}
