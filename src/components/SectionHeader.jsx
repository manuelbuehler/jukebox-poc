export default function SectionHeader({ icon: Icon, title, className }) {
  return (
    <div className={`flex flex-row gap-2 items-center mb-4 ${className}`}>
      {Icon && <Icon className="h-4 w-4" />}
      <h4>{title}</h4>
    </div>
  );
}

