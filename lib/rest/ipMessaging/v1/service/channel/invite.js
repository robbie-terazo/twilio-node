'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var Q = require('q');  /* jshint ignore:line */
var _ = require('lodash');  /* jshint ignore:line */
var util = require('util');  /* jshint ignore:line */
var Page = require('../../../../../base/Page');  /* jshint ignore:line */
var deserialize = require(
    '../../../../../base/deserialize');  /* jshint ignore:line */
var serialize = require(
    '../../../../../base/serialize');  /* jshint ignore:line */
var values = require('../../../../../base/values');  /* jshint ignore:line */

var InviteList;
var InvitePage;
var InviteInstance;
var InviteContext;

/* jshint ignore:start */
/**
 * Initialize the InviteList
 *
 * @constructor Twilio.IpMessaging.V1.ServiceContext.ChannelContext.InviteList
 *
 * @param {Twilio.IpMessaging.V1} version - Version of the resource
 * @param {string} serviceSid - The service_sid
 * @param {string} channelSid - The channel_sid
 */
/* jshint ignore:end */
InviteList = function InviteList(version, serviceSid, channelSid) {
  /* jshint ignore:start */
  /**
   * @function invites
   * @memberof Twilio.IpMessaging.V1.ServiceContext.ChannelContext#
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.IpMessaging.V1.ServiceContext.ChannelContext.InviteContext}
   */
  /* jshint ignore:end */
  function InviteListInstance(sid) {
    return InviteListInstance.get(sid);
  }

  InviteListInstance._version = version;
  // Path Solution
  InviteListInstance._solution = {serviceSid: serviceSid, channelSid: channelSid};
  InviteListInstance._uri = `/Services/${serviceSid}/Channels/${channelSid}/Invites`;
  /* jshint ignore:start */
  /**
   * create a InviteInstance
   *
   * @function create
   * @memberof Twilio.IpMessaging.V1.ServiceContext.ChannelContext.InviteList#
   *
   * @param {object} opts - Options for request
   * @param {string} opts.identity - The identity
   * @param {string} [opts.roleSid] - The role_sid
   * @param {function} [callback] - Callback to handle processed record
   *
   * @returns {Promise} Resolves to processed InviteInstance
   */
  /* jshint ignore:end */
  InviteListInstance.create = function create(opts, callback) {
    if (_.isUndefined(opts)) {
      throw new Error('Required parameter "opts" missing.');
    }
    if (_.isUndefined(opts.identity)) {
      throw new Error('Required parameter "opts.identity" missing.');
    }

    var deferred = Q.defer();
    var data = values.of({'Identity': _.get(opts, 'identity'), 'RoleSid': _.get(opts, 'roleSid')});

    var promise = this._version.create({uri: this._uri, method: 'POST', data: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new InviteInstance(
        this._version,
        payload,
        this._solution.serviceSid,
        this._solution.channelSid,
        this._solution.sid
      ));
    }.bind(this));

    promise.catch(function(error) {
      deferred.reject(error);
    });

    if (_.isFunction(callback)) {
      deferred.promise.nodeify(callback);
    }

    return deferred.promise;
  };

  /* jshint ignore:start */
  /**
   * Streams InviteInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory
   * efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @function each
   * @memberof Twilio.IpMessaging.V1.ServiceContext.ChannelContext.InviteList#
   *
   * @param {object} [opts] - Options for request
   * @param {string|list} [opts.identity] - The identity
   * @param {number} [opts.limit] -
   *         Upper limit for the number of records to return.
   *         each() guarantees never to return more than limit.
   *         Default is no limit
   * @param {number} [opts.pageSize] -
   *         Number of records to fetch per request,
   *         when not set will use the default value of 50 records.
   *         If no pageSize is defined but a limit is defined,
   *         each() will attempt to read the limit with the most efficient
   *         page size, i.e. min(limit, 1000)
   * @param {Function} [opts.callback] -
   *         Function to process each record. If this and a positional
   *         callback are passed, this one will be used
   * @param {Function} [opts.done] -
   *          Function to be called upon completion of streaming
   * @param {Function} [callback] - Function to process each record
   */
  /* jshint ignore:end */
  InviteListInstance.each = function each(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};
    if (opts.callback) {
      callback = opts.callback;
    }
    if (_.isUndefined(callback)) {
      throw new Error('Callback function must be provided');
    }

    var done = false;
    var currentPage = 1;
    var currentResource = 0;
    var limits = this._version.readLimits({
      limit: opts.limit,
      pageSize: opts.pageSize
    });

    function onComplete(error) {
      done = true;
      if (_.isFunction(opts.done)) {
        opts.done(error);
      }
    }

    function fetchNextPage(fn) {
      var promise = fn();
      if (_.isUndefined(promise)) {
        onComplete();
        return;
      }

      promise.then(function(page) {
        _.each(page.instances, function(instance) {
          if (done || (!_.isUndefined(opts.limit) && currentResource >= opts.limit)) {
            done = true;
            return false;
          }

          currentResource++;
          callback(instance, onComplete);
        });

        if (!done) {
          currentPage++;
          fetchNextPage(_.bind(page.nextPage, page));
        } else {
          onComplete();
        }
      });

      promise.catch(onComplete);
    }

    fetchNextPage(_.bind(this.page, this, _.merge(opts, limits)));
  };

  /* jshint ignore:start */
  /**
   * Lists InviteInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @function list
   * @memberof Twilio.IpMessaging.V1.ServiceContext.ChannelContext.InviteList#
   *
   * @param {object} [opts] - Options for request
   * @param {string|list} [opts.identity] - The identity
   * @param {number} [opts.limit] -
   *         Upper limit for the number of records to return.
   *         list() guarantees never to return more than limit.
   *         Default is no limit
   * @param {number} [opts.pageSize] -
   *         Number of records to fetch per request,
   *         when not set will use the default value of 50 records.
   *         If no page_size is defined but a limit is defined,
   *         list() will attempt to read the limit with the most
   *         efficient page size, i.e. min(limit, 1000)
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  InviteListInstance.list = function list(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};
    var deferred = Q.defer();
    var allResources = [];
    opts.callback = function(resource, done) {
      allResources.push(resource);

      if (!_.isUndefined(opts.limit) && allResources.length === opts.limit) {
        done();
      }
    };

    opts.done = function(error) {
      if (_.isUndefined(error)) {
        deferred.resolve(allResources);
      } else {
        deferred.reject(error);
      }
    };

    if (_.isFunction(callback)) {
      deferred.promise.nodeify(callback);
    }

    this.each(opts);
    return deferred.promise;
  };

  /* jshint ignore:start */
  /**
   * Retrieve a single page of InviteInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @function page
   * @memberof Twilio.IpMessaging.V1.ServiceContext.ChannelContext.InviteList#
   *
   * @param {object} [opts] - Options for request
   * @param {string|list} [opts.identity] - The identity
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  InviteListInstance.page = function page(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({
      'Identity': serialize.map(_.get(opts, 'identity'), function(e) { return e; }),
      'PageToken': opts.pageToken,
      'Page': opts.pageNumber,
      'PageSize': opts.pageSize
    });

    var promise = this._version.page({uri: this._uri, method: 'GET', params: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new InvitePage(this._version, payload, this._solution));
    }.bind(this));

    promise.catch(function(error) {
      deferred.reject(error);
    });

    if (_.isFunction(callback)) {
      deferred.promise.nodeify(callback);
    }

    return deferred.promise;
  };

  /* jshint ignore:start */
  /**
   * Retrieve a single target page of InviteInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @function getPage
   * @memberof Twilio.IpMessaging.V1.ServiceContext.ChannelContext.InviteList#
   *
   * @param {string} [targetUrl] - API-generated URL for the requested results page
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  InviteListInstance.getPage = function getPage(targetUrl, callback) {
    var deferred = Q.defer();

    var promise = this._version._domain.twilio.request({method: 'GET', uri: targetUrl});

    promise = promise.then(function(payload) {
      deferred.resolve(new InvitePage(this._version, payload, this._solution));
    }.bind(this));

    promise.catch(function(error) {
      deferred.reject(error);
    });

    if (_.isFunction(callback)) {
      deferred.promise.nodeify(callback);
    }

    return deferred.promise;
  };

  /* jshint ignore:start */
  /**
   * Constructs a invite
   *
   * @function get
   * @memberof Twilio.IpMessaging.V1.ServiceContext.ChannelContext.InviteList#
   *
   * @param {string} sid - The sid
   *
   * @returns {Twilio.IpMessaging.V1.ServiceContext.ChannelContext.InviteContext}
   */
  /* jshint ignore:end */
  InviteListInstance.get = function get(sid) {
    return new InviteContext(this._version, this._solution.serviceSid, this._solution.channelSid, sid);
  };

  /* jshint ignore:start */
  /**
   * Provide a user-friendly representation
   *
   * @function toJSON
   * @memberof Twilio.IpMessaging.V1.ServiceContext.ChannelContext.InviteList#
   *
   * @returns Object
   */
  /* jshint ignore:end */
  InviteListInstance.toJSON = function toJSON() {
    return this._solution;
  };

  InviteListInstance[util.inspect.custom] = function inspect(depth, options) {
    return util.inspect(this.toJSON(), options);
  };

  return InviteListInstance;
};


/* jshint ignore:start */
/**
 * Initialize the InvitePage
 *
 * @constructor Twilio.IpMessaging.V1.ServiceContext.ChannelContext.InvitePage
 *
 * @param {V1} version - Version of the resource
 * @param {Response<string>} response - Response from the API
 * @param {InviteSolution} solution - Path solution
 *
 * @returns InvitePage
 */
/* jshint ignore:end */
InvitePage = function InvitePage(version, response, solution) {
  // Path Solution
  this._solution = solution;

  Page.prototype.constructor.call(this, version, response, this._solution);
};

_.extend(InvitePage.prototype, Page.prototype);
InvitePage.prototype.constructor = InvitePage;

/* jshint ignore:start */
/**
 * Build an instance of InviteInstance
 *
 * @function getInstance
 * @memberof Twilio.IpMessaging.V1.ServiceContext.ChannelContext.InvitePage#
 *
 * @param {InvitePayload} payload - Payload response from the API
 *
 * @returns InviteInstance
 */
/* jshint ignore:end */
InvitePage.prototype.getInstance = function getInstance(payload) {
  return new InviteInstance(
    this._version,
    payload,
    this._solution.serviceSid,
    this._solution.channelSid
  );
};

/* jshint ignore:start */
/**
 * Provide a user-friendly representation
 *
 * @function toJSON
 * @memberof Twilio.IpMessaging.V1.ServiceContext.ChannelContext.InvitePage#
 *
 * @returns Object
 */
/* jshint ignore:end */
InvitePage.prototype.toJSON = function toJSON() {
  let clone = {};
  _.forOwn(this, function(value, key) {
    if (!_.startsWith(key, '_') && ! _.isFunction(value)) {
      clone[key] = value;
    }
  });
  return clone;
};

InvitePage.prototype[util.inspect.custom] = function inspect(depth, options) {
  return util.inspect(this.toJSON(), options);
};


/* jshint ignore:start */
/**
 * Initialize the InviteContext
 *
 * @constructor Twilio.IpMessaging.V1.ServiceContext.ChannelContext.InviteInstance
 *
 * @property {string} sid - The sid
 * @property {string} accountSid - The account_sid
 * @property {string} channelSid - The channel_sid
 * @property {string} serviceSid - The service_sid
 * @property {string} identity - The identity
 * @property {Date} dateCreated - The date_created
 * @property {Date} dateUpdated - The date_updated
 * @property {string} roleSid - The role_sid
 * @property {string} createdBy - The created_by
 * @property {string} url - The url
 *
 * @param {V1} version - Version of the resource
 * @param {InvitePayload} payload - The instance payload
 * @param {sid} serviceSid - The service_sid
 * @param {sid} channelSid - The channel_sid
 * @param {sid} sid - The sid
 */
/* jshint ignore:end */
InviteInstance = function InviteInstance(version, payload, serviceSid,
                                          channelSid, sid) {
  this._version = version;

  // Marshaled Properties
  this.sid = payload.sid; // jshint ignore:line
  this.accountSid = payload.account_sid; // jshint ignore:line
  this.channelSid = payload.channel_sid; // jshint ignore:line
  this.serviceSid = payload.service_sid; // jshint ignore:line
  this.identity = payload.identity; // jshint ignore:line
  this.dateCreated = deserialize.iso8601DateTime(payload.date_created); // jshint ignore:line
  this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated); // jshint ignore:line
  this.roleSid = payload.role_sid; // jshint ignore:line
  this.createdBy = payload.created_by; // jshint ignore:line
  this.url = payload.url; // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {serviceSid: serviceSid, channelSid: channelSid, sid: sid || this.sid, };
};

Object.defineProperty(InviteInstance.prototype,
  '_proxy', {
    get: function() {
      if (!this._context) {
        this._context = new InviteContext(
          this._version,
          this._solution.serviceSid,
          this._solution.channelSid,
          this._solution.sid
        );
      }

      return this._context;
    }
});

/* jshint ignore:start */
/**
 * fetch a InviteInstance
 *
 * @function fetch
 * @memberof Twilio.IpMessaging.V1.ServiceContext.ChannelContext.InviteInstance#
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed InviteInstance
 */
/* jshint ignore:end */
InviteInstance.prototype.fetch = function fetch(callback) {
  return this._proxy.fetch(callback);
};

/* jshint ignore:start */
/**
 * remove a InviteInstance
 *
 * @function remove
 * @memberof Twilio.IpMessaging.V1.ServiceContext.ChannelContext.InviteInstance#
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed InviteInstance
 */
/* jshint ignore:end */
InviteInstance.prototype.remove = function remove(callback) {
  return this._proxy.remove(callback);
};

/* jshint ignore:start */
/**
 * Provide a user-friendly representation
 *
 * @function toJSON
 * @memberof Twilio.IpMessaging.V1.ServiceContext.ChannelContext.InviteInstance#
 *
 * @returns Object
 */
/* jshint ignore:end */
InviteInstance.prototype.toJSON = function toJSON() {
  let clone = {};
  _.forOwn(this, function(value, key) {
    if (!_.startsWith(key, '_') && ! _.isFunction(value)) {
      clone[key] = value;
    }
  });
  return clone;
};

InviteInstance.prototype[util.inspect.custom] = function inspect(depth, options)
    {
  return util.inspect(this.toJSON(), options);
};


/* jshint ignore:start */
/**
 * Initialize the InviteContext
 *
 * @constructor Twilio.IpMessaging.V1.ServiceContext.ChannelContext.InviteContext
 *
 * @param {V1} version - Version of the resource
 * @param {sid} serviceSid - The service_sid
 * @param {sid_like} channelSid - The channel_sid
 * @param {sid} sid - The sid
 */
/* jshint ignore:end */
InviteContext = function InviteContext(version, serviceSid, channelSid, sid) {
  this._version = version;

  // Path Solution
  this._solution = {serviceSid: serviceSid, channelSid: channelSid, sid: sid, };
  this._uri = `/Services/${serviceSid}/Channels/${channelSid}/Invites/${sid}`;
};

/* jshint ignore:start */
/**
 * fetch a InviteInstance
 *
 * @function fetch
 * @memberof Twilio.IpMessaging.V1.ServiceContext.ChannelContext.InviteContext#
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed InviteInstance
 */
/* jshint ignore:end */
InviteContext.prototype.fetch = function fetch(callback) {
  var deferred = Q.defer();
  var promise = this._version.fetch({uri: this._uri, method: 'GET'});

  promise = promise.then(function(payload) {
    deferred.resolve(new InviteInstance(
      this._version,
      payload,
      this._solution.serviceSid,
      this._solution.channelSid,
      this._solution.sid
    ));
  }.bind(this));

  promise.catch(function(error) {
    deferred.reject(error);
  });

  if (_.isFunction(callback)) {
    deferred.promise.nodeify(callback);
  }

  return deferred.promise;
};

/* jshint ignore:start */
/**
 * remove a InviteInstance
 *
 * @function remove
 * @memberof Twilio.IpMessaging.V1.ServiceContext.ChannelContext.InviteContext#
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed InviteInstance
 */
/* jshint ignore:end */
InviteContext.prototype.remove = function remove(callback) {
  var deferred = Q.defer();
  var promise = this._version.remove({uri: this._uri, method: 'DELETE'});

  promise = promise.then(function(payload) {
    deferred.resolve(payload);
  }.bind(this));

  promise.catch(function(error) {
    deferred.reject(error);
  });

  if (_.isFunction(callback)) {
    deferred.promise.nodeify(callback);
  }

  return deferred.promise;
};

/* jshint ignore:start */
/**
 * Provide a user-friendly representation
 *
 * @function toJSON
 * @memberof Twilio.IpMessaging.V1.ServiceContext.ChannelContext.InviteContext#
 *
 * @returns Object
 */
/* jshint ignore:end */
InviteContext.prototype.toJSON = function toJSON() {
  return this._solution;
};

InviteContext.prototype[util.inspect.custom] = function inspect(depth, options)
    {
  return util.inspect(this.toJSON(), options);
};

module.exports = {
  InviteList: InviteList,
  InvitePage: InvitePage,
  InviteInstance: InviteInstance,
  InviteContext: InviteContext
};
