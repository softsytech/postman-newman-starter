import newman from 'newman'; // require Newman in your project

// call newman.run to pass `options` object and wait for callback
newman.run({
    collection: require('./collections/integracionLealtad/IntLealtad.postman_collection.json'),
    environment: require('./collections/integracionLealtad/ProLealtad.postman_environment.json'),
    folder: 'QWS',
    reporters: 'junit' || 'htmlextra',
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});