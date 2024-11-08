import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import Button from '../../ui/Button';
import Select from '../../ui/Select';
import Spinner from '../../ui/Spinner';

import { useCreateOperation } from './useCreateOperation';
import { useOperation } from './useOperation';
import { useEditOperation } from './useEditOperation';
import { useStores } from '../stores/useStores';

const MultipleFileUpload = styled.div`
  border: 1px solid var(--color-grey-300);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 3rem;
  padding: 0.8rem 1.2rem;
`;

const FileCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & > input {
    width: 100%;
  }
`;

const Img = styled('img')`
  border-radius: 6px;
  transform: scale(0.8);
  width: 22rem;
  height: 22rem;
  object-fit: cover;
`;

function OperationForm() {
  const navigate = useNavigate();
  const { createOperation, isPending: isCreating } = useCreateOperation();
  const { editOperation, isEditing } = useEditOperation();
  const { register, formState, handleSubmit, reset, watch } = useForm();
  const operationId = useParams().operationId || null;

  const { operation, isPending: isFetching } = useOperation();
  const { stores, isPending: isFetching2 } = useStores();
  const typeValue = watch('type') || operation?.type;

  if (isFetching || isFetching2) return <Spinner />;

  const { errors } = formState;
  const isPending = isCreating || isEditing;

  function handleChangeImage(e) {
    if (
      e.target.id === 'opening' ||
      e.target.id === 'type' ||
      e.target.id === 'storeId' ||
      e.target.id === 'loot'
    )
      return;

    const element = e.target.name;
    document.getElementById(`${element}-img`).src = URL.createObjectURL(
      e.target.files[0]
    );
  }

  function onSubmit(data) {
    if (!data) return;

    if (operationId === null) {
      createOperation(
        { newOperation: data },
        {
          onSuccess: () => {
            reset();
          },
        }
      );
    }

    if (operationId) {
      editOperation(
        {
          editedOperation: data,
          operationId,
          operation,
        },
        {
          onSuccess: () => {
            navigate('/jolo/operations');
          },
        }
      );
    }
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)} onChange={handleChangeImage}>
      <FormRow label="Store" error={errors?.storeId?.message}>
        <Select
          id="storeId"
          defaultValue={operation?.stores?.id || ''}
          {...register('storeId', { required: 'This field is required' })}
        >
          {stores.map((store) => {
            return (
              <option value={store.id} key={store.id}>
                {store.type} - {store.city}
              </option>
            );
          })}
        </Select>
      </FormRow>

      <FormRow label="Type" error={errors?.type?.message}>
        <Select
          id="type"
          defaultValue={operation?.type}
          {...register('type', { required: 'This field is required' })}
        >
          <option value="x">Calendo X</option>
          <option value="z">Calendo Z</option>
        </Select>
      </FormRow>

      {typeValue === 'z' && (
        <>
          <FormRow label="Loot" error={errors?.loot?.message}>
            <Input
              type="text"
              id="loot"
              defaultValue={operation?.loot || ''}
              disabled={isPending}
              {...register('loot', {
                required: 'This field is required',
              })}
            />
          </FormRow>

          <FormRow label="Media price" error={errors?.mediaBlock2?.message}>
            <Img
              src={operation?.mediaBlock2 || '/default-img.webp'}
              style={{ width: '24rem', height: 'auto' }}
              alt="mediaBlock2"
              id="mediaBlock2-img"
            />
            <input type="file" id="mediaBlock2" {...register('mediaBlock2')} />
          </FormRow>
        </>
      )}

      <FormRow label="Media block" error={errors?.mediaBlock?.message}>
        <Img
          src={operation?.mediaBlock || '/default-img.webp'}
          style={{ width: '24rem', height: 'auto' }}
          alt="mediaBlock"
          id="mediaBlock-img"
        />
        <input type="file" id="mediaBlock" {...register('mediaBlock')} />
      </FormRow>

      <FormRow label="Variable opening" error={errors?.opening?.message}>
        <Select
          id="opening"
          defaultValue={operation?.opening || 'daily'}
          {...register('opening', {
            required: 'This field is required',
          })}
        >
          <option value="daily">Daily</option>
          <option value="full">Full</option>
        </Select>
      </FormRow>

      <MultipleFileUpload>
        <FileCard>
          <span>Day 1</span>
          <Img
            src={operation?.mediaLoot1 || '/default-img.webp'}
            alt="Operation image"
            id="mediaLoot1-img"
          />
          <input type="file" id="mediaLoot1" {...register('mediaLoot1')} />
        </FileCard>
        <FileCard>
          <span>Day 2</span>
          <Img
            src={operation?.mediaLoot2 || '/default-img.webp'}
            alt="Operation image"
            id="mediaLoot2-img"
          />
          <input type="file" id="mediaLoot2" {...register('mediaLoot2')} />
        </FileCard>
        <FileCard>
          <span>Day 3</span>
          <Img
            src={operation?.mediaLoot3 || '/default-img.webp'}
            alt="Operation image"
            id="mediaLoot3-img"
          />
          <input type="file" id="mediaLoot3" {...register('mediaLoot3')} />
        </FileCard>
        <FileCard>
          <span>Day 4</span>
          <Img
            src={operation?.mediaLoot4 || '/default-img.webp'}
            alt="Operation image"
            id="mediaLoot4-img"
          />
          <input type="file" id="mediaLoot4" {...register('mediaLoot4')} />
        </FileCard>
        <FileCard>
          <span>Day 5</span>
          <Img
            src={operation?.mediaLoot5 || '/default-img.webp'}
            alt="Operation image"
            id="mediaLoot5-img"
          />
          <input type="file" id="mediaLoot5" {...register('mediaLoot5')} />
        </FileCard>
        <FileCard>
          <span>Day 6</span>
          <Img
            src={operation?.mediaLoot6 || '/default-img.webp'}
            alt="Operation image"
            id="mediaLoot6-img"
          />
          <input type="file" id="mediaLoot6" {...register('mediaLoot6')} />
        </FileCard>
        <FileCard>
          <span>Day 7</span>
          <Img
            src={operation?.mediaLoot7 || '/default-img.webp'}
            alt="Operation image"
            id="mediaLoot7-img"
          />
          <input type="file" id="mediaLoot7" {...register('mediaLoot7')} />
        </FileCard>
        <FileCard>
          <span>Day 8</span>
          <Img
            src={operation?.mediaLoot8 || '/default-img.webp'}
            alt="Operation image"
            id="mediaLoot8-img"
          />
          <input type="file" id="mediaLoot8" {...register('mediaLoot8')} />
        </FileCard>
        <FileCard>
          <span>Day 9</span>
          <Img
            src={operation?.mediaLoot9 || '/default-img.webp'}
            alt="Operation image"
            id="mediaLoot9-img"
          />
          <input type="file" id="mediaLoot9" {...register('mediaLoot9')} />
        </FileCard>
        <FileCard>
          <span>Day 10</span>
          <Img
            src={operation?.mediaLoot10 || '/default-img.webp'}
            alt="Operation image"
            id="mediaLoot10-img"
          />
          <input type="file" id="mediaLoot10" {...register('mediaLoot10')} />
        </FileCard>
        <FileCard>
          <span>Day 11</span>
          <Img
            src={operation?.mediaLoot11 || '/default-img.webp'}
            alt="Operation image"
            id="mediaLoot11-img"
          />
          <input type="file" id="mediaLoot11" {...register('mediaLoot11')} />
        </FileCard>
        <FileCard>
          <span>Day 12</span>
          <Img
            src={operation?.mediaLoot12 || '/default-img.webp'}
            alt="Operation image"
            id="mediaLoot12-img"
          />
          <input type="file" id="mediaLoot12" {...register('mediaLoot12')} />
        </FileCard>
        <FileCard>
          <span>Day 13</span>
          <Img
            src={operation?.mediaLoot13 || '/default-img.webp'}
            alt="Operation image"
            id="mediaLoot13-img"
          />
          <input type="file" id="mediaLoot13" {...register('mediaLoot13')} />
        </FileCard>
        <FileCard>
          <span>Day 14</span>
          <Img
            src={operation?.mediaLoot14 || '/default-img.webp'}
            alt="Operation image"
            id="mediaLoot14-img"
          />
          <input type="file" id="mediaLoot14" {...register('mediaLoot14')} />
        </FileCard>
        <FileCard>
          <span>Day 15</span>
          <Img
            src={operation?.mediaLoot15 || '/default-img.webp'}
            alt="Operation image"
            id="mediaLoot15-img"
          />
          <input type="file" id="mediaLoot15" {...register('mediaLoot15')} />
        </FileCard>
        <FileCard>
          <span>Day 16</span>
          <Img
            src={operation?.mediaLoot16 || '/default-img.webp'}
            alt="Operation image"
            id="mediaLoot16-img"
          />
          <input type="file" id="mediaLoot16" {...register('mediaLoot16')} />
        </FileCard>
        <FileCard>
          <span>Day 17</span>
          <Img
            src={operation?.mediaLoot17 || '/default-img.webp'}
            alt="Operation image"
            id="mediaLoot17-img"
          />
          <input type="file" id="mediaLoot17" {...register('mediaLoot17')} />
        </FileCard>
        <FileCard>
          <span>Day 18</span>
          <Img
            src={operation?.mediaLoot18 || '/default-img.webp'}
            alt="Operation image"
            id="mediaLoot18-img"
          />
          <input type="file" id="mediaLoot18" {...register('mediaLoot18')} />
        </FileCard>
        <FileCard>
          <span>Day 19</span>
          <Img
            src={operation?.mediaLoot19 || '/default-img.webp'}
            alt="Operation image"
            id="mediaLoot19-img"
          />
          <input type="file" id="mediaLoot19" {...register('mediaLoot19')} />
        </FileCard>
        <FileCard>
          <span>Day 20</span>
          <Img
            src={operation?.mediaLoot20 || '/default-img.webp'}
            alt="Operation image"
            id="mediaLoot20-img"
          />
          <input type="file" id="mediaLoot20" {...register('mediaLoot20')} />
        </FileCard>
        <FileCard>
          <span>Day 21</span>
          <Img
            src={operation?.mediaLoot21 || '/default-img.webp'}
            alt="Operation image"
            id="mediaLoot21-img"
          />
          <input type="file" id="mediaLoot21" {...register('mediaLoot21')} />
        </FileCard>
        <FileCard>
          <span>Day 22</span>
          <Img
            src={operation?.mediaLoot22 || '/default-img.webp'}
            alt="Operation image"
            id="mediaLoot22-img"
          />
          <input type="file" id="mediaLoot22" {...register('mediaLoot22')} />
        </FileCard>
        <FileCard>
          <span>Day 23</span>
          <Img
            src={operation?.mediaLoot23 || '/default-img.webp'}
            alt="Operation image"
            id="mediaLoot23-img"
          />
          <input type="file" id="mediaLoot23" {...register('mediaLoot23')} />
        </FileCard>
        <FileCard>
          <span>Day 24</span>
          <Img
            src={operation?.mediaLoot24 || '/default-img.webp'}
            alt="Operation image"
            id="mediaLoot24-img"
          />
          <input type="file" id="mediaLoot24" {...register('mediaLoot24')} />
        </FileCard>
      </MultipleFileUpload>

      <FormRow>
        {/* <Button
          variation="secondary"
          type="reset"
          onClick={reset}
          disabled={isPending}
        >
          Reset
        </Button> */}
        <Button disabled={isPending}>
          {operationId ? 'Edit' : 'Create new'} operation
        </Button>
      </FormRow>
    </Form>
  );
}

export default OperationForm;
