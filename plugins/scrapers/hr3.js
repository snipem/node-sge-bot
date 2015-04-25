(function () {

    'use strict';

    module.exports =  {
        url: 'http://www.hr-online.de/website/rubriken/sport/index.jsp?rubrik=7428',
        name: 'hr3',
        icon: '',
        selector: {
            'titles[]': '.teaser#Weiss h1>a',
            'links[]': '.teaser#Weiss h1>a@href',
            'contents[]': '.teaser#Weiss .teasercontent'
        },
        hashtags: ['hr3'],
        extract: function (def, data) {
            var titles = data.titles,
                links = data.links,
                contents = data.contents,
                list = [];

            titles.forEach(function (title, index) {
                list.push({
                    title: title,
                    content: contents[index],
                    short: title.slice(0,140),
                    source: 'hr3',
                    url: 'http://www.hr-online.de' + links[index]
                });
            });

            def.resolve(list);
        }
    };

}());
