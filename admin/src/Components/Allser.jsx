import * as React from "react";
import VeterinarianList from "./VeterinarianList";
const Allser = ({ ser, veterinarian }) => {
    const [showVets, setShowVets] = React.useState(false);
    const handleImageUpload = async (e) => {
        const file = e.target.files[0];
        const form = new FormData();
        form.append('file', file);
        form.append('upload_preset', 'patient');
    
        try {
          const response = await axios.post(
            'CLOUDINARY_URL=cloudinary://816311168758259:lKk_npPdSBcFtddPkZXQDEYlV7w@dvr6fxw3p',
            form,
            {
              headers: {
                'Content-Type': 'multipart/form-data',
              },
            }
          );
    
          const imageUrl = response.data.secure_url;
          setFormData((prev) => ({ ...prev, ca_img: imageUrl }));
        } catch (err) {
          console.log(err);
        }
      };
    return (
        <div className="flex flex-col items-stretch w-[59%] max-md:w-full max-md:ml-0">
            <div className="flex flex-col items-center my-auto max-md:max-w-full max-md:mt-10" >
                <div className="self-stretch flex items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
                    <span className="flex flex-col items-stretch">
                        <div className="text-slate-800 text-4xl font-semibold leading-[50px] tracking-wider whitespace-nowrap">
                            All services
                        </div>
                        <div className="text-stone-950 text-base tracking-wide mt-4">
                            01 - 25 March, 2020
                        </div>
                    </span>
                    <img
                        loading="lazy"
                        srcSet="..."
                        className="aspect-[3.97] object-contain object-center w-[123px] overflow-hidden shrink-0 max-w-full self-start"
                    />
                </div>
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/7828f9828a0665dcbbc753ef69b3be2ba7105914e9b9c58c0f22359bf7246524?"
                    className="aspect-[8.5] object-contain object-center w-[510px] overflow-hidden mt-12 max-md:max-w-full max-md:mt-10"
                />
                <div className="self-stretch mt-14 max-md:max-w-full max-md:mt-10">
                    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                        <div className="flex flex-col items-stretch w-[84%] max-md:w-full max-md:ml-0">
                            <span className="flex grow flex-col items-stretch max-md:mt-10">
                                <div className="text-slate-800 text-lg leading-8 tracking-wide">
                                    services
                                </div>

                                {ser.map((e, i) => (
                                    <div
                                        className="flex items-stretch justify-between gap-4 mt-10"
                                        onClick={() => setShowVets(true)}
                                    >
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
                                                5:12 pm • Belanja di pasar
                                            </div>
                                        </span>
                                    </div>
                                ))}




                                {showVets && (
                                    <VeterinarianList veterinarians={veterinarian} ser={ser}  />
                                )}

                            </span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};
export default Allser;