import Link from 'next/link';

import { buttonVariants } from '@/components/ui/button';

export default async function PrivacyPolicyPage() {
  return (
    <div className="w-full h-full flex flex-col bg-gray-200">
      <main className="flex-grow container pb-4 pt-14 overflow-auto flex flex-col gap-6">
        <header className="pb-8 pt-5">
          <h1 className="text-3xl font-bold">Privacy Policy</h1>
          <hr className="border-black mt-2" />
        </header>
        <section>
          <p>
            Lente (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects
            your privacy and is committed to protecting your personal
            information. This Privacy Policy explains how we collect, use,
            disclose, and safeguard your information when you use our services.
            Please read this policy carefully. If you do not agree with the
            terms of this Privacy Policy, please do not use our services.
          </p>
        </section>

        <section>
          <h2 className="font-bold pb-2">Information We Collect</h2>
          <ul className="list-disc list-inside">
            <li>
              <strong>Personal Information:</strong> Information that identifies
              you personally, such as your name, email address, phone number,
              and payment details.
            </li>
            <li>
              <strong>Usage Data:</strong> Information about your interactions
              with our services, such as IP address, browser type, access times,
              and pages viewed.
            </li>
            <li>
              <strong>Cookies and Tracking Technologies:</strong> Information
              collected through cookies, web beacons, and other tracking
              technologies.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-bold pb-2">How We Use Your Information</h2>
          <ul className="list-disc list-inside">
            <li>To provide and maintain our services.</li>
            <li>To personalize your experience.</li>
            <li>
              To communicate with you, including sending updates and promotional
              materials.
            </li>
            <li>To analyze usage patterns and improve our services.</li>
            <li>To comply with legal obligations.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-bold pb-2">Sharing Your Information</h2>
          <p>
            We may share your information with third parties under the following
            circumstances:
          </p>
          <ul className="list-disc list-inside">
            <li>With service providers who perform services on our behalf.</li>
            <li>
              To comply with legal obligations or respond to lawful requests.
            </li>
            <li>
              In connection with a merger, sale, or transfer of our business.
            </li>
            <li>With your consent or at your direction.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-bold pb-2">Data Security</h2>
          <p>
            We implement reasonable measures to protect your information from
            unauthorized access, disclosure, alteration, and destruction.
            However, no security measures are infallible.
          </p>
        </section>

        <section>
          <h2 className="font-bold pb-2">Your Rights</h2>
          <p>
            Depending on your jurisdiction, you may have the following rights
            regarding your personal information:
          </p>
          <ul className="list-disc list-inside">
            <li>Access your information.</li>
            <li>Correct or delete your information.</li>
            <li>Object to or restrict certain processing.</li>
            <li>Withdraw consent where processing is based on consent.</li>
          </ul>
          <p>
            To exercise your rights, please contact us at{' '}
            <a href="mailto:hjjam100@gmail.com">hjjam100@gmail.com</a>.
          </p>
        </section>

        <section>
          <h2 className="font-bold pb-2">Retention of Data</h2>
          <p>
            We retain your information for as long as necessary to fulfill the
            purposes outlined in this policy or as required by law.
          </p>
        </section>

        <section>
          <h2 className="font-bold pb-2">Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify
            you of any changes by posting the updated policy with a new
            effective date.
          </p>
        </section>

        <section>
          <h2 className="font-bold pb-2">Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us at:{' '}
            <a href="mailto:Lentehjjam100@gmail.com">Lentehjjam100@gmail.com</a>
          </p>
        </section>
      </main>
      <nav className="container pt-6 pb-8 bg-white rounded-tl-2xl rounded-tr-2xl flex items-center gap-4">
        <Link
          href="/legal/term"
          className={buttonVariants({
            size: 'lg',
            className: 'w-full',
          })}
        >
          Terms of Service
        </Link>
        <div
          className={buttonVariants({
            size: 'lg',
            className: 'w-full',
            variant: 'secondary',
          })}
        >
          Privacy Policy
        </div>
      </nav>
    </div>
  );
}
