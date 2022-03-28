import { defineMessages } from 'react-intl';
import config from '@plone/volto/registry';

const messages = defineMessages({
  heading: {
    id: 'Heading',
    defaultMessage: 'Heading',
  },
  headingLevel: {
    id: 'Heading level',
    defaultMessage: 'Heading level',
  },
  alignment: {
    id: 'Alignment',
    defaultMessage: 'Alignment',
  },
});

export const headingSchema = (props) => {
  const show_alignment = config.blocks?.blocksConfig?.heading?.show_alignment;
  const default_tag = config.blocks?.blocksConfig?.heading?.default_tag;
  const allowed_headings =
    config.blocks?.blocksConfig?.heading?.allowed_headings;
  const DEFAULT_HEADING_LEVELS = [
    ['h2', 'h2'],
    ['h3', 'h3'],
    ['h4', 'h4'],
    ['h5', 'h5'],
    ['h6', 'h6'],
  ];

  const filterDefaultLevels = () => {
    if (allowed_headings) {
      return DEFAULT_HEADING_LEVELS.filter((item) =>
        allowed_headings.includes(item[0]),
      );
    } else {
      return DEFAULT_HEADING_LEVELS;
    }
  };

  return {
    title: props.intl.formatMessage(messages.heading),
    fieldsets: [
      {
        id: 'default',
        title: 'Default',
        fields: ['tag', ...(show_alignment ? ['alignment'] : [])],
      },
    ],

    properties: {
      tag: {
        title: props.intl.formatMessage(messages.headingLevel),
        choices: filterDefaultLevels(),
        default: default_tag,
        noValueOption: false,
      },
      alignment: {
        title: props.intl.formatMessage(messages.alignment),
        choices: [
          ['left', 'left'],
          ['center', 'center'],
          ['right', 'right'],
        ],
        default: 'left',
      },
    },
    required: [],
  };
};
