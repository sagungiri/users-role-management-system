import { environment } from 'src/environments/environment';

export class ApiPathConfig {
  static generateApiPath(...path: string[]) {
    return [environment.default, ...path].join('/');
  }
}
