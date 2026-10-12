'use client'



export default function NoticePractice(): React.JSX.Element {
    const alertCategory = (category: string) => {
        alert(`${category} 카테고리`)
    }

    return (<>
        <button type="button" className="border" onClick={() => alertCategory('공지사항')}> 버튼 </button>
    </>
);
}