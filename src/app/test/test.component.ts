import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-test]',
  templateUrl: './test.component.html',
  // template: `
  //   <h2>
  //     Hello {{name}}
  //   </h2>
  //   <h2>{{1+1}}</h2>
  //   <h2>{{"Welcome " + name}}</h2>
  //   <h2>{{name.length}}</h2>
  //   <h2>{{name.toUpperCase()}}</h2>
  //   <h2>{{greetUser()}}</h2>
  //   <h2>{{siteUrl}}</h2>

  //   `,
  // styleUrls: ['./test.component.css']
  styles: [`
    div {
      color: red;
    }
  `]
})
export class TestComponent implements OnInit {

  public name = "Seil";
  public myId = "testId";
  public isDisabled = true;
  public siteUrl = window.location.href;
  constructor() { }

  ngOnInit() {
  }

  greetUser() {
    return "Hello " + this.name;
  }

}
