import SlideInFromLeft from "@/components/Animation/SlideFromLeft";
import SlideInFromRight from "@/components/Animation/SlideFromRight";
import ParallaxHeader from "@/components/SectionHeader/ParallaxHeader";

const PrivacyPolicies = () => {
  return (
    <div className="py-10 md:py-16 ">
      <ParallaxHeader heading="Privacy & Policies" />
      <div className="max-w-5xl mx-auto px-5 mt-5">
        <div className="dark:text-white py-5 ">
          <ol className="space-y-4 text-gray-700 list-decimal list-inside dark:text-gray-200">
            <SlideInFromLeft>
              <li className="text-lg font-semibold">
                Personal Information Collection
                <ul className="pl-5 mt-2 space-y-1 list-disc list-inside text-base font-normal">
                  We collect personal information from you when you register on
                  our site, place an order, subscribe to our newsletter, or fill
                  out a form. The information collected may include your name,
                  email address, phone number, and payment details.
                </ul>
              </li>
            </SlideInFromLeft>
            <SlideInFromRight>
              <li className="text-lg font-semibold">
                Use of Personal Information
                <ul className="pl-5 mt-2 space-y-1 list-disc list-inside text-base font-normal">
                  The information we collect from you may be used in the
                  following ways:
                  <li>
                    To personalize your experience and respond better to your
                    individual needs.
                  </li>
                  <li>To improve our website and service offerings.</li>
                  <li>To process transactions efficiently and securely.</li>
                  <li>
                    To send periodic emails regarding your order or other
                    services.
                  </li>
                </ul>
              </li>
            </SlideInFromRight>
            <SlideInFromLeft>
              <li className="text-lg font-semibold">
                Data Protection
                <ul className="pl-5 mt-2 space-y-1 list-disc list-inside text-base font-normal">
                  We implement a variety of security measures to maintain the
                  safety of your personal information when you place an order or
                  enter, submit, or access your personal information. All
                  supplied sensitive information is transmitted via Secure
                  Socket Layer (SSL) technology and then encrypted into our
                  payment gateway provider's database.
                </ul>
              </li>
            </SlideInFromLeft>
            <SlideInFromRight>
              <li className="text-lg font-semibold">
                Cookies
                <ul className="pl-5 mt-2 space-y-1 list-disc list-inside text-base font-normal">
                  We use cookies to enhance your browsing experience. Cookies
                  are small files that a site or its service provider transfers
                  to your computer's hard drive through your web browser (if you
                  allow) that enables the site's or service provider's systems
                  to recognize your browser and capture and remember certain
                  information.
                </ul>
              </li>
            </SlideInFromRight>
            <SlideInFromLeft>
              <li className="text-lg font-semibold">
                Third-Party Disclosure
                <ul className="pl-5 mt-2 space-y-1 list-disc list-inside text-base font-normal">
                  We do not sell, trade, or otherwise transfer your personally
                  identifiable information to outside parties. This does not
                  include trusted third parties who assist us in operating our
                  website, conducting our business, or servicing you, as long as
                  those parties agree to keep this information confidential.
                </ul>
              </li>
            </SlideInFromLeft>
            <SlideInFromRight>
              <li className="text-lg font-semibold">
                Third-Party Links
                <ul className="pl-5 mt-2 space-y-1 list-disc list-inside text-base font-normal">
                  Occasionally, at our discretion, we may include or offer
                  third-party products or services on our website. These
                  third-party sites have separate and independent privacy
                  policies. We, therefore, have no responsibility or liability
                  for the content and activities of these linked sites.
                </ul>
              </li>
            </SlideInFromRight>
            <SlideInFromLeft>
              <li className="text-lg font-semibold">
                Consent
                <ul className="pl-5 mt-2 space-y-1 list-disc list-inside text-base font-normal">
                  By using our site, you consent to our website's privacy
                  policy.
                </ul>
              </li>
            </SlideInFromLeft>
            <SlideInFromRight>
              <li className="text-lg font-semibold">
                Changes to Our Privacy Policy
                <ul className="pl-5 mt-2 space-y-1 list-disc list-inside text-base font-normal">
                  If we decide to change our privacy policy, we will post those
                  changes on this page. Policy changes will apply only to
                  information collected after the date of the change.
                </ul>
              </li>
            </SlideInFromRight>
            <SlideInFromLeft>
              <li className="text-lg font-semibold">
                Contacting Us
                <ul className="pl-5 mt-2 space-y-1 list-disc list-inside text-base font-normal">
                  If there are any questions regarding this privacy policy, you
                  may contact us using the information below:
                  <li>
                    <span className="font-medium"> Email:</span>{" "}
                    royalbikes@info.com
                  </li>
                  <li>
                    <span className="font-medium"> Phone:</span> +88
                    09811-222333
                  </li>
                </ul>
              </li>
            </SlideInFromLeft>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicies;
