import { Injector } from '@angular/core';

let appInjector: Injector;

export function setAppInjector(injector: Injector) {
  appInjector = injector;
}

export function getAppInjector(): Injector {
  if (!appInjector) {
    throw new Error('AppInjector has not been set.');
  }
  return appInjector;
}
