import React, { Fragment, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { summarizers } from 'istanbul-lib-report';
import { number } from 'prop-types';

type FormElem = React.FormEvent<HTMLFormElement>;

interface ITodo {
    text: string;
    complete: boolean;
}

export default function App(): JSX.Element {
    const [value, setValue] = useState<string>('');
    const [todos, setTodos] = useState<ITodo[]>([]);

    const handleSubmit = (e: FormElem): void => {
        e.preventDefault();
        addTodo(value);
        setValue('');
    };

    const addTodo = (text: string) => {
        const newTodos: ITodo[] = [...todos, { text, complete: false }];
        setTodos(newTodos);
    };

    console.log(todos);
    return (
        <div className='App'>
            <Fragment>
                <h1>Todo List</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type='text'
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        required
                    />
                    <button type='submit'>Add Todo</button>
                </form>
                <section>
                    {todos.map((todo: ITodo, index: number) => {
                        return <div key={index}>{todo.text}</div>;
                    })}
                </section>
            </Fragment>
        </div>
    );
}
