import React, { useEffect, useState } from 'react';
import s from './Review.module.scss';
import Rating from '@material-ui/lab/Rating';


const Review = props => {
    const [likes, setLikes] = useState( props.likes );
    const [likeStatus, setLikeStatus] = useState( props.likeStatus.like );
    const [dislikeStatus, setDislikeStatus] = useState( props.likeStatus.dislike );
    const [disableLikes, setDisableLikes] = useState( false );



    useEffect( () => {
        props.likeStatus.like || props.likeStatus.dislike ? setDisableLikes( true ) : setDisableLikes( false );
    }, [disableLikes] );

    return (
        <div className={ s.inner }>
            <div className={ s.review }>
                <div className={ s.header }>
                    <div>{ props.from }</div>
                    <Rating name='half-rating-read' defaultValue={ props.rating } precision={ 0.5 } readOnly/>
                </div>
                <div className={ s.body }>
                    <p>{ props.text }</p>
                    <div className={ s.helpAnswer }>
                        <span>This review helped you ?</span>
                        <div>
                            <span className={ s.likesTotal }>Likes: { likes }</span>
                            <div className={ s.buttons }>
                                <button onClick={ () => {props.dislike(props.id)} }
                                        className={ dislikeStatus === true && s.active }
                                        disabled={ disableLikes }>
                                    <span>No</span></button>
                                <button onClick={ () => {props.like(props.id)} }
                                        className={ likeStatus === true && s.active }
                                        disabled={ disableLikes }>
                                    <span>Yes</span></button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            {
                props.answer.type === true &&
                <div className={ `${s.answer} ${s.review}` }>
                    <div className={ s.header }>
                        <div>{ props.answer.from }</div>
                    </div>
                    <div className={ s.body }>
                        <p>{ props.answer.text }</p>
                    </div>
                </div>
            }
        </div>
    );
};

export default Review;