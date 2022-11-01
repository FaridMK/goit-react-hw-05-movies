import styled from 'styled-components';
import {
  color,
  layout,
  flexbox,
  grid,
  background,
  border,
  position,
  space,
} from 'styled-system';

const Box = styled('div')(
  color,
  space,
  layout,
  flexbox,
  grid,
  background,
  border,
  position
);

export default Box;
