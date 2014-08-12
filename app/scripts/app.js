(function(document) {
  'use strict';

  document.addEventListener('polymer-ready', function() {
    // Perform some behaviour
    console.log('Polymer is ready to rock!');
    // var meta = document.getElementById('grid').$.table.meta;
    // console.log(meta);
    document.getElementById('grid').$.table.meta = [
      {
        name: 'name',
        label: 'Имя',
        type: 'string',
        sortable: true,
        searchable: true,
        editable: true,
        required: true
      },
      {
        name: 'email',
        label: 'Email',
        type: 'string',
        sortable: true,
        searchable: true,
        editable: true,
        required: true
      },
      {
        name: 'goodId',
        label: 'Product ID',
        type: 'string',
        sortable: true,
        searchable: true,
        editable: false,
        required: true
      },
      {
        name: 'creationDate',
        label: 'Creation Date',
        type: 'date',
        sortable: true,
        searchable: true,
        editable: false,
        required: true
      }
    ];
  });

// wrap document so it plays nice with other libraries
// http://www.polymer-project.org/platform/shadow-dom.html#wrappers
})(wrap(document));
