'use client';

import { ChangeEvent, FormEvent, useState, useRef, RefObject } from 'react';
import TodoItem from './TodoItem';

export interface TodoType {
    id: number;
    title: string;
    checked?: false;
    ref?: RefObject<HTMLLIElement>;
}

export default function Todo(): React.JSX.Element {
    const [items, setItems] = useState<TodoType[]>([]);
    const [title, setTitle] = useState<string>('');

    const actionCount = useRef<number>(0); // 컴포넌트 내부에서 사용될 값
    const inputRef = useRef<HTMLInputElement>(null);
    const childRef = useRef<HTMLLIElement>(null);

    const formHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const id = Date.now();

        setItems(items.concat([{ id, title, checked: false }]));

        // 입력 값 초기화
        setTitle('');

        actionCount.current++;

        console.log('actionCount', actionCount);

        // 양식 작성 후 초기화
        const inputEl = inputRef.current;
        inputEl?.focus();

        console.log('chidRef : ', childRef);
    };

    const titleHandler = (e: ChangeEvent<HTMLInputElement>) => {
        // console.log('입력');
        // // console.log(this);
        // console.log(e.target);
        // console.log('value', e.target.value);
        setTitle(e.target.value);
    };

    return (
        <>
            <form onSubmit={formHandler}>
                <input
                    type="text"
                    name="title"
                    className="border"
                    onChange={titleHandler}
                    value={title}
                    ref={inputRef}
                />
                <button type="submit" className="border ml-1">
                    등록
                </button>
            </form>
            <ul>
                {items.length === 0 ? (
                    <li>할일을 추가해</li>
                ) : (
                    items.map((item) => (
                        <TodoItem key={item.id} {...item} ref={childRef} />
                    ))
                )}
            </ul>
        </>
    );

    return <></>;
}

2-3, 3-1
