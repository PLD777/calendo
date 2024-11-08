import { useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

import CGU from './CGU';
import Rules from './Rules';

import { useOperationByLink } from '../../features/calendo/useOperationByLink';
import { useLocalStorageState } from '../../hooks/useLocalStorageState';
import { useCreateParticipation } from '../../features/calendo/useCreateParticipation';

const FormContainer = styled.div`
  width: 100%;
  padding: 2.5rem;
  border-radius: 25px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
`;

const FormTitle = styled.h2`
  color: white;
  font-size: 2.8rem;
  text-align: center;
  margin: 0 0 3rem 0;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: none;

  @media (max-width: 790px) {
    font-size: 2.4rem;
    margin: 0 0 2rem 0;
  }
`;

const FormGrid = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.8rem;
`;

const InputWrapper = styled.div`
  &.full-width {
    grid-column: 1 / -1;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.6);
  border-radius: 50px;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  font-size: 1.1rem;
  font-weight: 400;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;

  &::placeholder {
    color: rgba(255, 255, 255, 0.8);
    font-weight: 400;
  }

  &:focus {
    outline: none;
    border-color: white;
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
  }
`;

const CheckboxContainer = styled.div`
  grid-column: 1 / -1;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  margin: 1.5rem 0;
`;

const CheckboxWrapper = styled.label`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: white;
  font-size: 1.1rem;
  font-weight: 400;
  cursor: pointer;

  .custom-checkbox {
    width: 24px;
    height: 24px;
    border: 1px solid rgba(255, 255, 255, 0.8);
    border-radius: 50%;
    position: relative;
    display: inline-block;
    transition: all 0.3s ease;
    cursor: pointer;

    &:after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 12px;
      height: 12px;
      background: white;
      border-radius: 50%;
      transform: translate(-50%, -50%) scale(0);
      transition: transform 0.2s ease;
      box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
    }
  }

  input:checked + .custom-checkbox:after {
    transform: translate(-50%, -50%) scale(1);
  }

  input {
    display: none;
  }

  a {
    color: white;
    text-decoration: none;
    font-weight: 400;
    transition: all 0.3s ease;
    padding: 0.2rem 0.5rem;
    border-radius: 4px;
    border: 1px solid rgba(255, 255, 255, 0.3);

    &:hover {
      border-color: white;
      box-shadow: 0 0 15px rgba(255, 255, 255, 0.3);
    }
  }
`;

const SubmitButton = styled.button`
  grid-column: 1 / -1;
  padding: 1rem 2rem;
  background: transparent;
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.8);
  border-radius: 50px;
  font-size: 2rem;
  font-weight: 600;
  text-transform: none;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);
  letter-spacing: 1px;
  position: relative;
  overflow: hidden;
  margin-top: 1rem;
  outline: none;

  &:focus {
    outline: none;
    border-color: white;
  }

  &:focus-visible {
    outline: none;
    border-color: white;
  }

  &:active {
    outline: none;
    border-color: white;
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.3),
      transparent
    );
    transition: 0.5s;
  }

  &:hover {
    border-color: white;
    box-shadow: 0 0 30px rgba(255, 255, 255, 0.4);

    &:before {
      left: 100%;
    }
  }

  @media (max-width: 790px) {
    font-size: 2rem;
    padding: 1.5rem 3rem;
  }
`;

const BentoForm = () => {
  const [hasParticipated, setHasParticipated] = useLocalStorageState(
    false,
    'hasParticipated'
  );
  const { store } = useOperationByLink();
  const [modalContent, setModalContent] = useState(null);
  const { createParticipation, isPending } = useCreateParticipation();
  const { register, handleSubmit, reset } = useForm();

  async function onSubmit(data) {
    if (!data) return;
    if (!data.acceptCGU || !data.acceptRules) return;

    let formData = {
      ...data,
      storeId: store.id,
    };

    try {
      const response = await fetch('https://api.ipify.org?format=json');
      const { ip } = await response.json();

      formData = {
        ...formData,
        ipAddress: ip,
        userAgent: navigator.userAgent,
      };
    } catch {
      console.error('Participation created but some data is missing');
    }

    createParticipation(
      { newParticipation: formData },
      {
        onSuccess: () => {
          setHasParticipated(true);
          reset();
        },
      }
    );
  }

  if (hasParticipated) {
    return (
      <FormContainer>
        <FormTitle>Merci pour votre participation !</FormTitle>
      </FormContainer>
    );
  }

  return (
    <>
      <FormContainer>
        <FormTitle>Formulaire de participation</FormTitle>
        <FormGrid onSubmit={handleSubmit(onSubmit)}>
          <InputWrapper>
            <Input
              type="text"
              placeholder="Nom"
              {...register('lastName', { required: 'This field is required' })}
              required
              disabled={isPending}
            />
          </InputWrapper>
          <InputWrapper>
            <Input
              type="text"
              {...register('firstName', { required: 'This field is required' })}
              placeholder="Prénom"
              required
              disabled={isPending}
            />
          </InputWrapper>
          <InputWrapper className="full-width">
            <Input
              type="email"
              {...register('email', {
                required: 'This field is required',
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: 'Merci de renseigner une adresse e-mail valide',
                },
              })}
              placeholder="E-mail"
              required
              disabled={isPending}
            />
          </InputWrapper>
          <InputWrapper>
            <Input
              type="tel"
              {...register('phone', {
                required: 'This field is required',
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: 'Merci de renseigner un numéro de téléphone valide',
                },
              })}
              placeholder="N° Tél"
              required
              disabled={isPending}
            />
          </InputWrapper>
          <InputWrapper>
            <Input
              type="text"
              {...register('postalCode', {
                required: 'This field is required',
                pattern: {
                  value: /^\d{5}$/,
                  message: 'Le code postal doit faire 5 chiffres',
                },
              })}
              placeholder="Code postal"
              required
              disabled={isPending}
            />
          </InputWrapper>

          <CheckboxContainer>
            <CheckboxWrapper>
              <input
                type="checkbox"
                {...register('acceptCGU')}
                id="acceptCGU"
                disabled={isPending}
              />
              <span className="custom-checkbox"></span>
              <span>
                J&apos;accepte les{' '}
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setModalContent('cgu');
                  }}
                >
                  CGU
                </a>
              </span>
            </CheckboxWrapper>
            <CheckboxWrapper>
              <input
                type="checkbox"
                {...register('acceptRules')}
                id="acceptRules"
                disabled={isPending}
              />
              <span className="custom-checkbox"></span>
              <span>
                J&apos;ai pris connaissance du{' '}
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setModalContent('rules');
                  }}
                >
                  Règlement
                </a>
              </span>
            </CheckboxWrapper>
          </CheckboxContainer>

          <SubmitButton type="submit">Confirmer ma participation</SubmitButton>
        </FormGrid>
      </FormContainer>

      {modalContent === 'cgu' && <CGU onClose={() => setModalContent(null)} />}
      {modalContent === 'rules' && (
        <Rules onClose={() => setModalContent(null)} />
      )}
    </>
  );
};

export default BentoForm;
