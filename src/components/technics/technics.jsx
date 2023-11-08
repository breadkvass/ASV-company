import React from 'react';
import styles from './technics.module.css';
import Manitou from '../../assets/images/Manitou-MRT-2150.png';
import Faresin from '../../assets/images/Faresin-Handlers-FH-7-30-Compact.png';
import Jlg from '../../assets/images/JLG-4013.png';

function Item(props) {
    let src = null;
    if (props.data.name == 'Manitou MRT 2150') {
        src = Manitou;
    } else if (props.data.name == 'Faresin-Handlers FH 7-30 Compact') {
        src = Faresin;
    } else if (props.data.name == 'JLG-4013') {
        src = Jlg;
    }

    return (
        <li className={styles.item}>
            <img className={styles.image} src={src} alt={props.data.name}/>
            <p className={styles.name}>{props.data.name}</p>
            <ul className={styles.features}>
                <li className={styles.feat}>Максимальная высота&nbsp;подъема:&nbsp;{props.data.height}&nbsp;м</li>
                <li className={styles.feat}>Максимальная грузоподъемность:&nbsp;{props.data.load}&nbsp;кг</li>
                <li className={styles.feat}>Снаряженная масса:&nbsp;{props.data.weight}&nbsp;кг</li>
            </ul>
            {/* <p className={styles.price}>от {props.data.price}</p> */}
        </li>
    )
}

function Technics(props) {
  return (
    <div className={styles.technics}>
        <h2 className={styles.title}>Предоставляемая техника</h2>
        <ul className={styles.list}>
            {props.data.map(item => (<Item key={item.id} data={item} />))}
        </ul>
        <div className={styles.desc}>
            <p className={styles.par}>ASV &mdash; аренда телескопических погрузчиков с&nbsp;2009&nbsp;года.</p>
            <p className={styles.par}>Работаем только с&nbsp;высококвалифицированными операторами&nbsp;РФ.</p>
            <p className={styles.par}>На все погрузчики есть регистрация в&nbsp;Гостехнадзор.</p>
        </div>
        <button className={styles.button} onClick={props.openHandler}>оставить заявку</button>
    </div>
  )
}


export default Technics;