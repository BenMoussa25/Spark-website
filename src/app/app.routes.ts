import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { CybermazeComponent } from './components/Events/cybermaze/cybermaze.component';
import { MinictfComponent } from './components/Events/minictf/minictf.component';
import { SparkctfComponent } from './components/Events/sparkctf/sparkctf.component';
import { IsetcomComponent } from './components/Branches/isetcom/isetcom.component';
import { PenpartyComponent } from './components/Events/penparty/penparty.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
    { path: 'main', component: MainComponent },
    { path: 'Events/CyberMaze', component: CybermazeComponent },
    { path: 'Events/MiniCTF', component: MinictfComponent },
    { path: 'Events/SparkCTF', component: SparkctfComponent },
    { path: 'Branches/ISETCOM', component: IsetcomComponent },
    { path: 'Events/PenParty', component: PenpartyComponent },
    { path: 'contact', component: ContactComponent },
    { path: '', redirectTo: '/main', pathMatch: 'full' }
   
];
