import { describe, it, expect, vi, beforeAll } from 'vitest';
import { createIntl } from 'react-intl';
import config from '@plone/volto/registry';

// The Volto registry loads the whole site configuration, which needs the
// webpack build. The tests only need its `blocks` section, so it is replaced.
vi.mock('@plone/volto/registry', () => ({
  default: { blocks: { blocksConfig: {} } },
}));
// The view and edit components need the browser and the Volto runtime. The
// configuration is what these tests check, so they are replaced here.
vi.mock('./components/View', () => ({ default: () => null }));
vi.mock('./components/Edit', () => ({ default: () => null }));
vi.mock('./theme/main.less', () => ({}));

const intl = createIntl({ locale: 'en', messages: {} });

describe('heading block configuration', () => {
  let block;

  beforeAll(async () => {
    const { default: applyConfig } = await import('./index');
    config.blocks = { blocksConfig: {} };
    applyConfig(config);
    block = config.blocks.blocksConfig.heading;
  });

  it('registers a blockSchema that resolves with only intl', () => {
    expect(typeof block.blockSchema).toBe('function');

    const schema = block.blockSchema({ intl });

    expect(schema.title).toBe('Heading');
    expect(Object.keys(schema.properties)).toEqual(['tag', 'alignment']);
    expect(schema.properties.tag.choices).toEqual([
      ['h2', 'h2'],
      ['h3', 'h3'],
    ]);
  });

  it('registers a dataAdapter that merges the changed field into the block data', () => {
    expect(typeof block.dataAdapter).toBe('function');

    const onChangeBlock = vi.fn();
    const data = { '@type': 'heading', heading: 'Title', tag: 'h2' };

    block.dataAdapter({
      block: 'block-1',
      data,
      id: 'tag',
      onChangeBlock,
      value: 'h3',
    });

    expect(onChangeBlock).toHaveBeenCalledTimes(1);
    expect(onChangeBlock).toHaveBeenCalledWith('block-1', {
      '@type': 'heading',
      heading: 'Title',
      tag: 'h3',
    });
  });
});
