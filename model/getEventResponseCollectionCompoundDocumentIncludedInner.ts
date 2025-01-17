/**
 * Klaviyo API
 * The Klaviyo REST API. Please visit https://developers.klaviyo.com for more details.
 *
 * Contact: developers@klaviyo.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { MetricResponseObjectResource } from './metricResponseObjectResource';
import { ObjectLinks } from './objectLinks';
import { ProfileEnum } from './profileEnum';
import { ProfileResponseObjectResource } from './profileResponseObjectResource';
import { ProfileResponseObjectResourceAttributes } from './profileResponseObjectResourceAttributes';




    export type GetEventResponseCollectionCompoundDocumentIncludedInner = MetricResponseObjectResource | ProfileResponseObjectResource

    export class GetEventResponseCollectionCompoundDocumentIncludedInnerHelper {
        static mapping: {[index: string]: any} = {
            "metric": "MetricResponseObjectResource",
            "profile": "ProfileResponseObjectResource",
        }
        static discriminator: string | undefined = "type";
    }

