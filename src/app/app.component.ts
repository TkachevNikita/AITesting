import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TuiRoot } from '@taiga-ui/core';

import { MainLayoutComponent } from '../../libs/shared/src/lib/layouts/main-layout.component';
import { ChatComponent } from '@aitesting/chat';

@Component({
  selector: 'app-root',
  imports: [RouterModule, TuiRoot, MainLayoutComponent, ChatComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
