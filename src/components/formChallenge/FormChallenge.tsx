import React from 'react';
import ClipPathBorder from '../clipPathBorder/ClipPathBorder';
import ModalBackground from '../modalBackground/ModalBackground';
import FormLabel from '../formLabel/FormLabel';
import SelectChallenge from '../selectChallenge/SelectChallenge';
import { IForm } from '../../interfaces/interface.form';
import { Rarity } from '../../interfaces/interface.achievements';
import styles from './FormChallenge.module.scss';

interface IFormChallenge extends IForm {
    selectValue: Rarity;
    setSelectValue: React.Dispatch<React.SetStateAction<Rarity>>;
}

const FormChallenge = (props: IFormChallenge): React.JSX.Element => {
    return (
        <>
            <form className={styles.form}>
                <SelectChallenge
                    register={props.register}
                    selectValue={props.selectValue}
                    setSelectValue={props.setSelectValue}
                />
                <FormLabel
                    child={'input'}
                    errors={props.errors}
                    maxLength={50}
                    minLength={3}
                    name="title"
                    pattern={/^[a-zA-Zа-яА-Я0-9\s.,!?()"'&:;]+$/}
                    patternMessage={`The message may contain letters of the Russian or Latin alphabet, as well as the symbols ".,!?()"'&:;"`}
                    placeholder={'"The Smell of Money"'}
                    register={props.register}
                    textContent={'Title of achievement'}
                />
                <FormLabel
                    child={'textarea'}
                    errors={props.errors}
                    maxLength={50}
                    minLength={3}
                    name="description"
                    pattern={/^[a-zA-Zа-яА-Я0-9\s.,!?()"'&:;]+$/}
                    patternMessage={`The message may contain letters of the Russian or Latin alphabet, as well as the symbols ".,!?()"'&:;"`}
                    placeholder={'To get the achievement...'}
                    register={props.register}
                    textContent={'achievement description'}
                />
                <ClipPathBorder className={styles.border} />
                <ModalBackground />
            </form>
        </>
    );
};

export default FormChallenge;
