import Layout from "@components/layout";
import Grid from "@components/layout/Grid";
import Section from "@components/layout/Section";
import Button from "@components/shared/Button";

export default function c_handler() {
    return(
        <Layout>
            <Section>
                <Section.Content>
                    <Grid cols={4} gapHorizontal={4} gapVertical={6}>
                        {[1,2,3,4,5,6,7,8,9,10].map((item, key) => (
                            <div key={key} className="p-5 bg-white rounded-xl grid place-content-center place-items-center">{item}</div>
                        ))}
                    </Grid>
                </Section.Content>
            </Section>
        </Layout>
    )
}