export default function DoctorsPage() {
  return (
    <div className="space-y-6">
      <header className="space-y-1">
        <h1 className="text-2xl font-semibold tracking-tight">Doctor Portal</h1>
        <p className="text-sm text-foreground/70">Submit verification, publish content, and see analytics.</p>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="rounded-lg border p-4">
          <h3 className="font-medium mb-1">Verification</h3>
          <p className="text-sm text-foreground/70">Upload documents for admin review.</p>
        </div>
        <div className="rounded-lg border p-4">
          <h3 className="font-medium mb-1">Create Blog</h3>
          <p className="text-sm text-foreground/70">Editor with categories, tags, and media.</p>
        </div>
        <div className="rounded-lg border p-4">
          <h3 className="font-medium mb-1">Analytics</h3>
          <p className="text-sm text-foreground/70">Views and engagement metrics for your posts.</p>
        </div>
      </div>
    </div>
  );
}
