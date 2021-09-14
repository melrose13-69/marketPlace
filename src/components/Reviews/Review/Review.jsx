import React, { useEffect, useState } from 'react';
import s from './Review.module.scss';
import Rating from '@material-ui/lab/Rating';


const Review = ( { likes, likeStatus, like, dislike, reviewId, from, rating, answer, text, productId, setModalSettings } ) => {
    const [ likesLocal, setLikes ] = useState( likes );
    const [ likeLocalStatus, setLikeLocalStatus ] = useState( likeStatus.like );
    const [ dislikeStatus, setDislikeStatus ] = useState( likeStatus.dislike );
    const [ disableLikes, setDisableLikes ] = useState( false );

    useEffect( () => {
        likeLocalStatus || dislikeStatus ? setDisableLikes( true ) : setDisableLikes( false );
    }, [ dislikeStatus, likeLocalStatus ] );

    useEffect( () => {
        like( reviewId, productId );
    }, [ likesLocal, reviewId, productId, like ] );
    useEffect( () => {
        dislike( reviewId, productId );
    }, [ dislikeStatus, reviewId, productId, dislike ] );

    return (
        <div className={ s.inner }>
            <div className={ s.review }>
                <div className={ s.header }>
                    <div>{ from }</div>
                    {
                        !answer.type && <button onClick={() => {setModalSettings({ open: true, type: 'answer', reviewId })}}><span>Answer</span></button>
                    }
                    <Rating name='rating-read' defaultValue={ rating } precision={ 1 } readOnly/>
                </div>
                <div className={ s.body }>
                    <p>{ text }</p>
                    <div className={ s.helpAnswer }>
                        <span>This review helped you ?</span>
                        <div>
                            <span className={ s.likesTotal }>Likes: { likesLocal }</span>
                            <div className={ s.buttons }>
                                <button onClick={ () => {setDislikeStatus( true );} }
                                        className={ dislikeStatus ? s.active : '' }
                                        disabled={ disableLikes }>
                                    <span>No</span></button>
                                <button onClick={ () => {
                                    setLikeLocalStatus( true );
                                    setLikes( likesLocal + 1 );
                                } }
                                        className={ likeLocalStatus ? s.active : '' }
                                        disabled={ disableLikes }>
                                    <span>Yes</span></button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            {
                answer.type === true &&
                <div className={ `${ s.answer } ${ s.review }` }>
                    <div className={ s.header }>
                        <div>{ answer.from }</div>
                    </div>
                    <div className={ s.body }>
                        <p>{ answer.text }</p>
                    </div>
                </div>
            }
        </div>
    );
};

export default Review;