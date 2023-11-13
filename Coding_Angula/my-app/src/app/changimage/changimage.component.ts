import { Component } from '@angular/core';

@Component({
  selector: 'app-changimage',
  templateUrl: './changimage.component.html',
  styleUrls: ['./changimage.component.css']
})
export class ChangimageComponen {
  public imageIndex:number=-2
  processChangeimage(index:number)
  {
    this.imageIndex=index
  }
}
