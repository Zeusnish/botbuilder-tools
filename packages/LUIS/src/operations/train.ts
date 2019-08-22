/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/trainMappers";
import * as Parameters from "../models/parameters";
import { LuisAuthoringContext } from "../luisAuthoringContext";

/** Class representing a Train. */
export class Train {
  private readonly client: LuisAuthoringContext;

  /**
   * Create a Train.
   * @param {LuisAuthoringContext} client Reference to the service client.
   */
  constructor(client: LuisAuthoringContext) {
    this.client = client;
  }

  /**
   * Sends a training request for a version of a specified LUIS app. This POST request initiates a
   * request asynchronously. To determine whether the training request is successful, submit a GET
   * request to get training status. Note: The application version is not fully trained unless all
   * the models (intents and entities) are trained successfully or are up to date. To verify training
   * success, get the training status at least once after training is complete.
   * @param appId The application ID.
   * @param versionId The version ID.
   * @param [options] The optional parameters
   * @returns Promise<Models.TrainTrainVersionResponse>
   */
  trainVersion(appId: string, versionId: string, options?: msRest.RequestOptionsBase): Promise<Models.TrainTrainVersionResponse>;
  /**
   * @param appId The application ID.
   * @param versionId The version ID.
   * @param callback The callback
   */
  trainVersion(appId: string, versionId: string, callback: msRest.ServiceCallback<Models.EnqueueTrainingResponse>): void;
  /**
   * @param appId The application ID.
   * @param versionId The version ID.
   * @param options The optional parameters
   * @param callback The callback
   */
  trainVersion(appId: string, versionId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.EnqueueTrainingResponse>): void;
  trainVersion(appId: string, versionId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.EnqueueTrainingResponse>, callback?: msRest.ServiceCallback<Models.EnqueueTrainingResponse>): Promise<Models.TrainTrainVersionResponse> {
    return this.client.sendOperationRequest(
      {
        appId,
        versionId,
        options
      },
      trainVersionOperationSpec,
      callback) as Promise<Models.TrainTrainVersionResponse>;
  }

  /**
   * Gets the training status of all models (intents and entities) for the specified LUIS app. You
   * must call the train API to train the LUIS app before you call this API to get training status.
   * "appID" specifies the LUIS app ID. "versionId" specifies the version number of the LUIS app. For
   * example, "0.1".
   * @param appId The application ID.
   * @param versionId The version ID.
   * @param [options] The optional parameters
   * @returns Promise<Models.TrainGetStatusResponse>
   */
  getStatus(appId: string, versionId: string, options?: msRest.RequestOptionsBase): Promise<Models.TrainGetStatusResponse>;
  /**
   * @param appId The application ID.
   * @param versionId The version ID.
   * @param callback The callback
   */
  getStatus(appId: string, versionId: string, callback: msRest.ServiceCallback<Models.ModelTrainingInfo[]>): void;
  /**
   * @param appId The application ID.
   * @param versionId The version ID.
   * @param options The optional parameters
   * @param callback The callback
   */
  getStatus(appId: string, versionId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ModelTrainingInfo[]>): void;
  getStatus(appId: string, versionId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ModelTrainingInfo[]>, callback?: msRest.ServiceCallback<Models.ModelTrainingInfo[]>): Promise<Models.TrainGetStatusResponse> {
    return this.client.sendOperationRequest(
      {
        appId,
        versionId,
        options
      },
      getStatusOperationSpec,
      callback) as Promise<Models.TrainGetStatusResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const trainVersionOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "apps/{appId}/versions/{versionId}/train",
  urlParameters: [
    Parameters.endpoint,
    Parameters.appId,
    Parameters.versionId0
  ],
  responses: {
    202: {
      bodyMapper: Mappers.EnqueueTrainingResponse
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const getStatusOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "apps/{appId}/versions/{versionId}/train",
  urlParameters: [
    Parameters.endpoint,
    Parameters.appId,
    Parameters.versionId0
  ],
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ModelTrainingInfo"
            }
          }
        }
      }
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};
