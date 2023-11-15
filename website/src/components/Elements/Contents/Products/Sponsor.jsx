const Sponsor = () => {
  return (
    <div
      className="w-full h-full border-gray-700 shadow flex flex-col justify-between text-white"
      style={{ backgroundColor: "#28293D" }}
    >
      <div class="flex flex-col">
        <div class="overflow-x-auto">
          <div class="flex flex-row inline-block w-full mt-8 py-2 sm:px-6 lg:px-10">
            <div className="mt-10 mx-20 h-full">
              <p className="text-5xl font-bold text-center my-32">SPONSOR</p>
              {/* <p className="text-xl my-20 text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                lobortis ipsum nec dignissim consectetur. Pellentesque pharetra
                enim id aliquet dignissim. Suspendisse in ullamcorper mi. Aenean
                non imperdiet justo. Ut ac mi quis nulla venenatis lobortis a
                eget enim. Maecenas sed lacus scelerisque, elementum nisl id,
                fermentum nisi. Aenean nec purus. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. purus.{" "}
              </p> */}
              <div className="columns-4 mt-5 h-fit">
                <img
                  src="public\images\new-google-logo-transparent--14.png"
                  alt="logo"
                  className=" ml-5 p-8 rounded-t-lg"
                />
                <img
                  src="public\images\new-google-logo-transparent--14.png"
                  alt="logo"
                  className=" ml-5 p-8 rounded-t-lg"
                />
                <img
                  src="public\images\new-google-logo-transparent--14.png"
                  alt="logo"
                  className=" ml-5 p-8 rounded-t-lg"
                />
                <img
                  src="public\images\new-google-logo-transparent--14.png"
                  alt="logo"
                  className=" ml-5 p-8 rounded-t-lg"
                />
              </div>
              {/* <div className=" w-full mt-5 h-fit">
                <img
                  src="public\images\new-google-logo-transparent--14.png"
                  alt="logo"
                  className=" ml-5 p-8 rounded-t-lg"
                />
              </div> */}
            </div>

            {/* <div className=" w-1/2 mt-5 h-fit">
                <img
                  src="public\images\Handphone-knoala.png"
                  alt="logo"
                  className=" ml-5 p-8 rounded-t-lg"
                />
              </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsor;