import { Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t p-4 text-center">
      <div className="space-x-4">
        <a href="/privacy-policy">Privacy Policy</a>
        <a href="/terms-of-service">Terms of Service</a>
        <a href="/contact">Contact Us</a>
      </div>
      <div className="mt-4 space-x-4">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <Facebook className="inline-block h-6 w-6" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <Twitter className="inline-block h-6 w-6" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <Instagram className="inline-block h-6 w-6" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;