import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {


  provideTranslate(key: string): string {
    return `[PL] ${key}`;
  }

}
