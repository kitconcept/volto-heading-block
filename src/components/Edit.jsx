import React from 'react';
import ContentEditable from 'react-contenteditable';
import { withBlockExtensions } from '@plone/volto/helpers';
import { SidebarPortal } from '@plone/volto/components';
import HeadingSidebar from './Sidebar';
import config from '@plone/volto/registry';

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
    // console.log(event.nativeEvent.inputType)
    const cleanedText = event.target.value
      .replace(/<[^>]*>/g, ' ')
      .replace(/&nbsp;/g, ' ');
    if (event.nativeEvent.inputType === "insertFromPaste") {
      this.setState({ html: cleanedText });
    }
    else {
      this.setState({ html: event.target.value });
    }
    this.props.onChangeBlock(block, { ...data, heading: cleanedText });
  };

  render = () => {
    const { block, data, onChangeBlock, selected } = this.props;
    const show_alignment = config.blocks?.blocksConfig?.heading?.show_alignment;

    return (
      <div className="block heading">
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
      </div>
    );
  };
}

export default withBlockExtensions(HeadingEdit);
