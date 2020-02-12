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
//
// ** This file is automatically generated by gapic-generator-typescript. **
// ** https://github.com/googleapis/gapic-generator-typescript **
// ** All changes to this file may be overwritten. **

import * as protosTypes from '../protos/protos';
import * as assert from 'assert';
import {describe, it} from 'mocha';
const imageannotatorModule = require('../src');

const FAKE_STATUS_CODE = 1;
class FakeError {
  name: string;
  message: string;
  code: number;
  constructor(n: number) {
    this.name = 'fakeName';
    this.message = 'fake message';
    this.code = n;
  }
}
const error = new FakeError(FAKE_STATUS_CODE);
export interface Callback {
  (err: FakeError | null, response?: {} | null): void;
}

export class Operation {
  constructor() {}
  promise() {}
}
function mockSimpleGrpcMethod(
  expectedRequest: {},
  response: {} | null,
  error: FakeError | null
) {
  return (actualRequest: {}, options: {}, callback: Callback) => {
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
function mockLongRunningGrpcMethod(
  expectedRequest: {},
  response: {} | null,
  error?: {} | null
) {
  return (request: {}) => {
    assert.deepStrictEqual(request, expectedRequest);
    const mockOperation = {
      promise() {
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
describe('v1p2beta1.ImageAnnotatorClient', () => {
  it('has servicePath', () => {
    const servicePath =
      imageannotatorModule.v1p2beta1.ImageAnnotatorClient.servicePath;
    assert(servicePath);
  });
  it('has apiEndpoint', () => {
    const apiEndpoint =
      imageannotatorModule.v1p2beta1.ImageAnnotatorClient.apiEndpoint;
    assert(apiEndpoint);
  });
  it('has port', () => {
    const port = imageannotatorModule.v1p2beta1.ImageAnnotatorClient.port;
    assert(port);
    assert(typeof port === 'number');
  });
  it('should create a client with no option', () => {
    const client = new imageannotatorModule.v1p2beta1.ImageAnnotatorClient();
    assert(client);
  });
  it('should create a client with gRPC fallback', () => {
    const client = new imageannotatorModule.v1p2beta1.ImageAnnotatorClient({
      fallback: true,
    });
    assert(client);
  });
  describe('batchAnnotateImages', () => {
    it('invokes batchAnnotateImages without error', done => {
      const client = new imageannotatorModule.v1p2beta1.ImageAnnotatorClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Mock request
      const request: protosTypes.google.cloud.vision.v1p2beta1.IBatchAnnotateImagesRequest = {};
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.batchAnnotateImages = mockSimpleGrpcMethod(
        request,
        expectedResponse,
        null
      );
      client.batchAnnotateImages(request, (err: {}, response: {}) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes batchAnnotateImages with error', done => {
      const client = new imageannotatorModule.v1p2beta1.ImageAnnotatorClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Mock request
      const request: protosTypes.google.cloud.vision.v1p2beta1.IBatchAnnotateImagesRequest = {};
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.batchAnnotateImages = mockSimpleGrpcMethod(
        request,
        null,
        error
      );
      client.batchAnnotateImages(request, (err: FakeError, response: {}) => {
        assert(err instanceof FakeError);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });
  describe('asyncBatchAnnotateFiles', () => {
    it('invokes asyncBatchAnnotateFiles without error', done => {
      const client = new imageannotatorModule.v1p2beta1.ImageAnnotatorClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Mock request
      const request: protosTypes.google.cloud.vision.v1p2beta1.IAsyncBatchAnnotateFilesRequest = {};
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.asyncBatchAnnotateFiles = mockLongRunningGrpcMethod(
        request,
        expectedResponse
      );
      client
        .asyncBatchAnnotateFiles(request)
        .then((responses: [Operation]) => {
          const operation = responses[0];
          return operation ? operation.promise() : {};
        })
        .then((responses: [Operation]) => {
          assert.deepStrictEqual(responses[0], expectedResponse);
          done();
        })
        .catch((err: {}) => {
          done(err);
        });
    });

    it('invokes asyncBatchAnnotateFiles with error', done => {
      const client = new imageannotatorModule.v1p2beta1.ImageAnnotatorClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Mock request
      const request: protosTypes.google.cloud.vision.v1p2beta1.IAsyncBatchAnnotateFilesRequest = {};
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.asyncBatchAnnotateFiles = mockLongRunningGrpcMethod(
        request,
        null,
        error
      );
      client
        .asyncBatchAnnotateFiles(request)
        .then((responses: [Operation]) => {
          const operation = responses[0];
          return operation ? operation.promise() : {};
        })
        .then(() => {
          assert.fail();
        })
        .catch((err: FakeError) => {
          assert(err instanceof FakeError);
          assert.strictEqual(err.code, FAKE_STATUS_CODE);
          done();
        });
    });
  });
});
