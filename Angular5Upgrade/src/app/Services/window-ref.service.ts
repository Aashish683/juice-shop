import { Injectable } from '@angular/core';

@Injectable()
export class WindowRefService {

  constructor() { }

  get nativeWindow():any{
    return getWindow();
  }
}

function getWindow():any{
  return window;
}
