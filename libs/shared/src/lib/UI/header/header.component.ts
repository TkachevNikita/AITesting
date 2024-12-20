import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { TuiDataList, TuiDropdown } from '@taiga-ui/core';
import { TuiAvatar, TuiDataListDropdownManager } from '@taiga-ui/kit';

@Component({
  selector: 'lib-shared-header',
  imports: [TuiAvatar, TuiDropdown, TuiDataList, TuiDataListDropdownManager],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  private readonly router: Router = inject(Router);

  public logout(): void {
    this.router.navigate(['/auth/login']);
  }
}
