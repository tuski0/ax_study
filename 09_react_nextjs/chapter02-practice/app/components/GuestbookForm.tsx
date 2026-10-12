"use client";

import { FormEvent } from "react";

const formHandler = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  alert("방명록 작성 완료");
};

export default function GuestbookForm(): React.JSX.Element {
  return (
    <>
      <form onSubmit={formHandler}>
        <input type="text" name="title" className="border" />
        <button type="submit">제출</button>
      </form>
    </>
  );
}
