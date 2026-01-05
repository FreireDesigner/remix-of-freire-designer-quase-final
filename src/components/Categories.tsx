const categories = [
  { name: "INTERCLASSE", color: "category-blue" },
  { name: "PERSONAGENS", color: "category-purple" },
  { name: "DESBRAVADOR", color: "category-pink" },
  { name: "TIMES", color: "category-orange" },
  { name: "GOSPEL", color: "category-gold" },
];

const Categories = () => {
  return (
    <section className="py-4 px-2">
      <div className="flex justify-between gap-1">
        {categories.map((category) => (
          <button
            key={category.name}
            className="flex flex-col items-center gap-1 flex-1 min-w-0"
          >
            <div className={`w-11 h-11 rounded-full ${category.color} flex items-center justify-center shadow-card transition-transform hover:scale-105`}>
              <span className="text-[7px] font-semibold text-primary-foreground/90">
                IMG
              </span>
            </div>
            <span className="text-[8px] font-medium text-foreground text-center leading-tight px-0.5 break-words hyphens-auto" style={{ wordBreak: 'break-word' }}>
              {category.name}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
};

export default Categories;
