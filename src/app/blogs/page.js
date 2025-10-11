export default function BlogsPage() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-semibold tracking-tight">Blogs</h1>
        <p className="text-sm text-foreground/70">Browse verified medical content by category and tags.</p>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[1,2,3,4,5,6].map((i) => (
          <article key={i} className="rounded-lg border p-4">
            <h3 className="font-medium">Sample Blog #{i}</h3>
            <p className="text-sm text-foreground/70">Short description for the blog post. Category · Tags</p>
          </article>
        ))}
      </div>
    </div>
  );
}
