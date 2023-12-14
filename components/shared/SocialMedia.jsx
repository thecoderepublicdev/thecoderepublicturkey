import SocialMediaAccounts from "@data/_SocialMediaAccounts";

export default function SocialMedia() {
    return(
        <div className="flex gap-4 justify-between content-center items-center sm:justify-evenly">
            {SocialMediaAccounts.map(account => (account.icon !== undefined) && (
                    <a 
                        key={account.platform} 
                        href={account.url}
                        className='rounded-full p-2 cursor-pointer'
                        title={`The Code Republic Official ${account.platform} Account`}
                    >
                        {account.icon}
                    </a>
                ))
            }
        </div>
    )
}