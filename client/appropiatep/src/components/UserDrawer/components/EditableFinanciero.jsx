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
  NumberInput,
  Text,
  useColorModeValue,
  useEditableControls,
} from '@chakra-ui/react';

import { UilBell, UilCheckCircle, UilEdit } from '@iconscout/react-unicons';

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { refreshInfo } from '../../../redux/auth/authAction';
import { updateClient } from '../../../redux/clients/clientsAction';
import { Register } from '../../../views/Register';
import { UpgradeForm } from '../../LoginComponent/UpgradeFrom';

export const EditableFinanciero = ({ onClose, createdAt }) => {
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
  const navigate = useNavigate();
  const [infoComplete, infoCompleteSet] = React.useState(false);
  const [EditAction, setEditAction] = React.useState(false);
  const [Info, setInfo] = React.useState({
    basicIncome: '',
    currentSavings: '',
    bankCredit: '',
    age: '',
  });
  const color = useColorModeValue('black', 'white');
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
      ></IconButton>
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
  let formatDate = new Date(createdAt);
  formatDate = formatDate.toLocaleDateString('es-CL', opciones);
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return (
    <Box className="card-body">
      {infoComplete ? <UpgradeForm infoCompleteSet={infoCompleteSet} /> : null}
      {userInfo.client ? (
        <Box>
          <FormLabel color={'primary'}>Sueldo</FormLabel>
          {EditAction === true ? (
            <Editable
              color={color}
              defaultValue={userInfo?.client?.basicIncome}
            >
              <EditablePreview />
              <InputGroup size="sm">
                <Input
                  as={EditableInput}
                  color={color}
                  name="basicIncome"
                  type={'number'}
                  placeholder={userInfo?.client?.basicIncome}
                  focusBorderColor={'transparent'}
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
            <Text color={color}>$ {userInfo?.client?.basicIncome}</Text>
          )}
          <FormLabel mt={'1rem'} color={'primary'}>
            Ahorro
          </FormLabel>
          {EditAction === true ? (
            <Editable
              color={color}
              defaultValue={userInfo?.client?.currentSavings}
            >
              <EditablePreview />
              <InputGroup size="sm">
                <Input
                  as={EditableInput}
                  color={color}
                  type={'number'}
                  placeholder={
                    userInfo?.client?.currentSavings === null
                      ? 'No especificado'
                      : userInfo?.client?.currentSavings
                  }
                  name="currentSavings"
                  focusBorderColor={'transparent'}
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
            <Text color={color}>
              $
              {userInfo?.client?.currentSavings === null
                ? 'No especificado'
                : userInfo?.client?.currentSavings}
            </Text>
          )}
          <FormLabel mt={'1rem'} color={'primary'}>
            Hipoteca Pre-Aprobada
          </FormLabel>
          {EditAction === true ? (
            <Editable color={color} defaultValue={userInfo?.client?.bankCredit}>
              <EditablePreview />
              <InputGroup size="sm">
                <Input
                  as={EditableInput}
                  color={color}
                  type={'number'}
                  placeholder={
                    userInfo?.client?.bankCredit === null
                      ? 'No especificado'
                      : userInfo?.client?.bankCredit
                  }
                  name="bankCredit"
                  focusBorderColor={'transparent'}
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
            <Text color={color}>
              $
              {userInfo?.client?.bankCredit === null
                ? 'No especificado'
                : userInfo?.client?.bankCredit}
            </Text>
          )}
          <FormLabel mt={'1rem'} color={'primary'}>
            Edad
          </FormLabel>
          {EditAction === true ? (
            <Editable mb={6} color={color} defaultValue={userInfo?.client?.age}>
              <EditablePreview />
              <InputGroup size="sm">
                <Input
                  as={EditableInput}
                  type={'number'}
                  color={color}
                  placeholder={
                    userInfo?.client?.age === null
                      ? 'No especificado'
                      : userInfo?.client?.age
                  }
                  name="age"
                  focusBorderColor={'transparent'}
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
            <Text mb={1} color={color}>
              {userInfo?.client?.age === null
                ? 'No especificado'
                : userInfo?.client?.age}
            </Text>
          )}
        </Box>
      ) : null}

      {userInfo?.client ? (
        <Box>
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
        </Box>
      ) : null}
      {!userInfo?.client && infoComplete === false ? (
        <Button
          bg={'primary'}
          color={color}
          w={'100%'}
          onClick={() => {
            infoCompleteSet(true);
          }}
        >
          Completar Info
        </Button>
      ) : null}
    </Box>
  );
};
