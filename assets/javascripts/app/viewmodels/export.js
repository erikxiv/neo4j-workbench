define(['underscore', 'knockout', 'state'], function (_, ko, state) {
  return {
    displayName: 'Import',
    state: state,
    attached: function (view, parent) {
      // Wire up Import buttons
      $('#button_export').click(function (e) {
      });
    },
    compositionComplete: function(view, parent) {
      // Make ko available to console (TODO: Remove)
      window.context = this;
    }
  };
});