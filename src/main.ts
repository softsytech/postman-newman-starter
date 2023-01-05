import newman from 'newman'; // require Newman in your project

// call newman.run to pass `options` object and wait for callback
newman.run({
    collection: require('./collections/deliveryTracker/DeliveryTrackerApi.postman_collection.json'),
    environment: require('./collections/deliveryTracker/DeliveryTracker.postman_environment.json'),
    folder: 'Test',
    reporters: 'junit',
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});