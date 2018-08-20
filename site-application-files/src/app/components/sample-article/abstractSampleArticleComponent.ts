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
/**
 * Do not modify this file, it will be auto-generated.
 */
import {
    Category,
    Image,
    RenderingContextBinding,
    AbstractRenderingComponent
} from '@ibm-wch-sdk/ng';
import {
    Observable
} from 'rxjs/Observable';

/**
 * @name Sample Article
 * @id 24490027-e55b-4739-a5a9-5c091c5d4a72
 */
export abstract class AbstractSampleArticleComponent extends AbstractRenderingComponent {

    /**
     * {
     *   "displayType": "singleLine",
     *   "elementType": "text",
     *   "key": "title",
     *   "label": "Title"
     * }
     */
    @RenderingContextBinding('text.title', '')
    readonly onTitle: Observable<string>;

    /**
     * @see #onTitle
     */
    @RenderingContextBinding()
    readonly title: string;

    /**
     * {
     *   "displayType": "singleLine",
     *   "elementType": "text",
     *   "key": "summary",
     *   "label": "Summary"
     * }
     */
    @RenderingContextBinding('text.summary', '')
    readonly onSummary: Observable<string>;

    /**
     * @see #onSummary
     */
    @RenderingContextBinding()
    readonly summary: string;

    /**
     * {
     *   "displayType": "singleLine",
     *   "elementType": "text",
     *   "key": "author",
     *   "label": "Author"
     * }
     */
    @RenderingContextBinding('text.author', '')
    readonly onAuthor: Observable<string>;

    /**
     * @see #onAuthor
     */
    @RenderingContextBinding()
    readonly author: string;

    /**
     * {
     *   "displayHeight": 10,
     *   "displayType": "multiLine",
     *   "displayWidth": 100,
     *   "elementType": "text",
     *   "key": "body",
     *   "label": "Body"
     * }
     */
    @RenderingContextBinding('text.body', '')
    readonly onBody: Observable<string>;

    /**
     * @see #onBody
     */
    @RenderingContextBinding()
    readonly body: string;

    /**
     * {
     *   "acceptType": [
     *     "jpg",
     *     "jpeg",
     *     "png",
     *     "gif"
     *   ],
     *   "elementType": "image",
     *   "imageProfileId": "bd89571a-edc0-4f8b-b90a-ada4c8436a39",
     *   "key": "image",
     *   "label": "Image"
     * }
     */
    @RenderingContextBinding('image.image')
    readonly onImage: Observable<Image>;

    /**
     * @see #onImage
     */
    @RenderingContextBinding()
    readonly image: Image;

    /**
     * {
     *   "elementType": "category",
     *   "key": "category",
     *   "label": "Category",
     *   "restrictedParents": [
     *     "59f05dd9116cf0ee47c23903bd563ea7"
     *   ]
     * }
     */
    @RenderingContextBinding('category.category')
    readonly onCategory: Observable<Category>;

    /**
     * @see #onCategory
     */
    @RenderingContextBinding()
    readonly category: Category;

    protected constructor() {
        super();
    }
}
