import styled from 'styled-components';
import { Accordion, Form, Button, Modal } from 'react-bootstrap';

export const LoginFormWrapper = styled.div`
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f5f5f5;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 768px) {
    padding: 15px;
    gap: 1rem;
  }
`;

export const FormContainer = styled.div`
  width: 400px;
  min-width: 320px;
  margin: 0 auto;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  background-color: white;

  @media (max-width: 480px) {
    width: 100%;
    min-width: unset;
    margin: 0;
    box-shadow: none;
    border-radius: 8px;
  }
`;

export const StyledAccordion = styled(Accordion)`
  .accordion-button {
    font-size: 1.2rem;
    font-weight: 500;
    background-color: #f8f9fa;

    @media (max-width: 480px) {
      font-size: 1rem;
      padding: 0.75rem;
    }

    &:not(.collapsed) {
      background-color: #e9ecef;
      box-shadow: none;
    }

    &:focus {
      box-shadow: none;
      border-color: #dee2e6;
    }
  }

  .accordion-body {
    padding: 2rem;

    @media (max-width: 480px) {
      padding: 1rem;
    }
  }
`;

export const FormItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 480px) {
    gap: 1rem;
  }
`;

export const StyledFormControl = styled(Form.Control)`
  padding: 0.75rem;
  border-radius: 8px;
  border: 1px solid #dee2e6;
  transition: border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

  @media (max-width: 480px) {
    padding: 0.5rem;
    font-size: 16px; /* Prevents iOS zoom on input focus */
  }

  &:focus {
    border-color: #80bdff;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }

  &::placeholder {
    color: #adb5bd;
  }

  &[type="file"] {
    padding: 0.5rem;

    &::file-selector-button {
      padding: 0.5rem 1rem;
      margin-right: 1rem;
      border-radius: 6px;
      border: none;
      background-color: #e9ecef;
      color: #495057;
      cursor: pointer;
      transition: background-color 0.2s;

      @media (max-width: 480px) {
        padding: 0.4rem 0.8rem;
        margin-right: 0.5rem;
      }

      &:hover {
        background-color: #dde2e6;
      }
    }
  }
`;

export const StyledButton = styled(Button)`
  padding: 0.75rem 1.5rem;
  font-weight: 500;
  border-radius: 8px;
  transition: all 0.2s ease-in-out;
  width: auto;

  @media (max-width: 480px) {
    padding: 0.6rem 1.2rem;
    width: 100%; /* Full width on mobile */
    font-size: 16px;
    /* Remove hover effects on mobile for better performance */
    &:hover {
      transform: none;
      box-shadow: none;
    }
  }

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const StyledModal = styled(Modal)`
  .modal-content {
    border-radius: 12px;
    border: none;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);

    @media (max-width: 480px) {
      border-radius: 8px;
      margin: 10px;
    }
  }

  .modal-header {
    border-bottom: 1px solid #dee2e6;
    padding: 1.5rem;

    @media (max-width: 480px) {
      padding: 1rem;
    }

    .modal-title {
      font-weight: 500;
      
      @media (max-width: 480px) {
        font-size: 1.1rem;
      }
    }
  }

  .modal-body {
    padding: 1.5rem;

    @media (max-width: 480px) {
      padding: 1rem;
    }
  }

  .modal-footer {
    border-top: 1px solid #dee2e6;
    padding: 1.5rem;

    @media (max-width: 480px) {
      padding: 1rem;
      flex-direction: column;
      gap: 0.5rem;

      /* Make buttons full width on mobile */
      > button {
        width: 100%;
        margin: 0;
      }
    }
  }
`;