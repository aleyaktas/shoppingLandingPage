import React, { CSSProperties, ReactElement } from "react";
import { ReactComponent as ArrowLeft } from "../assets/icons/arrow-left.svg";
import { ReactComponent as ArrowRight } from "../assets/icons/arrow-right.svg";
import { ReactComponent as Podcast } from "../assets/icons/podcast.svg";
import { ReactComponent as Rocket } from "../assets/icons/rocket.svg";
import { ReactComponent as Screen } from "../assets/icons/screen.svg";
import { ReactComponent as Search } from "../assets/icons/search.svg";
import { ReactComponent as SettingsAlt } from "../assets/icons/settings-alt.svg";
import { ReactComponent as ShieldCheck } from "../assets/icons/shield-check.svg";
import { ReactComponent as Facebook } from "../assets/icons/facebook.svg";
import { ReactComponent as Instagram } from "../assets/icons/instagram.svg";
import { ReactComponent as Linkedin } from "../assets/icons/linkedin.svg";
import { ReactComponent as PlayStore } from "../assets/icons/play-store.svg";
import { ReactComponent as AppStore } from "../assets/icons/app-store.svg";
import { ReactComponent as Twitter } from "../assets/icons/twitter.svg";
import { ReactComponent as Youtube } from "../assets/icons/youtube.svg";
import { ReactComponent as World } from "../assets/icons/world.svg";

interface IconProps {
  className?: string;
  name: string;
  width?: string;
  height?: string;
  color?: string;
  style?: CSSProperties;
}

const Icon: React.FC<IconProps> = ({
  className,
  name,
  width = "24px",
  height = "24px",
  color,
  style,
}: IconProps): ReactElement | null => {
  const icons: {
    [key: string]: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  } = {
    ArrowLeft,
    ArrowRight,
    Podcast,
    Rocket,
    Screen,
    Search,
    SettingsAlt,
    ShieldCheck,
    Facebook,
    Instagram,
    Linkedin,
    PlayStore,
    AppStore,
    Twitter,
    Youtube,
    World,
  };

  const IconItem = icons[name];

  if (!IconItem) return null;

  return (
    <div className={className} style={style}>
      <IconItem width={width} height={height} fill={color || "black"} />
    </div>
  );
};

export default Icon;
