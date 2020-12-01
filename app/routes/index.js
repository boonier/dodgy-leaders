import Route from "@ember/routing/route";

export default class IndexRoute extends Route {
  breadCrumb = null;

  async model() {
    let response = await fetch("/api/leaders.json");
    const { data } = await response.json();
    return data;
  }
}
