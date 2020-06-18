import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AppResolverService } from './app-resolver.service';
import { HomeComponent } from './home/home.component';
import { HomeOneResolvedComponent } from './home-one-resolved/home-one-resolved.component';
import { AppRoutingModule } from './app-routing/app-routing.module';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule,HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, HomeComponent, HomeOneResolvedComponent ],
  bootstrap:    [ AppComponent ],
  providers: []
})
export class AppModule { }
