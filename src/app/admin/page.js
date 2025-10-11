export default function AdminPage() {
  return (
    <div className="space-y-6">
      <header className="space-y-1">
        <h1 className="text-2xl font-semibold tracking-tight">Admin Console</h1>
        <p className="text-sm text-foreground/70">Verify doctors, review posts, and monitor platform health.</p>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="rounded-lg border p-4">
          <h3 className="font-medium mb-1">Doctor Verification</h3>
          <p className="text-sm text-foreground/70">Pending applications and status updates.</p>
        </div>
        <div className="rounded-lg border p-4">
          <h3 className="font-medium mb-1">Content Moderation</h3>
          <p className="text-sm text-foreground/70">Approve or reject blog posts.</p>
        </div>
        <div className="rounded-lg border p-4">
          <h3 className="font-medium mb-1">Platform Stats</h3>
          <p className="text-sm text-foreground/70">Users, doctors, and subscriptions overview.</p>
        </div>
      </div>
    </div>
  );
}
