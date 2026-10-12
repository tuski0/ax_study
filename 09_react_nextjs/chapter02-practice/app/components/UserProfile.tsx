function StatusBadge() {
    return <div className="text-green-400">활동 중</div>
}

export default function UserProfile() {
    return <>
        <h2>사용자 이름 : KIM</h2>
        {StatusBadge()}
        <p>직업 정보 : 축구선수</p>
    </>
}