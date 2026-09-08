type LessonCardProps = {
  title: string;
  level: string;
  description: string;
};

function LessonCard({ title, level, description }: LessonCardProps) {
  return (
    <section className="lesson-card">
      <h2>{title}</h2>
      <p>Уровень: {level}</p>
      <p>{description}</p>
    </section>
  );
}

export default LessonCard