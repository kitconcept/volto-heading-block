import React from 'react';
import { withBlockExtensions } from '@plone/volto/helpers';
import cx from 'classnames';
import config from '@plone/volto/registry';

const HeadingView = (props) => {
  const { className, data } = props;
  const Element = data.tag || 'h2';
  const show_alignment = config.blocks?.blocksConfig?.heading?.show_alignment;

  return (
    <>
      {data && (
        <div className={cx('block heading', className)}>
          <div className="heading-wrapper">
            <Element
              style={show_alignment ? { textAlign: data.alignment } : {}}
              className="heading"
            >
              {data?.heading}
            </Element>
          </div>
        </div>
      )}
    </>
  );
};

export default withBlockExtensions(HeadingView);
