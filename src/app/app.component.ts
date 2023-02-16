import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ConfirmationService, PrimeNGConfig } from 'primeng/api';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

    lang: string = "en";
    browserLang !:any;
    constructor(public translate: TranslateService, public primeNGConfig: PrimeNGConfig) {
        translate.addLangs(['en', 'fr']);
        translate.setDefaultLang('en');

         this.browserLang = translate.getBrowserLang();
         this.lang = this.browserLang.match(/en|fr/) ? this.browserLang : 'en';
        this.changeLang(this.lang);
    }
    ngOnInit(): void {

    }

    changeLang(lang: string) {
       this.translate.use(lang);
    }
    getFlagClass(sel:any){
        return "flag flag-" + sel;
      }
      getSelFlagClass(sel:any){
        // i.e.  class="flag flag-us"
        return "flag flag-" + sel;
      }
}
