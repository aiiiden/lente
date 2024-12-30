import Link from 'next/link';

import { buttonVariants } from '@/components/ui/button';

export default async function TermsPage() {
  return (
    <div className="w-full h-full flex flex-col bg-gray-200">
      <main className="flex-grow container pb-4 pt-14 overflow-auto flex flex-col gap-6">
        <header className="pb-8 pt-5">
          <h1 className="text-3xl font-bold">Terms of Service</h1>
          <hr className="border-black mt-2" />
        </header>
        <section>
          <h2 className="font-bold pb-2">1. Acceptance of Terms</h2>
          <p>
            Welcome to Lente (&quot;we,&quot; &quot;our,&quot; or
            &quot;us&quot;). By accessing or using our services, websites, or
            applications (collectively, the &quot;Services&quot;), you agree to
            be bound by these Terms of Service (&quot;Terms&quot;). If you do
            not agree to these Terms, you may not use our Services.
          </p>
        </section>

        <section>
          <h2 className="font-bold pb-2">2. Eligibility</h2>
          <p>
            You must be at least 18 years old or the legal age of majority in
            your jurisdiction to use our Services. By using our Services, you
            represent and warrant that you meet these requirements.
          </p>
        </section>

        <section>
          <h2 className="font-bold pb-2">3. Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time. Changes will
            be effective upon posting to our website. Your continued use of the
            Services after the posting of changes constitutes your acceptance of
            such changes.
          </p>
        </section>

        <section>
          <h2 className="font-bold pb-2">4. Use of Services</h2>
          <ul>
            <li>
              You agree to use the Services only for lawful purposes and in
              accordance with these Terms.
            </li>
            <li>
              You are responsible for maintaining the confidentiality of your
              account information and for all activities that occur under your
              account.
            </li>
            <li>
              You may not engage in any activity that interferes with or
              disrupts the Services.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-bold pb-2">5. User Content</h2>
          <ul>
            <li>
              You retain ownership of any content you post or submit to the
              Services (&apos;User Content&apos;).
            </li>
            <li>
              By posting User Content, you grant us a worldwide, non-exclusive,
              royalty-free license to use, reproduce, modify, and display such
              content in connection with the Services.
            </li>
            <li>
              You represent and warrant that you have the necessary rights to
              post User Content and that it does not violate any laws or
              third-party rights.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-bold pb-2">6. Intellectual Property</h2>
          <p>
            All content and materials provided through the Services, including
            text, graphics, logos, and software, are owned by or licensed to us
            and are protected by intellectual property laws. You may not copy,
            modify, distribute, or create derivative works from such materials
            without our prior written consent.
          </p>
        </section>

        <section>
          <h2 className="font-bold pb-2">7. Termination</h2>
          <p>
            We may suspend or terminate your access to the Services at our
            discretion, without notice, for any conduct that we believe violates
            these Terms or is harmful to our interests or the interests of
            others.
          </p>
        </section>

        <section>
          <h2 className="font-bold pb-2">8. Disclaimers</h2>
          <ul className="list-disc list-inside">
            <li>
              The Services are provided &apos;as is&apos; and &apos;as
              available,&apos; without warranties of any kind, either express or
              implied.
            </li>
            <li>
              We do not warrant that the Services will be uninterrupted,
              error-free, or free of viruses or other harmful components.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-bold pb-2">9. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, we shall not be liable for
            any indirect, incidental, consequential, or punitive damages arising
            out of or related to your use of the Services.
          </p>
        </section>

        <section>
          <h2 className="font-bold pb-2">10. Indemnification</h2>
          <p>
            You agree to indemnify and hold us harmless from and against any
            claims, liabilities, damages, losses, and expenses arising out of or
            related to your use of the Services or violation of these Terms.
          </p>
        </section>

        <section>
          <h2 className="font-bold pb-2">11. Governing Law</h2>
          <p>
            These Terms are governed by and construed in accordance with the
            laws of the Republic of Korea, without regard to its conflict of law
            principles.
          </p>
        </section>

        <section>
          <h2 className="font-bold pb-2">12. Dispute Resolution</h2>
          <p>
            Any disputes arising out of or relating to these Terms or the
            Services shall be resolved through binding arbitration in accordance
            with the rules of the International Arbitration Center.
          </p>
        </section>

        <section>
          <h2 className="font-bold pb-2">13. Contact Information</h2>
          <p>
            If you have any questions about these Terms, please contact us at:{' '}
            <a href="mailto:hjjam100@gmail.com">hjjam100@gmail.com</a>
          </p>
        </section>
      </main>
      <nav className="container pt-6 pb-8 bg-white rounded-tl-2xl rounded-tr-2xl flex items-center gap-4">
        <div
          className={buttonVariants({
            size: 'lg',
            className: 'w-full',
            variant: 'secondary',
          })}
        >
          Terms of Service
        </div>
        <Link
          href="/legal/privacy"
          className={buttonVariants({
            size: 'lg',
            className: 'w-full',
          })}
        >
          Privacy Policy
        </Link>
      </nav>
    </div>
  );
}
