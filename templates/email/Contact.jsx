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

export default function ContactMail({firstName, lastName, mail, phone, message}) {
    return(
        <Html>
            <Head/>
            <Preview>
                {`${firstName} iletişime geçmek istiyor`}
            </Preview>
            <Tailwind>
                <Body className='bg-[#F6F3F0] my-auto mx-auto font-sans grid place-content-center place-items-center'>
                    <Container>
                        <Section className='min-w-[700px] bg-white rounded-xl p-6 my-6'>
                            <Heading>
                                {`${firstName} iletişime geçmek istiyor!`}
                            </Heading>
                            <Section className='grid gap-4'>
                                <Row className='grid gap-4'>
                                    <Row className='grid grid-cols-2'>
                                        <Column align='left' className="min-w-[50%]">
                                            <Text className="text-lg font-bold">Adı: </Text>
                                        </Column>
                                        
                                        <Column align='right'>
                                            <Text className="text-lg">{firstName}</Text>
                                        </Column>
                                    </Row>
                                    
                                    <Row className='grid grid-cols-2'>
                                        <Column align='left' className="min-w-[50%]">
                                            <Text className="text-lg font-bold">Soyadı: </Text>
                                        </Column>
                                        
                                        <Column align='right'>
                                            <Text className="text-lg">{lastName}</Text>
                                        </Column>
                                    </Row>

                                    <Row className='grid grid-cols-2'>
                                        <Column align='left' className="min-w-[50%]">
                                            <Text className="text-lg font-bold">Telefon Numarası: </Text>
                                        </Column>
                                        
                                        <Column align='right'>
                                            <Text className="text-lg">{phone}</Text>
                                        </Column>
                                    </Row>

                                    <Row className='grid grid-cols-2'>
                                        <Column align='left' className="min-w-[50%]">
                                            <Text className="text-lg font-bold">E-Posta Adresi: </Text>
                                        </Column>
                                        
                                        <Column align='right'>
                                            <Text className="text-lg">{mail}</Text>
                                        </Column>
                                    </Row>

                                        
                                    <Row className='bg-gray-50 p-4 rounded-xl mb-4'>
                                        <Text className="text-lg">
                                            {message}
                                        </Text>
                                    </Row>

                                    <Row className='mt-4 pt-4 border-t border-gray-200'>
                                        <Column className='flex justify-between align-center items-center content-center gap-4'>
                                            <Button href={`mailto:${mail}`} className="w-3/6 p-6 bg-[#164DD6] pl-2 text-white rounded-xl text-center text-lg">Yanıtla</Button>
                                            <Button href={`tel:${phone}`} className="w-3/6 p-6 bg-[#164DD6]/10 pr-2 text-[#164DD6] rounded-xl text-center text-lg">Ara</Button>
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
