import SlideInFromLeft from "@/components/Animation/SlideFromLeft";
import SlideInFromRight from "@/components/Animation/SlideFromRight";
import ParallaxHeader from "@/components/SectionHeader/ParallaxHeader";

const TermsConditions = () => {
  return (
    <div className="py-10 md:py-16 ">
      <ParallaxHeader heading="Terms of Services" />
      <div className="max-w-5xl mx-auto px-5 mt-5">
        <div className="dark:text-white py-5 ">
          <SlideInFromLeft>
            <p className="font-medium mb-5">
              Welcome to Royal Bikes. By using our services, you agree to comply
              with and be bound by the following terms and conditions. Please
              read them carefully before making a booking.
            </p>
          </SlideInFromLeft>
          <ol className="space-y-4 text-gray-700 list-decimal list-inside dark:text-gray-200">
            <SlideInFromLeft>
              <li className="text-lg font-semibold">
                Rental Agreement
                <ul className="pl-5 mt-2 space-y-1 list-disc list-inside text-base font-normal">
                  <li>
                    <span className="font-medium"> Eligibility:</span> All
                    renters must be at least 21 years old and possess a valid
                    motorcycle license.
                  </li>
                  <li>
                    <span className="font-medium"> Booking:</span> A reservation
                    is not confirmed until full payment is received. We reserve
                    the right to refuse any booking at our discretion.
                  </li>
                  <li>
                    <span className="font-medium"> Security Deposit:</span> A
                    security deposit is required at the time of pickup, which
                    will be refunded upon the safe and timely return of the
                    motorcycle, subject to deductions for damages, late returns,
                    or any other fees.
                  </li>
                </ul>
              </li>
            </SlideInFromLeft>
            <SlideInFromRight>
              <li className="text-lg font-semibold">
                Use of the Motorcycle
                <ul className="pl-5 mt-2 space-y-1 list-disc list-inside text-base font-normal">
                  <li>
                    <span className="font-medium"> Authorized Riders:</span>{" "}
                    Only the person(s) named in the rental agreement are
                    permitted to ride the motorcycle.
                  </li>
                  <li>
                    <span className="font-medium">
                      {" "}
                      Condition of Motorcycle:
                    </span>{" "}
                    The renter is responsible for inspecting the motorcycle
                    before use and reporting any pre-existing damage. By
                    accepting the motorcycle, the renter agrees that it is in
                    good condition.
                  </li>
                  <li>
                    <span className="font-medium"> Prohibited Uses:</span> The
                    motorcycle may not be used for racing, off-road riding,
                    stunts, or any illegal activities. The renter must not allow
                    any unauthorized person to operate the motorcycle.
                  </li>
                  <li>
                    <span className="font-medium"> Fuel Policy:</span> The
                    motorcycle will be provided with a full tank of fuel and
                    must be returned with a full tank. Failure to do so will
                    result in a refueling charge.
                  </li>
                </ul>
              </li>
            </SlideInFromRight>
            <SlideInFromLeft>
              <li className="text-lg font-semibold">
                Rental Period and Extensions
                <ul className="pl-5 mt-2 space-y-1 list-disc list-inside text-base font-normal">
                  <li>
                    <span className="font-medium"> Rental Period:</span> The
                    rental period is defined in the rental agreement. Late
                    returns will incur additional charges.
                  </li>
                  <li>
                    <span className="font-medium"> Extensions:</span> If you
                    wish to extend your rental period, you must contact us in
                    advance. Extensions are subject to availability and
                    additional fees.
                  </li>
                </ul>
              </li>
            </SlideInFromLeft>
            <SlideInFromRight>
              <li className="text-lg font-semibold">
                Insurance and Liability
                <ul className="pl-5 mt-2 space-y-1 list-disc list-inside text-base font-normal">
                  <li>
                    <span className="font-medium">Insurance:</span> Basic
                    insurance coverage is included in the rental price. This may
                    include third-party liability but does not cover theft,
                    damage to the motorcycle, or personal injuries.
                  </li>
                  <li>
                    <span className="font-medium"> Additional Insurance:</span>{" "}
                    Additional insurance options, including collision damage
                    waivers, may be available at the time of booking or pickup.
                  </li>
                  <li>
                    <span className="font-medium"> Damage and Loss:</span> The
                    renter is responsible for any damage to or loss of the
                    motorcycle during the rental period. In the event of an
                    accident, theft, or mechanical failure, the renter must
                    contact us immediately and follow our instructions.
                  </li>
                  <li>
                    <span className="font-medium"> Personal Belongings:</span>{" "}
                    We are not responsible for any personal belongings left in
                    the motorcycle.
                  </li>
                </ul>
              </li>
            </SlideInFromRight>
            <SlideInFromLeft>
              <li className="text-lg font-semibold">
                Cancellations and Refunds
                <ul className="pl-5 mt-2 space-y-1 list-disc list-inside text-base font-normal">
                  <li>
                    <span className="font-medium">Cancellations:</span>{" "}
                    Cancellations made more than 48 hours before the rental
                    period will receive a full refund. Cancellations made within
                    48 hours of the rental period will incur a 15% cancellation
                    fee.
                  </li>
                  <li>
                    <span className="font-medium"> No Show:</span> If the renter
                    fails to pick up the motorcycle at the agreed time and
                    location, no refund will be provided.
                  </li>
                  <li>
                    <span className="font-medium"> Early Returns:</span> No
                    refunds will be issued for early returns.
                  </li>
                </ul>
              </li>
            </SlideInFromLeft>
            <SlideInFromRight>
              <li className="text-lg font-semibold">
                Conduct and Responsibility
                <ul className="pl-5 mt-2 space-y-1 list-disc list-inside text-base font-normal">
                  <li>
                    <span className="font-medium"> Compliance with Laws:</span>{" "}
                    The renter agrees to comply with all local traffic laws and
                    regulations.
                  </li>
                  <li>
                    <span className="font-medium"> Safety Gear:</span>The use of
                    helmets and other safety gear is mandatory. The renter is
                    responsible for ensuring that all riders are properly
                    equipped.
                  </li>
                  <li>
                    <span className="font-medium"> Roadside Assistance:</span>{" "}
                    In the event of a breakdown, we offer roadside assistance
                    within 5 miles/kilometers of our rental location. Additional
                    charges may apply for assistance beyond this range.
                  </li>
                </ul>
              </li>
            </SlideInFromRight>
            <SlideInFromLeft>
              <li className="text-lg font-semibold">
                Termination of Agreement
                <ul className="pl-5 mt-2 space-y-1 list-disc list-inside text-base font-normal">
                  <li>
                    We reserve the right to terminate the rental agreement and
                    repossess the motorcycle if the terms and conditions are
                    violated, or if the renter poses a danger to themselves,
                    others, or the motorcycle.
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

export default TermsConditions;
