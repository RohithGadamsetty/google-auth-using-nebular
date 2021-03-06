import { Component } from '@angular/core';
import { NbCardModule, NbIconLibraries, NbIconModule, NbLayoutModule } from '@nebular/theme';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-task';
  constructor(private iconLibraries: NbIconLibraries) {
    this.iconLibraries.registerFontPack('font-awesome', { iconClassPrefix: 'fa' });
  }
}
