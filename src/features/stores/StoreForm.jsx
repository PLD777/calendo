import { useNavigate, useParams } from 'react-router-dom';
import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import Button from '../../ui/Button';
import Select from '../../ui/Select';
import { useForm } from 'react-hook-form';
import { useCreateStore } from './useCreateStore';
import { useEditStore } from './useEditStore';
import { useStore } from './useStore';
import Spinner from '../../ui/Spinner';

function StoreForm() {
  const navigate = useNavigate();
  const { createStore, isPending: isCreating } = useCreateStore();
  const { editStore, isEditing } = useEditStore();
  const { register, formState, handleSubmit, reset } = useForm();
  const storeId = useParams().storeId;

  const { store, isPending: isFetching } = useStore();
  if (isFetching) return <Spinner />;

  const { errors } = formState;
  const isPending = isCreating || isEditing;

  function onSubmit(data) {
    if (!storeId) {
      createStore(
        { newStore: data },
        {
          onSuccess: () => {
            reset();
          },
        }
      );
    }

    if (storeId) {
      editStore(
        { editedStore: data, storeId },
        {
          onSuccess: () => {
            navigate('/jolo/stores');
          },
        }
      );
    }
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Type" error={errors?.type?.message}>
        <Select
          id="type"
          defaultValue={store?.type || 'E.Leclerc'}
          {...register('type', { required: 'This field is required' })}
        >
          <option value="E.Leclerc">E.Leclerc</option>
          <option value="Super U">Super U</option>
          <option value="Hyper U">Hyper U</option>
          <option value="Carrefour market">Carrefour Market</option>
        </Select>
      </FormRow>

      <FormRow label="City" error={errors?.city?.message}>
        <Input
          type="text"
          id="city"
          disabled={isPending}
          defaultValue={store?.city || ''}
          {...register('city', { required: 'This field is required' })}
        />
      </FormRow>

      <FormRow label="Company name" error={errors?.comapanyName?.message}>
        <Input
          type="text"
          id="companyName"
          disabled={isPending}
          defaultValue={store?.companyName || ''}
          {...register('companyName', { required: 'This field is required' })}
        />
      </FormRow>

      <FormRow label="SIRET" error={errors?.siret?.message}>
        <Input
          type="text"
          id="siret"
          disabled={isPending}
          defaultValue={store?.siret || ''}
          {...register('siret', { required: 'This field is required' })}
        />
      </FormRow>

      <FormRow
        label="Retargeting link"
        error={errors?.retargetingLink?.message}
      >
        <Input
          type="text"
          id="retargetingLink"
          disabled={isPending}
          defaultValue={store?.retargetingLink || ''}
          {...register('retargetingLink', {
            required: 'This field is required',
          })}
        />
      </FormRow>

      <FormRow>
        <Button
          variation="secondary"
          type="reset"
          onClick={reset}
          disabled={isPending}
        >
          Reset
        </Button>
        <Button disabled={isPending}>
          {storeId ? 'Edit' : 'Create new'} store
        </Button>
      </FormRow>
    </Form>
  );
}

export default StoreForm;
