import React from "react";
import { useSelector } from 'react-redux';

import { Contact } from "../Element/Element";

export const ContactList = () => {
    const persons = useSelector(state => state.contacts.data);
    const filter = useSelector(state => state.contacts.filter);
    console.log(filter);


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


