export const CompanyLogos = () => {
  const companies = [
    { name: "Nestlé", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Nestle_textlogo_blue.svg/200px-Nestle_textlogo_blue.svg.png" },
    { name: "Coca-Cola", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Coca-Cola_logo.svg/200px-Coca-Cola_logo.svg.png" },
    { name: "Ambev", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Ambev_logo_2015.png/200px-Ambev_logo_2015.png" },
    { name: "Magazine Luiza", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Magazine_Luiza_logo_2011.svg/200px-Magazine_Luiza_logo_2011.svg.png" },
    { name: "Carrefour", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Carrefour_logo.svg/200px-Carrefour_logo.svg.png" },
  ];

  return (
    <div className="py-8 bg-muted/30">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm text-muted-foreground mb-6">
          Nossos alunos trabalham em empresas como:
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
          {companies.map((company, index) => (
            <div key={index} className="h-8 md:h-10">
              <img
                src={company.logo}
                alt={company.name}
                className="h-full w-auto object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
