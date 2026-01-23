import { Link } from "react-router-dom";

const categories = [
  { name: "INTERCLASSE", color: "category-blue", link: "/interclasse" },
  { name: "PERSONAGENS", color: "category-purple", link: "/personagens" },
  { name: "DESBRAVADOR", color: "category-pink", link: "/desbravador" },
  { name: "TIMES", color: "category-orange", link: "/times" },
  { name: "GOSPEL", color: "category-gold", link: "/gospel" },
];

const Categories = () => {
  return (
    <section className="py-4 px-2">
      <div className="flex justify-between gap-1">
        {categories.map((category) => {
          const content = (
            <>
              <div className={`w-11 h-11 rounded-full ${category.color} flex items-center justify-center shadow-card transition-transform hover:scale-105`}>
                <span className="text-[7px] font-semibold text-primary-foreground/90">
                  IMG
                </span>
              </div>
              <span className="text-[8px] font-medium text-foreground text-center leading-tight px-0.5 break-words hyphens-auto" style={{ wordBreak: 'break-word' }}>
                {category.name}
              </span>
            </>
          );

          if (category.link) {
            return (
              <Link
                key={category.name}
                to={category.link}
                className="flex flex-col items-center gap-1 flex-1 min-w-0"
              >
                {content}
              </Link>
            );
          }

          return (
            <button
              key={category.name}
              className="flex flex-col items-center gap-1 flex-1 min-w-0"
            >
              {content}
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default Categories;
