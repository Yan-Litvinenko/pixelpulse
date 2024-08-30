import React from 'react';
import styles from './Form.module.scss';
import { ClipPathBorder } from '../clipPathBorder/ClipPathBorder';
import { FormLabel } from '../formLabel/FormLabel';
import { mediaQuerySelector } from '../../store/selectors/selectors';
import { ModalBackground } from '../modalBackground/ModalBackground';
import type { IForm } from '../../interfaces/interface.form';

const Form = (props: IForm): React.JSX.Element => {
    const { isMedium } = mediaQuerySelector;
    const { errors, register } = props;

    return (
        <div className={styles.form}>
            <FormLabel
                autofocus={!isMedium ? true : false}
                child={'input'}
                errors={errors}
                maxLength={20}
                minLength={2}
                name="name"
                pattern={/[A-Za-zА-Яа-яЁё]/}
                patternMessage={'The name can only contain Russian or Latin alphabet'}
                placeholder={'your name'}
                register={register}
                textContent={'How should I call you?'}
            />
            <FormLabel
                child={'input'}
                errors={errors}
                maxLength={50}
                minLength={3}
                name="email"
                pattern={/\w+@[a-z]{2,}\.[a-z]{2,}$/}
                patternMessage={'Incorrect email'}
                placeholder={'your.name@example.com'}
                register={register}
                textContent={'Sending from'}
            />
            <FormLabel
                child={'textarea'}
                errors={errors}
                maxLength={1000}
                minLength={10}
                name="message"
                pattern={/^[a-zA-Zа-яА-Я0-9\s.,!?()"'&:;]+$/}
                patternMessage={`The message may contain letters of the Russian or Latin alphabet, as well as the symbols ".,!?()"'&:;"`}
                placeholder={'Hi, I write to you about ...'}
                register={register}
                textContent={'transmitted data'}
            />
            <ClipPathBorder className={styles.border} />
            <ModalBackground />
        </div>
    );
};

export { Form };
