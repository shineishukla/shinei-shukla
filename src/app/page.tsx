import Image from 'next/image';
import Link from 'next/link';
import {FaLinkedin, FaInstagram, FaBehance ,} from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { FaXTwitter } from "react-icons/fa6";

const Home: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-purple-100 to-indigo-200 min-h-screen p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-xl overflow-hidden p-6 grid grid-cols-1 md:grid-cols-3 gap-6 shadow-lg">
        <ImageSection />
        <BioSection />
        <SummarySection />
        <ProjectsSection />
        <FooterSection />
      </div>
    </div>
  );
};

const ImageSection = () => (
  <div className="md:col-span-1 md:row-span-2 flex justify-center items-center bg-gradient-to-tr from-pink-100 to-purple-200 rounded-xl p-3">
    <div className="w-full max-w-[250px] sm:max-w-[300px] md:max-w-full">
      <Image
        src="/ph.jpeg"
        alt="Shinei Shukla"
        width={535}
        height={647}
        className="w-full h-auto rounded-xl object-cover shadow-sm"
      />
    </div>
  </div>
);

const BioSection = () => (
  <div className="md:col-span-2 bg-gradient-to-r from-blue-50 to-indigo-100 p-5 rounded-xl shadow-sm">
    <div className="flex justify-between items-center mb-3">
      <h1 className="text-2xl font-bold text-indigo-800">Shinei Shukla</h1>
      <Link href="https://drive.google.com/file/d/1iuByDZhmA6CCPzhlCOp7demmt1XDz0rN/view?pli=1" className="text-indigo-600 text-sm font-semibold hover:text-indigo-800 transition duration-300">
        Resume
      </Link>
    </div>
    <p className="text-base text-gray-700 leading-relaxed">
      Hey, I&apos;m Shinei. I&apos;m a passionate UX Designer, currently exploring the intricacies
      of UI/UX through personal case studies and building my portfolio.
      When I&apos;m not designing, I&apos;m creating content for my{' '}
      <a href="https://www.instagram.com/designwithshinei/" className="text-pink-600 hover:text-pink-800 transition duration-300">
        Instagram
      </a>.
    </p>
  </div>
);

const SummarySection = () => (
  <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-5 rounded-xl shadow-sm">
    <h2 className="text-xl font-semibold mb-3 text-emerald-800">Summary</h2>
    <ul className="space-y-2 text-base text-gray-700">
      <li className="flex items-center"><span className="text-emerald-500 mr-2">•</span> Self-taught UI/UX Designer</li>
      <li className="flex items-center"><span className="text-emerald-500 mr-2">•</span> Pursuing BCA</li>
      <li className="flex items-center"><span className="text-emerald-500 mr-2">•</span> Web development background</li>
      <li className="flex items-center"><span className="text-emerald-500 mr-2">•</span> Skilled in graphics design</li>
      <li className="flex items-center"><span className="text-emerald-500 mr-2">•</span> Seeking UI/UX opportunities</li>
    </ul>
  </div>
);

const ProjectsSection = () => (
  <div className="bg-gradient-to-bl from-yellow-50 to-amber-100 p-5 rounded-xl shadow-sm">
    <h2 className="text-xl font-semibold mb-3 text-amber-800">Projects</h2>
    <ul className="space-y-2 text-base text-gray-700">
      <li className="flex items-center"><span className="text-amber-500 mr-2">•</span> Project 1: Description</li>
      <li className="flex items-center"><span className="text-amber-500 mr-2">•</span> Project 2: Description</li>
      <li className="flex items-center"><span className="text-amber-500 mr-2">•</span> Project 3: Description</li>
    </ul>
  </div>
);
const FooterSection = () => (
  <div className="col-span-full text-center p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl">
    <div className="flex justify-center space-x-6">
      <SocialLink href="https://x.com/ShineiShukla" icon={FaXTwitter} label="X" color="text-[#000000]" />
      <SocialLink href="https://www.linkedin.com/in/shinei-shukla-3712991b0/" icon={FaLinkedin} label="LinkedIn" color="text-[#0A66C2]" />
      <SocialLink href="https://www.instagram.com/designwithshinei/" icon={FaInstagram} label="Instagram" color="text-[#E4405F]" />
      <SocialLink href="https://www.behance.net/ishineishukla" icon={FaBehance} label="Behance" color="text-[#1769FF]" />
      <SocialLink href="mailto:shinei27shukla@gmail.com" icon={MdEmail} label="Email" color="text-[#EA4335]" />
    </div>
  </div>
);

interface SocialLinkProps {
  href: string;
  icon: React.ElementType;
  label: string;
  color: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon: Icon, label, color }) => (
  <Link href={href} className={`${color} hover:opacity-80 transition duration-300`}>
    <Icon className="text-2xl" aria-label={label} />
  </Link>
);

export default Home;