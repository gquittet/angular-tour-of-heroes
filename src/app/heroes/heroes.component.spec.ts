import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { HEROES } from '../../mock/heroes-mock';
import Hero from '../../models/hero';
import { HeroService } from '../services/hero.service';

import { HeroesComponent } from './heroes.component';
import { HeroesModule } from './heroes.module';

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;
  let document: any;
  let heroService: any;

  beforeEach(async () => {
    heroService = jasmine.createSpyObj('HeroService', ['getHeroes']);
    heroService.getHeroes.and.returnValue(of(HEROES));

    await TestBed.configureTestingModule({
      imports: [HeroesModule, RouterTestingModule],
    }).compileComponents();
    TestBed.inject(HeroService, heroService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
    document = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('dom', () => {
    beforeEach(() => {
      fixture.detectChanges();
    });

    const clickOnHero = () => {
      const hero = document.querySelector('li');
      hero.dispatchEvent(new Event('click'));
      fixture.detectChanges();
      return hero;
    };

    it('should have a title', () => {
      const title: HTMLHeadingElement = document.querySelector('h2');
      expect(title).not.toBeNull();
    });

    it('should have an heroes unordered list', () => {
      const list: HTMLUListElement = document.querySelector('ul.heroes');
      expect(list).not.toBeNull();
    });

    it('the list content should be unselectable', () => {
      const list: HTMLUListElement = document.querySelector(
        'ul.heroes.unselectable'
      );
      expect(list).not.toBeNull();
    });

    it('should have n list items from the heroes list', () => {
      const heroesQuantity = component.heroes.length;

      const listItems: HTMLLIElement[] = document.querySelectorAll(
        '.heroes > li'
      );

      expect(listItems.length).toBe(heroesQuantity);
    });

    it('should have a span badge in the list item', () => {
      const badge: HTMLSpanElement | null = document.querySelector(
        '.heroes > li > span.badge'
      );
      expect(badge).not.toBeNull();
    });

    it('should have a span name in the list item', () => {
      const name: HTMLSpanElement | null = document.querySelector(
        '.heroes > li > span.name'
      );
      expect(name).not.toBeNull();
    });

    it('should contains a span with the hero id for each heroes', () => {
      const heroes = component.heroes;
      const listItems: HTMLLIElement[] = document.querySelectorAll(
        '.heroes > li'
      );

      heroes.forEach((hero, index) => {
        const element = listItems[index];

        const badge: HTMLSpanElement | null = element.querySelector('.badge');

        expect(badge).not.toBeNull();
        expect(badge?.innerText).toBe(hero.id.toString());
      });
    });

    it('should contains a span with the hero name for each heroes', () => {
      const heroes = component.heroes;
      const listItems: HTMLLIElement[] = document.querySelectorAll(
        'ul.heroes > li'
      );

      heroes.forEach((hero, index) => {
        const element = listItems[index];

        const name: HTMLSpanElement | null = element.querySelector('.name');

        expect(name).not.toBeNull();
        expect(name?.innerText).toBe(hero.name);
      });
    });

    it('should redirect on the hero page when clicking on it', () => {
      const heroes = component.heroes;
      const listItems: HTMLLIElement[] = document.querySelectorAll(
        'ul.heroes > li'
      );

      heroes.forEach((hero, index) => {
        const element = listItems[index];

        expect(element).not.toBeNull();
        expect(element?.getAttribute('ng-reflect-router-link')).toBe(
          `/heroes/${hero.id}`
        );
      });
    });
  });

  describe('component', () => {
    it('should have an empty list of heroes at start', () => {
      expect(component.heroes).toEqual([]);
    });

    it('should get the heroes list on init', (done) => {
      fixture.detectChanges();
      heroService.getHeroes().subscribe((heroes: Hero[]) => {
        expect(component.heroes).toBe(heroes);
        done();
      });
    });

    describe('selectedHero', () => {
      it('should be undefined at start', () => {
        expect(component.selectedHero).toBeUndefined();
      });

      it('should be undefined on init', () => {
        fixture.detectChanges();
        expect(component.selectedHero).toBeUndefined();
      });
    });
  });
});
