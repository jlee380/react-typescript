import React, { Fragment, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { summarizers } from 'istanbul-lib-report';
import { number } from 'prop-types';

export default function App(): JSX.Element {
    const [value, setValue] = useState('');
    return (
        <div className='App'>
            <Fragment>
                <h1>Todo List</h1>
                <form>
                    <input type='text' required />
                    <button type='submit'>Add Todo</button>
                </form>
            </Fragment>
        </div>
    );
}
