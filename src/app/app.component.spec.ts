import { FixedSizeVirtualScrollStrategy } from '@angular/cdk/scrolling';
import { jsDocComment } from '@angular/compiler';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'portfolio-project'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('portfolio-project');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('portfolio-project app is running!');
  });
});










/*describe('AppComponent', () => {
  let fixture:AppComponent;
  let authServiceMock:any;

  beforeEach (() => {
    authServiceMock = {
  //    isLoggedIn: jest.fn()
    };
    fixture = new AppComponent(
  //  authServiceMock
    );
  });
})

describe('Setup Component', () => {
  it('should be initialized', () => {
   // fixture.authService = authServiceMock;
   // expect(fixture.currentyear).toEqual(new Date().getFullYear());
  });
});*/