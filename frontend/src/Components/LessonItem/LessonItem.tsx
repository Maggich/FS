import type { LessonItemProps } from '../../types'

function LessonItem({ title, level }: LessonItemProps) {
  return (
    <li>
      <strong>{title}</strong> - {level}
    </li>
  );
}

export default LessonItem