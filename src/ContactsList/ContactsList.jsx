import React from "react";
import { useSelector, useDispatch } from 'react-redux';

import { Contact } from "../Element/Element";

export const ContactList = () => {
    const persons = useSelector(state => state.contacts.data);

    console.log(persons)
    return (
        <ul>
            {persons.map(person => (
                <li key={person.id}>
                    <Contact info={person} />
                </li>
            ))}
        </ul>
    );
};


