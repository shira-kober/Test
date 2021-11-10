import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'מערכת ההזדהות הממשלתית';
 infoIcon=`<span class="material-icons-outlined">info</span>`;
  viewPopover=false;
  languages=["עברית",'English','العربية','Русский'];
  selectedLanguage:string;
 cards=[{
  title: "הרשמה עם 2 אמצעי זיהוי",
  img: "cards",
  subTitle:"כדי להזדהות צריך לבחור 2 אמצעי זיהוי מתוך הרשימה:",
  optionList:["דרכון", "תעודת זהות", "...מענה על 2 שאלות"],
  link:"לרשימה המלאה",
  buttonText:"להרשמה עם אמצעי זיהוי"
 },{
  title: "הרשמה עם דרכון ביומטרי ו NFC",
  img: "NFC",
  subTitle:null,
  optionList:[`דרכון ביומטרי ישראלי בתוקף  ${this.infoIcon}` ,`טלפון חכם עם רכיב NFC  ${this.infoIcon}`],
  link:null,
  buttonText:"להרשמה עם דרכון ביומטרי"
 }];
 /**
  *
  */
 constructor() {
   this.selectedLanguage=this.languages[0];

 }

 SelectLang(lang){
   this.selectedLanguage=lang;
 }

}
