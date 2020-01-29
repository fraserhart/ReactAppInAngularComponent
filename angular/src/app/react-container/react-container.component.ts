import { Component, OnInit } from "@angular/core";
import { registerApplication, start } from "single-spa";

@Component({
  selector: "app-react-container",
  templateUrl: "./react-container.component.html",
  styleUrls: ["./react-container.component.css"]
})
export class ReactContainerComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    const loadingFunction = () => {
      return import("../../../../reactapp/build/static/js/main.js");
    };
    const activityFunction = () => {
      return true;
    };
    registerApplication("reactApp", loadingFunction, activityFunction, {
      test: "testprop"
    });
    start();
  }
}
