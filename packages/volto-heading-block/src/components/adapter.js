/**
 * Stores a change made in the settings form of the heading block.
 *
 * @param {Object} params
 * @param {Object} params.block The block id.
 * @param {Object} params.data The data of the block.
 * @param {string} params.id The name of the field that changed.
 * @param {Function} params.onChangeBlock Saves the data of the block.
 * @param {*} params.value The new value of the field.
 */
export const headingDataAdapter = ({
  block,
  data,
  id,
  onChangeBlock,
  value,
}) => {
  onChangeBlock(block, {
    ...data,
    [id]: value,
  });
};

export default headingDataAdapter;
