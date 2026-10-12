'use client';

import { FormEvent, ChangeEvent, useState, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import TodoItem from '@/domains/todo/components/TodoItem';
import Link from 'next/link';

export interface Todo {
    id?: number;
    title?: string;
    checked?: boolean;
}

const initialValue: Todo = {
    title: '',
    checked: false,
};

export default function TodoPage(): React.JSX.Element {
    const [form, setForm] = useState<Todo>(initialValue);
    const [items, setItems] = useState<Todo[]>([]);

    // const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    //     setForm({ ...form, title: e.target.value });
    // }, [form]); // 두 번째 매개변수인 []는 함수가 새롭게 정의되늰 기준에 대한 기준 값, [] => 한번 정의되면 다시 생성 X
    //        // [ form ] -> form 객체가 변하면 useCallback에 정의된 함수가 새로 정의, 생성

    const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setForm((prev) => ({ ...prev, title: e.target.value }));
    }, []);

    const onSubmit = useCallback(
        (e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();

            // setItems(items.concat([{ ...form, id: Date.now() }]));
            setItems((prev) => prev.concat([{ ...form, id: Date.now() }]));

            // 등록 완료 이후 값 초기화
            setForm({ ...initialValue });
        },
        [form],
    );

    const onClick = useCallback((id: number) => {
        setItems((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, checked: !item.checked } : item,
            ),
        );
    }, []);

    const onRemove = useCallback((id: number) => {
        setItems((prev) => prev.filter((item) => item.id !== id)); // id와 일치하는 Todo 객체는 제외 되고 새로운 목록 생성
    }, []);

    return (
        <>
            <form
                onSubmit={onSubmit}
                className="flex mx-auto w-max-[450px] w-full"
            >
                <Input
                    type="text"
                    name="title"
                    className="border"
                    onChange={onChange}
                    value={form.title}
                />
                <Button type="submit">할일 등록</Button>
            </form>
            <ul>
                {items.length === 0 ? (
                    <li>등록된 할일 없음</li>
                ) : (
                    items.map((item) => (
                        <TodoItem
                            key={item.id}
                            {...item}
                            onClick={onClick}
                            onRemove={onRemove}
                        />
                    ))
                )}
            </ul>

            <Link href="/login">로그인 ( CSR - SPA )</Link>
            <a href="/login">로그인 (SSR - MPA)</a>
        </>
    );
}
