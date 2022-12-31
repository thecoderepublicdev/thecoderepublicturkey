import SectionHeader from '../components/SectionHeader';
import TeamMember from '../components/TeamMember';

export default function OurTeam({...props}) {
    return(
        <div className="mt-20">
            <SectionHeader
                align="left"
                title="İşte o profesyonel eller"
                subTitle="Ekibimiz"
                description="Sizinle tanışmak ve birlikte çalışmak için sabırsızlanıyoruz."
            />
            <TeamMember/>
        </div>
    )
}