import React from 'react';
import ContentEditable from 'react-contenteditable';
import { withBlockExtensions } from '@plone/volto/helpers';
import { SidebarPortal, MaybeWrap } from '@plone/volto/components';
import HeadingSidebar from './Sidebar';
import config from '@plone/volto/registry';
import cx from 'classnames';

// Source: https://stackoverflow.com/questions/5796718/html-entity-decode
var decodeHTMLEntities = (function () {
  if (__SERVER__) {
    return () => {
      throw new Error('DecodeHTMLEntities is not supported in SSR.');
    };
  }
  // closure to avoid creating the object each time
  var element = document.createElement('div');

  function decodeHTMLEntities(str) {
    if (str && typeof str === 'string') {
      // strip script/html tags
      str = str.replace(/<script[^>]*>([\S\s]*?)<\/script>/gim, '');
      str = str.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gim, '');
      element.innerHTML = str;
      str = element.textContent;
      element.textContent = '';
    }

    return str;
  }

  return decodeHTMLEntities;
})();

class HeadingEdit extends React.Component {
  constructor(props) {
    super();
    this.state = {
      html: props.data.heading || '',
    };
  }

  editable = React.createRef();
  componentDidUpdate(prevProps) {
    if (this.props.selected && this.editable.current) {
      this.editable.current.focus();
    }
  }

  handleChange = (event) => {
    const { block, data } = this.props;
    // Strip all html tags and decode html entities. Apparently this is
    // necessary.
    const cleanedText = decodeHTMLEntities(event.target.value);
    if (event.nativeEvent.inputType === 'insertFromPaste') {
      this.setState({ html: cleanedText });
    } else {
      this.setState({ html: event.target.value });
    }
    this.props.onChangeBlock(block, { ...data, heading: cleanedText });
  };

  render = () => {
    const { block, data, onChangeBlock, selected, blocksConfig, className } =
      this.props;
    const show_alignment = blocksConfig?.heading?.show_alignment;
    const isBlockModelv3 = blocksConfig?.heading?.blockModel === 3;

    const LegacyWrapper = ({ className, children }) => (
      <div className={cx('block heading', className)}>{children}</div>
    );

    return (
      <>
        {data && (
          <MaybeWrap
            condition={!isBlockModelv3}
            className={className}
            as={LegacyWrapper}
          >
            <div className="heading-wrapper">
              <ContentEditable
                innerRef={this.editable}
                className="editable"
                style={show_alignment ? { textAlign: data.alignment } : {}}
                tagName={data.tag ?? 'h2'}
                html={this.state.html} // innerHTML of the editable div
                onChange={this.handleChange} // handle innerHTML change
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    e.stopPropagation();
                    this.props.onSelectBlock(
                      this.props.onAddBlock(
                        config.settings.defaultBlockType,
                        this.props.index + 1,
                      ),
                    );
                  } else if (e.key === 'ArrowUp') {
                    e.preventDefault();
                    e.stopPropagation();
                    this.props.onFocusPreviousBlock(
                      this.props.block,
                      this.editable.current,
                    );
                  } else if (e.key === 'ArrowDown') {
                    e.preventDefault();
                    e.stopPropagation();
                    this.props.onFocusNextBlock(
                      this.props.block,
                      this.editable.current,
                    );
                  }
                }}
              />
              <SidebarPortal selected={selected}>
                <HeadingSidebar
                  {...this.props}
                  data={data}
                  block={block}
                  onChangeBlock={onChangeBlock}
                />
              </SidebarPortal>
            </div>
          </MaybeWrap>
        )}
      </>
    );
  };
}

export default withBlockExtensions(HeadingEdit);
