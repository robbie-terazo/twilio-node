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
var values = require('../../../../../base/values');  /* jshint ignore:line */

var VariableList;
var VariablePage;
var VariableInstance;
var VariableContext;

/* jshint ignore:start */
/**
 * Initialize the VariableList
 *
 * PLEASE NOTE that this class contains beta products that are subject to change.
 * Use them with caution.
 *
 * @constructor Twilio.Serverless.V1.ServiceContext.EnvironmentContext.VariableList
 *
 * @param {Twilio.Serverless.V1} version - Version of the resource
 * @param {string} serviceSid -
 *          The SID of the Service that the Variable resource is associated with
 * @param {string} environmentSid -
 *          The SID of the Environment in which the Variable exists
 */
/* jshint ignore:end */
VariableList = function VariableList(version, serviceSid, environmentSid) {
  /* jshint ignore:start */
  /**
   * @function variables
   * @memberof Twilio.Serverless.V1.ServiceContext.EnvironmentContext#
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Serverless.V1.ServiceContext.EnvironmentContext.VariableContext}
   */
  /* jshint ignore:end */
  function VariableListInstance(sid) {
    return VariableListInstance.get(sid);
  }

  VariableListInstance._version = version;
  // Path Solution
  VariableListInstance._solution = {serviceSid: serviceSid, environmentSid: environmentSid};
  VariableListInstance._uri = `/Services/${serviceSid}/Environments/${environmentSid}/Variables`;
  /* jshint ignore:start */
  /**
   * Streams VariableInstance records from the API.
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
   * @memberof Twilio.Serverless.V1.ServiceContext.EnvironmentContext.VariableList#
   *
   * @param {object} [opts] - Options for request
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
  VariableListInstance.each = function each(opts, callback) {
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
   * Lists VariableInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @function list
   * @memberof Twilio.Serverless.V1.ServiceContext.EnvironmentContext.VariableList#
   *
   * @param {object} [opts] - Options for request
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
  VariableListInstance.list = function list(opts, callback) {
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
   * Retrieve a single page of VariableInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @function page
   * @memberof Twilio.Serverless.V1.ServiceContext.EnvironmentContext.VariableList#
   *
   * @param {object} [opts] - Options for request
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  VariableListInstance.page = function page(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({
      'PageToken': opts.pageToken,
      'Page': opts.pageNumber,
      'PageSize': opts.pageSize
    });

    var promise = this._version.page({uri: this._uri, method: 'GET', params: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new VariablePage(this._version, payload, this._solution));
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
   * Retrieve a single target page of VariableInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @function getPage
   * @memberof Twilio.Serverless.V1.ServiceContext.EnvironmentContext.VariableList#
   *
   * @param {string} [targetUrl] - API-generated URL for the requested results page
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  VariableListInstance.getPage = function getPage(targetUrl, callback) {
    var deferred = Q.defer();

    var promise = this._version._domain.twilio.request({method: 'GET', uri: targetUrl});

    promise = promise.then(function(payload) {
      deferred.resolve(new VariablePage(this._version, payload, this._solution));
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
   * create a VariableInstance
   *
   * @function create
   * @memberof Twilio.Serverless.V1.ServiceContext.EnvironmentContext.VariableList#
   *
   * @param {object} opts - Options for request
   * @param {string} opts.key -
   *          A string by which the Variable resource can be referenced
   * @param {string} opts.value -
   *          A string that contains the actual value of the Variable
   * @param {function} [callback] - Callback to handle processed record
   *
   * @returns {Promise} Resolves to processed VariableInstance
   */
  /* jshint ignore:end */
  VariableListInstance.create = function create(opts, callback) {
    if (_.isUndefined(opts)) {
      throw new Error('Required parameter "opts" missing.');
    }
    if (_.isUndefined(opts.key)) {
      throw new Error('Required parameter "opts.key" missing.');
    }
    if (_.isUndefined(opts.value)) {
      throw new Error('Required parameter "opts.value" missing.');
    }

    var deferred = Q.defer();
    var data = values.of({'Key': _.get(opts, 'key'), 'Value': _.get(opts, 'value')});

    var promise = this._version.create({uri: this._uri, method: 'POST', data: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new VariableInstance(
        this._version,
        payload,
        this._solution.serviceSid,
        this._solution.environmentSid,
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
   * Constructs a variable
   *
   * @function get
   * @memberof Twilio.Serverless.V1.ServiceContext.EnvironmentContext.VariableList#
   *
   * @param {string} sid - The SID of the Variable resource to fetch
   *
   * @returns {Twilio.Serverless.V1.ServiceContext.EnvironmentContext.VariableContext}
   */
  /* jshint ignore:end */
  VariableListInstance.get = function get(sid) {
    return new VariableContext(
      this._version,
      this._solution.serviceSid,
      this._solution.environmentSid,
      sid
    );
  };

  /* jshint ignore:start */
  /**
   * Provide a user-friendly representation
   *
   * @function toJSON
   * @memberof Twilio.Serverless.V1.ServiceContext.EnvironmentContext.VariableList#
   *
   * @returns Object
   */
  /* jshint ignore:end */
  VariableListInstance.toJSON = function toJSON() {
    return this._solution;
  };

  VariableListInstance[util.inspect.custom] = function inspect(depth, options) {
    return util.inspect(this.toJSON(), options);
  };

  return VariableListInstance;
};


/* jshint ignore:start */
/**
 * Initialize the VariablePage
 *
 * PLEASE NOTE that this class contains beta products that are subject to change.
 * Use them with caution.
 *
 * @constructor Twilio.Serverless.V1.ServiceContext.EnvironmentContext.VariablePage
 *
 * @param {V1} version - Version of the resource
 * @param {Response<string>} response - Response from the API
 * @param {VariableSolution} solution - Path solution
 *
 * @returns VariablePage
 */
/* jshint ignore:end */
VariablePage = function VariablePage(version, response, solution) {
  // Path Solution
  this._solution = solution;

  Page.prototype.constructor.call(this, version, response, this._solution);
};

_.extend(VariablePage.prototype, Page.prototype);
VariablePage.prototype.constructor = VariablePage;

/* jshint ignore:start */
/**
 * Build an instance of VariableInstance
 *
 * @function getInstance
 * @memberof Twilio.Serverless.V1.ServiceContext.EnvironmentContext.VariablePage#
 *
 * @param {VariablePayload} payload - Payload response from the API
 *
 * @returns VariableInstance
 */
/* jshint ignore:end */
VariablePage.prototype.getInstance = function getInstance(payload) {
  return new VariableInstance(
    this._version,
    payload,
    this._solution.serviceSid,
    this._solution.environmentSid
  );
};

/* jshint ignore:start */
/**
 * Provide a user-friendly representation
 *
 * @function toJSON
 * @memberof Twilio.Serverless.V1.ServiceContext.EnvironmentContext.VariablePage#
 *
 * @returns Object
 */
/* jshint ignore:end */
VariablePage.prototype.toJSON = function toJSON() {
  let clone = {};
  _.forOwn(this, function(value, key) {
    if (!_.startsWith(key, '_') && ! _.isFunction(value)) {
      clone[key] = value;
    }
  });
  return clone;
};

VariablePage.prototype[util.inspect.custom] = function inspect(depth, options) {
  return util.inspect(this.toJSON(), options);
};


/* jshint ignore:start */
/**
 * Initialize the VariableContext
 *
 * PLEASE NOTE that this class contains beta products that are subject to change.
 * Use them with caution.
 *
 * @constructor Twilio.Serverless.V1.ServiceContext.EnvironmentContext.VariableInstance
 *
 * @property {string} sid - The unique string that identifies the Variable resource
 * @property {string} accountSid -
 *          The SID of the Account that created the Variable resource
 * @property {string} serviceSid -
 *          The SID of the Service that the Variable resource is associated with
 * @property {string} environmentSid -
 *          The SID of the Environment in which the Variable exists
 * @property {string} key -
 *          A string by which the Variable resource can be referenced
 * @property {string} value -
 *          A string that contains the actual value of the Variable
 * @property {Date} dateCreated -
 *          The ISO 8601 date and time in GMT when the Variable resource was created
 * @property {Date} dateUpdated -
 *          The ISO 8601 date and time in GMT when the Variable resource was last updated
 * @property {string} url - The absolute URL of the Variable resource
 *
 * @param {V1} version - Version of the resource
 * @param {VariablePayload} payload - The instance payload
 * @param {sid} serviceSid -
 *          The SID of the Service that the Variable resource is associated with
 * @param {sid} environmentSid -
 *          The SID of the Environment in which the Variable exists
 * @param {sid} sid - The SID of the Variable resource to fetch
 */
/* jshint ignore:end */
VariableInstance = function VariableInstance(version, payload, serviceSid,
                                              environmentSid, sid) {
  this._version = version;

  // Marshaled Properties
  this.sid = payload.sid; // jshint ignore:line
  this.accountSid = payload.account_sid; // jshint ignore:line
  this.serviceSid = payload.service_sid; // jshint ignore:line
  this.environmentSid = payload.environment_sid; // jshint ignore:line
  this.key = payload.key; // jshint ignore:line
  this.value = payload.value; // jshint ignore:line
  this.dateCreated = deserialize.iso8601DateTime(payload.date_created); // jshint ignore:line
  this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated); // jshint ignore:line
  this.url = payload.url; // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {serviceSid: serviceSid, environmentSid: environmentSid, sid: sid || this.sid, };
};

Object.defineProperty(VariableInstance.prototype,
  '_proxy', {
    get: function() {
      if (!this._context) {
        this._context = new VariableContext(
          this._version,
          this._solution.serviceSid,
          this._solution.environmentSid,
          this._solution.sid
        );
      }

      return this._context;
    }
});

/* jshint ignore:start */
/**
 * fetch a VariableInstance
 *
 * @function fetch
 * @memberof Twilio.Serverless.V1.ServiceContext.EnvironmentContext.VariableInstance#
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed VariableInstance
 */
/* jshint ignore:end */
VariableInstance.prototype.fetch = function fetch(callback) {
  return this._proxy.fetch(callback);
};

/* jshint ignore:start */
/**
 * update a VariableInstance
 *
 * @function update
 * @memberof Twilio.Serverless.V1.ServiceContext.EnvironmentContext.VariableInstance#
 *
 * @param {object} [opts] - Options for request
 * @param {string} [opts.key] -
 *          A string by which the Variable resource can be referenced
 * @param {string} [opts.value] -
 *          A string that contains the actual value of the Variable
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed VariableInstance
 */
/* jshint ignore:end */
VariableInstance.prototype.update = function update(opts, callback) {
  return this._proxy.update(opts, callback);
};

/* jshint ignore:start */
/**
 * remove a VariableInstance
 *
 * @function remove
 * @memberof Twilio.Serverless.V1.ServiceContext.EnvironmentContext.VariableInstance#
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed VariableInstance
 */
/* jshint ignore:end */
VariableInstance.prototype.remove = function remove(callback) {
  return this._proxy.remove(callback);
};

/* jshint ignore:start */
/**
 * Provide a user-friendly representation
 *
 * @function toJSON
 * @memberof Twilio.Serverless.V1.ServiceContext.EnvironmentContext.VariableInstance#
 *
 * @returns Object
 */
/* jshint ignore:end */
VariableInstance.prototype.toJSON = function toJSON() {
  let clone = {};
  _.forOwn(this, function(value, key) {
    if (!_.startsWith(key, '_') && ! _.isFunction(value)) {
      clone[key] = value;
    }
  });
  return clone;
};

VariableInstance.prototype[util.inspect.custom] = function inspect(depth,
    options) {
  return util.inspect(this.toJSON(), options);
};


/* jshint ignore:start */
/**
 * Initialize the VariableContext
 *
 * PLEASE NOTE that this class contains beta products that are subject to change.
 * Use them with caution.
 *
 * @constructor Twilio.Serverless.V1.ServiceContext.EnvironmentContext.VariableContext
 *
 * @param {V1} version - Version of the resource
 * @param {sid_like} serviceSid -
 *          The SID of the Service to fetch the Variable resource from
 * @param {sid} environmentSid -
 *          The SID of the Environment with the Variable resource to fetch
 * @param {sid} sid - The SID of the Variable resource to fetch
 */
/* jshint ignore:end */
VariableContext = function VariableContext(version, serviceSid, environmentSid,
                                            sid) {
  this._version = version;

  // Path Solution
  this._solution = {serviceSid: serviceSid, environmentSid: environmentSid, sid: sid, };
  this._uri = `/Services/${serviceSid}/Environments/${environmentSid}/Variables/${sid}`;
};

/* jshint ignore:start */
/**
 * fetch a VariableInstance
 *
 * @function fetch
 * @memberof Twilio.Serverless.V1.ServiceContext.EnvironmentContext.VariableContext#
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed VariableInstance
 */
/* jshint ignore:end */
VariableContext.prototype.fetch = function fetch(callback) {
  var deferred = Q.defer();
  var promise = this._version.fetch({uri: this._uri, method: 'GET'});

  promise = promise.then(function(payload) {
    deferred.resolve(new VariableInstance(
      this._version,
      payload,
      this._solution.serviceSid,
      this._solution.environmentSid,
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
 * update a VariableInstance
 *
 * @function update
 * @memberof Twilio.Serverless.V1.ServiceContext.EnvironmentContext.VariableContext#
 *
 * @param {object} [opts] - Options for request
 * @param {string} [opts.key] -
 *          A string by which the Variable resource can be referenced
 * @param {string} [opts.value] -
 *          A string that contains the actual value of the Variable
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed VariableInstance
 */
/* jshint ignore:end */
VariableContext.prototype.update = function update(opts, callback) {
  if (_.isFunction(opts)) {
    callback = opts;
    opts = {};
  }
  opts = opts || {};

  var deferred = Q.defer();
  var data = values.of({'Key': _.get(opts, 'key'), 'Value': _.get(opts, 'value')});

  var promise = this._version.update({uri: this._uri, method: 'POST', data: data});

  promise = promise.then(function(payload) {
    deferred.resolve(new VariableInstance(
      this._version,
      payload,
      this._solution.serviceSid,
      this._solution.environmentSid,
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
 * remove a VariableInstance
 *
 * @function remove
 * @memberof Twilio.Serverless.V1.ServiceContext.EnvironmentContext.VariableContext#
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed VariableInstance
 */
/* jshint ignore:end */
VariableContext.prototype.remove = function remove(callback) {
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
 * @memberof Twilio.Serverless.V1.ServiceContext.EnvironmentContext.VariableContext#
 *
 * @returns Object
 */
/* jshint ignore:end */
VariableContext.prototype.toJSON = function toJSON() {
  return this._solution;
};

VariableContext.prototype[util.inspect.custom] = function inspect(depth,
    options) {
  return util.inspect(this.toJSON(), options);
};

module.exports = {
  VariableList: VariableList,
  VariablePage: VariablePage,
  VariableInstance: VariableInstance,
  VariableContext: VariableContext
};
