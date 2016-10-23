const mal = require('./index');

mal.getTopAnime().then(function(list) {
    list[1].fetch().then(function(e) {
        e.characters[0].fetch().then(function(c) {
            console.log(c);
        })
    }).catch(function(err) {
        console.error(err);
    });
}).catch(function(err) {
    console.error(err);
})

mal.quickSearch('lelouch').then(function(results) {
    results.character[0].fetch().then(function(r) {
        r.animeography[0].fetch().then(function(r) {
            console.log(r);
        })
    });
});
