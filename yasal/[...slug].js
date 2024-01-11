import Layout from "@components/layout";
import Section from "@components/layout/Section";
import { useRouter } from "next/router";
import { Tab } from '@headlessui/react'
import classNames from "classnames";
import Policies from "@data/_Policies";

export default function handle() {
    const router = useRouter();
    const IS_CURRENT_DOCUMENT = Policies.find(p => p.slug === router.query.slug)

    return(
        <Layout>
            <Tab.Group>
                <Section>
                    <Section.Content>
                        <div className="grid gap-4 rounded-xl p-6 bg-brand-primary">
                            <h1 className="text-white text-4xl font-bold">Yasal</h1>
                            <Tab.List as="div" className="p-2 w-fit bg-white/25 rounded-full flex jusitfy-between">
                                {Policies.map((p, key) => (
                                    <Tab key={key} selected={p.slug === router.query.slug} className={({selected}) => classNames(
                                        "block outline-none px-4 py-2 transition-all ease-in-out rounded-full text-lg text-white", {
                                            'bg-white !text-black': selected
                                        }
                                    )}>{p.title}</Tab>
                                ))}
                            </Tab.List>
                        </div>
                        
                    </Section.Content>
                </Section>

                <Section>
                    <Section.Content>
                        <Tab.Panels>
                            <Tab.Panel>1</Tab.Panel>
                            <Tab.Panel>2</Tab.Panel>
                            <Tab.Panel>3</Tab.Panel>
                        </Tab.Panels>
                    </Section.Content>
                </Section>
            </Tab.Group>
        </Layout>
    )
}