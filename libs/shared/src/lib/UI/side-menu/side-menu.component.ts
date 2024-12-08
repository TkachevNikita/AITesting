import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiButton } from '@taiga-ui/core';

@Component({
  selector: 'lib-shared-side-menu',
  imports: [TuiButton],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('menuAnimation', [
      state(
        'open',
        style({
          transform: 'translateX(0)',
        }),
      ),
      state(
        'closed',
        style({
          transform: 'translateX(-100%)',
        }),
      ),
      transition('open <=> closed', [animate('0.3s ease-in-out')]),
    ]),
  ],
})
export class SideMenuComponent {
  public isOpen = true;

  public toggleMenu() {
    this.isOpen = !this.isOpen;
  }
}
