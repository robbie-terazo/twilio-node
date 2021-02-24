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

describe('Policies', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', 'AUTHTOKEN', {
      httpClient: holodeck
    });
  });
  it('should treat the first each arg as a callback',
    function(done) {
      var body = {
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://trusthub.twilio.com/v1/Policies?PageSize=50&Page=0',
              'previous_page_url': null,
              'url': 'https://trusthub.twilio.com/v1/Policies?PageSize=50&Page=0',
              'next_page_url': null,
              'key': 'results'
          },
          'results': [
              {
                  'url': 'https://trusthub.twilio.com/v1/Policies/RNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'requirements': {
                      'end_user': [
                          {
                              'url': '/EndUserTypes/customer_profile_business_information',
                              'fields': [
                                  'business_type',
                                  'business_registration_number',
                                  'business_name',
                                  'business_registration_identifier',
                                  'business_identity',
                                  'business_industry',
                                  'website_url',
                                  'business_regions_of_operation',
                                  'social_media_profile_urls'
                              ],
                              'type': 'customer_profile_business_information',
                              'name': 'Business Information',
                              'requirement_name': 'customer_profile_business_information'
                          },
                          {
                              'url': '/EndUserTypes/authorized_representative_1',
                              'fields': [
                                  'first_name',
                                  'last_name',
                                  'email',
                                  'phone_number',
                                  'business_title',
                                  'job_position'
                              ],
                              'type': 'authorized_representative_1',
                              'name': 'Authorized Representative 1',
                              'requirement_name': 'authorized_representative_1'
                          },
                          {
                              'url': '/EndUserTypes/authorized_representative_2',
                              'fields': [
                                  'first_name',
                                  'last_name',
                                  'email',
                                  'phone_number',
                                  'business_title',
                                  'job_position'
                              ],
                              'type': 'authorized_representative_2',
                              'name': 'Authorized Representative 2',
                              'requirement_name': 'authorized_representative_2'
                          }
                      ],
                      'supporting_trust_products': [],
                      'supporting_document': [
                          [
                              {
                                  'description': 'Customer Profile HQ Physical Address',
                                  'type': 'document',
                                  'name': 'Physical Business Address',
                                  'accepted_documents': [
                                      {
                                          'url': '/SupportingDocumentTypes/customer_profile_address',
                                          'fields': [
                                              'address_sids'
                                          ],
                                          'type': 'customer_profile_address',
                                          'name': 'Physical Business Address'
                                      }
                                  ],
                                  'requirement_name': 'customer_profile_address'
                              }
                          ]
                      ],
                      'supporting_customer_profiles': []
                  },
                  'friendly_name': 'Primary Customer Profile of type Business',
                  'sid': 'RNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ]
      };
      holodeck.mock(new Response(200, body));
      client.trusthub.v1.policies.each(() => done());
    }
  );
  it('should treat the second arg as a callback',
    function(done) {
      var body = {
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://trusthub.twilio.com/v1/Policies?PageSize=50&Page=0',
              'previous_page_url': null,
              'url': 'https://trusthub.twilio.com/v1/Policies?PageSize=50&Page=0',
              'next_page_url': null,
              'key': 'results'
          },
          'results': [
              {
                  'url': 'https://trusthub.twilio.com/v1/Policies/RNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'requirements': {
                      'end_user': [
                          {
                              'url': '/EndUserTypes/customer_profile_business_information',
                              'fields': [
                                  'business_type',
                                  'business_registration_number',
                                  'business_name',
                                  'business_registration_identifier',
                                  'business_identity',
                                  'business_industry',
                                  'website_url',
                                  'business_regions_of_operation',
                                  'social_media_profile_urls'
                              ],
                              'type': 'customer_profile_business_information',
                              'name': 'Business Information',
                              'requirement_name': 'customer_profile_business_information'
                          },
                          {
                              'url': '/EndUserTypes/authorized_representative_1',
                              'fields': [
                                  'first_name',
                                  'last_name',
                                  'email',
                                  'phone_number',
                                  'business_title',
                                  'job_position'
                              ],
                              'type': 'authorized_representative_1',
                              'name': 'Authorized Representative 1',
                              'requirement_name': 'authorized_representative_1'
                          },
                          {
                              'url': '/EndUserTypes/authorized_representative_2',
                              'fields': [
                                  'first_name',
                                  'last_name',
                                  'email',
                                  'phone_number',
                                  'business_title',
                                  'job_position'
                              ],
                              'type': 'authorized_representative_2',
                              'name': 'Authorized Representative 2',
                              'requirement_name': 'authorized_representative_2'
                          }
                      ],
                      'supporting_trust_products': [],
                      'supporting_document': [
                          [
                              {
                                  'description': 'Customer Profile HQ Physical Address',
                                  'type': 'document',
                                  'name': 'Physical Business Address',
                                  'accepted_documents': [
                                      {
                                          'url': '/SupportingDocumentTypes/customer_profile_address',
                                          'fields': [
                                              'address_sids'
                                          ],
                                          'type': 'customer_profile_address',
                                          'name': 'Physical Business Address'
                                      }
                                  ],
                                  'requirement_name': 'customer_profile_address'
                              }
                          ]
                      ],
                      'supporting_customer_profiles': []
                  },
                  'friendly_name': 'Primary Customer Profile of type Business',
                  'sid': 'RNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ]
      };
      holodeck.mock(new Response(200, body));
      client.trusthub.v1.policies.each({pageSize: 20}, () => done());
      holodeck.assertHasRequest(new Request({
          method: 'GET',
          url: 'https://trusthub.twilio.com/v1/Policies',
          params: {PageSize: 20},
      }));
    }
  );
  it('should find the callback in the opts object',
    function(done) {
      var body = {
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://trusthub.twilio.com/v1/Policies?PageSize=50&Page=0',
              'previous_page_url': null,
              'url': 'https://trusthub.twilio.com/v1/Policies?PageSize=50&Page=0',
              'next_page_url': null,
              'key': 'results'
          },
          'results': [
              {
                  'url': 'https://trusthub.twilio.com/v1/Policies/RNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'requirements': {
                      'end_user': [
                          {
                              'url': '/EndUserTypes/customer_profile_business_information',
                              'fields': [
                                  'business_type',
                                  'business_registration_number',
                                  'business_name',
                                  'business_registration_identifier',
                                  'business_identity',
                                  'business_industry',
                                  'website_url',
                                  'business_regions_of_operation',
                                  'social_media_profile_urls'
                              ],
                              'type': 'customer_profile_business_information',
                              'name': 'Business Information',
                              'requirement_name': 'customer_profile_business_information'
                          },
                          {
                              'url': '/EndUserTypes/authorized_representative_1',
                              'fields': [
                                  'first_name',
                                  'last_name',
                                  'email',
                                  'phone_number',
                                  'business_title',
                                  'job_position'
                              ],
                              'type': 'authorized_representative_1',
                              'name': 'Authorized Representative 1',
                              'requirement_name': 'authorized_representative_1'
                          },
                          {
                              'url': '/EndUserTypes/authorized_representative_2',
                              'fields': [
                                  'first_name',
                                  'last_name',
                                  'email',
                                  'phone_number',
                                  'business_title',
                                  'job_position'
                              ],
                              'type': 'authorized_representative_2',
                              'name': 'Authorized Representative 2',
                              'requirement_name': 'authorized_representative_2'
                          }
                      ],
                      'supporting_trust_products': [],
                      'supporting_document': [
                          [
                              {
                                  'description': 'Customer Profile HQ Physical Address',
                                  'type': 'document',
                                  'name': 'Physical Business Address',
                                  'accepted_documents': [
                                      {
                                          'url': '/SupportingDocumentTypes/customer_profile_address',
                                          'fields': [
                                              'address_sids'
                                          ],
                                          'type': 'customer_profile_address',
                                          'name': 'Physical Business Address'
                                      }
                                  ],
                                  'requirement_name': 'customer_profile_address'
                              }
                          ]
                      ],
                      'supporting_customer_profiles': []
                  },
                  'friendly_name': 'Primary Customer Profile of type Business',
                  'sid': 'RNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ]
      };
      holodeck.mock(new Response(200, body));
      client.trusthub.v1.policies.each({callback: () => done()}, () => fail('wrong callback!'));
    }
  );
  it('should generate valid list request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var promise = client.trusthub.v1.policies.list();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var url = 'https://trusthub.twilio.com/v1/Policies';

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
              'first_page_url': 'https://trusthub.twilio.com/v1/Policies?PageSize=50&Page=0',
              'previous_page_url': null,
              'url': 'https://trusthub.twilio.com/v1/Policies?PageSize=50&Page=0',
              'next_page_url': null,
              'key': 'results'
          }
      };

      holodeck.mock(new Response(200, body));

      var promise = client.trusthub.v1.policies.list();
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
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://trusthub.twilio.com/v1/Policies?PageSize=50&Page=0',
              'previous_page_url': null,
              'url': 'https://trusthub.twilio.com/v1/Policies?PageSize=50&Page=0',
              'next_page_url': null,
              'key': 'results'
          },
          'results': [
              {
                  'url': 'https://trusthub.twilio.com/v1/Policies/RNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'requirements': {
                      'end_user': [
                          {
                              'url': '/EndUserTypes/customer_profile_business_information',
                              'fields': [
                                  'business_type',
                                  'business_registration_number',
                                  'business_name',
                                  'business_registration_identifier',
                                  'business_identity',
                                  'business_industry',
                                  'website_url',
                                  'business_regions_of_operation',
                                  'social_media_profile_urls'
                              ],
                              'type': 'customer_profile_business_information',
                              'name': 'Business Information',
                              'requirement_name': 'customer_profile_business_information'
                          },
                          {
                              'url': '/EndUserTypes/authorized_representative_1',
                              'fields': [
                                  'first_name',
                                  'last_name',
                                  'email',
                                  'phone_number',
                                  'business_title',
                                  'job_position'
                              ],
                              'type': 'authorized_representative_1',
                              'name': 'Authorized Representative 1',
                              'requirement_name': 'authorized_representative_1'
                          },
                          {
                              'url': '/EndUserTypes/authorized_representative_2',
                              'fields': [
                                  'first_name',
                                  'last_name',
                                  'email',
                                  'phone_number',
                                  'business_title',
                                  'job_position'
                              ],
                              'type': 'authorized_representative_2',
                              'name': 'Authorized Representative 2',
                              'requirement_name': 'authorized_representative_2'
                          }
                      ],
                      'supporting_trust_products': [],
                      'supporting_document': [
                          [
                              {
                                  'description': 'Customer Profile HQ Physical Address',
                                  'type': 'document',
                                  'name': 'Physical Business Address',
                                  'accepted_documents': [
                                      {
                                          'url': '/SupportingDocumentTypes/customer_profile_address',
                                          'fields': [
                                              'address_sids'
                                          ],
                                          'type': 'customer_profile_address',
                                          'name': 'Physical Business Address'
                                      }
                                  ],
                                  'requirement_name': 'customer_profile_address'
                              }
                          ]
                      ],
                      'supporting_customer_profiles': []
                  },
                  'friendly_name': 'Primary Customer Profile of type Business',
                  'sid': 'RNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ]
      };

      holodeck.mock(new Response(200, body));

      var promise = client.trusthub.v1.policies.list();
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

      var promise = client.trusthub.v1.policies('RNXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var sid = 'RNXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://trusthub.twilio.com/v1/Policies/${sid}`;

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid fetch response',
    function(done) {
      var body = {
          'url': 'https://trusthub.twilio.com/v1/Policies/RNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'requirements': {
              'end_user': [
                  {
                      'url': '/EndUserTypes/customer_profile_business_information',
                      'fields': [
                          'business_type',
                          'business_registration_number',
                          'business_name',
                          'business_registration_identifier',
                          'business_identity',
                          'business_industry',
                          'website_url',
                          'business_regions_of_operation',
                          'social_media_profile_urls'
                      ],
                      'type': 'customer_profile_business_information',
                      'name': 'Business Information',
                      'requirement_name': 'customer_profile_business_information'
                  },
                  {
                      'url': '/EndUserTypes/authorized_representative_1',
                      'fields': [
                          'first_name',
                          'last_name',
                          'email',
                          'phone_number',
                          'business_title',
                          'job_position'
                      ],
                      'type': 'authorized_representative_1',
                      'name': 'Authorized Representative 1',
                      'requirement_name': 'authorized_representative_1'
                  },
                  {
                      'url': '/EndUserTypes/authorized_representative_2',
                      'fields': [
                          'first_name',
                          'last_name',
                          'email',
                          'phone_number',
                          'business_title',
                          'job_position'
                      ],
                      'type': 'authorized_representative_2',
                      'name': 'Authorized Representative 2',
                      'requirement_name': 'authorized_representative_2'
                  }
              ],
              'supporting_trust_products': [],
              'supporting_document': [
                  [
                      {
                          'description': 'Customer Profile HQ Physical Address',
                          'type': 'document',
                          'name': 'Physical Business Address',
                          'accepted_documents': [
                              {
                                  'url': '/SupportingDocumentTypes/customer_profile_address',
                                  'fields': [
                                      'address_sids'
                                  ],
                                  'type': 'customer_profile_address',
                                  'name': 'Physical Business Address'
                              }
                          ],
                          'requirement_name': 'customer_profile_address'
                      }
                  ]
              ],
              'supporting_customer_profiles': []
          },
          'friendly_name': 'Primary Customer Profile of type Business',
          'sid': 'RNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };

      holodeck.mock(new Response(200, body));

      var promise = client.trusthub.v1.policies('RNXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
});
