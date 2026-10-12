import { type Todo } from '@/app/todo/page';
import { FaRegCheckCircle, FaCheckCircle, FaRegTrashAlt } from 'react-icons/fa';

type TodoItemProps = Todo & {
    onClick: (id?: number) => void;
    onRemove: (id?: number) => void;
};

export default function TodoItem({
    id,
    title,
    checked,
    onClick,
}: TodoItemProps): React.JSX.Element {
    return (
        <li className="flex">
            <div className="flex" onClick={() => onClick(id)}>
                {checked ? <FaCheckCircle /> : <FaRegCheckCircle />}
                {title}
            </div>
            <span onClick={() => onRemove(id)}>
                <FaRegTrashAlt />
            </span>
        </li>
    );
}

// function TodoItem({ id, title, checked }: Todo): React.JSX.Element {
//     return <> {title}</>;
// }

// export default React.memo(TodoItem);
