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
  h2: {
    id: 'h2',
    defaultMessage: 'Heading 2',
  },
  h3: {
    id: 'h3',
    defaultMessage: 'Heading 3',
  },
  h4: {
    id: 'h4',
    defaultMessage: 'Heading 4',
  },
  h5: {
    id: 'h5',
    defaultMessage: 'Heading 5',
  },
  h6: {
    id: 'h6',
    defaultMessage: 'Heading 6',
  },
  leftAlignment: {
    id: 'left',
    defaultMessage: 'Left',
  },
  centerAlignment: {
    id: 'center',
    defaultMessage: 'Center',
  },
  rightAlignment: {
    id: 'right',
    defaultMessage: 'Right',
  },
});

export const headingSchema = (props) => {
  const show_alignment = config.blocks?.blocksConfig?.heading?.show_alignment;
  const default_tag = config.blocks?.blocksConfig?.heading?.default_tag;
  const allowed_headings =
    config.blocks?.blocksConfig?.heading?.allowed_headings;
  const DEFAULT_HEADING_LEVELS = [
    ['h2', props.intl.formatMessage(messages.h2)],
    ['h3', props.intl.formatMessage(messages.h3)],
    ['h4', props.intl.formatMessage(messages.h4)],
    ['h5', props.intl.formatMessage(messages.h5)],
    ['h6', props.intl.formatMessage(messages.h6)],
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
        fields: [
          ...(allowed_headings.length > 1 ? ['tag'] : []),
          ...(show_alignment ? ['alignment'] : []),
        ],
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
          ['left', props.intl.formatMessage(messages.leftAlignment)],
          ['center', props.intl.formatMessage(messages.centerAlignment)],
          ['right', props.intl.formatMessage(messages.rightAlignment)],
        ],
        default: 'left',
      },
    },
    required: [],
  };
};
