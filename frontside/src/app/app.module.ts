import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';

// MATERIAL
import {MatButtonModule, MatCheckboxModule, MatTableModule, MatToolbarModule, MatInputModule, MatDialogModule} from '@angular/material';


// NGXS
import { NgxsModule } from '@ngxs/store';
import { UserState } from './components/main/users.state';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';

// COMPONENTS
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './components/table/table.component';
import { TableRowComponent } from './components/table/table-row/table-row.component';
import { DetailViewComponent } from './components/detail-view/detail-view.component';
import { MainComponent } from './components/main/main.component';
import { HttpClientModule } from '@angular/common/http';
import { BoxesComponent } from './boxes/boxes.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    TableRowComponent,
    DetailViewComponent,
    MainComponent,
    BoxesComponent
  ],
  imports: [
    MatButtonModule, MatDialogModule, MatCheckboxModule, MatToolbarModule, MatInputModule, MatTableModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxsModule.forRoot([ 
      UserState
    ]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
