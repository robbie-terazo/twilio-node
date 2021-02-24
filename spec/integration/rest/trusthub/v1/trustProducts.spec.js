'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var Holodeck = require('../../../holodeck');  /* jshint ignore:line */
var Request = require(
    '../../../../../lib/http/request');  /* jshint ignore:line */
var Response = require(
    '../../../../../lib/http/response');  /* jshint ignore:line */
var RestException = require(
    '../../../../../lib/base/RestException');  /* jshint ignore:line */
var Twilio = require('../../../../../lib');  /* jshint ignore:line */


var client;
var holodeck;

describe('TrustProducts', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', 'AUTHTOKEN', {
      httpClient: holodeck
    });
  });
  it('should generate valid create request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var opts = {
        friendlyName: 'friendly_name',
        email: 'email',
        policySid: 'RNXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
      };
      var promise = client.trusthub.v1.trustProducts.create(opts);
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var url = 'https://trusthub.twilio.com/v1/TrustProducts';

      var values = {
        FriendlyName: 'friendly_name',
        Email: 'email',
        PolicySid: 'RNXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
      };
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
          'sid': 'BUaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'policy_sid': 'RNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'friendly_name': 'friendly_name',
          'status': 'draft',
          'email': 'email',
          'status_callback': 'http://www.example.com',
          'valid_until': null,
          'date_created': '2019-07-30T22:29:24Z',
          'date_updated': '2019-07-31T01:09:00Z',
          'url': 'https://trusthub.twilio.com/v1/TrustProducts/BUaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'links': {
              'trust_products_entity_assignments': 'https://trusthub.twilio.com/v1/TrustProducts/BUaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/EntityAssignments',
              'trust_products_evaluations': 'https://trusthub.twilio.com/v1/TrustProducts/BUaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Evaluations',
              'trust_products_channel_endpoint_assignment': 'https://trusthub.twilio.com/v1/TrustProducts/BUaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/ChannelEndpointAssignments'
          }
      };

      holodeck.mock(new Response(201, body));

      var opts = {
        friendlyName: 'friendly_name',
        email: 'email',
        policySid: 'RNXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
      };
      var promise = client.trusthub.v1.trustProducts.create(opts);
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
          'results': [
              {
                  'sid': 'BUaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'policy_sid': 'RNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'friendly_name': 'friendly_name',
                  'status': 'provisionally-approved',
                  'email': 'email',
                  'status_callback': 'http://www.example.com',
                  'valid_until': '2020-07-31T01:00:00Z',
                  'date_created': '2019-07-30T22:29:24Z',
                  'date_updated': '2019-07-31T01:09:00Z',
                  'url': 'https://trusthub.twilio.com/v1/TrustProducts/BUaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'links': {
                      'trust_products_entity_assignments': 'https://trusthub.twilio.com/v1/TrustProducts/BUaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/EntityAssignments',
                      'trust_products_evaluations': 'https://trusthub.twilio.com/v1/TrustProducts/BUaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Evaluations',
                      'trust_products_channel_endpoint_assignment': 'https://trusthub.twilio.com/v1/TrustProducts/BUaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/ChannelEndpointAssignments'
                  }
              }
          ],
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://trusthub.twilio.com/v1/TrustProducts?Status=draft&FriendlyName=friendly_name&PolicySid=RNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&PageSize=50&Page=0',
              'previous_page_url': null,
              'url': 'https://trusthub.twilio.com/v1/TrustProducts?Status=draft&FriendlyName=friendly_name&PolicySid=RNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&PageSize=50&Page=0',
              'next_page_url': null,
              'key': 'results'
          }
      };
      holodeck.mock(new Response(200, body));
      client.trusthub.v1.trustProducts.each(() => done());
    }
  );
  it('should treat the second arg as a callback',
    function(done) {
      var body = {
          'results': [
              {
                  'sid': 'BUaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'policy_sid': 'RNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'friendly_name': 'friendly_name',
                  'status': 'provisionally-approved',
                  'email': 'email',
                  'status_callback': 'http://www.example.com',
                  'valid_until': '2020-07-31T01:00:00Z',
                  'date_created': '2019-07-30T22:29:24Z',
                  'date_updated': '2019-07-31T01:09:00Z',
                  'url': 'https://trusthub.twilio.com/v1/TrustProducts/BUaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'links': {
                      'trust_products_entity_assignments': 'https://trusthub.twilio.com/v1/TrustProducts/BUaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/EntityAssignments',
                      'trust_products_evaluations': 'https://trusthub.twilio.com/v1/TrustProducts/BUaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Evaluations',
                      'trust_products_channel_endpoint_assignment': 'https://trusthub.twilio.com/v1/TrustProducts/BUaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/ChannelEndpointAssignments'
                  }
              }
          ],
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://trusthub.twilio.com/v1/TrustProducts?Status=draft&FriendlyName=friendly_name&PolicySid=RNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&PageSize=50&Page=0',
              'previous_page_url': null,
              'url': 'https://trusthub.twilio.com/v1/TrustProducts?Status=draft&FriendlyName=friendly_name&PolicySid=RNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&PageSize=50&Page=0',
              'next_page_url': null,
              'key': 'results'
          }
      };
      holodeck.mock(new Response(200, body));
      client.trusthub.v1.trustProducts.each({pageSize: 20}, () => done());
      holodeck.assertHasRequest(new Request({
          method: 'GET',
          url: 'https://trusthub.twilio.com/v1/TrustProducts',
          params: {PageSize: 20},
      }));
    }
  );
  it('should find the callback in the opts object',
    function(done) {
      var body = {
          'results': [
              {
                  'sid': 'BUaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'policy_sid': 'RNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'friendly_name': 'friendly_name',
                  'status': 'provisionally-approved',
                  'email': 'email',
                  'status_callback': 'http://www.example.com',
                  'valid_until': '2020-07-31T01:00:00Z',
                  'date_created': '2019-07-30T22:29:24Z',
                  'date_updated': '2019-07-31T01:09:00Z',
                  'url': 'https://trusthub.twilio.com/v1/TrustProducts/BUaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'links': {
                      'trust_products_entity_assignments': 'https://trusthub.twilio.com/v1/TrustProducts/BUaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/EntityAssignments',
                      'trust_products_evaluations': 'https://trusthub.twilio.com/v1/TrustProducts/BUaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Evaluations',
                      'trust_products_channel_endpoint_assignment': 'https://trusthub.twilio.com/v1/TrustProducts/BUaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/ChannelEndpointAssignments'
                  }
              }
          ],
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://trusthub.twilio.com/v1/TrustProducts?Status=draft&FriendlyName=friendly_name&PolicySid=RNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&PageSize=50&Page=0',
              'previous_page_url': null,
              'url': 'https://trusthub.twilio.com/v1/TrustProducts?Status=draft&FriendlyName=friendly_name&PolicySid=RNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&PageSize=50&Page=0',
              'next_page_url': null,
              'key': 'results'
          }
      };
      holodeck.mock(new Response(200, body));
      client.trusthub.v1.trustProducts.each({callback: () => done()}, () => fail('wrong callback!'));
    }
  );
  it('should generate valid list request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var promise = client.trusthub.v1.trustProducts.list();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var url = 'https://trusthub.twilio.com/v1/TrustProducts';

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid read_empty response',
    function(done) {
      var body = {
          'results': [],
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://trusthub.twilio.com/v1/TrustProducts?PageSize=50&Page=0',
              'previous_page_url': null,
              'url': 'https://trusthub.twilio.com/v1/TrustProducts?PageSize=50&Page=0',
              'next_page_url': null,
              'key': 'results'
          }
      };

      holodeck.mock(new Response(200, body));

      var promise = client.trusthub.v1.trustProducts.list();
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
          'results': [
              {
                  'sid': 'BUaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'policy_sid': 'RNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'friendly_name': 'friendly_name',
                  'status': 'provisionally-approved',
                  'email': 'email',
                  'status_callback': 'http://www.example.com',
                  'valid_until': '2020-07-31T01:00:00Z',
                  'date_created': '2019-07-30T22:29:24Z',
                  'date_updated': '2019-07-31T01:09:00Z',
                  'url': 'https://trusthub.twilio.com/v1/TrustProducts/BUaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'links': {
                      'trust_products_entity_assignments': 'https://trusthub.twilio.com/v1/TrustProducts/BUaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/EntityAssignments',
                      'trust_products_evaluations': 'https://trusthub.twilio.com/v1/TrustProducts/BUaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Evaluations',
                      'trust_products_channel_endpoint_assignment': 'https://trusthub.twilio.com/v1/TrustProducts/BUaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/ChannelEndpointAssignments'
                  }
              }
          ],
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://trusthub.twilio.com/v1/TrustProducts?Status=draft&FriendlyName=friendly_name&PolicySid=RNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&PageSize=50&Page=0',
              'previous_page_url': null,
              'url': 'https://trusthub.twilio.com/v1/TrustProducts?Status=draft&FriendlyName=friendly_name&PolicySid=RNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&PageSize=50&Page=0',
              'next_page_url': null,
              'key': 'results'
          }
      };

      holodeck.mock(new Response(200, body));

      var promise = client.trusthub.v1.trustProducts.list();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid fetch request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var promise = client.trusthub.v1.trustProducts('BUXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var sid = 'BUXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://trusthub.twilio.com/v1/TrustProducts/${sid}`;

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid fetch response',
    function(done) {
      var body = {
          'sid': 'BUaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'policy_sid': 'RNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'friendly_name': 'friendly_name',
          'status': 'draft',
          'valid_until': null,
          'email': 'email',
          'status_callback': 'http://www.example.com',
          'date_created': '2019-07-30T22:29:24Z',
          'date_updated': '2019-07-31T01:09:00Z',
          'url': 'https://trusthub.twilio.com/v1/TrustProducts/BUaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'links': {
              'trust_products_entity_assignments': 'https://trusthub.twilio.com/v1/TrustProducts/BUaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/EntityAssignments',
              'trust_products_evaluations': 'https://trusthub.twilio.com/v1/TrustProducts/BUaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Evaluations',
              'trust_products_channel_endpoint_assignment': 'https://trusthub.twilio.com/v1/TrustProducts/BUaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/ChannelEndpointAssignments'
          }
      };

      holodeck.mock(new Response(200, body));

      var promise = client.trusthub.v1.trustProducts('BUXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
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

      var promise = client.trusthub.v1.trustProducts('BUXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').update();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var sid = 'BUXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://trusthub.twilio.com/v1/TrustProducts/${sid}`;

      holodeck.assertHasRequest(new Request({
        method: 'POST',
        url: url
      }));
    }
  );
  it('should generate valid update response',
    function(done) {
      var body = {
          'sid': 'BUaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'policy_sid': 'RNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'friendly_name': 'friendly_name',
          'status': 'draft',
          'email': 'email',
          'status_callback': 'http://www.example.com',
          'valid_until': null,
          'date_created': '2019-07-30T22:29:24Z',
          'date_updated': '2019-07-31T01:09:00Z',
          'url': 'https://trusthub.twilio.com/v1/TrustProducts/BUaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'links': {
              'trust_products_entity_assignments': 'https://trusthub.twilio.com/v1/TrustProducts/BUaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/EntityAssignments',
              'trust_products_evaluations': 'https://trusthub.twilio.com/v1/TrustProducts/BUaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Evaluations',
              'trust_products_channel_endpoint_assignment': 'https://trusthub.twilio.com/v1/TrustProducts/BUaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/ChannelEndpointAssignments'
          }
      };

      holodeck.mock(new Response(200, body));

      var promise = client.trusthub.v1.trustProducts('BUXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').update();
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

      var promise = client.trusthub.v1.trustProducts('BUXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').remove();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var sid = 'BUXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://trusthub.twilio.com/v1/TrustProducts/${sid}`;

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

      var promise = client.trusthub.v1.trustProducts('BUXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').remove();
      promise.then(function(response) {
        expect(response).toBe(true);
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
});
