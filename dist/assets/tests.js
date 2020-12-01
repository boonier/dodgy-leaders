'use strict';

define("dogdy-leaders/tests/acceptance/dodgy-leaders-test", ["qunit", "@ember/test-helpers", "ember-qunit"], function (_qunit, _testHelpers, _emberQunit) {
  "use strict";

  (0, _qunit.module)("Acceptance | dodgy leaders", function (hooks) {
    (0, _emberQunit.setupApplicationTest)(hooks);
    (0, _qunit.test)("visiting /", async function (assert) {
      await (0, _testHelpers.visit)("/");
      assert.equal((0, _testHelpers.currentURL)(), "/");
      assert.dom("nav").exists();
      assert.dom("h1").hasText("Dodgy Leaders");
      assert.dom("h2").hasText("Choose your leader!");
      assert.dom(".jumbo a.button").hasText("About us");
      await (0, _testHelpers.click)(".jumbo a.button");
      assert.equal((0, _testHelpers.currentURL)(), "/about");
    });
    (0, _qunit.test)("visiting /about", async function (assert) {
      await (0, _testHelpers.visit)("/about");
      assert.equal((0, _testHelpers.currentURL)(), "/about");
      assert.dom("nav").exists();
      assert.dom("h1").hasText("Dodgy Leaders");
      assert.dom("h2").hasText("About Dodgy Leaders");
      assert.dom(".jumbo a.button").hasText("Contact us");
      await (0, _testHelpers.click)(".jumbo a.button");
      assert.equal((0, _testHelpers.currentURL)(), "/getting-in-touch");
    });
    (0, _qunit.test)("visiting /getting-in-touch", async function (assert) {
      await (0, _testHelpers.visit)("/getting-in-touch");
      assert.equal((0, _testHelpers.currentURL)(), "/getting-in-touch");
      assert.dom("nav").exists();
      assert.dom("h1").hasText("Dodgy Leaders");
      assert.dom("h2").hasText("Contact us");
      assert.dom("a.button").hasText("About");
      await (0, _testHelpers.click)(".jumbo a.button");
      assert.equal((0, _testHelpers.currentURL)(), "/about");
    });
    (0, _qunit.test)("navigating using the nav-bar", async function (assert) {
      await (0, _testHelpers.visit)("/");
      assert.dom("nav").exists();
      assert.dom("nav a.menu-index").hasText("Dodgy Leaders");
      assert.dom("nav a.menu-about").hasText("About");
      assert.dom("nav a.menu-contact").hasText("Contact");
      await (0, _testHelpers.click)("nav a.menu-about");
      assert.equal((0, _testHelpers.currentURL)(), "/about");
      await (0, _testHelpers.click)("nav a.menu-contact");
      assert.equal((0, _testHelpers.currentURL)(), "/getting-in-touch");
      await (0, _testHelpers.click)("nav a.menu-index");
      assert.equal((0, _testHelpers.currentURL)(), "/");
    });
  });
});
define("dogdy-leaders/tests/integration/components/jumbo-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)("Integration | Component | jumbo", function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)("it renders the content inside a jumbo header with a tomster", async function (assert) {
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <Jumbo>Hello World</Jumbo>
      */
      {
        id: "+Qg9uEw1",
        block: "{\"symbols\":[],\"statements\":[[8,\"jumbo\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"Hello World\"]],\"parameters\":[]}]]]],\"hasEval\":false,\"upvars\":[]}",
        meta: {}
      }));
      assert.dom(".jumbo").exists();
      assert.dom(".jumbo").hasText("Hello World");
      assert.dom(".jumbo .tomster").exists();
    });
  });
});
define("dogdy-leaders/tests/integration/components/leader/image-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)("Integration | Component | leader/image", function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)("it renders the given image", async function (assert) {
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            <Leader::Image
              src="/assets/images/teaching-tomster.png"
              alt="Teaching Tomster"
            />
          
      */
      {
        id: "DLrF8CI/",
        block: "{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"leader/image\",[[24,\"src\",\"/assets/images/teaching-tomster.png\"],[24,\"alt\",\"Teaching Tomster\"]],[[],[]],null],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}",
        meta: {}
      }));
      assert.dom(".image").exists();
      assert.dom(".image img").hasAttribute("src", "/assets/images/teaching-tomster.png");
      assert.dom(".image img").hasAttribute("alt", "Teaching Tomster");
    });
    (0, _qunit.test)("clicking on the component toggles its size", async function (assert) {
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            <Leader::Image
              src="/assets/teaching-tomster.png"
              alt="Teaching Tomster"
            />
          
      */
      {
        id: "dNqhIgnX",
        block: "{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"leader/image\",[[24,\"src\",\"/assets/teaching-tomster.png\"],[24,\"alt\",\"Teaching Tomster\"]],[[],[]],null],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}",
        meta: {}
      }));
      assert.dom("button.image").exists();
      assert.dom(".image").doesNotHaveClass("large");
      assert.dom(".image small").hasText("View Larger");
      await (0, _testHelpers.click)("button.image");
      assert.dom(".image").hasClass("large");
      assert.dom(".image small").hasText("View Smaller");
      await (0, _testHelpers.click)("button.image");
      assert.dom(".image").doesNotHaveClass("large");
      assert.dom(".image small").hasText("View Larger");
    });
  });
});
define("dogdy-leaders/tests/integration/components/leaders-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)("Integration | Component | leaders", function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)("it renders information about dodgy leaders", async function (assert) {
      this.setProperties({
        leader: {
          title: "Donald Trump",
          leadership_qualities: "Disruptor, nut-job, being orange",
          known_for: "Insighting unrest, advising people drink bleach",
          location_city: "Washington DC, USA",
          location: {
            lat: 37.7749,
            lng: -122.4194
          },
          net_worth: "$100 billion ++ better than +++",
          image: "https://sadanduseless.b-cdn.net/wp-content/uploads/2019/06/funny-man-buns10.jpg"
        }
      });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <Leader @leader={{this.leader}} />
      */
      {
        id: "vHu/D+cb",
        block: "{\"symbols\":[],\"statements\":[[8,\"leader\",[],[[\"@leader\"],[[32,0,[\"leader\"]]]],null]],\"hasEval\":false,\"upvars\":[]}",
        meta: {}
      }));
      assert.dom("article").hasClass("leader");
      assert.dom("article h3").hasText("Donald Trump");
      assert.dom("article .detail.leadership-qualities").includesText("Disruptor");
      assert.dom("article .detail.location").includesText("USA");
      assert.dom("article .detail.net-worth").includesText("$100 billion ++ better than +++");
      assert.dom("article .detail.known-for").includesText("Insighting unrest");
      assert.dom("article .image").exists();
    });
  });
});
define("dogdy-leaders/tests/test-helper", ["dogdy-leaders/app", "dogdy-leaders/config/environment", "@ember/test-helpers", "ember-qunit"], function (_app, _environment, _testHelpers, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _emberQunit.start)();
});
define("dogdy-leaders/tests/unit/routes/about-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | about', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:about');
      assert.ok(route);
    });
  });
});
define("dogdy-leaders/tests/unit/routes/about/blog-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | about/blog', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:about/blog');
      assert.ok(route);
    });
  });
});
define("dogdy-leaders/tests/unit/routes/about/blog/post-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | about/blog/post', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:about/blog/post');
      assert.ok(route);
    });
  });
});
define("dogdy-leaders/tests/unit/routes/about/index-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | about/index', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:about/index');
      assert.ok(route);
    });
  });
});
define("dogdy-leaders/tests/unit/routes/contact-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | contact', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:contact');
      assert.ok(route);
    });
  });
});
define("dogdy-leaders/tests/unit/routes/index-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | index', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:index');
      assert.ok(route);
    });
  });
});
define('dogdy-leaders/config/environment', [], function() {
  var prefix = 'dogdy-leaders';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('dogdy-leaders/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
