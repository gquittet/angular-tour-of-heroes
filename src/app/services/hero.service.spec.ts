import { TestBed } from '@angular/core/testing';
import { HEROES } from '../../mock/heroes-mock';
import Hero from '../../models/hero';

import { HeroService } from './hero.service';

describe('HeroesService', () => {
  let service: HeroService;
  let heroes: Hero[];

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroService);
    heroes = HEROES;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getHeroes', () => {
    it('should return all the heroes', (done) => {
      service.getHeroes().subscribe((value) => {
        expect(Array.isArray(value)).toBe(true);
        expect(value).toBe(heroes);
        done();
      });
    });
  });

  describe('getHero', () => {
    it('should return undefined if the hero does not exist', (done) => {
      const id = -1;
      service.getHero(id).subscribe((value) => {
        expect(value).toBeUndefined();
        done();
      });
    });

    it('should return the hero if he exist', (done) => {
      const id = 11;
      service.getHero(id).subscribe((value) => {
        expect(value).toEqual({ id: 11, name: 'Dr Nice' });
        done();
      });
    });
  });
});
