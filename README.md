# sample-article-layouts
Sample Article Site SPA Layouts

## Overview

This repository provides a simple example of how to create one or more WCH Site layouts that work with the published "Sample Article" content from https://github.com/ibm-wch/sample-article-content.  This allows you to add Sample Article content items to a page or pages in the sample Watson Content Hub Oslo Single Page Application (SPA) based site.

## Prerequisites

 - Trial, Standard or higher tier Watson Content Hub tenant, with the out of the box Oslo Site SPA deployed
   (Note, the classes and styles used by this sample are provided by the Oslo stylesheets)
 - Node.js v6.11.1 or above:  https://developer.ibm.com/node/sdk/v6/
 - wchtools 2.1.x or later installed and configured for the user's tenant:  https://github.com/ibm-wch/wchtools-cli
 - Latest wch-site-application source project: https://github.com/ibm-wch/wch-site-application
 - Push the Sample Article artifacts to your content hub tenant from and as described at:  https://github.com/ibm-wch/sample-article-content

## Suggested reading

 - Read through the customizing the SPA documentation and try out the custom sample iframe layout first:  https://developer.ibm.com/customer-engagement/tutorials/customizing-layouts-components-for-your-site/
 - Read the Watson Content Hub Site Customization Programming Model documentation:  https://github.com/ibm-wch/wch-site-application/blob/master/doc/README-programming-model.md
 - Read and try the sample custom Site SPA layouts here: https://github.ibm.com/DX/sample-active-site-components

## Scenario

A Watson Content Hub user (web developer), who has completed the pre-requisites, wants to create a layout template to display an article from the sample-article-content collection, on a page of the sample WCH Oslo site. The user follows the instructions below, reviews the finished artifacts included in this repository, and then uses that to display an existing "Sample Article" summary in the sample Oslo SPA.

The user then wants to display a list or gallery of articles on another new Oslo page and follows the instructions provided here to create a new search based gallery/list item, test it locally, and then deploy it to the user's Watson Content Hub tenant to test on his WCH hosted Oslo site.

## Overview of this sample repository artifacts

The "content-artifacts" folder in this repository contains a set of authoring artifacts, including a "Sample Articles" content type, layout and layout mapping definitions.   The "Sample Articles" content type is used to define configuration parameters for a layout for a list of articles, including the category of article to search for, an optional heading to display above the list of articles, and the number of articles (maxItems) to search for.   This folder is in the structure expected by the wchtools CLI for pushing to a WCH tenant.

The "site-application-files" folder contains the web artifact sources used to build the angular components in the site SPA project, which will then be redeployed with the site to your WCH tenant.

## Install and deploy the sample article layouts

### Obtain a local copy of this git repository

* Clone or download this repository, to a folder in your local filesystem

    git clone git://github.com/ibm-wch/sample-article-layouts


### Install the authoring artifacts to your WCH tenant

The sample layouts include a set of WCH authoring artifacts that can be pushed directly to your WCH tenant with wchtools.

* Change your directory to `sample-article-layouts/content-artifacts`.
* In your command line, run `wchtools push -A -v `.
* Enter your WCH password at the password prompt.
* After you see `Push modified complete. Pushed # artifacts successfully.`, the content package is installed successfully. You can log into Watson Content Hub to see that the new "Sample Articles" content type required for this sample is installed in your tenant.

### Install the web artifacts to your site application project

* Change directory to your wch-site-application project
* The next step requires a site application project created or updated after Nov 10, 2017.  If you created your project prior to Nov 10th, do a git pull to update the project with new npm script commands.
* Run the following command to install the web artifacts from this sample to your site application project

    npm run install-layouts-from-folder {path-to-your-sample-article-layouts-folder}

  - The above command copies the layout source artifacts from sample-articla-layouts/  to your wch-site-application/ project and rebuilds the layout registry in that project.

  - This step uses wchtools to pull down the latest content types, layouts and mappings from your WCH tenant, and will thus prompt you for your WCH user's password when it runs.

  - It will use ibm-wch-sdk-cli to register the layouts in the Oslo angular application's layout registry classes.

  - If you receive an error that install-layouts-from-folder script is not found, your wch-site-application project may not be up to date, in which case you should try the git pull again.

  - When the install-layouts-from-folder command is successful, the web artifacts that provide the angular layout components for this sample will be included in the components and layouts folder of your site application project.

### Build and Deploy your components

  * From within the wch-site-application directory run:
  * Run `npm run build` to compile the project. Make sure there is no error during the build process.
  * Run `npm run deploy` to your WCH tenant. After that, you can see your changes in your WCH live site.

### Using the new layouts

  * When you create a new page in your Oslo site and add one of the sample article content items to that page, it should now automatically use the default layout for the "Sample Article" content type.
    - Create a new page with "Standard" page type
    - Edit page content for the new page
    - Add content to the "Section one" area of the page and "Find" one of the sample articles, check it for use in that section.
    - The page should show a copy of the article in the preview pane, rendered with the new Sample Article layout.

    - Note, if the new test page doesn't display correctly in the preview pane, try a full browser refresh and navigate back to your new page in the sites user interface.

  * This repository also includes an alternate layout for the "Sample Article" (single article) content type, called sampleArticleAlternateLayout.   This layout moves the title element below the image, omits the caption element, and presents a narrower view of the article body content.
    - Open one of the sample articles from the "All Content" view of the Authoring UI, create a Draft of the article.
    - Expand the "Layouts" section of that content editor and select the Sample Article Alternate Layout.
    - Click Publish, to make the draft content change ready for publishing.
    - Add a new page to Oslo like above, and add this article with alternate layout to that new page.
    - This article should now render with that alternate layout, with the title below, no caption, and narrow body.

  * Create a separate new page in your Oslo site and "compose" content with the "Sample Articles" type.  This content type will prompt you for an optional header for the list of articles to be displayed, allow you to select which category of sample articles to display (eg, Fashion or Technology) and allow you to specify the maximum number of articles to display.   Once you compose and save this new "Sample Articles" content on your Oslo page, it should render a list of articles based on that article category.
    - Create a new page (eg, Sample Article Gallery) with "Standard" page type
    - Edit Content for the new page
    - Under "Section One" click "Compose" to create a new content item from the page and choose "Sample Articles" (plural) for the content type.
    - Enter in any header text you would like to display above the gallery list of Articles.
    - Select a category like "Fashion" or "Tech" from the dropdown picker.  Note, only the first category selected is used in the search query, for this sample.
    - Specify the maximum number of articles you would like returned for the search (e.g. 6).  Note, the samples article package only contains 14 articles total, and this feature is just to show you how to limit the number of items returned if you had a much larger set of content items in your own application.
    - Click "Publish" and exit out of the content editor for that page.

    - Note, if the list doesn't show up in the preview pane, try a full browser refresh and navigate back to your new page in the sites user interface.


### Appendix - The backstory - How these layouts were created

#### Sample Article Layout

* After cloning the wch-site-application repository and npm installing, building and deploying it, this author ran through the pre-requisite samples above, to ensure everything in those pre-requisites worked as described.

* The first step after doing that and deploying the sample-article-content, was to create a layout for the "Sample Article" type deployed with the sample-article-content package.

    npm run create-layout -- --type "Sample Article"

    - The install steps above don't re-run this command because the original results of that command, along with the author's custom edits, were packaged up into the content-artifacts and site-application-files folders of this sample repository for easier reuse in their final, custom edited form.

    - The results of the above create-layout command include the generated base typescript class, html scss for the "Sample Article" content type under src/app/components/sample-article folder.   These will be used as the base for each layout associated with this content type.    

    - The layout specific implementation class, html, scss for this "default" layout for "Sample Article" content type are created under src/app/layouts/sample-article.   The sampleArticleLayout.html file in this folder is where the custom html layout for the sample article is specified (replacing the out of the box sample html and content element references with those desired for the actual layout of the sample article elements).

    - In addition to the angular and web artifacts generated above, layouts/sample-article-layout.json and layout-mappings/sample-article-layout-mapping.json are generated in src/wchLayouts to define the sample-article layout and to map it to the "Sample Article" content type.

    - A single sample-article CSS style was then defined in src/app/components/layouts/sampleArticleLayout.scss to center the elements when rendered.  The rest of the styles are reused from the Oslo site stylesheet, to match the look and feel of the rest of the site.

    - When the Oslo site SPA is built with npm run build,  the angular layout components and scss based styles are built into the application and deployed with it, to the WCH tenant.

    - The src/app/layouts/sample-article/sampleArticleLayout.ts class was manually modified to import the UtilsService and then to expose it to the template as a public reference, in the component's constructor,  for the template's use in generating image URL(s).

    - The src/app/layouts/sample-article/sampleArticleLayout.html was modified from the generated sample references, to include the following markup, to render a single sample article content item:

    - The id of the div is set to the id of the rendering context (note, this use assumes that item will only be used once on a single html page).

    - The contents of the h4 tag are set to the "title" element of the sample article.

    - The utilsService.getImageUrl helper method is called, passing the rendering context of the content item, along with the name of the image element ('image' in this case) and 'default' for the rendition,  to generate a src attribute for the html img tag.

    - The "body" element from the article is then used as the content of the html p tag within the div class='article-body' element.  In each of these cases, the short form element name is used, with the full rendering context reference to that element listed in comments above, to give you a better feel for where the information for each element is coming from.

    ```
    <div id="{{renderingContext.id}}" class="section sample-article">
        <h4>
            <!-- {{title}} shorter form of {{renderingContext.elements["title"].value}} -->
            {{title}}
        </h4>
        <div class="article-medium-image">
            <img [src]="utilsService.getImageUrl(renderingContext, 'image', 'default')" width="480" height="360">
            <p class="caption">{{summary}}</p>
        </div>
        <div class="article-body">
            <!-- {{body}} is shorter form of {{renderingContext.elements["body"].value}} -->
            <p>{{body}}</p>
        </div>
    </div>
    ```

#### Sample Article Alternate Layout

* The sample-article-alternate folder under src/app/layouts contains the html, scss and typescript for the alternate sample article layout.

* This alternate layout was created after the default layout for the "Sample Article" type with the following command

    ```
    npm run create-layout -- --type "Sample Articles" --name "Sample Article Alternate Layout"
    ```

* The author then copied the general html and ts changes from the default sampleArticleLayout into the generated files for the alternate layout (to start with the same look and feel) and then modified the html slightly (remove caption element, move the title h4 element lower) and added styles to sample-article-alternate-layout.scss to get the look and feel desired for this alternate layout.

* Examine the files under src/app/layouts/sample-article-alternate and compare them to src/app/layouts/sample-article to see the differences.

* Both sample article layouts use the same base angular component generated by the SPA tooling from under src/app/components/sample-article


#### Sample Articles Layout - layout for a list of Articles

* The sample-article-content package comes with a single "Sample Article" type, specifying the elements that make
up a sample article.

* To create a layout for a list of articles (gallery of article images and titles), a "Sample Articles" (plural) content type was created.  Since the layout for the sample articles gallery is based on a content search by category, rather than adding a multi-reference element to the layout, a Category element is specified in this new content type, along with an optional header text element, and a maxItems number element to use in the search query, to determine the max number of items to return in the search.

* With this new "Sample Articles" type created in the Authoring UI, the "sample-articles" layout was then created in a similar way to the sample-article layout with the following command in the wch-site-application project root:

    ```
    npm run create-layout -- --type "Sample Articles"
    ```

    - As with the first create-layout performed above, this generated the layout and mappings under src/wchLayouts and the base classes and implementation classes and html under src/app/components/sample-articles and src/app/layouts/sample-articles

    - The src/app/components/layouts/sampleArticlesLayout.ts class generated by the above command was manually edited to create and expose a queryString variable from the "Sample Articles" based content item, using the sampleArticlesCategory and maxItems elements.  That search queryString variable will be used below in the content query from the html template for this layout's angular component.

    ```
    const category = this.utilsService.getFirstCategory(rc, this.CATEGORY_KEY);
    const maxItems = (rc.number && rc.number[this.MAX_ITEMS_KEY]) ? rc.number.maxItems : 100;
    this.queryString = 'q=*:*&fq=classification:content&fq=type:(%22Sample Article%22)&fq=categoryLeaves:(%22' + category + '%22)&rows=' + maxItems;
    ```

    - The next step was to edit src/app/layouts/sample-articles/sampleArticlesLayout.html  to create the html markup for the sample articles gallery.

    - The following markup displays the content element (from the composed Sample Articles content) for the optional header text, using the element key sampleArticlesPageHeader specified in that content type, "if" it was specified in the content.

    ```
    <!-- layout for "Sample Articles" type, to display a list of articles by category -->
    <h3 *ngIf="sampleArticlesPageHeader">{{ sampleArticlesPageHeader }}</h3>
    ```

    - The following markup wraps the individual articles in the gallery with a content search based on the queryString value set in the manually edited src/app/layouts/sample-articles/sampleArticlesLayouts.ts class

    ```
    <!-- Search for content by queryString defined in sampleArticleLayouts.ts -->
    <wch-contentquery [query]='queryString' #q>
        ...
    </wch-contentquery>

    ```

    - The following markup, inside that wch-content-query will render a div cell for each of the content items in that query's search results.  Each item will have it's own rendering context, set in the ngFor to the local rc variable, which may then be used within the markup of that inner content item rendering.

      ```
      <!-- Render the following for each of the rendering context results returned -->
      <div class="medium-4 cell" *ngFor="let rc of q.onRenderingContexts | async">
      ...
      </div>
      ```

    - Then, for each of those content items in the search result loop, the following is rendered, using that local rc variable referring to the item's rendering context, and using the utilsService imported in sampleArticleLayouts.ts and exposed as public from its constructor, to generate a URL for the image element.

      ```
      <div class="summary-card">
        <div class="summary-card-image image-container">
          <!-- Leverage utility service to generate url to the image element with default rendition -->
          <img [src]="utilsService.getImageUrl(rc, 'image', 'default')">
        </div>
        <!-- Render the article title from this item's rendering context -->
        <p>{{rc.text["title"]}}</p>
      </div>
