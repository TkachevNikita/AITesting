import { ChatService } from '@aitesting/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { TuiButton } from '@taiga-ui/core';
import { Observable, take } from 'rxjs';

import { IRequest } from '../../interfaces/history.interface';

@Component({
  selector: 'lib-shared-side-menu',
  imports: [TuiButton, AsyncPipe, RouterLink],
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
  private readonly router: Router = inject(Router);
  private readonly chatService: ChatService = inject(ChatService);

  public requests$: Observable<IRequest[]> = this.chatService.requests;
  public isOpen = true;

  public toggleMenu(): void {
    this.isOpen = !this.isOpen;
  }

  public navigateToRequest(id: string): void {
    this.router.navigate([`/chat/${id}`]);
  }

  public removeRequest(id: string): void {
    this.chatService.removeRequest(id).pipe(take(1)).subscribe();
  }
}
