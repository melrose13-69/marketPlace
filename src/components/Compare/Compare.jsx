import React from 'react';
import s from './Compare.module.scss';
import CompareProduct from './CompareProduct/CompareProduct';

const Compare = ({compareProducts, removeFromCompare}) => {
    return (
        <div className={`${s.wrapper} section`}>
            {/*<Notification text={'A maximum of 5 items can be added to the comparison'}/>*/}
            <div className='container'>
                <div>
                    <div className={s.inner}>
                        <h1>Compare products</h1>
                        <div className={s.innerContent}>
                            <div className={s.aside}>
                                <div className={s.showDifference}></div>
                                <div className={s.variables}>Display diagonal</div>
                                <div className={s.variables}>RAM</div>
                                <div className={s.variables}>Memory</div>
                                <div className={s.variables}>Camera</div>
                                <div className={s.variables}>CPU</div>
                                <div className={s.variables}>Processor</div>
                            </div>
                            <div className={s.compareItems}>
                                { compareProducts.map(p => <CompareProduct productId={p.id} removeFromCompare={removeFromCompare} key={p.id} productInfo={p.productShortDescr}/>)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Compare;