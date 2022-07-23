import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormControlName, FormGroup, Validators} from '@angular/forms';
import {MatChipInputEvent} from '@angular/material/chips';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-live',
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.css']
})


export class LiveComponent implements OnInit {

  liveForm:FormGroup;


  constructor(formBuilder:FormBuilder,private snackBar:MatSnackBar) {
    this.liveForm = new FormGroup({
      'liveStreamTitle':new FormControl('', [Validators.required,Validators.maxLength(100)]),
      'liveDateStart':new FormControl('',[Validators.required]),
      'liveStartTime':new FormControl('',[Validators.required]),

      'liveEndTime':new FormControl('',[Validators.required]),
      'liveDateEnd':new FormControl('',[Validators.required]),
      'text-filed-value':new FormControl(''),
      'tag-values':new FormControl('')
   })
  }

  saveData(){
    console.log(this.liveForm.value);
    this.snackBar.open('Your live stream event is scheduled successfully',"",{duration:3000})
  }


  keywords = new Set<string>();
  formControl = new FormControl(['angular']);

  addKeywordFromInput(event: MatChipInputEvent) {
    if (event.value) {
      this.keywords.add(event.value);
      event.chipInput!.clear();
    }
  }

  removeKeyword(keyword: string) {
    this.keywords.delete(keyword);
  }

  ngOnInit(): void {
  }

}
