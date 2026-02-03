import Pathname from "@/components/pathname";

const ContentLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-neutral-100 max-h-svh max-w-svw min-h-svh min-w-svw p-4 md:p-8 overflow-x-hidden">
      <div className="flex items-center justify-between w-full md:w-3/4 mx-auto">
        <h1 className="text-2xl font-bold primary-text">Queue Orbit</h1>
        <Pathname />
      </div>
      <div className="px-2 md:px-8 py-4">{children}</div>
    </div>
  );
};

export default ContentLayout;
