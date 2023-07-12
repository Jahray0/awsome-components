import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'username',
})
//pipe permetant de récuperer le nom et le prénom d'en faire un string et de le mettre en majuscule pour le prénon
//Avec le parametre on peut changer l'affichage fr ou en par defaut a fr
export class UsernamePipe implements PipeTransform {
  transform(
    value: { firstName: string; lastName: string },
    locale: 'en' | 'fr' = 'fr'
  ): string {
    return locale === 'fr'
      ? `${value.lastName.toUpperCase()} ${value.firstName}`
      : `${value.firstName} ${value.lastName}`;
  }
}
