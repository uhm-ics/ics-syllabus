ExportController = AppController.extend({
  waitOn: function() {
    //return this.subscribe('items');
  },
  data: {
    items: Syllabuses.find({})
  },
  onAfterAction: function () {
    Meta.setTitle('Export');
  }
});

ExportController.events({
  'click [data-action=doSomething]': function (event, template) {
    event.preventDefault();
  }
});