var RSVPResolver = Ember.Route.extend({
  setupController: function(controller, model) {
    for (var name in model) {
      controller.set(name, model[name]);
    }
  }
});
