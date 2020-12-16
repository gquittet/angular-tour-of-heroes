import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNotFoundComponent } from './page-not-found.component';
import { PageNotFoundModule } from './page-not-found.module';

describe('PageNotFoundComponent', () => {
  let component: PageNotFoundComponent;
  let fixture: ComponentFixture<PageNotFoundComponent>;
  let document: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageNotFoundModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNotFoundComponent);
    component = fixture.componentInstance;
    document = fixture.nativeElement;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  describe('dom', () => {
    beforeEach(() => {
      fixture.detectChanges();
    });

    it('should contains an image', () => {
      const image: HTMLImageElement = document.querySelector('img');
      expect(image).not.toBeNull();
    });

    describe('image', () => {
      it('should contains the ghost image', () => {
        const image: HTMLImageElement = document.querySelector('img');
        expect(image.getAttribute('src')).toBe('assets/img/sad-ghost.gif');
      });
    });

    it('should contains an h3', () => {
      const title: HTMLHeadingElement = document.querySelector('h3');
      expect(title).not.toBeNull();
    });

    it('should contains an h2', () => {
      const title: HTMLHeadingElement = document.querySelector('h2');
      expect(title).not.toBeNull();
    });

    it('the h2 should be below the h3', () => {
      const title: HTMLHeadingElement = document.querySelector('h3 ~ h2');
      expect(title).not.toBeNull();
    });
  });
});
