import styled from 'styled-components';

import Button from '../button/button.component';

export const PaymentFormContainer = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    height: auto;
    padding: 20px;
  }
`;

interface FormContainerProps {
  children?: React.ReactNode;
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
}

export const FormContainer = styled.form<FormContainerProps>`
  height: 100px;
  min-width: 500px;

  @media (max-width: 768px) {
    min-width: 100%;
    height: auto;
  }
`;

export const PaymentButton = styled(Button)`
  margin-left: auto;
  margin-top: 30px;

  @media (max-width: 768px) {
    margin-left: 0;
    width: 100%;
  }
`;
