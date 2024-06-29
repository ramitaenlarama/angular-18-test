import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [NgFor],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

}
