const Cookies = () => {
  const legalName: string = "A42 S.à r.l.-S.";
  const name: string = "A42";
  const address: string =
    "20, rue de l'indépendance, L-3238 Bettembourg, Luxembourg";
  const website_url: string = "https://a42.lu";
  const cookies_contact_mail: string = "contact@a42.lu";

  return (
    <div className="mt-8 md:mt-16 mb-16 md:mb-24 xl:mb-32 flex flex-col gap-4 text-ellipsis overflow-hidden font-medium xl:text-lg">
      <div className="mb-4">
        <h1 className="font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl">
          Cookies Policy
        </h1>
        <p className="text-sm xl:text-base text-gray-600">
          Last updated: March 13th, 2025
        </p>
      </div>

      <p>
        This Cookies Policy explains what Cookies are and how We use them. You
        should read this policy so You can understand what type of cookies We
        use, or the information We collect using Cookies and how that
        information is used.
      </p>
      <p>
        Cookies do not typically contain any information that personally
        identifies a user, but personal information that we store about You may
        be linked to the information stored in and obtained from Cookies.
      </p>
      <p>
        We do not store sensitive personal information, such as mailing
        addresses, account passwords, etc. in the Cookies We use.
      </p>

      <h2 className="font-semibold text-xl xl:text-2xl mt-4">
        Interpretation and Definitions
      </h2>
      <div className="flex flex-col gap-1.5">
        <h3 className="font-semibold text-lg xl:text-xl">Interpretation</h3>
        <p>
          The words of which the initial letter is capitalized have meanings
          defined under the following conditions. The following definitions
          shall have the same meaning regardless of whether they appear in
          singular or in plural.
        </p>
      </div>

      <div className="flex flex-col gap-1.5 xl:mt-4">
        <h3 className="font-semibold text-lg xl:text-xl">Definitions</h3>
        <p className="mb-4">For the purposes of this Cookies Policy:</p>
        <div className="flex flex-col gap-4 px-6 py-4 bg-gray-100 rounded-lg">
          <div>
            <strong>Company</strong> (referred to as either &quot;the
            Company&quot;, &quot;We&quot;, &quot;Us&quot; or &quot;Our&quot; in
            this Cookies Policy) refers to{" "}
            <span className="font-semibold">{legalName}</span>, {address}.
          </div>
          <div>
            <strong>Cookies</strong> means small files that are placed on Your
            computer, mobile device or any other device by a website, containing
            details of your browsing history on that website among its many
            uses.
          </div>
          <div>
            <strong>Website</strong> refers to {name}, accessible from{" "}
            <a
              className="underline"
              href={website_url}
              rel="external nofollow noopener"
              target="_blank"
            >
              here
            </a>
          </div>
          <div>
            <strong>You</strong> means the individual accessing or using the
            Website, or a company, or any legal entity on behalf of which such
            individual is accessing or using the Website, as applicable.
          </div>
        </div>
      </div>

      <h2 className="font-semibold text-xl mt-4 xl:mt-8 xl:text-2xl">
        The use of the Cookies
      </h2>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1.5 md:gap-2.5">
          <h3 className="font-semibold text-lg xl:text-xl">
            Type of Cookies We Use
          </h3>
          <p>
            Cookies can be &quot;Persistent&quot; or &quot;Session&quot;
            Cookies. Persistent Cookies remain on your personal computer or
            mobile device when You go offline, while Session Cookies are deleted
            as soon as You close your web browser.
          </p>
          <p>
            We use both session and persistent Cookies for the purposes set out
            below:
          </p>
        </div>
        <div className="flex flex-col gap-1.5 px-6 py-4 bg-gray-100 rounded-lg">
          <p>
            <strong>Necessary / Essential Cookies</strong>
          </p>
          <p>
            <span className="font-semibold">Type: </span> Session Cookies
          </p>
          <p>
            <span className="font-semibold">Administred by: </span> Us
          </p>
          <p>
            <span className="font-semibold">Purpose: </span> These Cookies are
            essential to provide You with services available through the Website
            and to enable You to use some of its features. They help to
            authenticate users and prevent fraudulent use of user accounts.
            Without these Cookies, the services that You have asked for cannot
            be provided, and We only use these Cookies to provide You with those
            services.
          </p>
        </div>
        <div className="flex flex-col gap-1.5 px-6 py-4 bg-gray-100 rounded-lg mt-4">
          <p>
            <strong>Functionality Cookies</strong>
          </p>
          <p>
            <span className="font-semibold">Type: </span> Persistent Cookies
          </p>
          <p>
            <span className="font-semibold">Administred by: </span> Us
          </p>
          <p>
            <span className="font-semibold">Purpose: </span> These Cookies allow
            us to remember choices You make when You use the Website, such as
            remembering your login details or language preference. The purpose
            of these Cookies is to provide You with a more personal experience
            and to avoid You having to re-enter your preferences every time You
            use the Website.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-1.5 mt-2 xl:mt-6">
        <h3 className="font-semibold text-lg xl:text-xl">
          Your Choices Regarding Cookies
        </h3>
        <div className="flex flex-col gap-3 md:gap-4 lg:gap-5">
          <p>
            If You prefer to avoid the use of Cookies on the Website, first You
            must disable the use of Cookies in your browser and then delete the
            Cookies saved in your browser associated with this website. You may
            use this option for preventing the use of Cookies at any time.
          </p>
          <p>
            If You do not accept Our Cookies, You may experience some
            inconvenience in your use of the Website and some features may not
            function properly.
          </p>
          <p>
            If You'd like to delete Cookies or instruct your web browser to
            delete or refuse Cookies, please visit the help pages of your web
            browser.
          </p>
          <ul>
            <li className="mb-4">
              <p>
                For the Chrome web browser, please visit this page from Google:{" "}
                <a
                  className="underline"
                  href="https://support.google.com/accounts/answer/32050"
                  rel="external nofollow noopener"
                  target="_blank"
                >
                  https://support.google.com/accounts/answer/32050
                </a>
              </p>
            </li>
            <li className="mb-4">
              <p>
                For the Internet Explorer web browser, please visit this page
                from Microsoft:{" "}
                <a
                  className="underline"
                  href="http://support.microsoft.com/kb/278835"
                  rel="external nofollow noopener"
                  target="_blank"
                >
                  http://support.microsoft.com/kb/278835
                </a>
              </p>
            </li>
            <li className="mb-4">
              <p>
                For the Firefox web browser, please visit this page from
                Mozilla:{" "}
                <a
                  className="underline"
                  href="https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored"
                  rel="external nofollow noopener"
                  target="_blank"
                >
                  https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored
                </a>
              </p>
            </li>
            <li>
              <p>
                For the Safari web browser, please visit this page from Apple:{" "}
                <a
                  className="underline"
                  href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac"
                  rel="external nofollow noopener"
                  target="_blank"
                >
                  https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac
                </a>
              </p>
            </li>
          </ul>
          <p>
            For any other web browser, please visit your web browser's official
            web pages.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-1.5 mt-4 xl:mt-8">
        <h3 className="font-semibold text-lg xl:text-xl">
          More Information about Cookies
        </h3>
        <p>
          You can learn more about cookies here:
          <br />
          <a
            className="underline"
            href="https://www.termsfeed.com/blog/cookies/"
            target="_blank"
          >
            All About Cookies by TermsFeed
          </a>
          .
        </p>
      </div>

      <div className="flex flex-col gap-1.5 mt-4 xl:mt-8">
        <h3 className="font-semibold text-lg xl:text-xl">Contact Us</h3>
        <p>
          If you have any questions about this Cookies Policy, You can contact
          us using the site's{" "}
          <a className="underline" href="/#contact">
            contact form
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default Cookies;
