import Hero from './components/Hero';
import ProfileCard from './components/ProfileCard';
import LinkList from './components/LinkList';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <Hero />

      <main className="relative z-10 mx-auto -mt-24 max-w-xl px-4 sm:px-6">
        <div className="flex w-full flex-col items-center gap-6 rounded-3xl border border-white/10 bg-neutral-900/70 p-6 backdrop-blur">
          <ProfileCard />
          <LinkList />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
