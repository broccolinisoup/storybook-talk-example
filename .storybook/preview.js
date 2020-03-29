import '../src/index.css';

import { addParameters, DocsPage, DocsContainer } from '@storybook/vue';

addParameters({
  docs: 
    { page: DocsPage, container: DocsContainer,   inlineStories: true, }
  ,
});