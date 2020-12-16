import { Observable } from 'rxjs';
import Hero from './hero';

interface IHeroService {
  getHeroes(): Observable<Hero[]>;
}

export default IHeroService;
