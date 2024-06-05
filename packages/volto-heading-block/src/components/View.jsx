import React from 'react';
import { withBlockExtensions } from '@plone/volto/helpers';
import cx from 'classnames';
import config from '@plone/volto/registry';
import { MaybeWrap } from '@plone/volto/components';

const HeadingView = (props) => {
  const { className, data, blocksConfig } = props;
  const Element = data.tag || 'h2';
  const show_alignment = config.blocks?.blocksConfig?.heading?.show_alignment;
  const isBlockModelv3 = blocksConfig?.heading?.blockModel === 3;

  const LegacyWrapper = ({ className, children }) => (
    <div className={cx('block heading', className)}>{children}</div>
  );

  return (
    <>
      {data && (
        <MaybeWrap
          condition={!isBlockModelv3}
          as={LegacyWrapper}
          className={className}
        >
          <div className="heading-wrapper">
            <Element
              style={show_alignment ? { textAlign: data.alignment } : {}}
              className="heading"
            >
              {data?.heading || ''}
            </Element>
          </div>
        </MaybeWrap>
      )}
    </>
  );
};

export default withBlockExtensions(HeadingView);
