import { Component, OnInit } from '@angular/core';
import { BoredLogicServiceService } from '../../service/bored-logic-service.service';

@Component({
  selector: 'bored-manager',
  templateUrl: './bored-manager.component.html',
  styleUrls: ['./bored-manager.component.css']
})
export class BoredManagerComponent implements OnInit {


  constructor(public boredLogicService:BoredLogicServiceService) { }

  ngOnInit(): void {
  }

  

}
