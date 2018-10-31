import { Component, OnInit, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})

export class CockpitComponent implements OnInit {
 @Output() serverCreated	  = new EventEmitter<{serverName: string, serverContent: string}>();
 @Output() bluePrintCreated   = new EventEmitter<{serverName: string, serverContent: string}>();
  // newServerName = '';
  // newServerContent = '';	
  @ViewChild('serveContentInput') serveContentInput: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onAddServer(nameInput: HTMLinputElement) {
    // console.log(this.serverNameInput);

   this.serverCreated.emit({
   	serverName:    nameInput.value, 
   	serverContent: this.serveContentInput.nativeElement.value
   });
  }

  onAddBlueprint(nameInput: HTMLinputElement) {
   this.bluePrintCreated.emit({
   	serverName:    nameInput.value, 
   	serverContent: this.serveContentInput.nativeElement.value
   });
  }

}
