const VeterinarianList = ({ veterinarians, ser }) => {
  const veterinarian = [
    {
      name: "test",
      email: "test@fzfz.com",
      image: 'https://cdn.futura-sciences.com/sources/images/veterinaire.jpg'
    },
    {
      name: "test",
      email: "test@fzfz.com",
      image: 'https://cdn.futura-sciences.com/sources/images/veterinaire.jpg'
    }
  ];

  return (
    <div className="bg-white grow w-full pl-20 rounded-[30px] max-md:max-w-full max-md:mt-10 max-md:pl-5">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div className="flex flex-col items-stretch w-[84%] max-md:w-full max-md:ml-0">
          <span className="flex grow flex-col items-stretch max-md:mt-10">
            <div className="text-slate-800 text-lg leading-8 tracking-wide">
              Veterinarians
            </div>
            {veterinarian.map((e, i) => (
              <div className="flex items-stretch justify-between gap-4 mt-10" key={i}>
                <img
                  loading="lazy"
                  src={e.image}
                  className="aspect-square object-contain object-center w-12 overflow-hidden shrink-0 max-w-full"
                />
                <span className="flex grow basis-[0%] flex-col items-stretch mt-2 self-start">
                  <div className="text-slate-800 text-base font-medium tracking-wide">
                    {e.name}
                  </div>
                  <div className="text-gray-700 text-sm tracking-wide whitespace-nowrap mt-2.5">
                    {e.email}
                  </div>
                </span>
              </div>
            ))}
          </span>
        </div>
      </div>
    </div>
  );
};

export default VeterinarianList;
