export function ProblemSolution() {
  return (
    <section id="problem" className="section-padding bg-[#FDFCF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-12 scroll-reveal">
            <div className="space-y-6">
              <h2 className="text-5xl sm:text-6xl font-black text-[#081C15] leading-[1.1]">
                The Silent <br />
                <span className="text-red-600">Crisis.</span>
              </h2>
              <p className="text-2xl text-[#081C15]/70 leading-relaxed font-medium">
                40% of Botswana's agricultural produce never reaches the market. It's a loss of income, a loss of effort, and a threat to food security.
              </p>
            </div>
            
            <div className="h-px bg-[#081C15]/10 w-24" />

            <div className="space-y-6">
              <h2 className="text-5xl sm:text-6xl font-black text-[#1B4332] leading-[1.1]">
                The Digital <br />
                <span>Catalyst.</span>
              </h2>
              <p className="text-2xl text-[#081C15]/70 leading-relaxed font-medium">
                Agricola is the infrastructure for a zero-waste ecosystem. By digitizing every step, we're helping farmers turn losses into leverage.
              </p>
            </div>
          </div>

          <div className="relative scroll-reveal">
            <div className="aspect-[4/5] rounded-[3.5rem] overflow-hidden shadow-soft">
              <img
                src="/images/problem-solution.jpg"
                alt="Agriculture in Botswana"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-12 -left-12 bg-[#1B4332] text-white p-12 rounded-[2.5rem] shadow-2xl max-w-xs">
              <p className="text-6xl font-black mb-2">30%</p>
              <p className="text-lg font-bold opacity-70 uppercase tracking-widest">Reduction Goal by 2029</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
