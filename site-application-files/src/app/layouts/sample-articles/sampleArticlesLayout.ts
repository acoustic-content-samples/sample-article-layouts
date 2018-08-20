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
import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs/Subscription";
import {UtilsService} from "@ibm-wch/components-ng-shared-utilities";
import {Constants} from "../../Constants";
import { TypeSampleArticlesComponent } from './../../components/sample-articles/typeSampleArticlesComponent';

/*
 * @name sampleArticlesLayout
 * @id sample-articles-layout
 */
@LayoutComponent({
    selector: 'sample-articles-layout'
})
@Component({
  selector: 'app-sample-articles-layout-component',
  templateUrl: './sampleArticlesLayout.html',
  styleUrls: ['./sampleArticlesLayout.scss']
})
export class SampleArticlesLayoutComponent extends TypeSampleArticlesComponent {

    public readonly CATEGORY_KEY = 'sampleArticlesCategory';
    public readonly MAX_ITEMS_KEY = 'maxItems';

    /*
     * Custom fields here, specific to this layout.
     */
    queryString: string;
    rcSub: Subscription;

    constructor(public utilsService: UtilsService) {
        super();
        /*
         * TODO initialize your custom fields here, note that
         * you can refer to the values bound via @RenderingContextBinding from
         * your super class.
         *
         * Make sure to call 'this.safeSubscribe' if you plan to subscribe to observables
         */
    }

    ngOnInit() {
        super.ngOnInit();
        this.rcSub = this.onRenderingContext
			.subscribe((rc) => {
                const category = this.utilsService.getFirstCategory(rc, this.CATEGORY_KEY);
                const maxItems = (rc.number && rc.number[this.MAX_ITEMS_KEY]) ? rc.number.maxItems : 100;
                this.queryString = 'q=*:*&fq=classification:content&fq=type:(%22Sample Article%22)&fq=categoryLeaves:(%22' + category + '%22)&rows=' + maxItems;
            });
    }

    ngOnDestroy(){
        this.rcSub.unsubscribe();
    }


}
