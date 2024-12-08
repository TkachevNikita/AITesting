import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TuiRoot } from '@taiga-ui/core';

import { MainLayoutComponent } from '../../libs/shared/src/lib/layouts/main-layout.component';

@Component({
  selector: 'app-root',
  imports: [RouterModule, TuiRoot, MainLayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
