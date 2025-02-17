const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen overflow-y-auto bg-white rounded-[20px] p-4">
      {children}
    </div>
  );
};

export default MainLayout;
