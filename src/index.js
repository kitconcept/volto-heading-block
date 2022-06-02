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
  };

  return config;
};
