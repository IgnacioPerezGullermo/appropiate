import {
  Button,
  Editable,
  EditablePreview,
  FormLabel, IconButton, Input,
  InputGroup, InputRightElement,
  Text
} from '@chakra-ui/react';

import {
  UilBell,
  UilCheckCircle,
  UilEdit
} from '@iconscout/react-unicons';

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { refreshInfo } from '../../redux/auth/authAction';
import { updateUsers } from '../../redux/users/usersAction';

export const EditableInformacion = ({
  btnRef,
  isOpen,
  onClose,
  username,
  email,
  createdAt,
  userId,
  password,
}) => {
  const opciones = {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  };
  const { loading, userInfo, error, success } = useSelector(
    (state) => state.auth
  );
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
        <IconButton size={'sm'} icon={<UilCheckCircle />} {...getSubmitButtonProps()} />
      </ButtonGroup>
    ) : (
      <IconButton size={'sm'} icon={<UilEdit />} mt={'-6.5vh'} {...getEditButtonProps()}></IconButton>
    );
  };
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
  let formatDate = new Date(createdAt);
  formatDate = formatDate.toLocaleDateString('es-CL', opciones);
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return (
    <div class="card-body">
      <FormLabel mt={'1rem'} color={'primary'}>
        Nombre de Usuario
      </FormLabel>
      {EditAction === true ? (
        <Editable color={color} defaultValue={username}>
          <EditablePreview />
          <InputGroup size='sm'>
            <Input
              as={EditableInput}
              name="username"
              focusBorderColor={'transparent'}
              _selected={{border:'none'}}
              _active={{border:'none'}}
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
        <Text>{username}</Text>
      )}
      <FormLabel mt={'1rem'} color={'primary'}>
        Correo electronico
      </FormLabel>
      {EditAction === true ? (
        <Editable color={color} defaultValue={email}>
          <EditablePreview />
          <InputGroup size='sm'>
            <Input
              as={EditableInput}
              name="email"
              focusBorderColor={'transparent'}
              _selected={{border:'none'}}
              _active={{border:'none'}}
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
        <Text>{email}</Text>
      )}
      <FormLabel mt={'1rem'} color={'primary'}>
        Usuario desde:
      </FormLabel>
      <Text color={color}>{capitalizeFirstLetter(formatDate)}</Text>
      <Button bg={'color'} left={'220px'}>
        {' '}
        {<UilBell />}{' '}
      </Button>
      <Button
                bg={'primary'}
                color={color}
                h={'20px'}
                onClick={() => {
                  handleSubmit();
                }}
              >
                Save
              </Button>

              <Button
                bg={'primary'}
                color={color}
                h={'20px'}
              >
                Editar Info
              </Button>
              <Button bg={'primary'} color={color} h={'20px'}>
                Completar Info
              </Button>    
    </div>
  )};