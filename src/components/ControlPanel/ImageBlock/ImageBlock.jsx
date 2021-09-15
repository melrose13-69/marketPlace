import { createField, Input } from '../../common/FormsControls';
import { isValidHttpUrl, requiredField } from '../../utils/validators/validators';
import React from 'react';
import s from './ImageBlock.module.scss';


const ImageBlock = ( { imageCount } ) => {
    return (
        <div className={ s.imageBlock } key={ imageCount }>
            <span>Image</span>
            <div>
                <div className={s.formLine}>
                    { createField( [ requiredField, isValidHttpUrl ], {
                        type: 'text',
                        name: `%productImageLink[${ imageCount }]`
                    }, 'Image link', Input ) }
                </div>
                <div className={s.formLine}>
                    { createField( [ requiredField ], {
                        type: 'color',
                        name: `%productImageColor[${ imageCount }]`,
                        value: '#000000'
                    }, 'Color description', Input ) }
                </div>
                <div className={s.formLine}>
                    { createField( [ requiredField ], {
                        type: 'text',
                        name: `%productImageDescr[${ imageCount }]`
                    }, 'Color description', Input ) }
                </div>
            </div>
        </div>
    );
};

export default ImageBlock;