/*******************************************************************************
 * Copyright IBM Corp. 2017
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *******************************************************************************/
/*
 * Do not modify this file, it will be auto-generated.
 */
import {
    Category,
    RenderingContextBinding,
    AbstractRenderingComponent
} from '@ibm-wch-sdk/ng';
import {
    Observable
} from 'rxjs/Observable';

/*
 * @name Sample Articles
 * @id 9fbd5e16-d659-48f2-a76f-cf8262f78422
 */
export abstract class AbstractSampleArticlesComponent extends AbstractRenderingComponent {

    /*
     * {
     *   "elementType": "text",
     *   "key": "sampleArticlesPageHeader",
     *   "label": "Sample Articles Page Header"
     * }
     */
    @RenderingContextBinding('text.sampleArticlesPageHeader', '')
    readonly onSampleArticlesPageHeader: Observable<string>;

    /*
     * @see #onSampleArticlesPageHeader
     */
    @RenderingContextBinding()
    readonly sampleArticlesPageHeader: string;

    /*
     * {
     *   "elementType": "category",
     *   "key": "sampleArticlesCategory",
     *   "label": "Sample Articles Category",
     *   "restrictedParents": [
     *     "59f05dd9116cf0ee47c23903bd563ea7"
     *   ]
     * }
     */
    @RenderingContextBinding('category.sampleArticlesCategory')
    readonly onSampleArticlesCategory: Observable<Category>;

    /*
     * @see #onSampleArticlesCategory
     */
    @RenderingContextBinding()
    readonly sampleArticlesCategory: Category;

    /**
     * {
     *   "elementType": "number",
     *   "fieldLabel": "Number",
     *   "fieldType": "integer",
     *   "key": "maxItems",
     *   "label": "Maximum number of list items"
     * }
     */
    @RenderingContextBinding('number.maxItem', 0)
    readonly onMaxItems: Observable<number>;

    /**
     * @see #onMaxItems
     */
    @RenderingContextBinding()
    readonly maxItems: number;

    protected constructor() {
        super();
    }
}
