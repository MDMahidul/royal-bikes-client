import Container from "@/components/Container/Container";
import DashboardHeader from "@/components/SectionHeader/DashboardHeader";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const MyBookings = () => {
  return (
    <div className="md:my-5 mb-20 sm:mb-40 ">
      <Container>
        <DashboardHeader title="My Bookings" />
        <Tabs defaultValue="paid" className="text-center ">
          <TabsList className="flex justify-around bg-white dark:bg-gray-700 my-5">
            <TabsTrigger
              value="paid"
              className="px-4 py-2 font-semibold focus:outline-none data-[state=active]:bg-secondary data-[state=active]:text-white rounded-s-lg rounded-e-none data-[state=inactive]:bg-gray-200 dark:data-[state=inactive]:bg-gray-600 w-1/2"
            >
              Paid
            </TabsTrigger>
            <TabsTrigger
              value="unpaid"
              className="px-4 py-2 font-semibold focus:outline-none data-[state=active]:bg-secondary data-[state=active]:text-white rounded-e-lg rounded-s-none data-[state=inactive]:bg-gray-200 dark:data-[state=inactive]:bg-gray-600 w-1/2"
            >
              Unpaid
            </TabsTrigger>
          </TabsList>
          <TabsContent value="paid">
            Make changes to your account here.
          </TabsContent>
          <TabsContent value="unpaid">Change your unpaid here.</TabsContent>
        </Tabs>
      </Container>
    </div>
  );
};

export default MyBookings;
