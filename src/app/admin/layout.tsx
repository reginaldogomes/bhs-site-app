export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="admin-layout">
      <nav>Menu Admin</nav>
      <main>{children}</main>
    </div>
  );
}
