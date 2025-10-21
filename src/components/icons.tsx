import { Download, GlobeIcon, MailIcon } from "lucide-react";
import { FaLinkedin, FaYoutube, FaGithub, FaInstagram } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiTypescript,
  SiReact,
  SiX,
} from "react-icons/si";

export type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
  globe: (props: IconProps) => <GlobeIcon {...props} />,
  email: (props: IconProps) => <MailIcon {...props} />,
  linkedin: (props: IconProps) => <FaLinkedin {...props} />,
  x: (props: IconProps) => <SiX {...props} />,
  youtube: (props: IconProps) => <FaYoutube {...props} />,
  nextjs: (props: IconProps) => <SiNextdotjs {...props} />,
  framermotion: (props: IconProps) => <SiFramer {...props} />,
  tailwindcss: (props: IconProps) => <SiTailwindcss {...props} />,
  insta: (props: IconProps) => <FaInstagram {...props} />,
  typescript: (props: IconProps) => <SiTypescript {...props} />,
  react: (props: IconProps) => <SiReact {...props} />,
  github: (props: IconProps) => <FaGithub {...props} />,
  resume: (props: IconProps) => <Download {...props} />,
};
