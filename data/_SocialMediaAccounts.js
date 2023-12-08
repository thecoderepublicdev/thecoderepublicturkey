import FacebookLogo from "@icons/Facebook";
import LinkedInLogo from "@icons/LinkedIn";
import YouTubeLogo from "@icons/YouTube";
import X from "../components/shared/icons/X";

const { default: GithubLogo } = require("@icons/GitHub");
const { default: InstagramLogo } = require("@icons/Instagram");
const { default: ThreadsLogo } = require("@icons/Threads");

const SocialMediaAccounts = [
    {
        platform: "Facebook",
        icon: <FacebookLogo/>,
        url: "https://www.facebook.com/thecoderepublicofficial"
    },
    {
        platform: "Instagram",
        icon: <InstagramLogo/>,
        url: "https://www.instagram.com/thecoderepublic"
    },
    {
        platform: "Threads",
        icon: <ThreadsLogo/>,
        url: "https://www.threads.net/thecoderepublic"
    },
    {
        platform: "Twitter",
        icon: <X/>,
        url: "https://www.twitter.com/tcrdotdev"
    },
    {
        platform: "GitHub",
        icon: <GithubLogo/>,
        url: "https://github.com/The-Code-Republic"
    },
    {
        platform: "LinkedIn",
        icon: <LinkedInLogo/>,
        url: "https://www.linkedin.com/company/thecoderepublic/?utm_source=thecoderepublic.dev"
    },
    {
        platform: "YouTube",
        icon: <YouTubeLogo/>,
        url: "https://www.youtube.com/@TheCodeRepublic"
    },
]

export default SocialMediaAccounts;