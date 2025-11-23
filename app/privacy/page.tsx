export default function PrivacyPage() {
  return (
    <div className="bg-black text-slate-100">
      <main className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-amber-400">
          Draft only — for legal review
        </p>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          VeeSave Privacy Notice
        </h1>
        <p className="mt-2 text-sm text-slate-400">
          Last updated: {new Date().getFullYear()}
        </p>

        <div className="mt-8 space-y-6 text-sm leading-relaxed text-slate-200">
          <section>
            <h2 className="text-lg font-semibold text-slate-100">
              1. About this notice
            </h2>
            <p className="mt-2">
              This privacy notice explains how VeeSave Pty Ltd (&quot;VeeSave&quot;, &quot;we&quot;, &quot;us&quot; or
              &quot;our&quot;) collects, uses, discloses, and protects personal information in connection with the
              VeeSave web and mobile applications, our early-access pilot, and any related services (the
              &quot;Services&quot;).
            </p>
            <p className="mt-2">
              This document is a <span className="font-semibold">draft for legal review only</span> and is not intended
              to be final or to constitute legal advice. Before launch, this notice must be reviewed, localised, and
              approved by qualified legal counsel.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-100">
              2. Australian privacy framework
            </h2>
            <p className="mt-2">
              VeeSave is designed for users in Australia. Our handling of personal information is intended to align
              with the <span className="font-semibold">Privacy Act 1988 (Cth)</span> and the Australian Privacy
              Principles (APPs), as administered by the Office of the Australian Information Commissioner (OAIC).
              This draft also assumes that general consumer protections under the{" "}
              <span className="font-semibold">Australian Consumer Law (ACL)</span> and relevant sector guidance (for
              example from the ACCC in relation to motor vehicle and automotive services) may apply.
            </p>
            <p className="mt-2">
              Your lawyers should confirm which laws and regulatory guidance apply to VeeSave based on the final
              product design, corporate structure, and data flows.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-100">
              3. What information we collect
            </h2>
            <p className="mt-2">
              VeeSave is focused on vehicle expenses, trip records, and compliance. Depending on how you use the
              Services, we may collect the following types of information:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                <span className="font-semibold">Account details</span>: name, email address, password (stored in
                hashed form), and basic contact information.
              </li>
              <li>
                <span className="font-semibold">Vehicle and fleet details</span>: registration identifiers, make and
                model, fuel type, odometer readings, service history, and similar information about your vehicles.
              </li>
              <li>
                <span className="font-semibold">Expense and trip records</span>: fuel receipts, tolls, maintenance
                invoices, parking, insurance premiums, and other costs you choose to log in the app.
              </li>
              <li>
                <span className="font-semibold">Location or trip context</span>: where enabled, we may record limited
                trip information such as start and end locations, route summaries, or distance travelled. The final
                scope of any telematics or GPS features should be confirmed with legal counsel.
              </li>
              <li>
                <span className="font-semibold">Usage and device data</span>: log data, browser type, device type,
                timestamps, and interactions with our pages and screens (for example button clicks and navigation
                events).
              </li>
              <li>
                <span className="font-semibold">Support communications</span>: messages or attachments you send to
                support, feedback forms, or pilot surveys.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-100">
              4. How we use personal information
            </h2>
            <p className="mt-2">We use the information we collect for purposes such as:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Creating and managing your VeeSave account and providing the Services.</li>
              <li>
                Tracking, organising, and visualising vehicle-related expenses, trips, and compliance information at
                your request.
              </li>
              <li>Providing dashboards, reports, alerts, and insights about fuel use, costs, and trends.</li>
              <li>Customising your experience and improving our user interface and workflows.</li>
              <li>
                Communicating with you about product updates, pilot program changes, and service notifications (for
                example, planned downtime or material changes to this notice).
              </li>
              <li>
                Meeting our legal, regulatory, and risk-management obligations, including record-keeping and responding
                to lawful requests.
              </li>
            </ul>
            <p className="mt-2">
              Where required by law, we will seek consent before using your information for certain purposes, such as
              specific types of marketing or analytics.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-100">
              5. Cookies and analytics
            </h2>
            <p className="mt-2">
              VeeSave may use cookies, local storage, and similar technologies to keep you signed in, remember your
              preferences, and understand how the platform is used. We may also use privacy-aware analytics tools to
              understand which features are most helpful and where users encounter friction.
            </p>
            <p className="mt-2">
              Any analytics or tracking services, and whether they involve overseas data transfers, should be confirmed
              and documented by your legal and technical teams before launch.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-100">
              6. When we share information
            </h2>
            <p className="mt-2">
              We do not sell your personal information. We may disclose information in limited circumstances, such as:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                <span className="font-semibold">Service providers</span> that host our infrastructure, store data, or
                help us deliver functionality (for example, cloud platforms, email providers, and secure backup
                services).
              </li>
              <li>
                <span className="font-semibold">Professional advisers</span>, including legal, accounting, or insurance
                advisers engaged to support our operations.
              </li>
              <li>
                <span className="font-semibold">Regulators and law enforcement</span>, where we are legally required to
                respond to a valid request or to protect our rights, users, or the public.
              </li>
              <li>
                <span className="font-semibold">Business transactions</span>, in connection with a merger, acquisition,
                or restructuring, subject to appropriate confidentiality protections.
              </li>
            </ul>
            <p className="mt-2">
              If any overseas disclosures are made (for example, to cloud providers based outside Australia), this
              must be assessed and documented in line with the Privacy Act and any cross-border transfer obligations.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-100">
              7. Data retention
            </h2>
            <p className="mt-2">
              As a general principle, we aim to retain personal information only for as long as reasonably necessary to
              provide the Services, meet legal and taxation requirements, resolve disputes, and enforce our agreements.
            </p>
            <p className="mt-2">
              Specific retention periods for fuel receipts, tax records, trip logs, and fleet data should be confirmed
              with your accountants and legal advisers to reflect current ATO guidance and any industry-specific
              obligations.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-100">
              8. Your choices and rights
            </h2>
            <p className="mt-2">
              Subject to applicable law, you may have rights to access, correct, or request deletion of certain
              personal information we hold about you. You may also be able to:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Update your details through your VeeSave account.</li>
              <li>Export or download certain records for tax or accounting purposes.</li>
              <li>
                Opt out of specific types of marketing communications by using the unsubscribe link in emails we send.
              </li>
            </ul>
            <p className="mt-2">
              Processes for handling access or correction requests, and applicable timeframes, should be confirmed with
              your lawyers to ensure alignment with the Privacy Act and OAIC guidance.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-100">
              9. Security
            </h2>
            <p className="mt-2">
              We aim to use reasonable technical and organisational measures to protect personal information from
              unauthorised access, misuse, loss, or alteration. This may include access controls, encryption in transit,
              regular backups, and environment hardening on our production infrastructure.
            </p>
            <p className="mt-2">
              No online service can guarantee absolute security. Your lawyers and security advisers should review our
              final architecture, logging, and incident-response practices before launch.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-100">
              10. Contact and complaints
            </h2>
            <p className="mt-2">
              If you have questions about this draft notice or how VeeSave handles personal information, you can
              contact us using the details provided in the app or on our website.
            </p>
            <p className="mt-2">
              In Australia, individuals may also have rights to raise concerns with the Office of the Australian
              Information Commissioner (OAIC). Your legal team should confirm the appropriate complaint pathways and
              contact details for the final published version of this notice.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}