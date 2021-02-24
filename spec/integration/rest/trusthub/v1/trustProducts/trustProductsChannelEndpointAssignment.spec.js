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

describe('TrustProductsChannelEndpointAssignment', function() {
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
        channelEndpointType: 'channel_endpoint_type',
        channelEndpointSid: 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
      };
      var promise = client.trusthub.v1.trustProducts('BUXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                      .trustProductsChannelEndpointAssignment.create(opts);
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var trustProductSid = 'BUXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://trusthub.twilio.com/v1/TrustProducts/${trustProductSid}/ChannelEndpointAssignments`;

      var values = {
        ChannelEndpointType: 'channel_endpoint_type',
        ChannelEndpointSid: 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
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
          'sid': 'RAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'trust_product_sid': 'BUaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'channel_endpoint_sid': 'PNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'channel_endpoint_type': 'phone-number',
          'date_created': '2019-07-31T02:34:41Z',
          'url': 'https://trusthub.twilio.com/v1/TrustProducts/BUaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/ChannelEndpointAssignments/RAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };

      holodeck.mock(new Response(201, body));

      var opts = {
        channelEndpointType: 'channel_endpoint_type',
        channelEndpointSid: 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
      };
      var promise = client.trusthub.v1.trustProducts('BUXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                      .trustProductsChannelEndpointAssignment.create(opts);
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
                  'sid': 'RAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'trust_product_sid': 'BUaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'channel_endpoint_sid': 'PNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'channel_endpoint_type': 'phone-number',
                  'date_created': '2019-07-31T02:34:41Z',
                  'url': 'https://trusthub.twilio.com/v1/TrustProducts/BUaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/ChannelEndpointAssignments/RAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ],
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://trusthub.twilio.com/v1/TrustProducts/BUaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/ChannelEndpointAssignments?ChannelEndpointSid=PNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&PageSize=50&Page=0',
              'previous_page_url': null,
              'url': 'https://trusthub.twilio.com/v1/TrustProducts/BUaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/ChannelEndpointAssignments?ChannelEndpointSid=PNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&PageSize=50&Page=0',
              'next_page_url': null,
              'key': 'results'
          }
      };
      holodeck.mock(new Response(200, body));
      client.trusthub.v1.trustProducts('BUXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                        .trustProductsChannelEndpointAssignment.each(() => done());
    }
  );
  it('should treat the second arg as a callback',
    function(done) {
      var body = {
          'results': [
              {
                  'sid': 'RAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'trust_product_sid': 'BUaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'channel_endpoint_sid': 'PNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'channel_endpoint_type': 'phone-number',
                  'date_created': '2019-07-31T02:34:41Z',
                  'url': 'https://trusthub.twilio.com/v1/TrustProducts/BUaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/ChannelEndpointAssignments/RAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ],
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://trusthub.twilio.com/v1/TrustProducts/BUaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/ChannelEndpointAssignments?ChannelEndpointSid=PNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&PageSize=50&Page=0',
              'previous_page_url': null,
              'url': 'https://trusthub.twilio.com/v1/TrustProducts/BUaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/ChannelEndpointAssignments?ChannelEndpointSid=PNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&PageSize=50&Page=0',
              'next_page_url': null,
              'key': 'results'
          }
      };
      holodeck.mock(new Response(200, body));
      client.trusthub.v1.trustProducts('BUXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                        .trustProductsChannelEndpointAssignment.each({pageSize: 20}, () => done());
      holodeck.assertHasRequest(new Request({
          method: 'GET',
          url: 'https://trusthub.twilio.com/v1/TrustProducts/${trustProductSid}/ChannelEndpointAssignments',
          params: {PageSize: 20},
      }));
    }
  );
  it('should find the callback in the opts object',
    function(done) {
      var body = {
          'results': [
              {
                  'sid': 'RAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'trust_product_sid': 'BUaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'channel_endpoint_sid': 'PNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'channel_endpoint_type': 'phone-number',
                  'date_created': '2019-07-31T02:34:41Z',
                  'url': 'https://trusthub.twilio.com/v1/TrustProducts/BUaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/ChannelEndpointAssignments/RAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ],
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://trusthub.twilio.com/v1/TrustProducts/BUaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/ChannelEndpointAssignments?ChannelEndpointSid=PNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&PageSize=50&Page=0',
              'previous_page_url': null,
              'url': 'https://trusthub.twilio.com/v1/TrustProducts/BUaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/ChannelEndpointAssignments?ChannelEndpointSid=PNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&PageSize=50&Page=0',
              'next_page_url': null,
              'key': 'results'
          }
      };
      holodeck.mock(new Response(200, body));
      client.trusthub.v1.trustProducts('BUXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                        .trustProductsChannelEndpointAssignment.each({callback: () => done()}, () => fail('wrong callback!'));
    }
  );
  it('should generate valid list request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var promise = client.trusthub.v1.trustProducts('BUXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                      .trustProductsChannelEndpointAssignment.list();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var trustProductSid = 'BUXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://trusthub.twilio.com/v1/TrustProducts/${trustProductSid}/ChannelEndpointAssignments`;

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
              'first_page_url': 'https://trusthub.twilio.com/v1/TrustProducts/BUaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/ChannelEndpointAssignments?PageSize=50&Page=0',
              'previous_page_url': null,
              'url': 'https://trusthub.twilio.com/v1/TrustProducts/BUaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/ChannelEndpointAssignments?PageSize=50&Page=0',
              'next_page_url': null,
              'key': 'results'
          }
      };

      holodeck.mock(new Response(200, body));

      var promise = client.trusthub.v1.trustProducts('BUXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                      .trustProductsChannelEndpointAssignment.list();
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
                  'sid': 'RAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'trust_product_sid': 'BUaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'channel_endpoint_sid': 'PNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'channel_endpoint_type': 'phone-number',
                  'date_created': '2019-07-31T02:34:41Z',
                  'url': 'https://trusthub.twilio.com/v1/TrustProducts/BUaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/ChannelEndpointAssignments/RAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ],
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://trusthub.twilio.com/v1/TrustProducts/BUaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/ChannelEndpointAssignments?ChannelEndpointSid=PNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&PageSize=50&Page=0',
              'previous_page_url': null,
              'url': 'https://trusthub.twilio.com/v1/TrustProducts/BUaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/ChannelEndpointAssignments?ChannelEndpointSid=PNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&PageSize=50&Page=0',
              'next_page_url': null,
              'key': 'results'
          }
      };

      holodeck.mock(new Response(200, body));

      var promise = client.trusthub.v1.trustProducts('BUXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                      .trustProductsChannelEndpointAssignment.list();
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

      var promise = client.trusthub.v1.trustProducts('BUXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                      .trustProductsChannelEndpointAssignment('RAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var trustProductSid = 'BUXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var sid = 'RAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://trusthub.twilio.com/v1/TrustProducts/${trustProductSid}/ChannelEndpointAssignments/${sid}`;

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid fetch response',
    function(done) {
      var body = {
          'sid': 'RAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'trust_product_sid': 'BUaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'channel_endpoint_sid': 'PNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'channel_endpoint_type': 'phone-number',
          'date_created': '2019-07-31T02:34:41Z',
          'url': 'https://trusthub.twilio.com/v1/TrustProducts/BUaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/ChannelEndpointAssignments/RAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };

      holodeck.mock(new Response(200, body));

      var promise = client.trusthub.v1.trustProducts('BUXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                      .trustProductsChannelEndpointAssignment('RAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
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

      var promise = client.trusthub.v1.trustProducts('BUXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                      .trustProductsChannelEndpointAssignment('RAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').remove();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var trustProductSid = 'BUXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var sid = 'RAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://trusthub.twilio.com/v1/TrustProducts/${trustProductSid}/ChannelEndpointAssignments/${sid}`;

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

      var promise = client.trusthub.v1.trustProducts('BUXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                      .trustProductsChannelEndpointAssignment('RAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').remove();
      promise.then(function(response) {
        expect(response).toBe(true);
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
});
