interface CourseCardProps {
  courseName: string;
  credit: number;
  isOnline: boolean;
}

export default function CourseCard(props: CourseCardProps): React.JSX.Element {
  const { courseName, credit, isOnline } = props;
  return (
    <>
      <h1>과목 명 : {courseName}</h1>
      <h1>학 점 : {credit}</h1>
      <h1>강의방식 : {isOnline ? "온라인 강의" : "오프라인 강의"}</h1>
    </>
  );
}
