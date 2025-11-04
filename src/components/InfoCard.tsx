interface InfoCardProps {
  title: string;
  content: string;
}

export const InfoCard = ({ title, content }: InfoCardProps) => {
  return (
    <div className="p-6 rounded-2xl bg-gradient-to-br from-card to-card/60 border border-border/50 backdrop-blur-sm hover:shadow-[var(--shadow-soft)] transition-all duration-300">
      <h3 className="text-xl font-bold text-primary mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{content}</p>
    </div>
  );
};
