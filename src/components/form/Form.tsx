import React from 'react';
import { ContextApp } from '../app/App';
import ClipPathBorder from '../clipPathBorder/ClipPathBorder';
import FormLabel from '../formLabel/FormLabel';
import ModalBackground from '../modalBackground/ModalBackground';
import { IForm } from '../../interfaces/interface.form';
import { IAppContext } from '../../interfaces/interface';
import styles from './Form.module.scss';

const Form = (props: IForm): React.JSX.Element | null => {
    const contextApp: IAppContext | undefined = React.useContext(ContextApp);

    if (!contextApp) {
        return null;
    }

    return (
        <div className={styles.form}>
            <FormLabel
                autofocus={true}
                child={'input'}
                errors={props.errors}
                maxLength={20}
                minLength={2}
                name="name"
                pattern={/[A-Za-zА-Яа-яЁё]/}
                patternMessage={'The name can only contain Russian or Latin alphabet'}
                placeholder={'your name'}
                register={props.register}
                textContent={'How should I call you?'}
            />
            <FormLabel
                child={'input'}
                errors={props.errors}
                maxLength={50}
                minLength={3}
                name="email"
                pattern={/^[^\s@]+@[^\s@]+\.[^\s@]+$/}
                patternMessage={'Incorrect email'}
                placeholder={'your.name@example.com'}
                register={props.register}
                textContent={'Sending from'}
            />
            <FormLabel
                child={'textarea'}
                errors={props.errors}
                maxLength={1000}
                minLength={10}
                name="message"
                pattern={/^[a-zA-Zа-яА-Я0-9\s.,!?()"'&:;]+$/}
                patternMessage={`The message may contain letters of the Russian or Latin alphabet, as well as the symbols ".,!?()"'&:;"`}
                placeholder={'Hi, I write to you about ...'}
                register={props.register}
                textContent={'transmitted data'}
            />
            <ClipPathBorder className={styles.border} />
            <ModalBackground />
        </div>
    );
};

export default Form;
