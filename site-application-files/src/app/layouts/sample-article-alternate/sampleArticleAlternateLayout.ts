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
    LayoutComponent
} from 'ibm-wch-sdk-ng';
import { Component } from '@angular/core';
import { TypeSampleArticleComponent } from './../../components/sample-article/typeSampleArticleComponent';
import { UtilsService } from '../../common/utils/utils.service';

/*
 * @name sampleArticleAlternateLayout
 * @id sample-article-alternate-layout
 */
@LayoutComponent({
    selector: 'sample-article-alternate-layout'
})
@Component({
  selector: 'app-sample-article-alternate-layout-component',
  templateUrl: './sampleArticleAlternateLayout.html',
  styleUrls: ['./sampleArticleAlternateLayout.scss']
})
export class SampleArticleAlternateLayoutComponent extends TypeSampleArticleComponent {

    /*
     * TODO add custom fields here. These fields should be those
     * specific to this layout.
     */
    constructor(public utilsService: UtilsService) {
        super();
    }

}
