const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen overflow-y-auto bg-white">
      {children}
    </div>
  );
};

export default MainLayout;
