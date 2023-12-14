import {
    Body,
    Button,
    Container,
    Head,
    Heading,
    Html,
    Preview,
    Row,
    Column,
    Section,
    Tailwind,
    Text,
} from '@react-email/components';

export default function InCorpMeetingMail({
    contactPersonName, 
    contactPersonLastName, 
    contactPersonMail, 
    contactPersonPhone,
    companyName,
    companySize
}) {
    return(
        <Html>
            <Head/>
            <Preview>
                {`${contactPersonName} Şirket içi Özel Yazılım için Toplantı Talep Ediyor`}
            </Preview>
            <Tailwind>
                <Body className='bg-[#F6F3F0] my-auto mx-auto font-sans grid place-content-center place-items-center'>
                    <Container>
                        <Section className='min-w-[700px] bg-white rounded-xl p-6 my-6'>
                            <Heading>
                                {`${contactPersonName}, ${companyName} için Şirket içi Özel Yazılım Toplantısı Talep Ediyor`}
                            </Heading>
                            <Section className='grid gap-4'>
                                <Row className='grid gap-4'>
                                    <Row className='grid grid-cols-2'>
                                        <Column align='left' className="min-w-[50%]">
                                            <Text className="text-lg font-bold">Adı: </Text>
                                        </Column>
                                        
                                        <Column align='right'>
                                            <Text className="text-lg">{contactPersonName}</Text>
                                        </Column>
                                    </Row>
                                    
                                    <Row className='grid grid-cols-2'>
                                        <Column align='left' className="min-w-[50%]">
                                            <Text className="text-lg font-bold">Soyadı: </Text>
                                        </Column>
                                        
                                        <Column align='right'>
                                            <Text className="text-lg">{contactPersonLastName}</Text>
                                        </Column>
                                    </Row>

                                    <Row className='grid grid-cols-2'>
                                        <Column align='left' className="min-w-[50%]">
                                            <Text className="text-lg font-bold">Telefon Numarası: </Text>
                                        </Column>
                                        
                                        <Column align='right'>
                                            <Text className="text-lg">{contactPersonPhone}</Text>
                                        </Column>
                                    </Row>

                                    <Row className='grid grid-cols-2'>
                                        <Column align='left' className="min-w-[50%]">
                                            <Text className="text-lg font-bold">E-Posta Adresi: </Text>
                                        </Column>
                                        
                                        <Column align='right'>
                                            <Text className="text-lg">{contactPersonMail}</Text>
                                        </Column>
                                    </Row>
                                    
                                    <Row className='grid grid-cols-2'>
                                        <Column align='left' className="min-w-[50%]">
                                            <Text className="text-lg font-bold">Şirket Adı: </Text>
                                        </Column>
                                        
                                        <Column align='right'>
                                            <Text className="text-lg">{companyName}</Text>
                                        </Column>
                                    </Row>
                                    
                                    <Row className='grid grid-cols-2'>
                                        <Column align='left' className="min-w-[50%]">
                                            <Text className="text-lg font-bold">Şirket Büyüklüğü: </Text>
                                        </Column>
                                        
                                        <Column align='right'>
                                            <Text className="text-lg">{companySize}</Text>
                                        </Column>
                                    </Row>

                                    
                                    <Row className='mt-4 pt-4 border-t border-gray-200'>
                                        <Column className='flex justify-between align-center items-center content-center gap-4'>
                                            <Button href={`mailto:${contactPersonMail}`} className="w-3/6 p-6 bg-[#164DD6] pl-2 text-white rounded-xl text-center text-lg">Yanıtla</Button>
                                            <Button href={`tel:${contactPersonPhone}`} className="w-3/6 p-6 bg-[#164DD6]/10 pr-2 text-[#164DD6] rounded-xl text-center text-lg">Ara</Button>
                                        </Column>
                                    </Row>
                                </Row>
                            </Section>
                        </Section>
                        <Text className='text-center text-sm text-gray-500'>
                            © 2023 | The Code Republic LLC, Harju maakond, Tallinn, Kesklinna linnaosa, Tornimäe tn 7-26, 10145, Tallinn | Estonia
                        </Text>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    )
}
