import * as React from 'react';

import { getBaseLayoutComponent } from '../../../utils/base-layout';
import { getComponent } from '../../components-registry';
import ContactForm from '../../sections/ContactForm';

export default function PageLayout(props) {
    const { page, site } = props;
    const BaseLayout = getBaseLayoutComponent(page.baseLayout, site.baseLayout);
    const { enableAnnotations = true } = site;
    const { title, sections = [] } = page;

    return (
        <BaseLayout page={page} site={site}>
            <main id="main" className="sb-layout sb-page-layout">
                {title && (
                    <h1 className="sr-only" {...(enableAnnotations && { 'data-sb-field-path': 'title' })}>
                        {title}
                    </h1>
                )}
                {sections.length > 0 && (
                    <div {...(enableAnnotations && { 'data-sb-field-path': 'sections' })}>
                        {sections.map((section, index) => {
                            const Component = getComponent(section.__metadata.modelName);
                            if (!Component) {
                                throw new Error(`no component matching the page section's model name: ${section.__metadata.modelName}`);
                            }
                            return (
                                <Component
                                    key={index}
                                    {...section}
                                    enableAnnotations={enableAnnotations}
                                    {...(enableAnnotations && { 'data-sb-field-path': `sections.${index}` })}
                                />
                            );
                        })}
                    </div>
                )}
                {/* Contact Form Section */}
                <section id="contact-us" className="px-4 pt-16 pb-8 md:py-16 sb-layout sb-page-layout-contact-form bg-slate-100 ">
                    <div className="mx-auto mb-6 text-center sb-component sb-component-section sb-component-contact-form max-w-sectionBody">
                        <h3 className="mb-8 text-4xl font-medium leading-3">Need more info?</h3>
                        <p className="md:text-lg">Use the form below to send us your message...</p>
                    </div>
                    <ContactForm />
                </section>
            </main>
        </BaseLayout>
    );
}
