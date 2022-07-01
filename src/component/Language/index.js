import React, { useContext } from 'react';
import { AuthContext } from '../Context/context';
import en from './en';
import mm from './mm';

export const getlanguage = () => {
    const { lang } = useContext(AuthContext);
    if (lang === 'en') {
        return en;
    } else {
        return mm;
    }
};
