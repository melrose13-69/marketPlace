import React, { useState } from 'react';
import styled from 'styled-components';
import CheckBoxOutlinedIcon from '@material-ui/icons/CheckBoxOutlined';
import CheckBoxOutlineBlankOutlinedIcon from '@material-ui/icons/CheckBoxOutlineBlankOutlined';


const CustomCheckboxWrapper = styled.div`
    padding-left: rem(30);
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const CustomCheckboxLabel = styled.div`
    position: relative;
    cursor: pointer;
`;

const CustomCheckboxLabelContainer = styled.div`
       display: flex;
       align-items: center;
`;
const CustomCheckboxText = styled.span`
       display: flex;
`;
const CustomCheckbox = props => {
    const [isChecked, setIsCheck] = useState( false );

    return (
        <CustomCheckboxWrapper>
            <CustomCheckboxLabelContainer>
                { isChecked
                    ? <CheckBoxOutlinedIcon style={ { color : '#000' } }/>
                    : <CheckBoxOutlineBlankOutlinedIcon style={ { color : '#000' } }/>
                }
                { isChecked
                    ? <CustomCheckboxLabel onClick={ () => {setIsCheck( false );} }>{ props.item }</CustomCheckboxLabel>
                    : <CustomCheckboxLabel onClick={ () => {setIsCheck( true );} }>{ props.item }</CustomCheckboxLabel>
                }
            </CustomCheckboxLabelContainer>
            <CustomCheckboxText>({ props.obj[props.item] })</CustomCheckboxText>
        </CustomCheckboxWrapper>
    );
};

export default CustomCheckbox;