import {
  Box,
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
import { refreshInfo } from '../../../redux/auth/authAction';
import { updateClient } from '../../../redux/clients/clientsAction';

export const EditableDetalles = ({ indexAccordionSet, infoCompleteSet }) => {
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
    firstName: '',
    lastName: '',
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
    dispatch(updateClient({ id: userInfo?.clientId, info: Info }));
    setTimeout(() => {
      dispatch(refreshInfo(userInfo?.id));
    }, 500);
    setEditAction(false);
  };

  return (
    <div className="card-body">
      {userInfo?.clientId !== null ? (
        <Box>
          <FormLabel color={'primary'}>Nombres</FormLabel>
          {EditAction === true ? (
            <Editable
              color={color}
              defaultValue={userInfo?.client?.firstName}
              isPreviewFocusable={true}
            >
              <EditablePreview />
              <InputGroup size="sm">
                <Input
                  as={EditableInput}
                  name="firstName"
                  focusBorderColor={'transparent'}
                  _selected={{ border: 'none' }}
                  _active={{ border: 'none' }}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
                <InputRightElement>
                  <EditableControls />
                </InputRightElement>
              </InputGroup>
            </Editable>
          ) : (
            <Text mb={'2'}>
              {userInfo?.client?.firstName === null
                ? 'No especifico'
                : userInfo?.client?.firstName}
            </Text>
          )}
          <FormLabel mt={'1rem'} color={'primary'}>
            Apellidos
          </FormLabel>
          {EditAction === true ? (
            <Editable
              color={color}
              defaultValue={userInfo?.client?.lastName}
              isPreviewFocusable={true}
              mb={'6'}
            >
              <EditablePreview />
              <InputGroup size="sm">
                <Input
                  as={EditableInput}
                  name="lastName"
                  focusBorderColor={'transparent'}
                  _selected={{ border: 'none' }}
                  _active={{ border: 'none' }}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
                <InputRightElement>
                  <EditableControls />
                </InputRightElement>
              </InputGroup>
            </Editable>
          ) : (
            <Text mb={'4'}>
              {userInfo?.client?.lastName === null
                ? 'No especifico'
                : userInfo?.client?.lastName}
            </Text>
          )}
        </Box>
      ) : null}
      {!userInfo?.client ? (
        <Button
          bg={'primary'}
          color={color}
          w={'100%'}
          onClick={() => {
            indexAccordionSet(2);
            infoCompleteSet(true);
          }}
        >
          Completar Info
        </Button>
      ) : (
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
              EditAction === false ? setEditAction(true) : setEditAction(false);
            }}
          >
            {EditAction === false ? 'Editar Info' : 'Cancelar'}
          </Button>
        </Stack>
      )}
    </div>
  );
};
