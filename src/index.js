import headingSVG from '@plone/volto/icons/heading.svg';
import HeadingViewBlock from './components/View';
import HeadingEditBlock from './components/Edit';
import './theme/main.less';

export default (config) => {
  config.blocks.blocksConfig.heading = {
    id: 'heading',
    title: 'Heading',
    icon: headingSVG,
    group: 'text',
    view: HeadingViewBlock,
    edit: HeadingEditBlock,
    restricted: false,
    mostUsed: true,
    sidebarTab: 1,
    blockHasOwnFocusManagement: true,
    default_tag: 'h2',
    allowed_headings: ['h2', 'h3'],
    show_alignment: false,
    // integration with volto-block-toc
    tocEntry: (block = {}) => {
      const { tag, heading } = block;
      return heading && tag ? [parseInt(tag.slice(1)), heading] : null;
    },
  };

  return config;
};
