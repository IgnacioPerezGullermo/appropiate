import {
  Button,
  ButtonGroup,
  Editable,
  EditableInput,
  EditablePreview,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
  useColorModeValue,
  useEditableControls,
} from '@chakra-ui/react';

import { UilBell, UilCheckCircle, UilEdit } from '@iconscout/react-unicons';

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { refreshInfo } from '../../redux/auth/authAction';
import { updateUsers } from '../../redux/users/usersAction';

export const EditableInformacion = ({ username, email, createdAt }) => {
  const opciones = {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  };
  const { loading, userInfo, error, success } = useSelector(
    (state) => state.auth
  );
  const color = useColorModeValue('black', 'white');
  const dispatch = useDispatch();
  const [EditAction, setEditAction] = React.useState(false);
  const [Info, setInfo] = React.useState({
    username: '',
    email: '',
  });
  function EditableControls() {
    const {
      isEditing,
      getSubmitButtonProps,
      getCancelButtonProps,
      getEditButtonProps,
    } = useEditableControls();

    return isEditing ? (
      <ButtonGroup>
        <IconButton
          size={'sm'}
          icon={<UilCheckCircle />}
          {...getSubmitButtonProps()}
        />
      </ButtonGroup>
    ) : (
      <IconButton
        size={'sm'}
        icon={<UilEdit />}
        mt={'-6.5vh'}
        {...getEditButtonProps()}
      />
    );
  }
  let handleChange = (e) => {
    setInfo({
      ...Info,
      [e.target.name]: e.target.value,
    });
  };
  let handleSubmit = () => {
    dispatch(updateUsers({ id: userInfo?.id, info: Info }));
    setTimeout(() => {
      dispatch(refreshInfo(userInfo?.id));
    }, 500);
    setEditAction(false);
  };
  let formatDate = new Date(userInfo?.createdAt);
  formatDate = formatDate.toLocaleDateString('es-CL', opciones);
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return (
    <div className="card-body">
      <FormLabel color={'primary'}>Nombre de Usuario</FormLabel>
      {EditAction === true ? (
        <Editable
          color={color}
          defaultValue={userInfo?.username}
          isPreviewFocusable={true}
        >
          <EditablePreview />
          <InputGroup size="sm">
            <Input
              as={EditableInput}
              name="username"
              focusBorderColor={'transparent'}
              _selected={{ border: 'none' }}
              _active={{ border: 'none' }}
              onChange={(e) => {
                handleChange(e);
                console.log(Info);
              }}
            />
            <InputRightElement>
              <EditableControls />
            </InputRightElement>
          </InputGroup>
        </Editable>
      ) : (
        <Text>{userInfo?.username}</Text>
      )}
      <FormLabel mt={'1rem'} color={'primary'}>
        Correo electronico
      </FormLabel>
      {EditAction === true ? (
        <Editable
          color={color}
          defaultValue={userInfo?.email}
          isPreviewFocusable={true}
        >
          <EditablePreview />
          <InputGroup size="sm">
            <Input
              as={EditableInput}
              name="email"
              focusBorderColor={'transparent'}
              _selected={{ border: 'none' }}
              _active={{ border: 'none' }}
              onChange={(e) => {
                handleChange(e);
                console.log(Info);
              }}
            />
            <InputRightElement>
              <EditableControls />
            </InputRightElement>
          </InputGroup>
        </Editable>
      ) : (
        <Text>{userInfo?.email}</Text>
      )}
      <FormLabel mt={'1rem'} color={'primary'}>
        Usuario desde:
      </FormLabel>
      <Text color={color}>{capitalizeFirstLetter(formatDate)}</Text>
      <Stack spacing={4} direction="row" align="center" marginTop={'2'}>
        <Button
          bg={'primary'}
          color={color}
          width={'48%'}
          onClick={() => {
            handleSubmit();
          }}
        >
          Save
        </Button>

        <Button
          bg={'primary'}
          color={color}
          width={'48%'}
          ml={'2%'}
          onClick={() => {
            setEditAction(true);
          }}
        >
          Editar Info
        </Button>
      </Stack>
    </div>
  );
};
