// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

const assert = require('assert');

const redisModule = require('../src');

const FAKE_STATUS_CODE = 1;
const error = new Error();
error.code = FAKE_STATUS_CODE;

describe('CloudRedisClient', () => {
  describe('listInstances', () => {
    it('invokes listInstances without error', done => {
      const client = new redisModule.v1.CloudRedisClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
      const request = {
        parent: formattedParent,
      };

      // Mock response
      const nextPageToken = '';
      const instancesElement = {};
      const instances = [instancesElement];
      const expectedResponse = {
        nextPageToken: nextPageToken,
        instances: instances,
      };

      // Mock Grpc layer
      client._innerApiCalls.listInstances = (
        actualRequest,
        options,
        callback
      ) => {
        assert.deepStrictEqual(actualRequest, request);
        callback(null, expectedResponse.instances);
      };

      client.listInstances(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse.instances);
        done();
      });
    });

    it('invokes listInstances with error', done => {
      const client = new redisModule.v1.CloudRedisClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
      const request = {
        parent: formattedParent,
      };

      // Mock Grpc layer
      client._innerApiCalls.listInstances = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.listInstances(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('getInstance', () => {
    it('invokes getInstance without error', done => {
      const client = new redisModule.v1.CloudRedisClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.instancePath(
        '[PROJECT]',
        '[LOCATION]',
        '[INSTANCE]'
      );
      const request = {
        name: formattedName,
      };

      // Mock response
      const name2 = 'name2-1052831874';
      const displayName = 'displayName1615086568';
      const locationId = 'locationId552319461';
      const alternativeLocationId = 'alternativeLocationId-718920621';
      const redisVersion = 'redisVersion-685310444';
      const reservedIpRange = 'reservedIpRange-1082940580';
      const host = 'host3208616';
      const port = 3446913;
      const currentLocationId = 'currentLocationId1312712735';
      const statusMessage = 'statusMessage-239442758';
      const memorySizeGb = 34199707;
      const authorizedNetwork = 'authorizedNetwork-1733809270';
      const expectedResponse = {
        name: name2,
        displayName: displayName,
        locationId: locationId,
        alternativeLocationId: alternativeLocationId,
        redisVersion: redisVersion,
        reservedIpRange: reservedIpRange,
        host: host,
        port: port,
        currentLocationId: currentLocationId,
        statusMessage: statusMessage,
        memorySizeGb: memorySizeGb,
        authorizedNetwork: authorizedNetwork,
      };

      // Mock Grpc layer
      client._innerApiCalls.getInstance = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.getInstance(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes getInstance with error', done => {
      const client = new redisModule.v1.CloudRedisClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.instancePath(
        '[PROJECT]',
        '[LOCATION]',
        '[INSTANCE]'
      );
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.getInstance = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.getInstance(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('createInstance', function() {
    it('invokes createInstance without error', done => {
      const client = new redisModule.v1.CloudRedisClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
      const instanceId = 'test_instance';
      const tier = 'BASIC';
      const memorySizeGb = 1;
      const instance = {
        tier: tier,
        memorySizeGb: memorySizeGb,
      };
      const request = {
        parent: formattedParent,
        instanceId: instanceId,
        instance: instance,
      };

      // Mock response
      const name = 'name3373707';
      const displayName = 'displayName1615086568';
      const locationId = 'locationId552319461';
      const alternativeLocationId = 'alternativeLocationId-718920621';
      const redisVersion = 'redisVersion-685310444';
      const reservedIpRange = 'reservedIpRange-1082940580';
      const host = 'host3208616';
      const port = 3446913;
      const currentLocationId = 'currentLocationId1312712735';
      const statusMessage = 'statusMessage-239442758';
      const memorySizeGb2 = 1493816946;
      const authorizedNetwork = 'authorizedNetwork-1733809270';
      const expectedResponse = {
        name: name,
        displayName: displayName,
        locationId: locationId,
        alternativeLocationId: alternativeLocationId,
        redisVersion: redisVersion,
        reservedIpRange: reservedIpRange,
        host: host,
        port: port,
        currentLocationId: currentLocationId,
        statusMessage: statusMessage,
        memorySizeGb: memorySizeGb2,
        authorizedNetwork: authorizedNetwork,
      };

      // Mock Grpc layer
      client._innerApiCalls.createInstance = mockLongRunningGrpcMethod(
        request,
        expectedResponse
      );

      client
        .createInstance(request)
        .then(responses => {
          const operation = responses[0];
          return operation.promise();
        })
        .then(responses => {
          assert.deepStrictEqual(responses[0], expectedResponse);
          done();
        })
        .catch(err => {
          done(err);
        });
    });

    it('invokes createInstance with error', done => {
      const client = new redisModule.v1.CloudRedisClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
      const instanceId = 'test_instance';
      const tier = 'BASIC';
      const memorySizeGb = 1;
      const instance = {
        tier: tier,
        memorySizeGb: memorySizeGb,
      };
      const request = {
        parent: formattedParent,
        instanceId: instanceId,
        instance: instance,
      };

      // Mock Grpc layer
      client._innerApiCalls.createInstance = mockLongRunningGrpcMethod(
        request,
        null,
        error
      );

      client
        .createInstance(request)
        .then(responses => {
          const operation = responses[0];
          return operation.promise();
        })
        .then(() => {
          assert.fail();
        })
        .catch(err => {
          assert(err instanceof Error);
          assert.strictEqual(err.code, FAKE_STATUS_CODE);
          done();
        });
    });

    it('has longrunning decoder functions', () => {
      const client = new redisModule.v1.CloudRedisClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      assert(
        client._descriptors.longrunning.createInstance
          .responseDecoder instanceof Function
      );
      assert(
        client._descriptors.longrunning.createInstance
          .metadataDecoder instanceof Function
      );
    });
  });

  describe('updateInstance', function() {
    it('invokes updateInstance without error', done => {
      const client = new redisModule.v1.CloudRedisClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const pathsElement = 'display_name';
      const pathsElement2 = 'memory_size_gb';
      const paths = [pathsElement, pathsElement2];
      const updateMask = {
        paths: paths,
      };
      const displayName = 'UpdatedDisplayName';
      const memorySizeGb = 4;
      const instance = {
        displayName: displayName,
        memorySizeGb: memorySizeGb,
      };
      const request = {
        updateMask: updateMask,
        instance: instance,
      };

      // Mock response
      const name = 'name3373707';
      const displayName2 = 'displayName21615000987';
      const locationId = 'locationId552319461';
      const alternativeLocationId = 'alternativeLocationId-718920621';
      const redisVersion = 'redisVersion-685310444';
      const reservedIpRange = 'reservedIpRange-1082940580';
      const host = 'host3208616';
      const port = 3446913;
      const currentLocationId = 'currentLocationId1312712735';
      const statusMessage = 'statusMessage-239442758';
      const memorySizeGb2 = 1493816946;
      const authorizedNetwork = 'authorizedNetwork-1733809270';
      const expectedResponse = {
        name: name,
        displayName: displayName2,
        locationId: locationId,
        alternativeLocationId: alternativeLocationId,
        redisVersion: redisVersion,
        reservedIpRange: reservedIpRange,
        host: host,
        port: port,
        currentLocationId: currentLocationId,
        statusMessage: statusMessage,
        memorySizeGb: memorySizeGb2,
        authorizedNetwork: authorizedNetwork,
      };

      // Mock Grpc layer
      client._innerApiCalls.updateInstance = mockLongRunningGrpcMethod(
        request,
        expectedResponse
      );

      client
        .updateInstance(request)
        .then(responses => {
          const operation = responses[0];
          return operation.promise();
        })
        .then(responses => {
          assert.deepStrictEqual(responses[0], expectedResponse);
          done();
        })
        .catch(err => {
          done(err);
        });
    });

    it('invokes updateInstance with error', done => {
      const client = new redisModule.v1.CloudRedisClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const pathsElement = 'display_name';
      const pathsElement2 = 'memory_size_gb';
      const paths = [pathsElement, pathsElement2];
      const updateMask = {
        paths: paths,
      };
      const displayName = 'UpdatedDisplayName';
      const memorySizeGb = 4;
      const instance = {
        displayName: displayName,
        memorySizeGb: memorySizeGb,
      };
      const request = {
        updateMask: updateMask,
        instance: instance,
      };

      // Mock Grpc layer
      client._innerApiCalls.updateInstance = mockLongRunningGrpcMethod(
        request,
        null,
        error
      );

      client
        .updateInstance(request)
        .then(responses => {
          const operation = responses[0];
          return operation.promise();
        })
        .then(() => {
          assert.fail();
        })
        .catch(err => {
          assert(err instanceof Error);
          assert.strictEqual(err.code, FAKE_STATUS_CODE);
          done();
        });
    });

    it('has longrunning decoder functions', () => {
      const client = new redisModule.v1.CloudRedisClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      assert(
        client._descriptors.longrunning.updateInstance
          .responseDecoder instanceof Function
      );
      assert(
        client._descriptors.longrunning.updateInstance
          .metadataDecoder instanceof Function
      );
    });
  });

  describe('deleteInstance', function() {
    it('invokes deleteInstance without error', done => {
      const client = new redisModule.v1.CloudRedisClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.instancePath(
        '[PROJECT]',
        '[LOCATION]',
        '[INSTANCE]'
      );
      const request = {
        name: formattedName,
      };

      // Mock response
      const expectedResponse = {};

      // Mock Grpc layer
      client._innerApiCalls.deleteInstance = mockLongRunningGrpcMethod(
        request,
        expectedResponse
      );

      client
        .deleteInstance(request)
        .then(responses => {
          const operation = responses[0];
          return operation.promise();
        })
        .then(responses => {
          assert.deepStrictEqual(responses[0], expectedResponse);
          done();
        })
        .catch(err => {
          done(err);
        });
    });

    it('invokes deleteInstance with error', done => {
      const client = new redisModule.v1.CloudRedisClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.instancePath(
        '[PROJECT]',
        '[LOCATION]',
        '[INSTANCE]'
      );
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.deleteInstance = mockLongRunningGrpcMethod(
        request,
        null,
        error
      );

      client
        .deleteInstance(request)
        .then(responses => {
          const operation = responses[0];
          return operation.promise();
        })
        .then(() => {
          assert.fail();
        })
        .catch(err => {
          assert(err instanceof Error);
          assert.strictEqual(err.code, FAKE_STATUS_CODE);
          done();
        });
    });

    it('has longrunning decoder functions', () => {
      const client = new redisModule.v1.CloudRedisClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      assert(
        client._descriptors.longrunning.deleteInstance
          .responseDecoder instanceof Function
      );
      assert(
        client._descriptors.longrunning.deleteInstance
          .metadataDecoder instanceof Function
      );
    });
  });

  describe('failoverInstance', function() {
    it('invokes failoverInstance without error', done => {
      const client = new redisModule.v1.CloudRedisClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.instancePath(
        '[PROJECT]',
        '[LOCATION]',
        '[INSTANCE]'
      );
      const dataProtectionMode = 'DATA_PROTECTION_MODE_UNSPECIFIED';
      const request = {
        name: formattedName,
        dataProtectionMode: dataProtectionMode,
      };

      // Mock response
      const name2 = 'name2-1052831874';
      const displayName = 'displayName1615086568';
      const locationId = 'locationId552319461';
      const alternativeLocationId = 'alternativeLocationId-718920621';
      const redisVersion = 'redisVersion-685310444';
      const reservedIpRange = 'reservedIpRange-1082940580';
      const host = 'host3208616';
      const port = 3446913;
      const currentLocationId = 'currentLocationId1312712735';
      const statusMessage = 'statusMessage-239442758';
      const memorySizeGb = 34199707;
      const authorizedNetwork = 'authorizedNetwork-1733809270';
      const expectedResponse = {
        name: name2,
        displayName: displayName,
        locationId: locationId,
        alternativeLocationId: alternativeLocationId,
        redisVersion: redisVersion,
        reservedIpRange: reservedIpRange,
        host: host,
        port: port,
        currentLocationId: currentLocationId,
        statusMessage: statusMessage,
        memorySizeGb: memorySizeGb,
        authorizedNetwork: authorizedNetwork,
      };

      // Mock Grpc layer
      client._innerApiCalls.failoverInstance = mockLongRunningGrpcMethod(
        request,
        expectedResponse
      );

      client
        .failoverInstance(request)
        .then(responses => {
          const operation = responses[0];
          return operation.promise();
        })
        .then(responses => {
          assert.deepStrictEqual(responses[0], expectedResponse);
          done();
        })
        .catch(err => {
          done(err);
        });
    });

    it('invokes failoverInstance with error', done => {
      const client = new redisModule.v1.CloudRedisClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.instancePath(
        '[PROJECT]',
        '[LOCATION]',
        '[INSTANCE]'
      );
      const dataProtectionMode = 'DATA_PROTECTION_MODE_UNSPECIFIED';
      const request = {
        name: formattedName,
        dataProtectionMode: dataProtectionMode,
      };

      // Mock Grpc layer
      client._innerApiCalls.failoverInstance = mockLongRunningGrpcMethod(
        request,
        null,
        error
      );

      client
        .failoverInstance(request)
        .then(responses => {
          const operation = responses[0];
          return operation.promise();
        })
        .then(() => {
          assert.fail();
        })
        .catch(err => {
          assert(err instanceof Error);
          assert.strictEqual(err.code, FAKE_STATUS_CODE);
          done();
        });
    });

    it('has longrunning decoder functions', () => {
      const client = new redisModule.v1.CloudRedisClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      assert(
        client._descriptors.longrunning.failoverInstance
          .responseDecoder instanceof Function
      );
      assert(
        client._descriptors.longrunning.failoverInstance
          .metadataDecoder instanceof Function
      );
    });
  });
});

function mockSimpleGrpcMethod(expectedRequest, response, error) {
  return function(actualRequest, options, callback) {
    assert.deepStrictEqual(actualRequest, expectedRequest);
    if (error) {
      callback(error);
    } else if (response) {
      callback(null, response);
    } else {
      callback(null);
    }
  };
}

function mockLongRunningGrpcMethod(expectedRequest, response, error) {
  return request => {
    assert.deepStrictEqual(request, expectedRequest);
    const mockOperation = {
      promise: function() {
        return new Promise((resolve, reject) => {
          if (error) {
            reject(error);
          } else {
            resolve([response]);
          }
        });
      },
    };
    return Promise.resolve([mockOperation]);
  };
}
