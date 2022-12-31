import TeamMemberCard from "./TeamMemberCard";
import Cenk from "../src/images/cenk_kahramaner_the_code_republic.webp";
import Fatih from "../src/images/fatih-örmekıran-the-code-republic.webp";
import Gamze from "../src/images/gamze-bozkuş-the-code-republic.webp";
import Ecenur from "../src/images/ecenur-şimşek-the-code-republic.webp";

export default function TeamMember() {
    const TeamMembers = [
        {
            name: 'Cenk Kahramaner',
            title: 'Kurucu',
            photo: Cenk,
            photoAlt: 'Cenk Kahramaner The Code Republic\'de',
            mail: 'cenk@thecoderepublic.dev'
        },
        {
            name: 'Fatih Örmekıran',
            title: 'Kurucu Ortak',
            photo: Fatih,
            photoAlt: 'Fatih Örmekıran The Code Republic\'de',
            mail: 'fatih@thecoderepublic.dev'
        },
        {
            name: 'Gamze Bozkuş',
            title: 'Kurumsal İletişim',
            photo: Gamze,
            photoAlt: 'Gamze Bozkuş The Code Republic\'de',
            mail: 'gamze@thecoderepublic.dev'
        },
        {
            name: 'Ecenur Şimşek',
            title: 'Kurumsal İletişim',
            photo: Ecenur,
            photoAlt: 'Ecenur Şimşek The Code Republic\'de',
            mail: 'gamze@thecoderepublic.dev'
        },
    ]
    return(
        <section id="tcr-team-member">
           <div className="TCRContainer">
              <div className="flex flex-wrap justify-center -mx-4">
                {
                    TeamMembers.map((member, key) => {
                        return(
                            <TeamMemberCard
                                key={key}
                                name={member.name}
                                title={member.title}
                                photo={member.photo}
                                photoAlt={member.photoAlt}
                                mail={member.mail}
                            />
                        )
                    })
                }
              </div>
           </div>
        </section>
    )
}