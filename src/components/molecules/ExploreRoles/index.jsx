import RoleCarousel from "atoms/RoleCarousel";

export default function ExploreRoles() {
  return (
    <div
      id="roles"
      className={`overflow-hidden w-full flex justify-center flex-wrap mb-5`}
    >
      <div className="hd:w-3/5 3xl:w-11/12 xs:w-full relative hd:px-10 hd:py-14 3xl:px-10 3xl:py-12 2xl:px-12 2xl:pt-14 2xl:pb-10 xl:px-6 xl:pt-14 xl:pb-10 lg:px-8 lg:pt-16 lg:pb-10 xs:px-5 xs:pt-12 xs:pb-10 flex flex-col">
        <h1 className="text-center lg:mb-10 2xl:text-7xl lg:text-5xl xs:text-3xl font-bold">
          <span className="text-blue-600">Explore</span> more roles
        </h1>
      </div>

      <RoleCarousel />
    </div>
  );
}
