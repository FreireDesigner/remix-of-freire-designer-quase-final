import { Instagram, ArrowRight } from "lucide-react";

const posts = Array(12).fill(null);

const InstagramSection = () => {
  return (
    <section className="py-8 px-4 overflow-hidden">
      <div className="text-center mb-6">
        <h2 className="text-lg font-black text-foreground mb-1">
          Siga-nos e marque suas fotos com @Freireedesign_
        </h2>
        <p className="text-muted-foreground font-normal text-sm">
          Para aparecer nos destaques e site dos nossos modelos!
        </p>
      </div>

      {/* Carousel Row 1 - Left to Right */}
      <div className="relative mb-2">
        <div className="flex animate-marquee">
          {[...posts, ...posts].map((_, index) => (
            <div key={`row1-${index}`} className="flex-shrink-0 mx-1">
              <div
                className={`w-28 h-28 rounded-lg flex items-center justify-center ${
                  index % 2 === 0 ? "bg-pink-100" : "bg-blue-100"
                }`}
              >
                <span className="text-[9px] text-muted-foreground font-medium">
                  INSTA_{(index % 12) + 1}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Carousel Row 2 - Right to Left */}
      <div className="relative mb-6">
        <div className="flex animate-marquee-reverse">
          {[...posts, ...posts].map((_, index) => (
            <div key={`row2-${index}`} className="flex-shrink-0 mx-1">
              <div
                className={`w-28 h-28 rounded-lg flex items-center justify-center ${
                  index % 2 === 0 ? "bg-blue-100" : "bg-pink-100"
                }`}
              >
                <span className="text-[9px] text-muted-foreground font-medium">
                  INSTA_{(index % 12) + 1}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button className="w-full bg-gradient-to-r from-pink-600 via-purple-600 to-orange-500 text-white py-4 rounded-full font-extrabold flex items-center justify-center gap-3 transition-transform hover:scale-[1.02] shadow-xl">
        <Instagram className="w-6 h-6" />
        Seguir @Freireedesign_
        <ArrowRight className="w-5 h-5" />
      </button>
    </section>
  );
};

export default InstagramSection;
