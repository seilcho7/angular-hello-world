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
    .text-success {
      color: green;
    }
    .text-danger {
      color: red;
    }
    .text-special {
      font-style: italic;
    }
  `]
})
export class TestComponent implements OnInit {

  public name = "Seil";
  public myId = "testId";
  public isDisabled = true;

  public successClass = "text-success";
  public hasError = true;
  public isSpecial = true;
  public messageClasses = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  }

  public highlightColor ="orange";
  public titleStyles = {
    color: "blue",
    fontStyle: "italic"
  }

  public greeting = "";

  public names = "";

  public displayName = true;

  public color = "yellow";

  public colors = ["red", "blue", "green", "yellow"];

  public siteUrl = window.location.href;
  constructor() { }

  ngOnInit() {
  }

  greetUser() {
    return "Hello " + this.name;
  }

  onClick() {
    console.log(event);
    this.greeting = event.type;
  }

  logMessage(value) {
    console.log(value);
  }

}
