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
import { GetCouponCodeCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationships } from './getCouponCodeCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationships';

export class GetCouponCodeCreateJobResponseCollectionCompoundDocumentDataInnerAllOf {
    'relationships'?: GetCouponCodeCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationships;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "relationships",
            "baseName": "relationships",
            "type": "GetCouponCodeCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationships"
        }    ];

    static getAttributeTypeMap() {
        return GetCouponCodeCreateJobResponseCollectionCompoundDocumentDataInnerAllOf.attributeTypeMap;
    }
}
