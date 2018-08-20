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


import {
    LayoutComponent, RenderingContext, RenderingContextBinding
} from '@ibm-wch-sdk/ng';
import { Component } from '@angular/core';
import { TypeSampleArticleComponent } from './../../components/sample-article/typeSampleArticleComponent';
import { UtilsService } from '@ibm-wch/components-ng-shared-utilities';

/**
 * @name sampleArticleLayout
 * @id sample-article-layout
 */
@LayoutComponent({
    selector: 'sample-article-layout'
})
@Component({
  selector: 'app-sample-article-layout-component',
  templateUrl: './sampleArticleLayout.html',
  styleUrls: ['./sampleArticleLayout.scss']
})
export class SampleArticleLayoutComponent extends TypeSampleArticleComponent {

    // Provide a shorter name for renderingContext, if desired
    rContext: RenderingContext;

    /**
     * TODO add custom fields here. These fields should be those
     * specific to this layout.
     */

    constructor(public utilsService: UtilsService) {
		super();
    }

    ngOnInit() {
        super.ngOnInit();
		this.safeSubscribe(this.onRenderingContext, (renderingContext) => {
            this.rContext = renderingContext;
        });
    }

}
