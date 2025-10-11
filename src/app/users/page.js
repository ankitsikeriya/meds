export default function UsersPage() {
  return (
    <div className="space-y-6">
      <header className="space-y-1">
        <h1 className="text-2xl font-semibold tracking-tight">User Dashboard</h1>
        <p className="text-sm text-foreground/70">Your feed, subscriptions, and health timeline.</p>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="rounded-lg border p-4">
          <h3 className="font-medium mb-1">Feed</h3>
          <p className="text-sm text-foreground/70">Recommended posts based on your interests.</p>
        </div>
        <div className="rounded-lg border p-4">
          <h3 className="font-medium mb-1">Subscriptions</h3>
          <p className="text-sm text-foreground/70">Manage newsletter categories.</p>
        </div>
        <div className="rounded-lg border p-4">
          <h3 className="font-medium mb-1">Health Timeline</h3>
          <p className="text-sm text-foreground/70">View past symptoms and interactions.</p>
        </div>
      </div>
    </div>
  );
}
