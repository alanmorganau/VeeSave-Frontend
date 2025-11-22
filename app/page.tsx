'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import SlideMenu from '../components/SlideMenu';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-veesaveLight text-veesaveDark">
      {/* Top navigation / branding */}
      <Header />

      {/* Body with slide-out menu + content */}
      <div className="flex flex-1">
        {/* Left-side slide / hamburger menu */}
        <aside className="w-64 max-w-xs border-r border-gray-200 bg-white/70 backdrop-blur-sm">
          <SlideMenu isOpen={true} />
        </aside>

        {/* Main content area */}
        <section className="flex-1 max-w-4xl mx-auto px-6 py-12">
          <h1 className="text-4xl font-bold mb-4">
            Welcome to VeeSave
          </h1>

          <p className="text-lg mb-6">
            You’re now running the new{' '}
            <span className="font-semibold">VeeSave App Router</span>{' '}
            environment on the production server.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-2">
                What’s live right now?
              </h2>
              <ul className="list-disc list-inside space-y-1 text-sm leading-relaxed">
                <li>Next.js 14 App Router frontend.</li>
                <li>Deployed via PM2 on port 3000.</li>
                <li>Served securely through NGINX and HTTPS.</li>
                <li>Core VeeSave theme, logo and menu components wired in.</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-2">
                What’s coming next?
              </h2>
              <ul className="list-disc list-inside space-y-1 text-sm leading-relaxed">
                <li>Multi-page navigation (Dashboard, Trips, Expenses, Settings).</li>
                <li>Authentication flows (Login, Register, Forgot password).</li>
                <li>Connected data from the VeeSave backend APIs.</li>
                <li>UI polish for investor demo and pilot rollout.</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-dashed border-veesaveYellow/70 bg-yellow-50 p-6">
            <h3 className="text-lg font-semibold mb-2">
              You’re in build mode
            </h3>
            <p className="text-sm leading-relaxed">
              This screen is the active production UI shell. As we add pages and features, they’ll appear here without changing the deployment pipeline we just stabilised.
            </p>
          </div>
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
