import { Component } from '@angular/core';
import { NavbarComponent } from "../../navbar/navbar.component"
import { AppComponent } from '../../app.component';
import { FooterComponent } from '../../footer/footer.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-font-layout',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent,AppComponent,FooterComponent],
  templateUrl: './font-layout.component.html',
  styleUrl: './font-layout.component.scss'
})
export class FontLayoutComponent {

}
