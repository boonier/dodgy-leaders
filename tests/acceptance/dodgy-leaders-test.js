import { module, test } from "qunit";
import { click, visit, currentURL } from "@ember/test-helpers";
import { setupApplicationTest } from "ember-qunit";

module("Acceptance | dodgy leaders", function (hooks) {
  setupApplicationTest(hooks);

  test("visiting /", async function (assert) {
    await visit("/");

    assert.equal(currentURL(), "/");
    assert.dom("nav").exists();
    assert.dom("h1").hasText("Dodgy Leaders");
    assert.dom("h2").hasText("Choose your leader!");

    assert.dom(".jumbo a.button").hasText("About us");
    await click(".jumbo a.button");

    assert.equal(currentURL(), "/about");
  });

  test("visiting /about", async function (assert) {
    await visit("/about");

    assert.equal(currentURL(), "/about");
    assert.dom("nav").exists();
    assert.dom("h1").hasText("Dodgy Leaders");
    assert.dom("h2").hasText("About Dodgy Leaders");

    assert.dom(".jumbo a.button").hasText("Contact us");
    await click(".jumbo a.button");

    assert.equal(currentURL(), "/getting-in-touch");
  });

  test("visiting /getting-in-touch", async function (assert) {
    await visit("/getting-in-touch");

    assert.equal(currentURL(), "/getting-in-touch");
    assert.dom("nav").exists();
    assert.dom("h1").hasText("Dodgy Leaders");
    assert.dom("h2").hasText("Contact us");

    assert.dom("a.button").hasText("About");
    await click(".jumbo a.button");

    assert.equal(currentURL(), "/about");
  });

  test("navigating using the nav-bar", async function (assert) {
    await visit("/");

    assert.dom("nav").exists();
    assert.dom("nav a.menu-index").hasText("Dodgy Leaders");
    assert.dom("nav a.menu-about").hasText("About");
    assert.dom("nav a.menu-contact").hasText("Contact");

    await click("nav a.menu-about");
    assert.equal(currentURL(), "/about");

    await click("nav a.menu-contact");
    assert.equal(currentURL(), "/getting-in-touch");

    await click("nav a.menu-index");
    assert.equal(currentURL(), "/");
  });
});
