import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostItemComponent } from './components/post-item/post-item.component';
import { HistoryComponent } from './components/history/history.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { PostFormComponent } from './components/post-form/post-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostItemComponent,
    HistoryComponent,
    NavBarComponent,
    PostFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
