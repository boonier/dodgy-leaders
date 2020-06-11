import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";

module("Integration | Component | leaders", function (hooks) {
  setupRenderingTest(hooks);
  test("it renders information about dodgy leaders", async function (assert) {
    this.setProperties({
      leader: {
        title: "Donald Trump",
        leadership_qualities: "Disruptor, nut-job, being orange",
        known_for: "Insighting unrest, advising people drink bleach",
        location_city: "Washington DC, USA",
        location: {
          lat: 37.7749,
          lng: -122.4194,
        },
        net_worth: "$100 billion ++ better than +++",
        image:
          "https://sadanduseless.b-cdn.net/wp-content/uploads/2019/06/funny-man-buns10.jpg",
      },
    });

    await render(hbs`<Leader @leader={{this.leader}} />`);

    assert.dom("article").hasClass("leader");
    assert.dom("article h3").hasText("Donald Trump");
    assert
      .dom("article .detail.leadership-qualities")
      .includesText("Disruptor");
    assert.dom("article .detail.location").includesText("USA");
    assert
      .dom("article .detail.net-worth")
      .includesText("$100 billion ++ better than +++");
    assert.dom("article .detail.known-for").includesText("Insighting unrest");
    assert.dom("article .image").exists();
  });
});
