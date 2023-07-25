import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { provideMockStore } from '@ngrx/store/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HoverDirective } from './hover.directive';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
          imports: [HttpClientTestingModule], 
    declarations: [AppComponent, NavigationComponent, WelcomeComponent, HoverDirective],
      providers: [provideMockStore({})],
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'colors-war'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('colors-war');
  });

});
