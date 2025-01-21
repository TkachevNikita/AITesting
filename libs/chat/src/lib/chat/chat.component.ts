import { ChatService } from '@aitesting/core';
import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  inject,
  OnInit,
} from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { TuiButton, TuiLink, TuiLoader } from '@taiga-ui/core';
import { TuiAvatar, TuiFiles, TuiInputFiles } from '@taiga-ui/kit';
import { generate, Observable, switchMap } from 'rxjs';
import { marked } from 'marked';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { TuiLet } from '@taiga-ui/cdk';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MainLayoutComponent } from '../../../../shared/src/lib/layouts/main-layout.component';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { IRequest } from '@aitesting/shared';
import { ActivatedRoute } from '@angular/router';

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
  styleUrls: ['./chat.component.scss'],
  providers: [ChatService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatComponent implements OnInit {
  private readonly route: ActivatedRoute = inject(ActivatedRoute);
  private readonly chatService: ChatService = inject(ChatService);
  private readonly sanitizer: DomSanitizer = inject(DomSanitizer);
  private readonly destroyRef = inject(DestroyRef);
  private readonly cdr: ChangeDetectorRef = inject(ChangeDetectorRef);

  protected htmlContent: SafeHtml = '';
  protected readonly control = new FormControl<File | null>(null);
  protected readonly isLoading$: Observable<boolean> = this.chatService.loading;

  public ngOnInit(): void {
    this.route.params
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        switchMap((params) => {
          const requestId = params['id'];
          return this.chatService.getRequestById(requestId);
        }),
      )
      .subscribe({
        next: (req) => {
          if (req) {
            const rawHtml = marked(req.responseContent) as string;
            this.htmlContent = this.sanitizer.bypassSecurityTrustHtml(rawHtml);
            this.cdr.markForCheck();
          } else {
            this.htmlContent = '';
            this.cdr.markForCheck();
          }
        },
      });
  }

  public generate(): void {
    const formData = new FormData();

    formData.append('technicalTask', this.control.value!);
    this.chatService
      .generateTestTask(formData)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (req: IRequest) => {
          const rawHtml = marked(req.responseContent);
          this.htmlContent = this.sanitizer.bypassSecurityTrustHtml(
            rawHtml as string,
          );
          console.log(this.htmlContent);
        },
        error: (err) => console.error('Error:', err),
      });
  }

  public saveAsPdf(): void {
    const content = document.querySelector('.response') as HTMLElement;

    html2canvas(content)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save('generated-content.pdf');
      })
      .catch((error) => {
        console.error('Ошибка при создании PDF:', error);
      });
  }
}
