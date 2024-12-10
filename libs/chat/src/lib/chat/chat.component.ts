import { ChatService } from '@aitesting/core';
import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
} from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { TuiButton, TuiLink, TuiLoader } from '@taiga-ui/core';
import { TuiAvatar, TuiFiles, TuiInputFiles } from '@taiga-ui/kit';
import { Observable } from 'rxjs';
import { marked } from 'marked';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { TuiLet } from '@taiga-ui/cdk';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MainLayoutComponent } from '../../../../shared/src/lib/layouts/main-layout.component';

@Component({
  selector: 'lib-chat',
  imports: [
    CommonModule,
    TuiInputFiles,
    TuiAvatar,
    TuiLink,
    ReactiveFormsModule,
    TuiFiles,
    TuiButton,
    TuiLoader,
    TuiLet,
    MainLayoutComponent,
  ],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss',
  providers: [ChatService],
})
export class ChatComponent {
  private readonly chatService: ChatService = inject(ChatService);
  private readonly sanitizer: DomSanitizer = inject(DomSanitizer);
  private readonly destroyRef = inject(DestroyRef);

  protected htmlContent: SafeHtml = '';
  protected readonly control = new FormControl<File | null>(null);
  protected readonly isLoading$: Observable<boolean> = this.chatService.loading;

  public generate(): void {
    const formData = new FormData();

    formData.append('technicalTask', this.control.value!);
    this.chatService
      .generateTestTask(formData)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (markdown: string) => {
          const rawHtml = marked(markdown);
          this.htmlContent = this.sanitizer.bypassSecurityTrustHtml(
            rawHtml as string,
          );
          console.log(this.htmlContent);
        },
        error: (err) => console.error('Error:', err),
      });
  }
}
