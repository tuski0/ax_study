'use server';

import { ActionState } from '@/shared/types/action.types';
import { validateSignUpInput } from '../utils/authValidation';
import { createServerClient } from '@supabase/ssr';

{
    /* 이 파일의 함수들은 서버에서만 실행되며, 클라이언트에서는 호출만 가능하다는 표시 */
}

export async function signUpAction(
    prevState: ActionState,
    formData: FormData,
): Promise<ActionState> {
    const email = (formData.get('email') as string) ?? '';
    const name = (formData.get('name') as string) ?? '';
    const password = (formData.get('password') as string) ?? '';
    const passwordConfirm = (formData.get('passwordConfirm') as string) ?? '';

    // 필드별 유효성 검사
    const errors = validateSignUpInput({
        name,
        email,
        password,
        passwordConfirm,
    });

    if (Object.keys(errors).length > 0) {
        // 검증 실패
        return {
            success: false,
            errors,
        };
    }

    // 가입 처리
    const supabase = createServerClient();
    const {
        data,
        authData,
        error: signUpError,
    } = await supabase.auth.signUp({
        email: email.trim(),
        password: password.trim(),
    });

    if (signUpError || !authData.user) {
        const isDuplicate =
            signUpError?.message
                ?.toLowerCase()
                .includes('already registered') ||
            signUpError?.message?.toLowerCase().includes('already exists');

        return {
            success: false,
            message: isDuplicate
                ? '이미 가입된 이메일 주소입니다. 다른 이메일을 사용해 주세요.'
                : `회원가입에 실패했습니다: ${signUpError?.message || '알 수 없는 오류'}`,
        };
    }

    return {
        success: true,
        message: '회원가입완료',
        data: {},
    };
}


// profiles 테이블 추가 처리
const userId = authData.user.id;
