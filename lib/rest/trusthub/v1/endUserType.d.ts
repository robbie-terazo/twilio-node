/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../base/Page');
import Response = require('../../../http/response');
import V1 = require('../V1');
import { SerializableClass } from '../../../interfaces';

/**
 * Initialize the EndUserTypeList
 *
 * @param version - Version of the resource
 */
declare function EndUserTypeList(version: V1): EndUserTypeListInstance;

interface EndUserTypeListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): EndUserTypeContext;
  /**
   * Streams EndUserTypeInstance records from the API.
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
   * @param callback - Function to process each record
   */
  each(callback?: (item: EndUserTypeInstance, done: (err?: Error) => void) => void): void;
  /**
   * Streams EndUserTypeInstance records from the API.
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
   * @param opts - Options for request
   * @param callback - Function to process each record
   */
  each(opts?: EndUserTypeListInstanceEachOptions, callback?: (item: EndUserTypeInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a end_user_type
   *
   * @param sid - The unique string that identifies the End-User Type resource
   */
  get(sid: string): EndUserTypeContext;
  /**
   * Retrieve a single target page of EndUserTypeInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  getPage(callback?: (error: Error | null, items: EndUserTypePage) => any): Promise<EndUserTypePage>;
  /**
   * Retrieve a single target page of EndUserTypeInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: EndUserTypePage) => any): Promise<EndUserTypePage>;
  /**
   * Lists EndUserTypeInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: EndUserTypeInstance[]) => any): Promise<EndUserTypeInstance[]>;
  /**
   * Lists EndUserTypeInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: EndUserTypeListInstanceOptions, callback?: (error: Error | null, items: EndUserTypeInstance[]) => any): Promise<EndUserTypeInstance[]>;
  /**
   * Retrieve a single page of EndUserTypeInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: EndUserTypePage) => any): Promise<EndUserTypePage>;
  /**
   * Retrieve a single page of EndUserTypeInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: EndUserTypeListInstancePageOptions, callback?: (error: Error | null, items: EndUserTypePage) => any): Promise<EndUserTypePage>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

/**
 * Options to pass to each
 *
 * @property callback -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property done - Function to be called upon completion of streaming
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         each() guarantees never to return more than limit.
 *                         Default is no limit
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no pageSize is defined but a limit is defined,
 *                         each() will attempt to read the limit with the most efficient
 *                         page size, i.e. min(limit, 1000)
 */
interface EndUserTypeListInstanceEachOptions {
  callback?: (item: EndUserTypeInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to list
 *
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no page_size is defined but a limit is defined,
 *                         list() will attempt to read the limit with the most
 *                         efficient page size, i.e. min(limit, 1000)
 */
interface EndUserTypeListInstanceOptions {
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to page
 *
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 * @property pageToken - PageToken provided by the API
 */
interface EndUserTypeListInstancePageOptions {
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}

interface EndUserTypePayload extends EndUserTypeResource, Page.TwilioResponsePayload {
}

interface EndUserTypeResource {
  fields: object[];
  friendly_name: string;
  machine_name: string;
  sid: string;
  url: string;
}

interface EndUserTypeSolution {
}


declare class EndUserTypeContext {
  /**
   * Initialize the EndUserTypeContext
   *
   * @param version - Version of the resource
   * @param sid - The unique string that identifies the End-User Type resource
   */
  constructor(version: V1, sid: string);

  /**
   * fetch a EndUserTypeInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: EndUserTypeInstance) => any): Promise<EndUserTypeInstance>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}


declare class EndUserTypeInstance extends SerializableClass {
  /**
   * Initialize the EndUserTypeContext
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param sid - The unique string that identifies the End-User Type resource
   */
  constructor(version: V1, payload: EndUserTypePayload, sid: string);

  private _proxy: EndUserTypeContext;
  /**
   * fetch a EndUserTypeInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: EndUserTypeInstance) => any): Promise<EndUserTypeInstance>;
  fields: object[];
  friendlyName: string;
  machineName: string;
  sid: string;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  url: string;
}


declare class EndUserTypePage extends Page<V1, EndUserTypePayload, EndUserTypeResource, EndUserTypeInstance> {
  /**
   * Initialize the EndUserTypePage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: EndUserTypeSolution);

  /**
   * Build an instance of EndUserTypeInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: EndUserTypePayload): EndUserTypeInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { EndUserTypeContext, EndUserTypeInstance, EndUserTypeList, EndUserTypeListInstance, EndUserTypeListInstanceEachOptions, EndUserTypeListInstanceOptions, EndUserTypeListInstancePageOptions, EndUserTypePage, EndUserTypePayload, EndUserTypeResource, EndUserTypeSolution }
