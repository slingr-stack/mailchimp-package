/****************************************************
 Dependencies
 ****************************************************/

let httpReference = dependencies.http;

let httpDependency = {
    get: httpReference.get,
    post: httpReference.post,
    put: httpReference.put,
    patch: httpReference.patch,
    delete: httpReference.delete,
    head: httpReference.head,
    options: httpReference.options
};

let httpService = {};

/**
 *
 * Handles a request with retry from the platform side.
 */
function handleRequestWithRetry(requestFn, options, callbackData, callbacks) {
    return requestFn(options, callbackData, callbacks);
}

function createWrapperFunction(requestFn) {
    return function(options, callbackData, callbacks) {
        return handleRequestWithRetry(requestFn, options, callbackData, callbacks);
    };
}

for (let key in httpDependency) {
    if (typeof httpDependency[key] === 'function') httpService[key] = createWrapperFunction(httpDependency[key]);
}

/****************************************************
 Public API - Generic Functions
 ****************************************************/

/**
 * Sends an HTTP GET request to the specified URL with the provided HTTP options.
 *
 * @param {string} path         - The path to send the GET request to.
 * @param {object} httpOptions  - The options to be included in the GET request check http-service documentation.
 * @param {object} callbackData - Additional data to be passed to the callback functions. [optional]
 * @param {object} callbacks    - The callback functions to be called upon completion of the GET request. [optional]
 * @return {object}             - The response of the GET request.
 */
exports.get = function(path, httpOptions, callbackData, callbacks) {
    let options = checkHttpOptions(path, httpOptions);
    return httpService.get(Mailchimp(options), callbackData, callbacks);
};

/**
 * Sends an HTTP POST request to the specified URL with the provided HTTP options.
 *
 * @param {string} path         - The path to send the POST request to.
 * @param {object} httpOptions  - The options to be included in the POST request check http-service documentation.
 * @param {object} callbackData - Additional data to be passed to the callback functions. [optional]
 * @param {object} callbacks    - The callback functions to be called upon completion of the POST request. [optional]
 * @return {object}             - The response of the POST request.
 */
exports.post = function(path, httpOptions, callbackData, callbacks) {
    let options = checkHttpOptions(path, httpOptions);
    return httpService.post(Mailchimp(options), callbackData, callbacks);
};

/**
 * Sends an HTTP PUT request to the specified URL with the provided HTTP options.
 *
 * @param {string} path         - The path to send the PUT request to.
 * @param {object} httpOptions  - The options to be included in the PUT request check http-service documentation.
 * @param {object} callbackData - Additional data to be passed to the callback functions. [optional]
 * @param {object} callbacks    - The callback functions to be called upon completion of the POST request. [optional]
 * @return {object}             - The response of the PUT request.
 */
exports.put = function(path, httpOptions, callbackData, callbacks) {
    let options = checkHttpOptions(path, httpOptions);
    return httpService.put(Mailchimp(options), callbackData, callbacks);
};

/**
 * Sends an HTTP PATCH request to the specified URL with the provided HTTP options.
 *
 * @param {string} path         - The path to send the PATCH request to.
 * @param {object} httpOptions  - The options to be included in the PATCH request check http-service documentation.
 * @param {object} callbackData - Additional data to be passed to the callback functions. [optional]
 * @param {object} callbacks    - The callback functions to be called upon completion of the POST request. [optional]
 * @return {object}             - The response of the PATCH request.
 */
exports.patch = function(path, httpOptions, callbackData, callbacks) {
    let options = checkHttpOptions(path, httpOptions);
    return httpService.patch(Mailchimp(options), callbackData, callbacks);
};

/**
 * Sends an HTTP DELETE request to the specified URL with the provided HTTP options.
 *
 * @param {string} path         - The path to send the DELETE request to.
 * @param {object} httpOptions  - The options to be included in the DELETE request check http-service documentation.
 * @param {object} callbackData - Additional data to be passed to the callback functions. [optional]
 * @param {object} callbacks    - The callback functions to be called upon completion of the DELETE request. [optional]
 * @return {object}             - The response of the DELETE request.
 */
exports.delete = function(path, httpOptions, callbackData, callbacks) {
    let options = checkHttpOptions(path, httpOptions);
    return httpService.delete(Mailchimp(options), callbackData, callbacks);
};

/**
 * Sends an HTTP HEAD request to the specified URL with the provided HTTP options.
 *
 * @param {string} path         - The path to send the HEAD request to.
 * @param {object} httpOptions  - The options to be included in the HEAD request check http-service documentation.
 * @param {object} callbackData - Additional data to be passed to the callback functions. [optional]
 * @param {object} callbacks    - The callback functions to be called upon completion of the HEAD request. [optional]
 * @return {object}             - The response of the HEAD request.
 */
exports.head = function(path, httpOptions, callbackData, callbacks) {
    let options = checkHttpOptions(path, httpOptions);
    return httpService.head(Mailchimp(options), callbackData, callbacks);
};

/**
 * Sends an HTTP OPTIONS request to the specified URL with the provided HTTP options.
 *
 * @param {string} path         - The path to send the OPTIONS request to.
 * @param {object} httpOptions  - The options to be included in the OPTIONS request check http-service documentation.
 * @param {object} callbackData - Additional data to be passed to the callback functions. [optional]
 * @param {object} callbacks    - The callback functions to be called upon completion of the OPTIONS request. [optional]
 * @return {object}             - The response of the OPTIONS request.
 */
exports.options = function(path, httpOptions, callbackData, callbacks) {
    let options = checkHttpOptions(path, httpOptions);
    return httpService.options(Mailchimp(options), callbackData, callbacks);
};

exports.utils = {

    /**
     * Converts a given date to a timestamp.
     *
     * @param {number | string} params      - The date to be converted.
     * @return {object}                     - An object containing the timestamp.
     */
    fromDateToTimestamp: function(params) {
        if (!!params) {
            return {timestamp: new Date(params).getTime()};
        }
        return null;
    },

    /**
     * Converts a timestamp to a date object.
     *
     * @param {number} timestamp            - The timestamp to convert.
     * @return {object}                     - The date object representing the timestamp.
     */
    fromTimestampToDate: function(timestamp) {
        return new Date(timestamp);
    },

    /**
     * Gets a configuration from the properties.
     *
     * @param {string} property             - The name of the property to get.
     *                                          If it is empty, return the entire configuration object.
     * @return {string}                     - The value of the property or the whole object as string.
     */
    getConfiguration: function (property) {
        if (!property) {
            sys.logs.debug('[mailchimp] Get configuration');
            return JSON.stringify(config.get());
        }
        sys.logs.debug('[mailchimp] Get property: '+property);
        return config.get(property);
    },

    /**
     * Concatenates a path with a param query and its value.
     *
     * @param path                          - The path to concatenate.
     * @param key                           - The name of the param.
     * @param value                         - The value of the param.
     * @returns {string}                    - The concatenated path without coding parameters.
     */
    concatQuery: function (path, key, value) {
        return path + ((!path || path.indexOf('?') < 0) ? '?' : '&') + key + "=" + value;
    },

    /**
     * Merges two JSON objects into a single object.
     *
     * @param {Object} json1 - The first JSON object to be merged.
     * @param {Object} json2 - The second JSON object to be merged.
     * @return {Object} - The merged JSON object.
     */
    mergeJSON: mergeJSON,
};

/**
 * Verifies the signature of the given body using the provided signature coded in sha1 or sha256.
 *
 * @param {string} body                 - The body to be verified.
 * @param {string} signature            - The signature to be checked.
 * @param {string} signature256         - The signature256 to be checked.
 * @return {boolean}                    - True if the signature is valid, false otherwise.
 */
exports.utils.verifySignature = function (body, signature, signature256) {
    sys.logs.info("Checking signature");
    let verified = true;
    let verified256 = true;
    let secret = config.get("webhookSecret");
    if (!body || body === "") {
        sys.logs.warn("The body is null or empty");
        return false;
    }
    if (!secret || secret === "" || !signature || signature === "" ||
        !sys.utils.crypto.verifySignatureWithHmac(body, signature.replace("sha1=",""), secret, "HmacSHA1")) {
        sys.logs.warn("Invalid signature sha1");
        verified = false;
    }
    if (!secret || secret === "" ||  !signature256 ||!signature256 ||
        !sys.utils.crypto.verifySignatureWithHmac(body, signature.replace("sha256=",""), secret, "HmacSHA256")) {
        sys.logs.warn("Invalid signature sha 256");
        verified256 = false;
    }

    return (verified || verified256);
};

/****************************************************
 Private helpers
 ****************************************************/

function checkHttpOptions (path, options) {
    options = options || {};
    if (!!path) {
        if (isObject(path)) {
            // take the 'path' parameter as the options
            options = path || {};
        } else {
            if (!!options.path || !!options.params || !!options.body) {
                // options contain the http package format
                options.path = path;
            } else {
                // create html package
                options = {
                    path: path,
                    body: options
                }
            }
        }
    }
    return options;
}

function isObject (obj) {
    return !!obj && stringType(obj) === '[object Object]'
}

let stringType = Function.prototype.call.bind(Object.prototype.toString)

/****************************************************
 Configurator
 ****************************************************/

let Mailchimp = function (options) {
    options = options || {};
    options= setApiUri(options);
    options= setRequestHeaders(options);
    return options;
}

/****************************************************
 Private API
 ****************************************************/

function setApiUri(options) {
    let API_URL = config.get("mailChimpApiUrl");
    let url = options.path || "";
    options.url = API_URL + url;
    sys.logs.debug('[mailchimp] Set url: ' + options.path + "->" + options.url);
    return options;
}

function setRequestHeaders(options) {
    sys.logs.debug('[mailchimp] Setting header basic oauth');
    let authorization = options.authorization || {};
    authorization = mergeJSON(authorization, {
        type: "basic",
        username: "anyUser",
        password: config.get("apiKey")
    });
    options.authorization = authorization;
    return options;
}

function mergeJSON (json1, json2) {
    const result = {};
    let key;
    for (key in json1) {
        if(json1.hasOwnProperty(key)) result[key] = json1[key];
    }
    for (key in json2) {
        if(json2.hasOwnProperty(key)) result[key] = json2[key];
    }
    return result;
}
