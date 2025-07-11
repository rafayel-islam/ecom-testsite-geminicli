import React from 'react';

function SectionBackground({ children, variant }) {
  const gradientClasses = variant === 'reversed' ? 'from-blue-50 to-teal-50' : 'from-teal-50 to-blue-50';
  const circle1Classes = variant === 'reversed' ? 'bg-blue-200 -bottom-20 -right-10' : 'bg-teal-200 -top-10 -left-10';
  const circle2Classes = variant === 'reversed' ? 'bg-teal-200 -top-10 -left-10' : 'bg-blue-200 -bottom-20 -right-10';

  return (
    <section className="relative overflow-hidden">
      {/* Background Graphical Design */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className={`absolute w-full h-full bg-gradient-to-br ${gradientClasses}`}></div>
        <div className={`absolute w-60 h-60 rounded-full mix-blend-multiply filter blur-xl opacity-70 ${circle1Classes}`}></div>
        <div className={`absolute w-80 h-80 rounded-full mix-blend-multiply filter blur-xl opacity-70 ${circle2Classes}`}></div>
      </div>
      <div className="relative z-10">
        {children}
      </div>
    </section>
  );
}

export default SectionBackground;
