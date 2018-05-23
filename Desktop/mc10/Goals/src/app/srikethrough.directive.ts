import { Directive,ElementRef,Input ,HostListener} from '@angular/core';

@Directive({
  selector: '[appStrikethrough]'
})
export class SrikethroughDirective {


  constructor(private elem:ElementRef){}

  @HostListener("click") onClicks(){
    this.textDeco("line-through")
  }

  @HostListener("dblclick") onDoubleClicks(){
    this.textDeco("None")
  }

  private textDeco(action:string){
    this.elem.nativeElement.style.textDecoration=action;

  }
}
