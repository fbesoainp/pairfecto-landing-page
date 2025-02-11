export default function Footer() {
    return (
      <footer className="w-full text-white py-6 mt-12 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center px-4">
          <p className="text-sm">
            © {new Date().getFullYear()} Pairfecto. All rights reserved.
          </p>
          <div className="flex justify-center gap-4 mt-2 text-sm">
            <a href="/privacy-policy" className="hover:underline">
              Privacy Policy
            </a>
            <span>|</span>
            <a href="/terms-of-service" className="hover:underline">
              Terms of Service
            </a>
          </div>
          <p className="text-xs text-white/80 mt-2">
            We only store emails for beta access notifications. No other personal data is collected or shared.
          </p>
        </div>
      </footer>
    );
  }