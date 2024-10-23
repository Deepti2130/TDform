import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'TDform';
  userMaxFlag : boolean = false;
  @ViewChild('signup') signup! : NgForm;


 contactMode= [
  {mode : "phone", id:1},
  {mode : "email", id:2}
 ]

userObj = {
  "userdetails":{"userName": "DeeptiJadhav",
  "email": "rjadhav@gmail.com"},
  "secretQuestion": "Favourite Movie",
  "answer": "3 Idiots",
  "isSubscribed": "true",
  "moc": "email",
}

ngOnInit(): void {
    // setTimeout(() => {
    //   console.log(this.signup.controls['userName'])
    //   this.signup.controls['userName'].valueChanges
    //   .subscribe(data=>{
    //     console.log(data)
    //     if(data.length >= 12){
    //       this.userMaxFlag =true
    //     }else{
    //       this.userMaxFlag = false
    //     }
    //   })
    // }, 500);
}


  onsignin(){
    console.log(this.signup.value)
  }

  onEdit(){
    this.signup.form.patchValue(this.userObj)
  }

  onusername(eve:Event){

  let vallength = (eve.target as HTMLInputElement).value.length

  if(vallength >= 12){
    this.userMaxFlag = true
  }
  }
}
