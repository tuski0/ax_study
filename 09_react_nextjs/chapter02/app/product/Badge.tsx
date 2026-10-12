interface BadgeType {
    theme: string;
    children: React.ReactNode,
}

export default function Badge({ theme, children }: BadgeType): React.JSX.Element {
    return (
        <span
            className={theme === 'dark' ? 'text-purple-400' : 'text-orange-400'}
        >
            {children}
        </span>
    );
}
