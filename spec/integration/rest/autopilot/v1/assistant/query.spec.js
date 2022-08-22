'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var Holodeck = require('../../../../holodeck');  /* jshint ignore:line */
var Request = require(
    '../../../../../../lib/http/request');  /* jshint ignore:line */
var Response = require(
    '../../../../../../lib/http/response');  /* jshint ignore:line */
var RestException = require(
    '../../../../../../lib/base/RestException');  /* jshint ignore:line */
var Twilio = require('../../../../../../lib');  /* jshint ignore:line */


var client;
var holodeck;

describe('Query', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', 'AUTHTOKEN', {
      httpClient: holodeck
    });
  });
  it('should generate valid fetch request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var promise = client.autopilot.v1.assistants('UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                       .queries('UHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var assistantSid = 'UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var sid = 'UHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://autopilot.twilio.com/v1/Assistants/${assistantSid}/Queries/${sid}`;

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid fetch response',
    function(done) {
      var body = {
          'language': 'language',
          'date_created': '2015-07-30T20:00:00Z',
          'model_build_sid': 'UGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'query': 'query',
          'date_updated': '2015-07-30T20:00:00Z',
          'status': 'status',
          'sample_sid': 'UFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'assistant_sid': 'UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'results': {
              'task': 'name',
              'fields': [
                  {
                      'name': 'name',
                      'value': 'value',
                      'type': 'type'
                  }
              ]
          },
          'url': 'https://autopilot.twilio.com/v1/Assistants/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Queries/UHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'sid': 'UHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'source_channel': 'voice',
          'dialogue_sid': 'UKaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };

      holodeck.mock(new Response(200, body));

      var promise = client.autopilot.v1.assistants('UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                       .queries('UHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should treat the first each arg as a callback',
    function(done) {
      var body = {
          'queries': [
              {
                  'language': 'language',
                  'date_created': '2015-07-30T20:00:00Z',
                  'model_build_sid': 'UGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'query': 'query',
                  'date_updated': '2015-07-30T20:00:00Z',
                  'status': 'status',
                  'sample_sid': 'UFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'assistant_sid': 'UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'results': {
                      'task': 'name',
                      'fields': [
                          {
                              'name': 'name',
                              'value': 'value',
                              'type': 'type'
                          }
                      ]
                  },
                  'url': 'https://autopilot.twilio.com/v1/Assistants/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Queries/UHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'sid': 'UHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'source_channel': null,
                  'dialogue_sid': 'UKaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ],
          'meta': {
              'previous_page_url': null,
              'next_page_url': null,
              'first_page_url': 'https://autopilot.twilio.com/v1/Assistants/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Queries?Status=status&ModelBuild=UGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&DialogueSid=UKaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&Language=language&PageSize=50&Page=0',
              'page': 0,
              'key': 'queries',
              'url': 'https://autopilot.twilio.com/v1/Assistants/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Queries?Status=status&ModelBuild=UGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&DialogueSid=UKaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&Language=language&PageSize=50&Page=0',
              'page_size': 50
          }
      };
      holodeck.mock(new Response(200, body));
      client.autopilot.v1.assistants('UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                         .queries.each(() => done());
    }
  );
  it('should treat the second arg as a callback',
    function(done) {
      var body = {
          'queries': [
              {
                  'language': 'language',
                  'date_created': '2015-07-30T20:00:00Z',
                  'model_build_sid': 'UGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'query': 'query',
                  'date_updated': '2015-07-30T20:00:00Z',
                  'status': 'status',
                  'sample_sid': 'UFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'assistant_sid': 'UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'results': {
                      'task': 'name',
                      'fields': [
                          {
                              'name': 'name',
                              'value': 'value',
                              'type': 'type'
                          }
                      ]
                  },
                  'url': 'https://autopilot.twilio.com/v1/Assistants/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Queries/UHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'sid': 'UHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'source_channel': null,
                  'dialogue_sid': 'UKaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ],
          'meta': {
              'previous_page_url': null,
              'next_page_url': null,
              'first_page_url': 'https://autopilot.twilio.com/v1/Assistants/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Queries?Status=status&ModelBuild=UGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&DialogueSid=UKaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&Language=language&PageSize=50&Page=0',
              'page': 0,
              'key': 'queries',
              'url': 'https://autopilot.twilio.com/v1/Assistants/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Queries?Status=status&ModelBuild=UGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&DialogueSid=UKaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&Language=language&PageSize=50&Page=0',
              'page_size': 50
          }
      };
      holodeck.mock(new Response(200, body));
      client.autopilot.v1.assistants('UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                         .queries.each({pageSize: 20}, () => done());
      holodeck.assertHasRequest(new Request({
          method: 'GET',
          url: 'https://autopilot.twilio.com/v1/Assistants/${assistantSid}/Queries',
          params: {PageSize: 20},
      }));
    }
  );
  it('should find the callback in the opts object',
    function(done) {
      var body = {
          'queries': [
              {
                  'language': 'language',
                  'date_created': '2015-07-30T20:00:00Z',
                  'model_build_sid': 'UGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'query': 'query',
                  'date_updated': '2015-07-30T20:00:00Z',
                  'status': 'status',
                  'sample_sid': 'UFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'assistant_sid': 'UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'results': {
                      'task': 'name',
                      'fields': [
                          {
                              'name': 'name',
                              'value': 'value',
                              'type': 'type'
                          }
                      ]
                  },
                  'url': 'https://autopilot.twilio.com/v1/Assistants/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Queries/UHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'sid': 'UHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'source_channel': null,
                  'dialogue_sid': 'UKaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ],
          'meta': {
              'previous_page_url': null,
              'next_page_url': null,
              'first_page_url': 'https://autopilot.twilio.com/v1/Assistants/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Queries?Status=status&ModelBuild=UGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&DialogueSid=UKaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&Language=language&PageSize=50&Page=0',
              'page': 0,
              'key': 'queries',
              'url': 'https://autopilot.twilio.com/v1/Assistants/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Queries?Status=status&ModelBuild=UGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&DialogueSid=UKaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&Language=language&PageSize=50&Page=0',
              'page_size': 50
          }
      };
      holodeck.mock(new Response(200, body));
      client.autopilot.v1.assistants('UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                         .queries.each({callback: () => done()}, () => fail('wrong callback!'));
    }
  );
  it('should generate valid list request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var promise = client.autopilot.v1.assistants('UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                       .queries.list();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var assistantSid = 'UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://autopilot.twilio.com/v1/Assistants/${assistantSid}/Queries`;

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid read_empty response',
    function(done) {
      var body = {
          'queries': [],
          'meta': {
              'previous_page_url': null,
              'next_page_url': null,
              'first_page_url': 'https://autopilot.twilio.com/v1/Assistants/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Queries?Status=status&ModelBuild=UGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&DialogueSid=UKaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&Language=language&PageSize=50&Page=0',
              'page': 0,
              'key': 'queries',
              'url': 'https://autopilot.twilio.com/v1/Assistants/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Queries?Status=status&ModelBuild=UGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&DialogueSid=UKaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&Language=language&PageSize=50&Page=0',
              'page_size': 50
          }
      };

      holodeck.mock(new Response(200, body));

      var promise = client.autopilot.v1.assistants('UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                       .queries.list();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid read_full response',
    function(done) {
      var body = {
          'queries': [
              {
                  'language': 'language',
                  'date_created': '2015-07-30T20:00:00Z',
                  'model_build_sid': 'UGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'query': 'query',
                  'date_updated': '2015-07-30T20:00:00Z',
                  'status': 'status',
                  'sample_sid': 'UFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'assistant_sid': 'UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'results': {
                      'task': 'name',
                      'fields': [
                          {
                              'name': 'name',
                              'value': 'value',
                              'type': 'type'
                          }
                      ]
                  },
                  'url': 'https://autopilot.twilio.com/v1/Assistants/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Queries/UHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'sid': 'UHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'source_channel': null,
                  'dialogue_sid': 'UKaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ],
          'meta': {
              'previous_page_url': null,
              'next_page_url': null,
              'first_page_url': 'https://autopilot.twilio.com/v1/Assistants/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Queries?Status=status&ModelBuild=UGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&DialogueSid=UKaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&Language=language&PageSize=50&Page=0',
              'page': 0,
              'key': 'queries',
              'url': 'https://autopilot.twilio.com/v1/Assistants/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Queries?Status=status&ModelBuild=UGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&DialogueSid=UKaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&Language=language&PageSize=50&Page=0',
              'page_size': 50
          }
      };

      holodeck.mock(new Response(200, body));

      var promise = client.autopilot.v1.assistants('UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                       .queries.list();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid create request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var opts = {'language': 'language', 'query': 'query'};
      var promise = client.autopilot.v1.assistants('UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                       .queries.create(opts);
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var assistantSid = 'UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://autopilot.twilio.com/v1/Assistants/${assistantSid}/Queries`;

      var values = {'Language': 'language', 'Query': 'query', };
      holodeck.assertHasRequest(new Request({
          method: 'POST',
          url: url,
          data: values
      }));
    }
  );
  it('should generate valid create response',
    function(done) {
      var body = {
          'language': 'language',
          'date_created': '2015-07-30T20:00:00Z',
          'model_build_sid': 'UGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'query': 'query',
          'date_updated': '2015-07-30T20:00:00Z',
          'status': 'status',
          'sample_sid': 'UFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'assistant_sid': 'UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'results': {
              'task': 'name',
              'fields': [
                  {
                      'name': 'name',
                      'value': 'value',
                      'type': 'type'
                  }
              ]
          },
          'url': 'https://autopilot.twilio.com/v1/Assistants/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Queries/UHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'sid': 'UHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'source_channel': 'voice',
          'dialogue_sid': null
      };

      holodeck.mock(new Response(201, body));

      var opts = {'language': 'language', 'query': 'query'};
      var promise = client.autopilot.v1.assistants('UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                       .queries.create(opts);
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid update request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var promise = client.autopilot.v1.assistants('UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                       .queries('UHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').update();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var assistantSid = 'UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var sid = 'UHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://autopilot.twilio.com/v1/Assistants/${assistantSid}/Queries/${sid}`;

      holodeck.assertHasRequest(new Request({
        method: 'POST',
        url: url
      }));
    }
  );
  it('should generate valid update response',
    function(done) {
      var body = {
          'language': 'language',
          'date_created': '2015-07-30T20:00:00Z',
          'model_build_sid': 'UGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'query': 'query',
          'date_updated': '2015-07-30T20:00:00Z',
          'status': 'status',
          'sample_sid': 'UFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'assistant_sid': 'UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'results': {
              'task': 'name',
              'fields': [
                  {
                      'name': 'name',
                      'value': 'value',
                      'type': 'type'
                  }
              ]
          },
          'url': 'https://autopilot.twilio.com/v1/Assistants/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Queries/UHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'sid': 'UHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'source_channel': 'sms',
          'dialogue_sid': 'UKaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };

      holodeck.mock(new Response(200, body));

      var promise = client.autopilot.v1.assistants('UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                       .queries('UHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').update();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid remove request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var promise = client.autopilot.v1.assistants('UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                       .queries('UHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').remove();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var assistantSid = 'UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var sid = 'UHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://autopilot.twilio.com/v1/Assistants/${assistantSid}/Queries/${sid}`;

      holodeck.assertHasRequest(new Request({
        method: 'DELETE',
        url: url
      }));
    }
  );
  it('should generate valid delete response',
    function(done) {
      var body = null;

      holodeck.mock(new Response(204, body));

      var promise = client.autopilot.v1.assistants('UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                       .queries('UHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').remove();
      promise.then(function(response) {
        expect(response).toBe(true);
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
});
