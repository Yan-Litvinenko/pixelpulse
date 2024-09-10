import React from 'react';
import styles from './FormChallenge.module.scss';
import { ClipPathBorder } from '../clipPathBorder/ClipPathBorder';
import { FormLabel } from '../formLabel/FormLabel';
import { ModalBackground } from '../modalBackground/ModalBackground';
import { SelectChallenge } from '../selectChallenge/SelectChallenge';
import type { IFormChallenge } from '../../interfaces/interface.form';

const FormChallenge = (props: IFormChallenge): React.JSX.Element => {
    const { errors, register, selectValue, setSelectValue } = props;

    return (
        <>
            <div className={styles.form}>
                <SelectChallenge
                    register={register}
                    selectValue={selectValue}
                    setSelectValue={setSelectValue}
                />
                <FormLabel
                    child={'input'}
                    errors={errors}
                    maxLength={50}
                    minLength={3}
                    name="title"
                    pattern={/^[a-zA-Zа-яА-Я0-9\s.,!?()"'&:;]+$/}
                    patternMessage={`The message may contain letters of the Russian or Latin alphabet, as well as the symbols ".,!?()"'&:;"`}
                    placeholder={'"The Smell of Money"'}
                    register={register}
                    textContent={'Title of achievement'}
                />
                <FormLabel
                    child={'textarea'}
                    errors={errors}
                    maxLength={50}
                    minLength={3}
                    name="description"
                    pattern={/^[a-zA-Zа-яА-Я0-9\s.,!?()"'&:;]+$/}
                    patternMessage={`The message may contain letters of the Russian or Latin alphabet, as well as the symbols ".,!?()"'&:;"`}
                    placeholder={'To get the achievement...'}
                    register={register}
                    textContent={'achievement description'}
                />
                <ClipPathBorder className={styles.border} />
                <ModalBackground />
            </div>
        </>
    );
};

export { FormChallenge };
