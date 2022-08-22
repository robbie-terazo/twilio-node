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

describe('RestoreAssistant', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', 'AUTHTOKEN', {
      httpClient: holodeck
    });
  });
  it('should generate valid update request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var opts = {'assistant': 'UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'};
      var promise = client.autopilot.v1.restoreAssistant.update(opts);
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var url = 'https://autopilot.twilio.com/v1/Assistants/Restore';

      var values = {'Assistant': 'UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', };
      holodeck.assertHasRequest(new Request({
          method: 'POST',
          url: url,
          data: values
      }));
    }
  );
  it('should generate valid update response',
    function(done) {
      var body = {
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'sid': 'UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'date_created': '2017-07-04T08:34:00Z',
          'date_updated': '2017-07-04T08:34:00Z',
          'unique_name': 'so-so-unique',
          'friendly_name': 'so so friendly',
          'needs_model_build': false,
          'latest_model_build_sid': null,
          'log_queries': true,
          'development_stage': 'in-development',
          'callback_url': 'https://example.com/callback_url',
          'callback_events': 'model_build_completed model_build_failed'
      };

      holodeck.mock(new Response(200, body));

      var opts = {'assistant': 'UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'};
      var promise = client.autopilot.v1.restoreAssistant.update(opts);
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
});
