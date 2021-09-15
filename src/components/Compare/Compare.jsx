import React from 'react';
import s from './Compare.module.scss';
import CompareProduct from './CompareProduct/CompareProduct';
import NotFound from '../common/NotFound/NotFount';

const Compare = ({compareProducts, removeFromCompare}) => {

    return (
        <div className={`${s.wrapper} section`}>
            {/*<Notification text={'A maximum of 5 items can be added to the comparison'}/>*/}
            <div className='container'>
                <div>
                    <div className={s.inner}>
                        <h1 className={'global-title'}>Compare products</h1>
                        {compareProducts.length === 0
                            ? <NotFound message={'Not found compare products'} linkTo={'/shop'} btnText={'go to shop'}/>
                            :<div className={s.innerContent}>
                                <div className={s.aside}>
                                    <div className={s.showDifference}></div>
                                    <div className={s.variables}>Display diagonal</div>
                                    <div className={s.variables}>RAM</div>
                                    <div className={s.variables}>Memory</div>
                                    <div className={s.variables}>Camera</div>
                                    <div className={s.variables}>CPU</div>
                                </div>
                                <div className={s.compareItems}>
                                    { compareProducts.map(p => <CompareProduct productId={p.id} removeFromCompare={removeFromCompare} key={p.id} productInfo={p.productShortDescr}/>)}
                                </div>
                            </div>
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Compare;