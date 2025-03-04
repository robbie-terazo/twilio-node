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
var Page = require('../../../base/Page');  /* jshint ignore:line */
var deserialize = require(
    '../../../base/deserialize');  /* jshint ignore:line */
var values = require('../../../base/values');  /* jshint ignore:line */

var IpCommandList;
var IpCommandPage;
var IpCommandInstance;
var IpCommandContext;

/* jshint ignore:start */
/**
 * Initialize the IpCommandList
 *
 * PLEASE NOTE that this class contains beta products that are subject to change.
 * Use them with caution.
 *
 * @constructor Twilio.Supersim.V1.IpCommandList
 *
 * @param {Twilio.Supersim.V1} version - Version of the resource
 */
/* jshint ignore:end */
IpCommandList = function IpCommandList(version) {
  /* jshint ignore:start */
  /**
   * @function ipCommands
   * @memberof Twilio.Supersim.V1#
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Supersim.V1.IpCommandContext}
   */
  /* jshint ignore:end */
  function IpCommandListInstance(sid) {
    return IpCommandListInstance.get(sid);
  }

  IpCommandListInstance._version = version;
  // Path Solution
  IpCommandListInstance._solution = {};
  IpCommandListInstance._uri = `/IpCommands`;
  /* jshint ignore:start */
  /**
   * create a IpCommandInstance
   *
   * @function create
   * @memberof Twilio.Supersim.V1.IpCommandList#
   *
   * @param {object} opts - Options for request
   * @param {string} opts.sim -
   *          The sid or unique_name of the Super SIM to send the IP Command to
   * @param {string} opts.payload - The payload to be delivered to the device
   * @param {number} opts.devicePort -
   *          The device port to which the IP Command will be sent
   * @param {ip_command.payload_type} [opts.payloadType] -
   *          Indicates how the payload is encoded
   * @param {string} [opts.callbackUrl] -
   *          The URL we should call after we have sent the IP Command
   * @param {string} [opts.callbackMethod] -
   *          The HTTP method we should use to call callback_url
   * @param {function} [callback] - Callback to handle processed record
   *
   * @returns {Promise} Resolves to processed IpCommandInstance
   */
  /* jshint ignore:end */
  IpCommandListInstance.create = function create(opts, callback) {
    if (_.isUndefined(opts)) {
      throw new Error('Required parameter "opts" missing.');
    }
    if (_.isUndefined(opts.sim)) {
      throw new Error('Required parameter "opts.sim" missing.');
    }
    if (_.isUndefined(opts.payload)) {
      throw new Error('Required parameter "opts.payload" missing.');
    }
    if (_.isUndefined(opts.devicePort)) {
      throw new Error('Required parameter "opts.devicePort" missing.');
    }

    var deferred = Q.defer();
    var data = values.of({
      'Sim': _.get(opts, 'sim'),
      'Payload': _.get(opts, 'payload'),
      'DevicePort': _.get(opts, 'devicePort'),
      'PayloadType': _.get(opts, 'payloadType'),
      'CallbackUrl': _.get(opts, 'callbackUrl'),
      'CallbackMethod': _.get(opts, 'callbackMethod')
    });

    var promise = this._version.create({uri: this._uri, method: 'POST', data: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new IpCommandInstance(this._version, payload, this._solution.sid));
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
   * Streams IpCommandInstance records from the API.
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
   * @memberof Twilio.Supersim.V1.IpCommandList#
   *
   * @param {object} [opts] - Options for request
   * @param {string} [opts.sim] -
   *          The SID or unique name of the Sim resource that IP Command was sent to or from.
   * @param {string} [opts.simIccid] -
   *          The ICCID of the Sim resource that IP Command was sent to or from.
   * @param {ip_command.status} [opts.status] - The status of the IP Command
   * @param {ip_command.direction} [opts.direction] - The direction of the IP Command
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
  IpCommandListInstance.each = function each(opts, callback) {
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
   * Lists IpCommandInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @function list
   * @memberof Twilio.Supersim.V1.IpCommandList#
   *
   * @param {object} [opts] - Options for request
   * @param {string} [opts.sim] -
   *          The SID or unique name of the Sim resource that IP Command was sent to or from.
   * @param {string} [opts.simIccid] -
   *          The ICCID of the Sim resource that IP Command was sent to or from.
   * @param {ip_command.status} [opts.status] - The status of the IP Command
   * @param {ip_command.direction} [opts.direction] - The direction of the IP Command
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
  IpCommandListInstance.list = function list(opts, callback) {
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
   * Retrieve a single page of IpCommandInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @function page
   * @memberof Twilio.Supersim.V1.IpCommandList#
   *
   * @param {object} [opts] - Options for request
   * @param {string} [opts.sim] -
   *          The SID or unique name of the Sim resource that IP Command was sent to or from.
   * @param {string} [opts.simIccid] -
   *          The ICCID of the Sim resource that IP Command was sent to or from.
   * @param {ip_command.status} [opts.status] - The status of the IP Command
   * @param {ip_command.direction} [opts.direction] - The direction of the IP Command
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  IpCommandListInstance.page = function page(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({
      'Sim': _.get(opts, 'sim'),
      'SimIccid': _.get(opts, 'simIccid'),
      'Status': _.get(opts, 'status'),
      'Direction': _.get(opts, 'direction'),
      'PageToken': opts.pageToken,
      'Page': opts.pageNumber,
      'PageSize': opts.pageSize
    });

    var promise = this._version.page({uri: this._uri, method: 'GET', params: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new IpCommandPage(this._version, payload, this._solution));
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
   * Retrieve a single target page of IpCommandInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @function getPage
   * @memberof Twilio.Supersim.V1.IpCommandList#
   *
   * @param {string} [targetUrl] - API-generated URL for the requested results page
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  IpCommandListInstance.getPage = function getPage(targetUrl, callback) {
    var deferred = Q.defer();

    var promise = this._version._domain.twilio.request({method: 'GET', uri: targetUrl});

    promise = promise.then(function(payload) {
      deferred.resolve(new IpCommandPage(this._version, payload, this._solution));
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
   * Constructs a ip_command
   *
   * @function get
   * @memberof Twilio.Supersim.V1.IpCommandList#
   *
   * @param {string} sid - The SID that identifies the resource to fetch
   *
   * @returns {Twilio.Supersim.V1.IpCommandContext}
   */
  /* jshint ignore:end */
  IpCommandListInstance.get = function get(sid) {
    return new IpCommandContext(this._version, sid);
  };

  /* jshint ignore:start */
  /**
   * Provide a user-friendly representation
   *
   * @function toJSON
   * @memberof Twilio.Supersim.V1.IpCommandList#
   *
   * @returns Object
   */
  /* jshint ignore:end */
  IpCommandListInstance.toJSON = function toJSON() {
    return this._solution;
  };

  IpCommandListInstance[util.inspect.custom] = function inspect(depth, options) {
    return util.inspect(this.toJSON(), options);
  };

  return IpCommandListInstance;
};


/* jshint ignore:start */
/**
 * Initialize the IpCommandPage
 *
 * PLEASE NOTE that this class contains beta products that are subject to change.
 * Use them with caution.
 *
 * @constructor Twilio.Supersim.V1.IpCommandPage
 *
 * @param {V1} version - Version of the resource
 * @param {Response<string>} response - Response from the API
 * @param {IpCommandSolution} solution - Path solution
 *
 * @returns IpCommandPage
 */
/* jshint ignore:end */
IpCommandPage = function IpCommandPage(version, response, solution) {
  // Path Solution
  this._solution = solution;

  Page.prototype.constructor.call(this, version, response, this._solution);
};

_.extend(IpCommandPage.prototype, Page.prototype);
IpCommandPage.prototype.constructor = IpCommandPage;

/* jshint ignore:start */
/**
 * Build an instance of IpCommandInstance
 *
 * @function getInstance
 * @memberof Twilio.Supersim.V1.IpCommandPage#
 *
 * @param {IpCommandPayload} payload - Payload response from the API
 *
 * @returns IpCommandInstance
 */
/* jshint ignore:end */
IpCommandPage.prototype.getInstance = function getInstance(payload) {
  return new IpCommandInstance(this._version, payload);
};

/* jshint ignore:start */
/**
 * Provide a user-friendly representation
 *
 * @function toJSON
 * @memberof Twilio.Supersim.V1.IpCommandPage#
 *
 * @returns Object
 */
/* jshint ignore:end */
IpCommandPage.prototype.toJSON = function toJSON() {
  let clone = {};
  _.forOwn(this, function(value, key) {
    if (!_.startsWith(key, '_') && ! _.isFunction(value)) {
      clone[key] = value;
    }
  });
  return clone;
};

IpCommandPage.prototype[util.inspect.custom] = function inspect(depth, options)
    {
  return util.inspect(this.toJSON(), options);
};


/* jshint ignore:start */
/**
 * Initialize the IpCommandContext
 *
 * PLEASE NOTE that this class contains beta products that are subject to change.
 * Use them with caution.
 *
 * @constructor Twilio.Supersim.V1.IpCommandInstance
 *
 * @property {string} sid - The unique string that identifies the resource
 * @property {string} accountSid - The SID of the Account that created the resource
 * @property {string} simSid -
 *          The SID of the Super SIM that this IP Command was sent to or from
 * @property {string} simIccid -
 *          The ICCID of the Super SIM that this IP Command was sent to or from
 * @property {ip_command.status} status - The status of the IP Command
 * @property {ip_command.direction} direction - The direction of the IP Command
 * @property {string} deviceIp -
 *          The IP address of the device that the IP Command was sent to or received from
 * @property {number} devicePort -
 *          The port that the IP Command either originated from or was sent to
 * @property {ip_command.payload_type} payloadType -
 *          The payload type of the IP Command
 * @property {string} payload -
 *          The payload of the IP Command sent to or from the Super SIM
 * @property {Date} dateCreated -
 *          The ISO 8601 date and time in GMT when the resource was created
 * @property {Date} dateUpdated -
 *          The ISO 8601 date and time in GMT when the resource was last updated
 * @property {string} url - The absolute URL of the IP Command resource
 *
 * @param {V1} version - Version of the resource
 * @param {IpCommandPayload} payload - The instance payload
 * @param {sid} sid - The SID that identifies the resource to fetch
 */
/* jshint ignore:end */
IpCommandInstance = function IpCommandInstance(version, payload, sid) {
  this._version = version;

  // Marshaled Properties
  this.sid = payload.sid; // jshint ignore:line
  this.accountSid = payload.account_sid; // jshint ignore:line
  this.simSid = payload.sim_sid; // jshint ignore:line
  this.simIccid = payload.sim_iccid; // jshint ignore:line
  this.status = payload.status; // jshint ignore:line
  this.direction = payload.direction; // jshint ignore:line
  this.deviceIp = payload.device_ip; // jshint ignore:line
  this.devicePort = deserialize.integer(payload.device_port); // jshint ignore:line
  this.payloadType = payload.payload_type; // jshint ignore:line
  this.payload = payload.payload; // jshint ignore:line
  this.dateCreated = deserialize.iso8601DateTime(payload.date_created); // jshint ignore:line
  this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated); // jshint ignore:line
  this.url = payload.url; // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {sid: sid || this.sid, };
};

Object.defineProperty(IpCommandInstance.prototype,
  '_proxy', {
    get: function() {
      if (!this._context) {
        this._context = new IpCommandContext(this._version, this._solution.sid);
      }

      return this._context;
    }
});

/* jshint ignore:start */
/**
 * fetch a IpCommandInstance
 *
 * @function fetch
 * @memberof Twilio.Supersim.V1.IpCommandInstance#
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed IpCommandInstance
 */
/* jshint ignore:end */
IpCommandInstance.prototype.fetch = function fetch(callback) {
  return this._proxy.fetch(callback);
};

/* jshint ignore:start */
/**
 * Provide a user-friendly representation
 *
 * @function toJSON
 * @memberof Twilio.Supersim.V1.IpCommandInstance#
 *
 * @returns Object
 */
/* jshint ignore:end */
IpCommandInstance.prototype.toJSON = function toJSON() {
  let clone = {};
  _.forOwn(this, function(value, key) {
    if (!_.startsWith(key, '_') && ! _.isFunction(value)) {
      clone[key] = value;
    }
  });
  return clone;
};

IpCommandInstance.prototype[util.inspect.custom] = function inspect(depth,
    options) {
  return util.inspect(this.toJSON(), options);
};


/* jshint ignore:start */
/**
 * Initialize the IpCommandContext
 *
 * PLEASE NOTE that this class contains beta products that are subject to change.
 * Use them with caution.
 *
 * @constructor Twilio.Supersim.V1.IpCommandContext
 *
 * @param {V1} version - Version of the resource
 * @param {sid} sid - The SID that identifies the resource to fetch
 */
/* jshint ignore:end */
IpCommandContext = function IpCommandContext(version, sid) {
  this._version = version;

  // Path Solution
  this._solution = {sid: sid, };
  this._uri = `/IpCommands/${sid}`;
};

/* jshint ignore:start */
/**
 * fetch a IpCommandInstance
 *
 * @function fetch
 * @memberof Twilio.Supersim.V1.IpCommandContext#
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed IpCommandInstance
 */
/* jshint ignore:end */
IpCommandContext.prototype.fetch = function fetch(callback) {
  var deferred = Q.defer();
  var promise = this._version.fetch({uri: this._uri, method: 'GET'});

  promise = promise.then(function(payload) {
    deferred.resolve(new IpCommandInstance(this._version, payload, this._solution.sid));
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
 * @memberof Twilio.Supersim.V1.IpCommandContext#
 *
 * @returns Object
 */
/* jshint ignore:end */
IpCommandContext.prototype.toJSON = function toJSON() {
  return this._solution;
};

IpCommandContext.prototype[util.inspect.custom] = function inspect(depth,
    options) {
  return util.inspect(this.toJSON(), options);
};

module.exports = {
  IpCommandList: IpCommandList,
  IpCommandPage: IpCommandPage,
  IpCommandInstance: IpCommandInstance,
  IpCommandContext: IpCommandContext
};
