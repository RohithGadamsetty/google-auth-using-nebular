import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { OauthComponent } from "./oauth/oauth.component";
import { CallbackComponent } from "./callback/callback.component";

import {
  NbAuthModule,
  NbOAuth2AuthStrategy,
  NbOAuth2ResponseType,
} from "@nebular/auth";
import {
  NbCardModule,
  NbIconLibraries,
  NbIconModule,
  NbLayoutModule,
  NbThemeModule,
} from "@nebular/theme";
import { NbEvaIconsModule } from "@nebular/eva-icons";
import { HttpClientModule } from "@angular/common/http";
import { ProfileComponent } from "./profile/profile.component";

@NgModule({
  declarations: [
    AppComponent,
    OauthComponent,
    CallbackComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NbAuthModule.forRoot({
      strategies: [
        NbOAuth2AuthStrategy.setup({
          name: "google",
          clientId:
            "273826063453-bmeb56dvbt0b3r6eo1cq94guafl1hgj3.apps.googleusercontent.com",
          clientSecret: "6iYbfdwiT-a12vrdpAwZqRFB",
          authorize: {
            endpoint: "https://accounts.google.com/o/oauth2/v2/auth",
            responseType: NbOAuth2ResponseType.TOKEN,
            scope:
              "https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email",
            redirectUri: `http://localhost:${window.location.port}/callback`,
          },
          redirect: {
            success: "/auth",
          },
        }),
      ],
    }),
    NbIconModule,
    NbEvaIconsModule,
    NbCardModule,
    NbLayoutModule,
    HttpClientModule,
    NbThemeModule.forRoot(),
  ],
  providers: [NbIconLibraries],
  bootstrap: [AppComponent],
})
export class AppModule {}
