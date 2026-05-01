import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

type SecondarySiteNavProps = {
  backTo: string;
};

const SecondarySiteNav = ({ backTo }: SecondarySiteNavProps) => {
  return (
    <>
      <div className="flex justify-center flex-wrap gap-3 mb-6">
        <Link
          to="/"
          className="px-4 py-1.5 rounded-full border-2 border-gray-800 text-gray-800 text-sm font-semibold hover:bg-gray-800 hover:text-white transition-colors"
        >
          Home
        </Link>
        <Link
          to="/projects"
          className="px-4 py-1.5 rounded-full border-2 border-gray-800 text-gray-800 text-sm font-semibold hover:bg-gray-800 hover:text-white transition-colors"
        >
          Projects
        </Link>
        <Link
          to="/medium"
          className="px-4 py-1.5 rounded-full border-2 border-gray-800 text-gray-800 text-sm font-semibold hover:bg-gray-800 hover:text-white transition-colors"
        >
          Blog
        </Link>
        <Link
          to="/#experience"
          className="px-4 py-1.5 rounded-full border-2 border-gray-800 text-gray-800 text-sm font-semibold hover:bg-gray-800 hover:text-white transition-colors"
        >
          Experience
        </Link>
        <a
          href="/Jiten_Bhalavat_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-1.5 rounded-full border-2 border-gray-800 text-gray-800 text-sm font-semibold hover:bg-gray-800 hover:text-white transition-colors"
        >
          Resume
        </a>
      </div>

      <Link
        to={backTo}
        className="inline-flex items-center text-gray-700 hover:text-gray-900 mb-4 transition-colors text-sm font-semibold"
      >
        <ArrowLeft size={16} className="mr-1.5" />
        Back to Home
      </Link>
    </>
  );
};

export default SecondarySiteNav;
