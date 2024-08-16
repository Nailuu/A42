const LegalInformation = () => {
  const address: string =
    "14, porte de France, L-4360 Esch-sur-Alzette, Luxembourg";
  const president: string = "Anthony Kinzelin";

  return (
    <div className="mt-8 md:mt-16 mb-16 flex flex-col gap-4 text-ellipsis overflow-hidden font-medium xl:text-lg">
      <div className="mb-4">
        <h1 className="font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl">
          Legal information
        </h1>
        <p className="text-sm xl:text-base text-gray-600">
          Last updated: August 15, 2024
        </p>
      </div>
      <div className="flex flex-col gap-6">
        <p>
          This website is managed by{" "}
          <span className="font-semibold">
            42 Luxembourg Junior Enterprise ASBL
          </span>
          , a non-profit association registered with the Luxembourg Business
          Register (LBR) under number{" "}
          <span className="font-semibold">XXXXX</span>, whose registered office
          is located at <span className="font-semibold">{address}</span> and
          represented by
          <span className="font-semibold"> {president}</span>, President.
        </p>
        <p>
          For any questions or information about this site or 42 Luxembourg
          Junior Enterprise, you can leave a message using the site's{" "}
          <a className="underline" href="/#contact">
            contact form
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default LegalInformation;
