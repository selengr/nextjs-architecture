import React from 'react';
import ModalGestures from './ModalGestures ';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/ModalGestures',
  component: ModalGestures,
};

// Default story with basic setup
export const Primary = () => (
  <ModalGestures isOpen={true} onClose={() => {}} title="Sample Modal">
    <p>This is the content of the modal.</p>
  </ModalGestures>
);

// Story for custom styling
export const CustomStyling = () => (
  <ModalGestures
    isOpen={true}
    onClose={() => {}}
    title="Custom Styled Modal"
    customStyle={{ backgroundColor: 'lightblue' }}
  >
    <p>This modal has custom styling.</p>
  </ModalGestures>
);

// Story for different snap points
export const SnapPoints = () => (
  <ModalGestures
    isOpen={true}
    onClose={() => {}}
    title="Custom Snap Points"
    initialSnap={800}
    // snapPoints={[1200, 800, 400, 0]}
  >
    <p>This modal demonstrates different snap points.</p>
  </ModalGestures>
);
