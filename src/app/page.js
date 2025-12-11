import Link from "next/link";

export default function Home() {      
  return (
    <div className="space-y-12">  
      <section className="text-center space-y-4"> 
        <h1 className="text-3xl sm:text-5xl  font-semibold tracking-tight">Smart Healthcare Platform</h1>
        <p className="text-foreground/70 max-w-2xl mx-auto">
          Understand conditions, connect with verified doctors, and access reliable medical content.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link href="/symptom-checker" className="inline-flex items-center rounded-md bg-black text-white dark:bg-white dark:text-black px-4 py-2 text-sm">
            Try Symptom Checker 
          </Link>
          <Link href="/blogs" className="inline-flex items-center rounded-md border px-4 py-2  text-sm">
            Browse Blogs  
          </Link> 
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="rounded-lg border p-6">
          <h3 className="font-medium mb-2">Users</h3>
          <p className="text-sm text-foreground/70 mb-4">Personalized dashboard, verified content, newsletters, and appointment requests.</p>
          <Link href="/users" className="text-sm underline">Go to User area →</Link>
        </div>
        <div className="rounded-lg border p-6">
          <h3 className="font-medium mb-2">Doctors</h3>
          <p className="text-sm text-foreground/70 mb-4">Submit verification, publish blogs, manage content, and view analytics.</p>
          <Link href="/doctors" className="text-sm underline">Go to Doctor area →</Link>
        </div>
        <div className="rounded-lg border p-6">
          <h3 className="font-medium mb-2">Admins</h3>
          <p className="text-sm text-foreground/70 mb-4">Verify doctors, moderate content, and monitor platform activity.</p>
          <Link href="/admin" className="text-sm underline">Go to Admin area →</Link>
        </div>
      </section>

      <section className="rounded-xl border p-6">
        <h2 className="text-xl font-semibold mb-4">Highlights</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
          <li className="rounded-lg border p-4">AI Symptom Checker with urgency detection</li> 
          <li className="rounded-lg border p-4">Verified doctor blogs with categories and tags</li>
          <li className="rounded-lg border p-4">Newsletters based on your interests</li>
          <li className="rounded-lg border p-4">Personal health timeline</li>
          <li className="rounded-lg border p-4">Doctor networking forum</li>
          <li className="rounded-lg border p-4">Multilingual interface (Hindi, Marathi, Tamil)</li>
        </ul>
      </section>
    </div>
  );
}
