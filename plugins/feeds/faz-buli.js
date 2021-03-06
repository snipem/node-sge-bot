(function () {

    'use strict';

    var _ = require('lodash');

    function filter (pass, word) {
        if (pass) pass = title.toLowerCase().indexOf(word) > -1;
    }

    module.exports =  {
        url: 'http://www.faz.net/rss/aktuell/sport/fussball/',
        name: 'faz:bundesliga',
        extract: function (data) {
            var stream = this, item;

            var whitelist = [
                'eintracht',
                'frankfurt',
                'sge',
                'schaaf'
            ];

            // add to data (collector)
            while ( (item = stream.read()) ) {
                var pass = false,
                    title = item.title,
                    content = item.description;

                _.each(whitelist, _.partial(filter, pass));

                if (pass) {
                    data.push({
                        title: title,
                        content: content,
                        source: 'faz',
                        short: item.summary.slice(0,140),
                        url: item.link
                    });
                }
            }
        }
    };

}());
