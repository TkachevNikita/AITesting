import { SideMenuComponent } from '@aitesting/shared';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { HeaderComponent } from '../UI/header/header.component';

@Component({
  selector: 'libs-shared-main-layout',
  imports: [SideMenuComponent, HeaderComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainLayoutComponent {}
