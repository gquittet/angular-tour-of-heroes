import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HEROES } from '../../mock/heroes-mock';
import Hero from '../../models/hero';
import IHeroService from '../../models/IHeroService';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService implements IHeroService {
  constructor(private messageService: MessageService) {}

  /**
   * Return all the heroes.
   *
   * @return All the heroes.
   */
  getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

  /**
   * Return the hero corresponding to the given id.
   *
   * @param id The hero id
   * @return The hero corresponding to the given id.
   */
  getHero(id: number): Observable<Hero | undefined> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find((hero) => hero.id === id));
  }
}
