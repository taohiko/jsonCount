var request = require('supertest');
var express = require('express');
var app = new express();



describe('JSON count',function(){
    it('Get JSON file', function(done){
        request('https://raw.githubusercontent.com/riywo/packer-example/master')
            .get('/template.json')
            .expect(function(res){
                var count = 0;
                for ( property in res )          // should return 2
                {
                    if(res.hasOwnProperty(property))
                    {
                        count++;
                    }
                }
            })
            .expect(200,done);
    })
    it('Get JSON format',function(){
        var sampleData =
            [
                {
                    "id": "38",
                    "article_id": "16",
                    "news_event": "625",
                    "language": "en",
                    "channel_partner_id": "625",
                    "title": "Test",
                    "show_logo": null,
                    "description": "test\n\n",
                    "schedule": null,
                    "event_date": "2012-03-09 10:08:35",
                    "link_text": null,
                    "guid": null,
                    "timestamp": "2012-03-09 11:19:42",
                    "website": null,
                    "show_hours": null,
                    "page_text": null
                },
                {
                    "id": "37",
                    "article_id": "15",
                    "news_event": "625",
                    "language": "en",
                    "channel_partner_id": "625",
                    "title": "Test",
                    "show_logo": null,
                    "description": "test\n\n",
                    "schedule": null,
                    "event_date": "2012-03-09 10:08:35",
                    "link_text": null,
                    "guid": null,
                    "timestamp": "2012-03-09 11:19:39",
                    "website": null,
                    "show_hours": null,
                    "page_text": null
                },
                {
                    "id": "36",
                    "article_id": "14",
                    "news_event": "625",
                    "language": "en",
                    "channel_partner_id": "625",
                    "title": "Test",
                    "show_logo": null,
                    "description": "test\n\n",
                    "schedule": null,
                    "event_date": "2012-03-09 10:08:35",
                    "link_text": null,
                    "guid": null,
                    "timestamp": "2012-03-09 11:19:35",
                    "website": null,
                    "show_hours": null,
                    "page_text": null
                },
                {
                    "id": "35",
                    "article_id": "13",
                    "news_event": "625",
                    "language": "en",
                    "channel_partner_id": "625",
                    "title": "Test",
                    "show_logo": null,
                    "description": "test\n\n",
                    "schedule": null,
                    "event_date": "2012-03-09 10:08:35",
                    "link_text": null,
                    "guid": null,
                    "timestamp": "2012-03-09 11:19:31",
                    "website": null,
                    "show_hours": null,
                    "page_text": null
                }
            ];
        console.log(Object.keys(sampleData).length)
    })
});
