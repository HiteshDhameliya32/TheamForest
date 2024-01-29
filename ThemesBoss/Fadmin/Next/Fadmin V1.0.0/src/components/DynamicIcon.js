import dynamic from "next/dynamic";

const DynamicIcon = ({
  iconFamily,
  icon,
  ...rest
}) => {
  const Icons = {
    ci: dynamic(() => import("react-icons/ci").then((mod) => mod[icon])),
    fa: dynamic(() => import("react-icons/fa").then((mod) => mod[icon])),
    fa6: dynamic(() => import("react-icons/fa6").then((mod) => mod[icon])),
    io: dynamic(() => import("react-icons/io").then((mod) => mod[icon])),
    io5: dynamic(() => import("react-icons/io5").then((mod) => mod[icon])),
    md: dynamic(() => import("react-icons/md").then((mod) => mod[icon])),
    ti: dynamic(() => import("react-icons/ti").then((mod) => mod[icon])),
    go: dynamic(() => import("react-icons/go").then((mod) => mod[icon])),
    fi: dynamic(() => import("react-icons/fi").then((mod) => mod[icon])),
    gi: dynamic(() => import("react-icons/gi").then((mod) => mod[icon])),
    wi: dynamic(() => import("react-icons/wi").then((mod) => mod[icon])),
    di: dynamic(() => import("react-icons/di").then((mod) => mod[icon])),
    ai: dynamic(() => import("react-icons/ai").then((mod) => mod[icon])),
    bs: dynamic(() => import("react-icons/bs").then((mod) => mod[icon])),
    ri: dynamic(() => import("react-icons/ri").then((mod) => mod[icon])),
    fc: dynamic(() => import("react-icons/fc").then((mod) => mod[icon])),
    gr: dynamic(() => import("react-icons/gr").then((mod) => mod[icon])),
    hi: dynamic(() => import("react-icons/hi").then((mod) => mod[icon])),
    hi2: dynamic(() => import("react-icons/hi2").then((mod) => mod[icon])),
    si: dynamic(() => import("react-icons/si").then((mod) => mod[icon])),
    sl: dynamic(() => import("react-icons/sl").then((mod) => mod[icon])),
    im: dynamic(() => import("react-icons/im").then((mod) => mod[icon])),
    bi: dynamic(() => import("react-icons/bi").then((mod) => mod[icon])),
    cg: dynamic(() => import("react-icons/cg").then((mod) => mod[icon])),
    vsc: dynamic(() => import("react-icons/vsc").then((mod) => mod[icon])),
    tb: dynamic(() => import("react-icons/tb").then((mod) => mod[icon])),
    tfi: dynamic(() => import("react-icons/tfi").then((mod) => mod[icon])),
    lu: dynamic(() => import("react-icons/lu").then((mod) => mod[icon]))
  };

  const Icon = iconFamily && icon ? Icons[iconFamily] : null;

  if (!Icon) return <></>;

  return (
    <>
      <Icon {...rest} />
    </>
  );
};

export default DynamicIcon;