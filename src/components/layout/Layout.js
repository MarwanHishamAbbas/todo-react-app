const Layout = ({ children }) => {
  return (
    <main className="flex lg:flex-col layout rounded-lg border-border border bg-app h-full">
      {children}
    </main>
  );
};

export default Layout;
