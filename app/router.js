import EmberRouter from "@ember/routing/router";
import config from "./config/environment";

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route("about", function() {
    this.route('blog', function() {
      this.route('post');
    });
  });
  this.route("contact", { path: "/getting-in-touch" });
});
