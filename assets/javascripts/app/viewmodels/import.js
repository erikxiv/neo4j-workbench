define(['underscore', 'knockout', 'state'], function (_, ko, state) {

  function generateColumnLabel(index) {
    var result = '';
    while (index > 26) {
      result += String.fromCharCode(65 + (index % 26));
      index = Math.floor(index / 26);
    }
    result += String.fromCharCode(65 + index);
    return result;
  }

  function importData(data) {
  }

  return {
    displayName: 'Import',
    state: state,
    attached: function (view, parent) {
    },
    compositionComplete: function(view, parent) {
      // Make ko available to console (TODO: Remove)
      window.context = this;
      // Make sure the caret is in the textbox on load
      $("#textarea_import").focus().select();
    }
  };
});