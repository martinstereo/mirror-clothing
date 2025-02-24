import { SpinnerOverlay, SpinnerContainer } from './spinner.styles';

const Spinner = () => {
  return (
    <SpinnerOverlay data-testid='spinner'>
      <SpinnerContainer />
    </SpinnerOverlay>
  );
};

export default Spinner;
