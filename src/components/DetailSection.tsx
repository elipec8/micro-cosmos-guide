import { ReactNode } from "react";

interface DetailSectionProps {
  title: string;
  subtitle: string;
  children: ReactNode;
  gradient: string;
}

export const DetailSection = ({ title, subtitle, children, gradient }: DetailSectionProps) => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <div className={`inline-block px-6 py-2 rounded-full bg-gradient-to-r ${gradient} text-white font-semibold mb-4 shadow-lg`}>
            {subtitle}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {title}
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {children}
        </div>
      </div>
    </section>
  );
};
