import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUsers } from '../../redux/users/usersAction';
import { useEditableControls } from '@chakra-ui/react';

export const EditUpgradeForm = ({
    btnRef,
    isOpen,
    onClose,
    username,
    email,
    createdAt,
    userId,
    password,
}) => {
    const dispatch = useDispatch();
    const [EditAction, setEditAction] = React.useState(false);
    const [Info, setInfo] = React.useState({
        basicIncome: '',
        age: '',
        currentSavings: '',
        bankCredit: '',
    });

    let handleChange = (e) => {
        setInfo({
          ...Info,
          [e.target.name]: e.target.value,
        });
    };
    function EditableControls() {
        const {
            isEditing,
            getSubmitButtonProps,
            getCancelButtonProps,
            getEditButtonProps,
        } = useEditableControls();
            
        return isEditing ? (
            <ButtonGroup>
                <IconButton icon={<UilCheckCircle />} {...getSubmitButtonProps()} />
                <IconButton icon={<UilTimesCircle />} {...getCancelButtonProps()} />
            </ButtonGroup>
        ) : (
            <Flex>
                <IconButton icon={<UilEdit />} {...getEditButtonProps()} />
            </Flex>
        );
    }
}