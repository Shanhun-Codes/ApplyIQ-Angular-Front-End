import { Injectable, signal } from '@angular/core';
import APP_INFO from '../staticData/appInfo';
import { AppInfo } from '../models/appInfo';

@Injectable({
  providedIn: 'root',
})
export class AppInfoService {
  appInfo = signal<AppInfo>(APP_INFO);

  getheaderInfo() {
    const info = {
      title: this.appInfo().title,
      tagline: this.appInfo().tagline
    }
    return info
  }

  getLandingInfo() {
    let info = {
      description: this.appInfo().description,
      creatorInfo: this.appInfo().createdBy,
      version: this.appInfo().version
    };
    return info
  }
}
