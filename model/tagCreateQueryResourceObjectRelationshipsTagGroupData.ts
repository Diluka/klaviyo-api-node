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
import { TagGroupEnum } from './tagGroupEnum';

export class TagCreateQueryResourceObjectRelationshipsTagGroupData {
    'type': TagGroupEnum;
    /**
    * The ID of the Tag Group to associate the Tag with. If this field is not specified, the Tag will be associated with the company\'s Default Tag Group.
    */
    'id': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "TagGroupEnum"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return TagCreateQueryResourceObjectRelationshipsTagGroupData.attributeTypeMap;
    }
}

export namespace TagCreateQueryResourceObjectRelationshipsTagGroupData {
}