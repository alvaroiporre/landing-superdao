import Image from "next/image";

interface ISocialIconsProps {
  size: number;
}

const SocialIcons = ({size}: ISocialIconsProps) => {
  return (
    <div className="h-[3rem] flex justify-center gap-7 mt-10 items-center p-[0.25rem]">
      <Image src="/assets/ic-twitter.png" alt="twitter" width={size} height={size} />
      <Image src="/assets/ic-telegram.png" alt="twitter" width={size} height={size} />
      <Image src="/assets/ic-youtube.png" alt="twitter" width={size} height={size} />
      <Image src="/assets/ic-discord.png" alt="twitter" width={size} height={size} />
    </div>
  );
};
export default SocialIcons;