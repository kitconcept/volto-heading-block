import React from 'react';
import { BlockDataForm } from '@plone/volto/components/manage/Form';
import config from '@plone/volto/registry';
import { useIntl } from 'react-intl';

const HeadingData = (props) => {
  const { data, block, onChangeBlock } = props;
  const intl = useIntl();
  const { blockSchema, dataAdapter } = config.blocks.blocksConfig.heading;
  const schema = blockSchema({ data, intl });

  return (
    <BlockDataForm
      schema={schema}
      title={schema.title}
      onChangeField={(id, value) => {
        dataAdapter({
          block,
          data,
          id,
          onChangeBlock,
          value,
        });
      }}
      formData={data}
      block={block}
    />
  );
};

export default HeadingData;
