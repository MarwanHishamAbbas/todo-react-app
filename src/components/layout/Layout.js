const Layout = ({ children }) => {
  return (
    <main className="flex rounded-lg border-border border bg-app h-full">
      {children}
    </main>
  );
};

export default Layout;
