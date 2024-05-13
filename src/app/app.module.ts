import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Shared/Components/header/header.component';
import { FooterComponent } from './Shared/Components/footer/footer.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { HomeComponent } from './Pages/home/home.component';
import { AboutUsComponent } from './Pages/Components/about-us/about-us.component';
import { CasesComponent } from './Pages/Components/cases/cases.component';
import { AdvantagesComponent } from './Pages/Components/advantages/advantages.component';
import { SlideComponent } from './Shared/Components/slide/slide.component';
import { SetOfSolutionsComponent } from './Pages/Components/set-of-solutions/set-of-solutions.component';
import { ClientsComponent } from './Pages/Components/friends/clients/clients.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { BusinessSolutionsComponent } from './Pages/Components/business-solutions/business-solutions.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutUsComponent,
    CasesComponent,
    AdvantagesComponent,
    SlideComponent,
    SetOfSolutionsComponent,
    ClientsComponent,
    BusinessSolutionsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatExpansionModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatSelectModule,
    ReactiveFormsModule,
  ],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
