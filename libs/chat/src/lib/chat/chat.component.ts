import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { TuiLink } from '@taiga-ui/core';
import { TuiAvatar, TuiFileLike, TuiFiles, TuiInputFiles } from '@taiga-ui/kit';

@Component({
  selector: 'lib-chat',
  imports: [
    CommonModule,
    TuiInputFiles,
    TuiAvatar,
    TuiLink,
    ReactiveFormsModule,
    TuiFiles,
  ],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatComponent {
  protected readonly control = new FormControl<TuiFileLike | null>(null);
}
