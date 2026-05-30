import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { BusyService } from '../services/busy.service';
import { finalize } from 'rxjs/internal/operators/finalize';
import { delay } from 'rxjs/internal/operators/delay';

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
   const busyService = inject(BusyService);

  busyService.busy();

  return next(req).pipe(
    delay(500),
    // (environment.production ? identity : delay(500)),
    finalize(() => busyService.idle())
  )
};
