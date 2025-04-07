import { Observable } from 'rxjs';
import { runInInjectionContext } from '@angular/core';
import { LoadingService } from '@shared/service/loading.service';
import { getAppInjector } from '@core/app-injector';

export function ShowLoading(): MethodDecorator {
  return function (
    target: Object,
    propertyKey: string | symbol,
    descriptor: PropertyDescriptor
  ): PropertyDescriptor {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
      const injector = getAppInjector();

      return runInInjectionContext(injector, () => {
        const loaderService = injector.get(LoadingService);
        loaderService.show();

        const result = originalMethod.apply(this, args);

        if (result instanceof Promise) {
          return result
            .then(res => res)
            .catch(error => {
              throw error;
            })
            .finally(() => loaderService.hide());
        }

        if (result instanceof Observable) {
          return new Observable(observer => {
            const subscription = result.subscribe({
              next: val => observer.next(val),
              error: err => {
                observer.error(err);
                loaderService.hide();
              },
              complete: () => {
                observer.complete();
                loaderService.hide();
              }
            });

            return () => {
              subscription.unsubscribe();
              loaderService.hide();
            };
          });
        }

        loaderService.hide();
        return result;
      });
    };

    return descriptor;
  };
}
