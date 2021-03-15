import { Injectable } from '@angular/core';
import { Instantiable } from 'src/app/interfaces';

@Injectable({
  providedIn: 'root'
})
export class TypeMapperService {
  mapToType<T>(type: Instantiable<T>, ...args: any[]): T {
    return new type(...args);
  }

  mapArrayToType<T>(type: Instantiable<T>, array: any[]): T[] {
    return array.map((x) => this.mapToType<T>(type, x));
  }
}
