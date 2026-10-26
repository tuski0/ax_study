'use client';

import { Button } from '@/shared/components/ui/button';
import { Input } from '@/shared/components/ui/input';
import { signUpAction } from '../actions/signup.actions';
import { useActionState, useState } from 'react';
import { INITIAL_ACTION_STATE } from '@/shared/types/action.types';
import { ChangeEvent } from 'react';

interface FormType {
    email: string;
    password: string;
    passwordConfirm: string;
    name: string;
}

const initialForm: FormType = {
    email: '',
    password: '',
    passwordConfirm: '',
    name: '',
};

export default function SignUpForm(): React.JSX.Element {
    const [state, formAction, isPending] = useActionState(
        signUpAction,
        INITIAL_ACTION_STATE,
    );

    const [form, setForm] = useState(initialForm);

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    console.log('state:', state, 'isPending:', isPending);

    return (
        <form action={formAction} method="POST" noValidate autoComplete="off">
            {/* autoComplete 자동 완성 기능 */}
            <div className="flex mb-2 items-center">
                <label className="basis-30">이메일</label>
                <Input
                    type="email"
                    name="email"
                    placeholder="이메일을 입력하세요."
                    value={form.email}
                    onChange={onChange}
                />
            </div>
            {state.errors?.email && (
                <div className="text-red-200 mb-4">{state.errors.email}</div>
            )}
            <div className="flex mb-2 items-center">
                <label className="basis-30">회원명</label>
                <Input
                    type="text"
                    name="name"
                    placeholder="이메일을 입력하세요."
                    value={form.name}
                    onChange={onChange}
                />
            </div>
            {state.errors?.name && (
                <div className="text-red-200 mb-4">{state.errors.name}</div>
            )}
            <div className="flex mb-2 items-center">
                <label className="basis-30">비밀번호</label>
                <Input
                    type="password"
                    name="password"
                    placeholder="비밀번호를 입력하세요."
                />
            </div>
            {state.errors?.password && (
                <div className="text-red-200 mb-4">{state.errors.password}</div>
            )}
            <div className="flex mb-2 items-center">
                <label className="basis-30">비밀번호 확인</label>
                <Input
                    type="password"
                    name="passwordConfirm"
                    placeholder="비밀번호를 입력하세요."
                />
            </div>
            {state.errors?.passwordConfirm && (
                <div className="text-red-200 mb-4">
                    {state.errors.passwordConfirm}
                </div>
            )}
            <Button type="submit" disabled={isPending}>
                {isPending ? '처리중' : '가입하기'}
            </Button>
        </form>
    );
}
